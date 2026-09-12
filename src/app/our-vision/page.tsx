import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd, createBreadcrumbSchema } from '@/components/ui/JsonLd';

export const metadata: Metadata = {
  title: 'Our Vision | Contemporary Handloom & Future Textile Practice',
  description:
    'The vision of Burgula Cotton: establishing handloom cotton as an innovative, living contemporary production system for global design and architecture.',
};

export default function OurVisionPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', item: 'https://burgulacotton.com' },
    { name: 'Our Vision', item: 'https://burgulacotton.com/our-vision' },
  ]);

  const visionTenets = [
    {
      num: 'I',
      title: 'Handloom as Living Contemporary Production',
      desc: 'Handloom is not an antiquated museum artifact. It is an agile, low-energy production methodology capable of creating responsive, customized fabrics that industrial machinery cannot match.',
    },
    {
      num: 'II',
      title: 'Continuing Textile Knowledge & Research',
      desc: 'Pushing the boundaries of natural fibre blending: exploring indigenous bast hemp, wild silks, and organic dye chemistry to build fabrics engineered for modern wearability and interior architecture.',
    },
    {
      num: 'III',
      title: 'Decentralised Rural Commons',
      desc: 'Preserving and evolving generational pit-loom techniques by making weaving an economically viable, intellectually rewarding career for the next generation of rural textile practitioners.',
    },
    {
      num: 'IV',
      title: 'Responsible Market Access',
      desc: 'Offering full material provenance to global designers, brands, and buyers from raw cotton field to final loom-state roll.',
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbs} />

      {/* Hero */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="eyebrow">Future Direction</span>
            <h1 style={{ marginBottom: 'var(--space-4)' }}>Our Vision for Contemporary Handloom</h1>
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
              We envision a future where Indian handloom cotton is celebrated not as nostalgia, but as the world standard for breathable, dignified, and circular material intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Tenets Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-8)' }}>
            {visionTenets.map((t) => (
              <div
                key={t.num}
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border)',
                  padding: 'var(--space-8)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-accent)', fontWeight: 500 }}>
                  {t.num}
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>{t.title}</h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--space-16)', textAlign: 'center' }}>
            <Link href="/textiles" className="btn btn-primary">
              Explore Our Living Fabrics Archive →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
