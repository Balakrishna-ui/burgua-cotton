// In-memory rate limiting with bounded TTL-based eviction.
// Designed as a fallback when Redis is unavailable (local dev / single-instance deployments).
// For multi-replica production deployments, replace the store with a shared Redis client.

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

const store = new Map<string, RateLimitRecord>();

/**
 * Maximum number of live entries the in-memory store is allowed to hold.
 * Entries whose window has already expired are purged first; if the store
 * is still over this limit after pruning, the oldest entries are evicted.
 */
const STORE_MAX_SIZE = 500;

/**
 * Purge all entries whose rate-limit window has expired.
 * If the store is still above STORE_MAX_SIZE, evict the front of the map
 * (oldest insertion order) until the limit is met.
 */
function evictExpired(): void {
  const now = Date.now();
  for (const [key, record] of store) {
    if (now > record.resetTime) {
      store.delete(key);
    }
  }

  // Secondary eviction if the store is still over capacity
  if (store.size > STORE_MAX_SIZE) {
    const overflow = store.size - STORE_MAX_SIZE;
    let evicted = 0;
    for (const key of store.keys()) {
      store.delete(key);
      evicted += 1;
      if (evicted >= overflow) break;
    }
  }
}

export async function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = { maxRequests: 10, windowMs: 60 * 1000 }
): Promise<{ allowed: boolean; remaining: number; resetTime: number }> {
  const now = Date.now();
  const key = `ratelimit:${identifier}`;

  // Opportunistic cleanup on every call to prevent unbounded growth
  if (store.size >= STORE_MAX_SIZE) {
    evictExpired();
  }

  const current = store.get(key);

  if (!current || now > current.resetTime) {
    const record: RateLimitRecord = {
      count: 1,
      resetTime: now + config.windowMs,
    };
    store.set(key, record);
    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetTime: record.resetTime,
    };
  }

  if (current.count >= config.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: current.resetTime,
    };
  }

  current.count += 1;
  store.set(key, current);

  return {
    allowed: true,
    remaining: config.maxRequests - current.count,
    resetTime: current.resetTime,
  };
}

export function getClientIp(headers: Headers): string {
  // Check infrastructure-trusted direct headers first
  const cfConnectingIp = headers.get('cf-connecting-ip');
  if (cfConnectingIp) {
    return cfConnectingIp.trim();
  }

  const realIp = headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }

  // Configurable trusted proxy behavior:
  // If TRUSTED_PROXY is explicitly disabled ('false'), X-Forwarded-For is ignored
  // to avoid trusting client headers in direct internet-facing server setups.
  // When trusted (default in reverse-proxy deployments), the nearest proxy appends
  // the remote address to the end of the chain. We take the last entry to prevent
  // client-injected prefix spoofing.
  const isProxyTrusted = process.env.TRUSTED_PROXY !== 'false';
  const forwardedFor = headers.get('x-forwarded-for');

  if (forwardedFor && isProxyTrusted) {
    const ips = forwardedFor.split(',').map((ip) => ip.trim()).filter(Boolean);
    if (ips.length > 0) {
      return ips[ips.length - 1];
    }
  }

  return '127.0.0.1';
}
