import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd, createBreadcrumbSchema } from '@/components/ui/JsonLd';

export const metadata: Metadata = {
  title: 'Capabilities & Technical Profile | Burgula Cotton',
  description:
    'Explore Burgula Cotton capabilities across cotton sourcing, 27-30s yarn spinning, pit-loom weaving, natural plant dyeing, finishing, and bespoke fabric development.',
};

export default function CapabilitiesPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', item: 'https://burgulacotton.com' },
    { name: 'Capabilities', item: 'https://burgulacotton.com/capabilities' },
  ]);

  const capabilities = [
    {
      num: '01',
      title: 'COTTON',
      desc: 'Selective sourcing of Indian staple cotton in Telangana. Bypassing heavy hydraulic industrial baling preserves natural cuticle wax, moisture retention, and intrinsic softness.',
    },
    {
      num: '02',
      title: 'YARN',
      desc: 'Specialisation in 27–30 count unbaled cotton yarn spun in rural decentralised micro-spinning units, offering natural elasticity and authentic handspun character.',
    },
    {
      num: '03',
      title: 'WEAVING',
      desc: 'Master pit-loom handloom weaving across balanced plain weaves, structured 2/2 twills, textured double-cloths, and jamdani accents by generational weaver families.',
    },
    {
      num: '04',
      title: 'FABRIC DEVELOPMENT',
      desc: 'Translating designer briefs and architectural specifications into custom densities, widths (up to 48 inches), and weights (90 to 220 GSM) with physical prototyping.',
    },
    {
      num: '05',
      title: 'FINISHING',
      desc: 'Loom-state Kora finishes, soft water washing, and natural fermentation vat dyeing using indigenous plant extracts including madder root and desi indigo.',
    },
    {
      num: '06',
      title: 'QUALITY',
      desc: 'Batch-by-batch physical inspection for warp-weft alignment, dimensional stability, colorfastness testing, and tensile integrity.',
    },
    {
      num: '07',
      title: 'BESPOKE DEVELOPMENT',
      desc: 'Flexible minimum order quantities (MOQs from 50m) enabling fashion labels and bespoke projects to prototype and scale without industrial waste.',
    },
  ];

  const devSteps = [
    { step: '01', name: 'UNDERSTAND', desc: 'Reviewing designer briefs, handfeel objectives, target GSM, drape requirements, and application context.' },
    { step: '02', name: 'EXPLORE', desc: 'Selecting appropriate unbaled yarn counts, natural fibre blends (cotton, bast hemp, wild silks), and weave constructions.' },
    { step: '03', name: 'SAMPLE', desc: 'Weaving handloom swatch trials and 1–5 meter prototype lengths on sample pit-looms in Telangana.' },
    { step: '04', name: 'REFINE', desc: 'Evaluating washing behaviour, shrinkage tolerances, and natural dye fastness before confirming production specifications.' },
    { step: '05', name: 'PRODUCE', desc: 'Scaling to generational pit-loom weaver clusters with continuous batch monitoring and quality checks.' },
  ];

  return (
    <>
      <JsonLd data={breadcrumbs} />

      {/* Hero */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="eyebrow">Company Profile</span>
            <h1 style={{ marginBottom: 'var(--space-4)' }}>
              Textile Practice & Capabilities
            </h1>
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)' }}>
              We combine material science, decentralised spinning engineering, and master pit-loom handloom weaving to deliver textiles of exceptional character and physical reliability.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Step Development Workflow */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-subtle)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <span className="eyebrow">Development Methodology</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem' }}>
              Fabric Development Workflow
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
              A structured 5-stage development cycle from concept brief to loom production.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-6)' }}>
            {devSteps.map((s) => (
              <div
                key={s.step}
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border)',
                  padding: 'var(--space-6)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-2)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--color-accent)', fontWeight: 500 }}>
                  {s.step}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem' }}>{s.name}</h3>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Core Capabilities Modern Boxes */}
      <section className="section-padding">
        <div className="container">
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <span className="eyebrow">Technical Domains</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem' }}>
              Core Capabilities
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'var(--space-6)' }}>
            {capabilities.map((c) => (
              <div
                key={c.num}
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
                  {c.num} — {c.title}
                </span>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--space-16)', textAlign: 'center' }}>
            <Link href="/b2b" className="btn btn-primary">
              Initiate Fabric Development Brief →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
