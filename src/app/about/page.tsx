import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JsonLd, createOrganizationSchema, createBreadcrumbSchema } from '@/components/ui/JsonLd';

export const metadata: Metadata = {
  title: 'About Us | Material, Practice & Contemporary Textile House',
  description:
    'Discover Burgula Cotton: a market-facing contemporary textile house built on the institutional foundation of Burgula Cotton Trust (est. 2007) in Telangana.',
};

export default function AboutPage() {
  const orgSchema = createOrganizationSchema();
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', item: 'https://burgulacotton.com' },
    { name: 'About Us', item: 'https://burgulacotton.com/about' },
  ]);

  return (
    <>
      <JsonLd data={orgSchema} />
      <JsonLd data={breadcrumbs} />

      {/* Hero */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="eyebrow">About the House</span>
            <h1 style={{ marginBottom: 'var(--space-4)' }}>
              A Contemporary Textile House Rooted in Telangana
            </h1>
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
              Burgula Cotton is built around cotton, yarn, weaving, and fabric development. We unite decentralised, unbaled Indian cotton yarn spinning with generational pit-loom handloom weaving to deliver textiles of authentic material character.
            </p>
          </div>
        </div>
      </section>

      {/* Identity & Relationship Definition */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <span className="eyebrow">Brand Architecture & Origin</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem' }}>
              Understanding the Ecosystem
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'var(--space-8)' }}>
            <div style={{ backgroundColor: 'var(--color-bg-surface)', padding: 'clamp(var(--space-5), 4vw, var(--space-8))', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span className="eyebrow">Market-Facing Textile House</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>
                Burgula Cotton
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                Burgula Cotton is the present-day commercial textile and fabric house. We collaborate with designers, labels, apparel manufacturers, and architectural practices to supply verified handloom yardage, custom weaves, swatch books, and bespoke natural fibre developments.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--color-bg-surface)', padding: 'clamp(var(--space-5), 4vw, var(--space-8))', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span className="eyebrow">Institutional Foundation</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>
                Burgula Cotton Trust
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                Established in 2007, the Burgula Cotton Trust is the public charitable institutional foundation behind our rural ecosystem. The Trust focuses on weaver training, research, pit-loom calibration, yarn decentralisation, and dignified community livelihoods across rural Telangana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Material Focus & What We Do Today */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-subtle)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'var(--space-12)', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)' }}>
              <Image
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80"
                alt="Pit-loom handloom weaving in Telangana cluster"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div>
              <span className="eyebrow">Our Material Focus</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', marginBottom: 'var(--space-4)' }}>
                From Material Truth to Contemporary Design
              </h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: 'var(--space-4)' }}>
                We believe that cloth must not only look good, but feel alive. By working with 27–30 count unbaled cotton yarn spun in Telangana, our textiles retain the natural pectin and softness of raw cotton.
              </p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: 'var(--space-6)' }}>
                Handwoven on pit-looms, the resulting fabrics are breathable, absorbent, and comfortable in all climates, maturing with depth and softness as they are worn.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <Link href="/capabilities" className="btn btn-primary">
                  Explore Capabilities
                </Link>
                <Link href="/textiles" className="btn btn-secondary">
                  Browse Textile Library
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
