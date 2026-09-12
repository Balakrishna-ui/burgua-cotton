'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Root error boundary — rendered by Next.js when an unhandled error is thrown
 * inside any route segment. Provides the user a graceful recovery path.
 */
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log to an external error-reporting service in production
    if (process.env.NODE_ENV === 'production') {
      console.error('[ErrorBoundary]', error);
    }
  }, [error]);

  return (
    <main
      style={{
        minHeight: '60vh',
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
        Something went wrong
      </span>

      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 400,
          color: 'var(--color-text-primary)',
          lineHeight: 1.15,
        }}
      >
        An unexpected error occurred
      </h1>

      <p
        style={{
          color: 'var(--color-text-secondary)',
          fontSize: 'var(--text-base)',
          maxWidth: '520px',
          lineHeight: 'var(--leading-relaxed)',
        }}
      >
        We&apos;re sorry — something on this page didn&apos;t load as expected. You can try again or return to the homepage.
      </p>

      <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button type="button" className="btn btn-primary" onClick={reset}>
          Try again
        </button>
        <Link href="/" className="btn btn-secondary">
          Return to homepage
        </Link>
      </div>
    </main>
  );
}
