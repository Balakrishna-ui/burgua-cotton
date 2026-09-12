import React from 'react';

export function ProcessSteps() {
  const steps = [
    {
      num: '01',
      title: 'Cotton',
      subtitle: 'Raw & Unbaled',
      description: 'Grown and carded gently in rural Telangana. Avoiding heavy industrial hydraulic baling preserves natural fibre integrity, pectin, and softness.',
    },
    {
      num: '02',
      title: 'Yarn',
      subtitle: '27-30s Decentralised',
      description: 'Spun on village-scale decentralised ring frames. This reviving tradition retains natural spring and authentic irregularities of handspun yarn.',
    },
    {
      num: '03',
      title: 'Weaving',
      subtitle: 'Traditional Pit-Looms',
      description: 'Handwoven by skilled generational weaver families across Telangana clusters, creating balanced tension, breathability, and structural durability.',
    },
    {
      num: '04',
      title: 'Cloth',
      subtitle: 'Living Material',
      description: 'Loom-state Kora or naturally vat-dyed fabric that lives, drapes, and continuously softens over time. Pure Telangana handloom cotton.',
    },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-6)' }}>
      {steps.map((step) => (
        <div
          key={step.num}
          style={{
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border)',
            padding: 'var(--space-8) var(--space-6)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
            position: 'relative',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2rem',
              color: 'var(--color-accent)',
              lineHeight: 1,
            }}
          >
            {step.num}
          </span>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginTop: 'var(--space-2)' }}>
            {step.title}
          </h3>
          <span
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-text-muted)',
            }}
          >
            {step.subtitle}
          </span>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
