import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found — Burgula Cotton',
  description: 'The page you are looking for does not exist.',
};

/**
 * Branded 404 page — rendered by Next.js when no route matches.
 */
export default function NotFoundPage() {
  return (
    <main
      style={{
        minHeight: '65vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'var(--space-16) var(--space-6)',
        gap: 'var(--space-6)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
        }}
      >
        404 — Page not found
      </span>

      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 400,
          color: 'var(--color-text-primary)',
          lineHeight: 1.1,
        }}
      >
        This thread ends here
      </h1>

      <p
        style={{
          color: 'var(--color-text-secondary)',
          fontSize: 'var(--text-base)',
          maxWidth: '480px',
          lineHeight: 'var(--leading-relaxed)',
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or may have been moved. Head back to explore Burgula Cotton.
      </p>

      <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" className="btn btn-primary">
          Return to homepage
        </Link>
        <Link href="/textiles" className="btn btn-secondary">
          Browse Textiles
        </Link>
        <Link href="/contact" className="btn btn-ghost">
          Contact us
        </Link>
      </div>
    </main>
  );
}
