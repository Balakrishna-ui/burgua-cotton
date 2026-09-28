import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Landmark, Sprout, Users, Layers, Target, Sliders, ShieldCheck } from 'lucide-react';
import { JsonLd, createOrganizationSchema } from '@/components/ui/JsonLd';
import styles from './page.module.css';

export default async function HomePage() {
  const organizationSchema = createOrganizationSchema();

  return (
    <>
      <JsonLd data={organizationSchema} />

      {/* SECTION 01 — FULL-SCREEN CINEMATIC HERO */}
      <section className={styles.hero} aria-label="Burgula Cotton Hero">
        <Image
          src="/images/img1.jpg"
          alt="Decentralised unbaled cotton yarn spinning machinery and spindles in Burgula, Telangana"
          fill
          priority
          unoptimized
          sizes="100vw"
          className={styles.heroBgImage}
        />

        <div className={styles.heroContainer}>
          {/* Left Column: Brand Narrative, Heading & CTAs */}
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>TELANGANA ROOTED &bull; HANDLOOM REVIVAL</span>

            <h1 className={styles.heroHeading}>
              <span className={styles.heroHeadingLine}>IN COTTON WE TRUST.</span>
            </h1>

            <p className={styles.heroParagraph}>
              Cotton handloom, rooted in Telangana &mdash; from cotton to yarn to cloth, crafted for a more thoughtful tomorrow.
            </p>

            <div className={styles.heroButtons}>
              <Link href="/about" className={styles.heroPrimaryBtn}>
                <span>ABOUT US</span>
                <ArrowRight size={14} className={styles.btnArrow} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Pillars & Story Play Control */}
          <div className={styles.heroRightPanel}>
            <div className={styles.heroPillars} aria-label="Brand Pillars">
              <span className={styles.pillarItem}>PEOPLE</span>
              <span className={styles.pillarItem}>LAND</span>
              <span className={styles.pillarItem}>LOOMS</span>
              <span className={styles.pillarItem}>A STRONGER</span>
              <span className={styles.pillarItem}>TOMORROW</span>
            </div>

            <Link href="/about" className={styles.watchStoryBtn} aria-label="Watch our story">
              <span className={styles.playIconCircle}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <polygon points="7 4 20 12 7 20 7 4" />
                </svg>
              </span>
              <span className={styles.watchStoryText}>
                <span>WATCH</span>
                <span>OUR STORY</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 02 — OUR TEXTILE (Redesigned per Reference) */}
      <section className={styles.ourTextileSection} aria-label="Our Textile">
        {/* Background Decorative Fabric Wave */}
        <div className={styles.textileFabricWave} aria-hidden="true">
          <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" className={styles.textileWaveSvg}>
            <path
              d="M0,50 C240,75 520,25 800,60 C1080,85 1300,35 1440,45 L1440,90 L0,90 Z"
              fill="rgba(240, 233, 222, 0.5)"
            />
            <path
              d="M0,65 C300,45 600,75 920,50 C1200,30 1360,60 1440,55 L1440,90 L0,90 Z"
              fill="rgba(232, 223, 208, 0.35)"
            />
            <path
              d="M0,40 C340,70 660,20 980,55 C1220,75 1350,40 1440,45"
              stroke="#DFC99E"
              strokeWidth="1.2"
              fill="none"
              strokeOpacity="0.6"
            />
          </svg>
        </div>

        <div className={styles.ourTextileContainer}>
          {/* Left Column: Eyebrow + Gold Dash, Heading, Paragraph, CTA Button */}
          <div className={styles.textileContentCol} data-reveal>
            <div className={styles.textileEyebrowGroup}>
              <span className={styles.textileEyebrowDash} aria-hidden="true" />
              <span className={styles.textileEyebrowText}>OUR TEXTILE</span>
            </div>
            <h2 className={styles.textileHeading}>Cotton. Yarn. <span className={styles.textileHeadingGold}>Cloth.</span></h2>
            <p className={styles.textileParagraph}>
              We work with the purest cotton, skilled hands and traditional techniques to create fabrics that are natural, breathable and timeless.
            </p>
          </div>

          {/* Center Column: Layered Editorial Image Collage */}
          <div className={styles.textileCollageCol} data-reveal="image">
            <div className={styles.collageFrame}>
              {/* Decorative Accent Blocks */}
              <div className={styles.accentGoldBlock} aria-hidden="true" />
              <div className={styles.accentGreenBlock} aria-hidden="true" />

              {/* Connecting fine curve line behind images */}
              <svg className={styles.collageCurveLine} viewBox="0 0 500 350" fill="none" aria-hidden="true">
                <path
                  d="M -20,240 C 120,320 280,260 520,140"
                  stroke="#DFC99E"
                  strokeWidth="1.4"
                />
              </svg>

              {/* 1. Main Rolled/Folded Fabric Image */}
              <div className={styles.mainFabricImgWrap}>
                <Image
                  src="/images/im5.png"
                  alt="Premium handloom cotton fabric weave texture"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 480px"
                  className={styles.collageImg}
                />
              </div>
            </div>
          </div>

          {/* Right Side: Thin Vertical Divider + Minimal Icon Circles + Text */}
          <div className={styles.textilePillarsCol} data-reveal="slide-right" aria-label="Textile Philosophy">
            <div className={styles.pillarVerticalLine} aria-hidden="true" />

            <div className={styles.pillarItemRow}>
              <div className={styles.pillarIconCircle} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V11" />
                  <path d="M12 11C9.5 8.5 6 8 3 8c0 5 3.5 8.5 9 9" />
                  <path d="M12 11c2.5-2.5 6-3 9-3 0 5-3.5 8.5-9 9" />
                  <circle cx="12" cy="5.5" r="3" />
                </svg>
              </div>
              <span className={styles.pillarItemText}>A MATERIAL</span>
            </div>

            <div className={styles.pillarItemRow}>
              <div className={styles.pillarIconCircle} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <line x1="9" y1="4" x2="9" y2="20" />
                  <line x1="15" y1="4" x2="15" y2="20" />
                  <line x1="4" y1="9" x2="20" y2="9" />
                  <line x1="4" y1="15" x2="20" y2="15" />
                </svg>
              </div>
              <span className={styles.pillarItemText}>A PLACE</span>
            </div>

            <div className={styles.pillarItemRow}>
              <div className={styles.pillarIconCircle} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span className={styles.pillarItemText}>A PEOPLE</span>
            </div>

            <div className={styles.pillarItemRow}>
              <div className={styles.pillarIconCircle} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <span className={styles.pillarItemText}>A CONTINUING STORY</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — HANDLOOM CINEMATIC */}
      <section className={styles.handloomSection} aria-label="Handloom Practice">
        <Image
          src="/images/w1.png"
          alt="Generational weaver crafting cloth at traditional wooden pit-loom"
          fill
          sizes="100vw"
          className={styles.handloomBg}
        />
        <div className={styles.handloomOverlay} />

        <div className="container">
          <div className={styles.handloomContent} data-reveal>
            <span className="section-label section-label-light">HANDLOOM HERITAGE</span>
            <h2 className={styles.handloomHeading}>
              WHERE TRADITION<br />
              <span className={styles.handloomHeadingGold}>BECOMES FABRIC.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* SECTION 05 — FROM COTTON TO CLOTH (Redesigned per Reference) */}
      <section className={styles.cottonToClothSection} aria-label="From Cotton to Cloth">
        {/* Background Decorative Wave */}
        <div className={styles.fabricWaveBottom} aria-hidden="true">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className={styles.fabricWaveSvg}>
            <path
              d="M0,45 C280,75 520,20 820,55 C1120,85 1320,30 1440,40 L1440,80 L0,80 Z"
              fill="rgba(242, 235, 224, 0.45)"
            />
            <path
              d="M0,60 C320,35 640,75 980,45 C1240,25 1380,55 1440,50 L1440,80 L0,80 Z"
              fill="rgba(235, 226, 212, 0.3)"
            />
            <path
              d="M0,35 C360,65 680,15 1040,50 C1280,70 1390,35 1440,40"
              stroke="#E0CDA5"
              strokeWidth="1.2"
              fill="none"
              strokeOpacity="0.6"
            />
          </svg>
        </div>

        <div className={styles.cottonToClothContainer}>
          {/* Header row: Eyebrow + Title + Subtitle */}
          <div className={styles.clothHeaderRow} data-reveal>
            <div className={styles.clothEyebrowGroup}>
              <span className={styles.clothEyebrowDash} aria-hidden="true" />
              <span className={styles.clothEyebrowText}>OUR JOURNEY</span>
            </div>
            <h2 className={styles.clothHeading}>From Cotton <span className={styles.clothHeadingGold}>to Cloth</span></h2>
            <p className={styles.clothSubheading}>
              A simple journey that creates stronger communities, sustainable livelihoods and a better tomorrow.
            </p>
          </div>

          {/* Sequential 4-Step Process & CTA Strip */}
          <div className={styles.clothProcessStrip} data-reveal-group>
            {/* Background connecting wavy golden thread (desktop) */}
            <svg className={styles.threadConnectingLine} viewBox="0 0 1100 80" fill="none" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M 50,42 C 180,68 280,22 410,44 C 540,66 650,24 780,44 C 910,64 990,32 1080,42"
                stroke="#DFC99E"
                strokeWidth="1.5"
              />
            </svg>

            {/* CARD 01: Cotton */}
            <div className={`${styles.processCardItem} ${styles.cardStage1}`}>
              <div className={styles.organicBackdropBlob} aria-hidden="true" />
              <div className={styles.processImageWrapper}>
                <div className={styles.processImageArch}>
                  <Image
                    src="/images/im1.png"
                    alt="Raw cotton bolls - Pure. Natural. Local."
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 260px"
                    className={styles.processImage}
                  />
                </div>
                <div className={styles.stageNumberBadge} aria-label="Stage 01">01</div>
              </div>
              <div className={styles.processCardMeta}>
                <div className={styles.metaTextGroup}>
                  <h3 className={styles.processTitle}>COTTON</h3>
                  <p className={styles.processSubtitle}>Pure. Natural. Local.</p>
                </div>
                <div className={styles.processIconBadge} aria-hidden="true">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22V11" />
                    <path d="M12 11C9.5 8.5 6 8 3 8c0 5 3.5 8.5 9 9" />
                    <path d="M12 11c2.5-2.5 6-3 9-3 0 5-3.5 8.5-9 9" />
                    <circle cx="12" cy="5.5" r="3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ARROW 1 */}
            <div className={styles.processArrowWrapper} aria-hidden="true">
              <div className={styles.processArrowCircle}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>

            {/* CARD 02: Yarn */}
            <div className={`${styles.processCardItem} ${styles.cardStage2}`}>
              <div className={styles.organicBackdropBlob} aria-hidden="true" />
              <div className={styles.processImageWrapper}>
                <div className={styles.processImageArch}>
                  <Image
                    src="/images/im2.png"
                    alt="Spools of natural cotton yarn - Strength in every strand."
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 260px"
                    className={styles.processImage}
                  />
                </div>
                <div className={styles.stageNumberBadge} aria-label="Stage 02">02</div>
              </div>
              <div className={styles.processCardMeta}>
                <div className={styles.metaTextGroup}>
                  <h3 className={styles.processTitle}>YARN</h3>
                  <p className={styles.processSubtitle}>Strength in every strand.</p>
                </div>
                <div className={styles.processIconBadge} aria-hidden="true">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="5" ry="2.2" />
                    <ellipse cx="12" cy="19" rx="5" ry="2.2" />
                    <path d="M7 5v14" />
                    <path d="M17 5v14" />
                    <path d="M7 9.5c2.5 1.2 7.5 1.2 10 0" />
                    <path d="M7 14.5c2.5 1.2 7.5 1.2 10 0" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ARROW 2 */}
            <div className={styles.processArrowWrapper} aria-hidden="true">
              <div className={styles.processArrowCircle}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>

            {/* CARD 03: Weaving */}
            <div className={`${styles.processCardItem} ${styles.cardStage3}`}>
              <div className={styles.organicBackdropBlob} aria-hidden="true" />
              <div className={styles.processImageWrapper}>
                <div className={styles.processImageArch}>
                  <Image
                    src="/images/im3.png"
                    alt="Traditional handloom weaving in motion - Tradition in motion."
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 260px"
                    className={styles.processImage}
                  />
                </div>
                <div className={styles.stageNumberBadge} aria-label="Stage 03">03</div>
              </div>
              <div className={styles.processCardMeta}>
                <div className={styles.metaTextGroup}>
                  <h3 className={styles.processTitle}>WEAVING</h3>
                  <p className={styles.processSubtitle}>Tradition in motion.</p>
                </div>
                <div className={styles.processIconBadge} aria-hidden="true">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="9" y1="4" x2="9" y2="20" />
                    <line x1="15" y1="4" x2="15" y2="20" />
                    <line x1="4" y1="9" x2="20" y2="9" />
                    <line x1="4" y1="15" x2="20" y2="15" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ARROW 3 */}
            <div className={styles.processArrowWrapper} aria-hidden="true">
              <div className={styles.processArrowCircle}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>

            {/* CARD 04: Cloth */}
            <div className={`${styles.processCardItem} ${styles.cardStage4}`}>
              <div className={styles.organicBackdropBlob} aria-hidden="true" />
              <div className={styles.processImageWrapper}>
                <div className={styles.processImageArch}>
                  <Image
                    src="/images/im4.png"
                    alt="Folded handloom cotton cloth - For a better tomorrow."
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 260px"
                    className={styles.processImage}
                  />
                </div>
                <div className={styles.stageNumberBadge} aria-label="Stage 04">04</div>
              </div>
              <div className={styles.processCardMeta}>
                <div className={styles.metaTextGroup}>
                  <h3 className={styles.processTitle}>CLOTH</h3>
                  <p className={styles.processSubtitle}>For a better tomorrow.</p>
                </div>
                <div className={styles.processIconBadge} aria-hidden="true">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
                    <line x1="12" y1="4" x2="12" y2="20" />
                    <line x1="4" y1="12" x2="12" y2="12" />
                  </svg>
                </div>
              </div>
            </div>

            {/* RIGHT-SIDE CTA PANEL */}
            <Link href="/our-story" className={styles.journeyCtaPanel} aria-label="Explore the journey">
              <div className={styles.ctaTopDash} aria-hidden="true" />
              <div className={styles.ctaHeaderRow}>
                <div className={styles.ctaTitleStack}>
                  <span className={styles.ctaTitleLine}>EXPLORE</span>
                  <span className={styles.ctaTitleLine}>THE JOURNEY</span>
                </div>
                <div className={styles.ctaCircleBtn} aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
              <p className={styles.ctaDescription}>
                Discover how cotton transforms lives &mdash; from fields to fabric, in one village.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 06 — OUR PLACE / BURGULA VILLAGE BANNER */}
      <section className={styles.villageBannerSection} aria-label="Our Place - Burgula Village">
        <div className={styles.villageBannerWrap}>
          <Image
            src="/images/ban.png"
            alt="Burgula Village Aerial Panorama"
            width={2172}
            height={724}
            priority
            unoptimized
            sizes="100vw"
            className={styles.villageAerialBannerImg}
          />

          {/* Left Dark Gradient Overlay */}
          <div className={styles.villageGradientOverlay} aria-hidden="true" />

          <div className={styles.villageBannerContent}>
            <div className={styles.villageBannerEyebrowGroup}>
              <span className={styles.villageBannerEyebrowDash} aria-hidden="true" />
              <span className={styles.villageBannerEyebrow}>OUR PLACE</span>
            </div>

            <h2 className={styles.villageBannerHeading}>
              <span className={styles.headingLine1}>Kapās se Kapda</span>
              <span className={styles.headingLine2}>Ek Gaon Mein.</span>
            </h2>

            <p className={styles.villageBannerSubtitle}>
              From cotton to cloth &mdash; within one village.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 07 — THE INSTITUTION */}
      <section className={styles.institutionSection} aria-label="The Burgula Cotton Trust">
        {/* Subtle Decorative Charkha Watermark in Background */}
        <div className={styles.institutionWatermark} aria-hidden="true">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" stroke="#9E743A" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.25" />
            <circle cx="100" cy="100" r="70" stroke="#9E743A" strokeWidth="1" opacity="0.2" />
            <circle cx="100" cy="100" r="16" stroke="#9E743A" strokeWidth="1.5" opacity="0.3" />
            <line x1="100" y1="10" x2="100" y2="190" stroke="#9E743A" strokeWidth="1" opacity="0.2" />
            <line x1="10" y1="100" x2="190" y2="100" stroke="#9E743A" strokeWidth="1" opacity="0.2" />
            <line x1="36" y1="36" x2="164" y2="164" stroke="#9E743A" strokeWidth="1" opacity="0.18" />
            <line x1="36" y1="164" x2="164" y2="36" stroke="#9E743A" strokeWidth="1" opacity="0.18" />
          </svg>
        </div>

        <div className={styles.institutionContainer}>
          <div className={styles.institutionGrid}>
            {/* LEFT SIDE: Asymmetric Layered Collage */}
            <div className={styles.institutionCollage}>
              {/* Top Main Image with golden corner curve */}
              <div className={styles.collageMainWrap}>
                <div className={styles.collageMainImgInner}>
                  <Image
                    src="/images/b2b-spinning.jpg"
                    alt="Artisan technician operating ring-spinning machinery at Burgula Cotton Trust"
                    fill
                    sizes="(max-width: 992px) 100vw, 55vw"
                    className={styles.collageImg}
                  />
                </div>
                {/* Gold curved geometric accent on right */}
                <div className={styles.collageGoldAccent} aria-hidden="true" />
              </div>

              {/* Bottom Row: Dark Green Card + Detail Hand Image */}
              <div className={styles.collageBottomRow}>
                {/* Dark Forest Green Card */}
                <div className={styles.collageGreenCard}>
                  <div className={styles.collageCottonThumb}>
                    <Image
                      src="/images/journey-strip/cotton.png"
                      alt="Raw natural cotton bolls"
                      fill
                      sizes="160px"
                      className={styles.collageImg}
                    />
                  </div>
                  <div className={styles.collagePillarsText}>
                    <span>People</span>
                    <span>Land</span>
                    <span>Tradition</span>
                    <span>Livelihoods</span>
                  </div>
                </div>

                {/* Secondary Detail Image (hands adjusting spools on machinery) */}
                <div className={styles.collageDetailWrap}>
                  <div className={styles.collageDetailInner}>
                    <Image
                      src="/images/bct.png"
                      alt="Artisan hands calibrating yarn threads on spinning frame"
                      fill
                      sizes="(max-width: 992px) 50vw, 28vw"
                      className={styles.collageImg}
                    />
                  </div>
                  {/* Subtle golden corner backdrop */}
                  <div className={styles.collageDetailBackdrop} aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Institution Content */}
            <div className={styles.institutionContent}>
              <div className={styles.institutionEyebrowRow}>
                <span className={styles.institutionEyebrowDash} aria-hidden="true" />
                <span className={styles.institutionEyebrow}>04 — THE INSTITUTION</span>
              </div>

              <h2 className={styles.institutionHeading}>The Burgula <span className={styles.institutionHeadingGold}>Cotton Trust</span></h2>

              <p className={styles.institutionPara}>
                The Trust exists to hold the ecosystem together — the land, the existing assets, the people already working in cotton and handloom, and the enterprise development needed to make it durable.
              </p>

              <div className={styles.institutionList}>
                <div className={styles.institutionListItem}>
                  <div className={styles.itemIconBadge} aria-hidden="true">
                    <Landmark size={17} />
                  </div>
                  <span className={styles.itemText}>
                    Institutional foundation for the cotton and handloom ecosystem
                  </span>
                </div>

                <div className={styles.institutionListItem}>
                  <div className={styles.itemIconBadge} aria-hidden="true">
                    <Sprout size={17} />
                  </div>
                  <span className={styles.itemText}>
                    Stewardship of existing land, buildings and machinery
                  </span>
                </div>

                <div className={styles.institutionListItem}>
                  <div className={styles.itemIconBadge} aria-hidden="true">
                    <Users size={17} />
                  </div>
                  <span className={styles.itemText}>
                    Community mobilisation with farmers, weavers and artisans
                  </span>
                </div>

                <div className={styles.institutionListItem}>
                  <div className={styles.itemIconBadge} aria-hidden="true">
                    <Layers size={17} />
                  </div>
                  <span className={styles.itemText}>
                    Textile and cluster development planning
                  </span>
                </div>

                <div className={styles.institutionListItem}>
                  <div className={styles.itemIconBadge} aria-hidden="true">
                    <Target size={17} />
                  </div>
                  <span className={styles.itemText}>
                    A long-term vision built around shared infrastructure
                  </span>
                </div>
              </div>

              <div className={styles.institutionCtaWrapper}>
                <Link href="/about" className={styles.institutionBtn}>
                  <span>ABOUT THE TRUST &amp; PRACTICE</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — B2B TRADE & BESPOKE DEVELOPMENT */}
      <section className={styles.b2bSection} aria-label="B2B Commercial Sourcing">
        <div className={styles.b2bContainer}>
          <div className={styles.b2bSplitGrid}>
            {/* Left Column: Cream Content Area */}
            <div className={styles.b2bContentCol} data-reveal>
              <div className={styles.b2bEyebrowRow}>
                <span className={styles.b2bEyebrowDash} aria-hidden="true" />
                <span className={styles.b2bEyebrow}>10 &mdash; B2B &amp; SOURCING</span>
              </div>

              <h2 className={styles.b2bHeading}>
                Textiles for a<br />
                <span className={styles.b2bHeadingGold}>Better Tomorrow</span>
              </h2>

              <p className={styles.b2bParagraph}>
                For designers, labels, manufacturers, retailers, architects and hospitality brands seeking verified handloom yardage, custom weave developments, and traceable material origin.
              </p>

              <div className={styles.b2bButtonRow}>
                <a href="mailto:cottontrustburgula@gmail.com" className={styles.b2bPrimaryBtn}>
                  <span>START B2B TRADE ENQUIRY</span>
                  <ArrowRight size={12} className={styles.btnArrow} aria-hidden="true" />
                </a>
                <Link href="/our-story" className={styles.b2bSecondaryBtn}>
                  <span>VIEW STORY &amp; PHILOSOPHY</span>
                  <ArrowRight size={12} className={styles.btnArrow} aria-hidden="true" />
                </Link>
              </div>

              {/* 4 Feature Badges Row */}
              <div className={styles.b2bFeaturesRow}>
                <div className={styles.b2bFeatureItem}>
                  <div className={styles.featureIconBadge} aria-hidden="true">
                    <Sprout size={16} />
                  </div>
                  <span className={styles.featureText}>SUSTAINABLE SOURCING</span>
                </div>

                <div className={styles.featureDivider} aria-hidden="true" />

                <div className={styles.b2bFeatureItem}>
                  <div className={styles.featureIconBadge} aria-hidden="true">
                    <Sliders size={16} />
                  </div>
                  <span className={styles.featureText}>CUSTOM DEVELOPMENTS</span>
                </div>

                <div className={styles.featureDivider} aria-hidden="true" />

                <div className={styles.b2bFeatureItem}>
                  <div className={styles.featureIconBadge} aria-hidden="true">
                    <ShieldCheck size={16} />
                  </div>
                  <span className={styles.featureText}>VERIFIED QUALITY</span>
                </div>

                <div className={styles.featureDivider} aria-hidden="true" />

                <div className={styles.b2bFeatureItem}>
                  <div className={styles.featureIconBadge} aria-hidden="true">
                    <Users size={16} />
                  </div>
                  <span className={styles.featureText}>SUPPORTING WEAVER COMMUNITIES</span>
                </div>
              </div>
            </div>

            {/* Right Column: Handloom Visual + Diagonal Cascade Cards */}
            <div className={styles.b2bVisualCol} data-reveal="image">
              <div className={styles.b2bImageWrap}>
                <Image
                  src="/images/wiving.png"
                  alt="Traditional handloom weaving and warp preparation in Burgula, Telangana"
                  fill
                  sizes="(max-width: 860px) 100vw, 55vw"
                  className={styles.b2bMainImage}
                />

                {/* Diagonal cream overlay with golden separator line */}
                <svg className={styles.b2bDiagonalMask} viewBox="0 0 100 500" preserveAspectRatio="none" aria-hidden="true">
                  <polygon points="0,0 75,0 0,500" fill="#FAF7F2" />
                  <line x1="75" y1="0" x2="0" y2="500" stroke="#DFC99E" strokeWidth="1.6" />
                </svg>

                {/* Subtle top golden flourish curve */}
                <svg className={styles.b2bTopCurve} viewBox="0 0 120 40" fill="none" aria-hidden="true">
                  <path d="M 0,0 C 45,22 85,12 120,0" stroke="#DFC99E" strokeWidth="1.4" />
                </svg>
              </div>

              {/* 3 Cascading Inset Cards */}
              <div className={styles.b2bCascadeGroup} aria-hidden="true">
                {/* 1: Cotton with Ochre Accent */}
                <div className={styles.cascadeCard1}>
                  <div className={styles.accentGoldBadge} />
                  <div className={styles.cardImageHolder}>
                    <Image
                      src="/images/journey-strip/cotton.png"
                      alt="Raw natural cotton bolls"
                      fill
                      sizes="130px"
                      className={styles.insetCardImg}
                    />
                  </div>
                </div>

                {/* 2: Yarn */}
                <div className={styles.cascadeCard2}>
                  <div className={styles.cardImageHolder}>
                    <Image
                      src="/images/journey-strip/yarn.png"
                      alt="Natural cotton yarn spools"
                      fill
                      sizes="130px"
                      className={styles.insetCardImg}
                    />
                  </div>
                </div>

                {/* 3: Cloth with Green Accent */}
                <div className={styles.cascadeCard3}>
                  <div className={styles.accentGreenBadge} />
                  <div className={styles.cardImageHolder}>
                    <Image
                      src="/images/journey-strip/cloth.png"
                      alt="Handloom woven cotton cloth"
                      fill
                      sizes="130px"
                      className={styles.insetCardImg}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
