import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

/**
 * Circuit-breaker state for the database connection.
 *
 * When Prisma raises an authentication or connection error we record the
 * failure time and enter a cooldown period before trying again. During the
 * cooldown, callers receive the in-memory fallback immediately without a
 * fresh network attempt, eliminating the terminal spam that occurs in local
 * development when no Postgres instance is running.
 */
interface CircuitState {
  open: boolean;
  openedAt: number;
  /** Milliseconds before the circuit resets and a fresh connection is tried. */
  cooldownMs: number;
}

const circuit: CircuitState = {
  open: false,
  openedAt: 0,
  cooldownMs: 60_000, // 60 seconds
};

// Fallback connection string for build-time static page generation when DATABASE_URL is not provided
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL =
    'postgresql://placeholder:placeholder@ep-placeholder-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';
}

export function isDbAvailable(): boolean {
  // During build-time static site generation, serve verified seed data directly
  // to avoid build delays or network timeouts to remote serverless databases.
  if (
    process.env.NEXT_PHASE === 'phase-production-build' ||
    !process.env.DATABASE_URL ||
    process.env.DATABASE_URL.includes('placeholder')
  ) {
    return false;
  }
  if (!circuit.open) return true;
  if (Date.now() - circuit.openedAt >= circuit.cooldownMs) {
    circuit.open = false; // half-open: allow next attempt
    return true;
  }
  return false;
}

export function openCircuit(): void {
  circuit.open = true;
  circuit.openedAt = Date.now();

  if (process.env.NODE_ENV === 'production') {
    console.error('[db] Database connection failure — serving in-memory fallback.');
  }
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
