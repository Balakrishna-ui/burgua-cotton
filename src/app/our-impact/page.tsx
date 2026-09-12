import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JsonLd, createBreadcrumbSchema } from '@/components/ui/JsonLd';

export const metadata: Metadata = {
  title: 'Our Impact & Ecosystem | Burgula Cotton Trust',
  description:
    'The community and production ecosystem of Burgula Cotton Trust: decentralized yarn spinning, weaver training, research, and fair market access in Telangana.',
};

export default function OurImpactPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', item: 'https://burgulacotton.com' },
    { name: 'Our Impact', item: 'https://burgulacotton.com/our-impact' },
  ]);

  const ecosystemPillars = [
    {
      num: '01',
      title: 'Decentralised Spinning Practice',
      desc: 'Enabling rural clusters to card and spin unbaled 27–30s cotton yarn locally. Value addition stays within the village rather than migrating exclusively to industrial urban mills.',
    },
    {
      num: '02',
      title: 'Generational Weaving Partnerships',
      desc: 'Providing predictable, dignified production orders to traditional pit-loom weaving families across Telangana with stable, fair compensation.',
    },
    {
      num: '03',
      title: 'Artisan Training & Skill Deepening',
      desc: 'The Burgula Cotton Trust conducts focused training in pit-loom tuning, warp tension calibration, natural plant dye chemistry, and intricate weave constructions.',
    },
    {
      num: '04',
      title: 'Traceable Market Access',
      desc: 'Connecting authentic handloom craft directly to designers, architects, and international labels who value material integrity and provenance.',
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbs} />

      {/* Hero */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="eyebrow">Institutional Foundation</span>
            <h1 style={{ marginBottom: 'var(--space-4)' }}>Our Impact & Village Ecosystem</h1>
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
              Through the Burgula Cotton Trust (established in 2007), we sustain a regenerative textile ecosystem where rural farmers, decentralised yarn spinners, and master pit-loom weavers thrive in direct partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Qualitative Impact Philosophy */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-12)', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Community & Dignity</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', marginBottom: 'var(--space-6)' }}>
                Keeping Knowledge and Value Where Cotton Grows
              </h2>
              <p style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-base)', lineHeight: '1.7', color: 'var(--color-text-secondary)' }}>
                Traditional industrial textile supply chains extract raw cotton from rural regions as cheap agricultural commodities, process it thousands of kilometers away in massive automated mills, and leave craftspeople vulnerable to fluctuating yarn prices.
              </p>
              <p style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-base)', lineHeight: '1.7', color: 'var(--color-text-secondary)' }}>
                Burgula Cotton Trust was founded to reverse this imbalance. By decentralising yarn preparation and spinning directly in Telangana, we ensure that technical knowledge, economic dignity, and material agency remain grounded in rural communities.
              </p>
            </div>

            <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', backgroundColor: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)' }}>
              <Image
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80"
                alt="Weaving artisan preparing handloom pit-loom warp"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Pillars */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-subtle)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <span className="eyebrow">Ecosystem Focus</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem' }}>
              How the Trust Creates Enduring Impact
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
            {ecosystemPillars.map((p) => (
              <div
                key={p.num}
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border)',
                  padding: 'var(--space-8)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                }}
              >
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-accent)', letterSpacing: '0.1em' }}>
                  Pillar {p.num}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem' }}>{p.title}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="spec-box" style={{ marginTop: 'var(--space-12)', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>
              Material Truth Over Unverified Claims
            </h3>
            <p style={{ maxWidth: '640px', margin: '0 auto var(--space-4) auto', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
              We believe genuine sustainability is proven through transparent craftsmanship, decentralised processing, and direct weaver relationships, not fabricated marketing percentages.
            </p>
            <Link href="/our-story" className="btn btn-secondary">
              Read Our Story: Kapas aur Kora →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
