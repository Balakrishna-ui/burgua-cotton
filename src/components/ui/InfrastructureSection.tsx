import React from 'react';
import Image from 'next/image';
import styles from './InfrastructureSection.module.css';

const infraCards = [
  {
    category: 'FACILITY BUILDING',
    title: 'Rural Spinning & Weaving Shed',
    desc: 'Operational shed supporting local spinning and weaving activities.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    alt: 'Rural textile weaving shed exterior',
  },
  {
    category: 'YARN PREPARATION',
    title: 'Carding & Drawing Frames',
    desc: 'Machinery for carding, drawing and preparing usable yarn.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80',
    alt: 'Cotton carding and yarn preparation frames',
  },
  {
    category: 'DECENTRALISED SPINNING',
    title: 'Village Ring Frames',
    desc: 'Ring frames enabling decentralised spinning in villages.',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
    alt: 'Village ring spinning frames in operation',
  },
  {
    category: 'WARP & REELING',
    title: 'Manual Reeling Infrastructure',
    desc: 'Supports warping, reeling and other pre-weaving processes.',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80',
    alt: 'Manual reeling and warping equipment',
  },
  {
    category: 'LOOM INFRASTRUCTURE',
    title: 'Traditional Pit-Looms',
    desc: 'Traditional handlooms supporting small-scale weaving.',
    image: '/images/w1.png',
    alt: 'Traditional pit loom handloom weaving',
  },
  {
    category: 'STORAGE & WAREHOUSE',
    title: 'Cotton & Fabric Storage',
    desc: 'Safe storage for raw cotton, yarn and finished fabric.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
    alt: 'Cotton and fabric warehouse storage',
  },
];

// Small SVG icons for badge
const BadgeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export function InfrastructureSection() {
  return (
    <section className={styles.section} aria-label="Existing Foundation and Infrastructure">
      {/* Background image */}
      <Image
        src="/images/cotton-bg.png"
        alt=""
        fill
        sizes="100vw"
        className={styles.sectionBg}
        aria-hidden="true"
      />
      {/* Cream overlay */}
      <div className={styles.sectionOverlay} aria-hidden="true" />

      <div className={styles.contentWrapper}>
        <div className="container">
          <div className={styles.outerGrid}>

          {/* ── LEFT COLUMN ─────────────────────────────────────────────── */}
          <div className={styles.leftCol}>
            <span className={styles.eyebrow}>05 — INFRASTRUCTURE</span>

            <h2 className={styles.heading}>
              Built on an existing foundation
            </h2>

            <p className={styles.para}>
              Documented assets and infrastructure form part of the foundation from which the textile practice continues. Established in 2007, the Burgula Cotton Trust stewards physical and human resources across rural Telangana.
            </p>

            {/* Stats row */}
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>6+</span>
                <span className={styles.statLabel}>Key Facilities</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>2007</span>
                <span className={styles.statLabel}>Established</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>Rural</span>
                <span className={styles.statLabel}>Telangana</span>
              </div>
            </div>

            {/* Verification note */}
            <div className={styles.verifyBox}>
              <span className={styles.verifyTitle}>Verification Note</span>
              <p className={styles.verifyText}>
                All facility mappings reflect verified physical infrastructure stewarded for village-scale decentralised yarn and pit-loom weaving development.
              </p>
            </div>

            {/* Atmospheric image */}
            <div className={styles.atmosImageWrap}>
              <Image
                src="/images/hero-cotton-harvest.jpg"
                alt="Cotton fields in rural Telangana landscape"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className={styles.atmosImage}
              />
              <div className={styles.atmosOverlay} />
            </div>
          </div>

          {/* ── RIGHT COLUMN ────────────────────────────────────────────── */}
          <div className={styles.rightCol}>

            {/* 3×2 Card Grid */}
            <div className={styles.cardGrid}>
              {infraCards.map((card) => (
                <div key={card.category} className={styles.card}>
                  {/* Card image */}
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className={styles.cardImage}
                    />
                    {/* Circular badge at bottom of image */}
                    <div className={styles.cardBadge}>
                      <BadgeIcon />
                    </div>
                  </div>

                  {/* Card body */}
                  <div className={styles.cardBody}>
                    <span className={styles.cardCategory}>{card.category}</span>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDesc}>{card.desc}</p>
                  </div>

                  {/* Arrow footer */}
                  <div className={styles.cardFooter}>
                    <div className={styles.cardArrow} aria-hidden="true">
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Editorial statement */}
            <p className={styles.editorial}>
              Rooted in resources.<br />
              Woven for people.
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
  );
}
