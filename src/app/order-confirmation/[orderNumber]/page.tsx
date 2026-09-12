import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, PackageCheck } from 'lucide-react';

interface OrderConfirmationProps {
  params: Promise<{ orderNumber: string }>;
  searchParams?: Promise<{ total?: string }>;
}

export const metadata: Metadata = {
  title: 'Order Confirmation | Burgula Cotton',
  description: 'Your swatch and sample order has been confirmed.',
};

export default async function OrderConfirmationPage({ params, searchParams }: OrderConfirmationProps) {
  const { orderNumber } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const confirmedTotal = resolvedSearchParams?.total;

  return (
    <div className="section-padding container container-narrow">
      <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', padding: 'var(--space-12) var(--space-8)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)' }}>
        <CheckCircle2 size={56} style={{ color: 'var(--color-success)' }} />
        
        <span className="eyebrow" style={{ color: 'var(--color-success)' }}>
          Order Confirmed
        </span>
        
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem' }}>
          Thank you for your order
        </h1>

        <p style={{ color: 'var(--color-text-secondary)', maxWidth: '520px', lineHeight: 'var(--leading-relaxed)' }}>
          Your swatch / sample dispatch request has been safely logged in our database under reference:
        </p>

        <div style={{ backgroundColor: 'var(--color-bg-subtle)', padding: 'var(--space-4) var(--space-8)', border: '1px dashed var(--color-border)', margin: 'var(--space-2) 0' }}>
          <span style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', display: 'block' }}>
            Order Reference Number
          </span>
          <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--color-text-primary)' }}>
            {orderNumber}
          </strong>
          {confirmedTotal && (
            <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
              Confirmed Server Total: <strong style={{ color: 'var(--color-text-primary)' }}>₹{Number(confirmedTotal).toFixed(2)}</strong>
            </div>
          )}
        </div>

        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', maxWidth: '480px' }}>
          Our textile dispatch team in Telangana is packaging your selected swatches. You will receive tracking and dispatch updates via email/phone.
        </p>

        <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-6)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/textiles" className="btn btn-primary">
            Continue Browsing Textiles
          </Link>
          <Link href="/b2b" className="btn btn-secondary">
            <PackageCheck size={16} /> Start B2B Trade Enquiry
          </Link>
        </div>
      </div>
    </div>
  );
}
