import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd, createBreadcrumbSchema } from '@/components/ui/JsonLd';

export const metadata: Metadata = {
  title: 'Our Story | Kapas aur Kora & The Textile Continuum',
  description:
    'The story of Burgula Cotton: Kapas aur Kora, reviving 27-30 count unbaled cotton yarn in Telangana and the philosophy of Kapas se Kapda Tak, Ek Gaon Mein.',
};

export default function OurStoryPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', item: 'https://burgulacotton.com' },
    { name: 'Our Story', item: 'https://burgulacotton.com/our-story' },
  ]);

  const chapters = [
    {
      num: '01',
      title: 'The Beginning',
      desc: 'Indian handloom cotton historically drew its unmatched breathability and softness from local, small-scale ginning and spinning. When industrial spinning mills introduced heavy hydraulic baling for distance transport, the natural wax and living spring of native cotton fibres were permanently fractured.',
    },
    {
      num: '02',
      title: 'Burgula Cotton Trust (Est. 2007)',
      desc: 'In 2007, the Burgula Cotton Trust was established in Telangana as an institutional foundation to explore whether decentralized, village-scale yarn production could revive authentic handloom excellence and dignified rural livelihoods.',
    },
    {
      num: '03',
      title: 'The Continuing Textile Practice',
      desc: 'The Trust became an active laboratory of training, research, pit-loom tuning, and deep maker relationships, connecting every step from seed cotton to finished cloth.',
    },
    {
      num: '04',
      title: 'Cotton and Yarn',
      desc: 'Through participation in the Decentralised Cotton Yarn Project, gentle micro-spinning units were deployed to spin 27–30 count unbaled cotton yarn, bypassing the damage of industrial baling.',
    },
    {
      num: '05',
      title: 'Decentralised Textile Thinking',
      desc: 'Keeping yarn production close to the farm and pit-loom preserves the tactile memory of the fibre, resulting in a fabric that absorbs moisture naturally and softens with every wash.',
    },
    {
      num: '06',
      title: 'Kapas se Kapda Tak, Ek Gaon Mein',
      desc: 'The defining philosophy: converting cotton to yarn, yarn to warp, and warp to handloom cloth within contiguous Telangana village clusters. Material knowledge stays with the people.',
    },
    {
      num: '07',
      title: 'Weaving Relationships',
      desc: 'Generational pit-loom weaving families across Telangana brought intuitive mastery of loom tension, rhythm, and structural weaves, forging lasting partnerships.',
    },
    {
      num: '08',
      title: 'Fabric Development',
      desc: 'Expanding into natural fermentation plant dyes (madder root, desi indigo) and experimental blends with indigenous bast hemp and wild silks to answer modern design needs.',
    },
    {
      num: '09',
      title: 'Burgula Cotton Today',
      desc: 'Today, Burgula Cotton stands as the market-facing contemporary textile house, making this living handloom practice commercially accessible to global designers, brands, and architects.',
    },
    {
      num: '10',
      title: 'Looking Ahead',
      desc: 'Continuing our commitment to material truth, research, and circular production, demonstrating that handloom cotton is a vital, living technology for the future.',
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbs} />

      {/* Hero */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '860px' }} data-reveal>
            <span className="eyebrow">The Complete Story</span>
            <h1 style={{ marginBottom: 'var(--space-4)' }}>
              Kapas aur Kora: Reviving a Village-Centred Yarn Tradition
            </h1>
            <p style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}>
              “Kapas se Kapda Tak, Ek Gaon Mein” — From Cotton to Cloth in One Village Cluster.
            </p>
            <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
              A documented history of researching, establishing, and scaling decentralised unbaled cotton yarn and master pit-loom handloom weaving in Telangana.
            </p>
          </div>
        </div>
      </section>

      {/* 10 Chapters Structured Editorial Story */}
      <section className="section-padding">
        <div className="container">
          <div data-reveal-group style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'var(--space-8)' }}>
            {chapters.map((ch) => (
              <div
                key={ch.num}
                className="hover-lift"
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border)',
                  padding: 'clamp(var(--space-5), 4vw, var(--space-8))',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                }}
              >
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-accent)', letterSpacing: '0.1em' }}>
                  Chapter {ch.num}
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.625rem', color: 'var(--color-text-primary)' }}>
                  {ch.title}
                </h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  {ch.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="spec-box" data-reveal style={{ marginTop: 'var(--space-16)', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-3)' }}>
              Experience the Cloth Born from This Practice
            </h3>
            <p style={{ maxWidth: '620px', margin: '0 auto var(--space-6) auto', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
              Explore our handloom fabric library or initiate a bespoke fabric development partnership.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/textiles" className="btn btn-primary">
                Explore Textiles Library
              </Link>
              <Link href="/capabilities" className="btn btn-secondary">
                View Capabilities & Workflow
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
