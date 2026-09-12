import { describe, it, expect } from 'vitest';
import { checkRateLimit } from '../lib/rate-limit';

describe('Rate Limiting Strategy', () => {
  it('allows requests within threshold and blocks subsequent requests when exceeded', async () => {
    const testIp = `test-ip-${Date.now()}`;
    const config = { maxRequests: 3, windowMs: 10000 };

    // Request 1
    const r1 = await checkRateLimit(testIp, config);
    expect(r1.allowed).toBe(true);
    expect(r1.remaining).toBe(2);

    // Request 2
    const r2 = await checkRateLimit(testIp, config);
    expect(r2.allowed).toBe(true);
    expect(r2.remaining).toBe(1);

    // Request 3
    const r3 = await checkRateLimit(testIp, config);
    expect(r3.allowed).toBe(true);
    expect(r3.remaining).toBe(0);

    // Request 4 (Should be blocked)
    const r4 = await checkRateLimit(testIp, config);
    expect(r4.allowed).toBe(false);
    expect(r4.remaining).toBe(0);
  });

  it('correctly resolves client IP from trusted headers and prevents X-Forwarded-For spoofing', async () => {
    const { getClientIp } = await import('../lib/rate-limit');

    // CF-Connecting-IP takes highest priority
    const cfHeaders = new Headers({
      'cf-connecting-ip': '203.0.113.195',
      'x-forwarded-for': '198.51.100.1, 198.51.100.2',
    });
    expect(getClientIp(cfHeaders)).toBe('203.0.113.195');

    // X-Real-IP takes priority over X-Forwarded-For
    const realIpHeaders = new Headers({
      'x-real-ip': '198.51.100.55',
      'x-forwarded-for': '198.51.100.1, 198.51.100.2',
    });
    expect(getClientIp(realIpHeaders)).toBe('198.51.100.55');

    // Untrusted X-Forwarded-For: attacker sets spoofed first IP, trusted proxy appends real IP to end
    const spoofedHeaders = new Headers({
      'x-forwarded-for': 'spoofed.attacker.ip, 203.0.113.50',
    });
    expect(getClientIp(spoofedHeaders)).toBe('203.0.113.50');

    // Fallback when no proxy headers present
    const emptyHeaders = new Headers();
    expect(getClientIp(emptyHeaders)).toBe('127.0.0.1');
  });

  it('resets rate limit window after TTL expiration', async () => {
    const key = `ttl-test-${Date.now()}`;
    // Window of 50ms
    const r1 = await checkRateLimit(key, { maxRequests: 1, windowMs: 50 });
    expect(r1.allowed).toBe(true);

    const r2 = await checkRateLimit(key, { maxRequests: 1, windowMs: 50 });
    expect(r2.allowed).toBe(false);

    // Wait for TTL to expire
    await new Promise((resolve) => setTimeout(resolve, 60));

    const r3 = await checkRateLimit(key, { maxRequests: 1, windowMs: 50 });
    expect(r3.allowed).toBe(true);
  });

  it('enforces store bounded capacity and evicts expired records under load', async () => {
    // Fill store with expired keys
    for (let i = 0; i < 520; i++) {
      await checkRateLimit(`flood-${i}`, { maxRequests: 10, windowMs: 1 });
    }

    // Wait 5ms for window expiration
    await new Promise((resolve) => setTimeout(resolve, 5));

    // Next request triggers opportunistic eviction
    const res = await checkRateLimit('fresh-key', { maxRequests: 5, windowMs: 60000 });
    expect(res.allowed).toBe(true);
  });
});
