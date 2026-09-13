import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <main
      style={{
        minHeight: '65vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '3rem 1.5rem',
        gap: '1.5rem',
        fontFamily: 'sans-serif',
      }}
    >
      <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#888' }}>
        404 — Page Not Found
      </span>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 400, margin: 0 }}>
        This thread ends here
      </h1>
      <p style={{ color: '#555', maxWidth: '480px', margin: 0 }}>
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#1a1a1a',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 500,
        }}
      >
        Return to homepage
      </Link>
    </main>
  );
}
