import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
              Handloom cotton, rooted in Telangana &mdash; from cotton to yarn to cloth, crafted for a more thoughtful tomorrow.
            </p>

            <div className={styles.heroButtons}>
              <Link href="/about" className={styles.heroPrimaryBtn}>
                ABOUT US
                <span className={styles.btnArrow} aria-hidden="true">&rarr;</span>
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

      {/* SECTION 02 — OUR TEXTILE (Reference 2) */}
      <section className={styles.ourTextileSection} aria-label="Our Textile">
        <div className={styles.ourTextileContainer}>
          {/* Left Column: Eyebrow, Heading, Description (approx 42% width) */}
          <div className={styles.textileContentCol} data-reveal>
            <span className={styles.textileEyebrow}>OUR TEXTILE</span>
            <h2 className={styles.textileHeading}>Cotton. Yarn. Cloth.</h2>
            <p className={styles.textileParagraph}>
              We work with the purest cotton, skilled hands and traditional techniques to create fabrics that are natural, breathable and timeless.
            </p>
          </div>

          {/* Right Side: Rectangular Photograph of Premium Cotton Fabric (approx 50% width) */}
          <div className={styles.textileVisualCol} data-reveal="image">
            <div className={styles.textileImageFrame}>
              <Image
                src="/images/our-textile.png"
                alt="Premium handloom cotton fabric in natural beige, cream, and subtle brown weave"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 48vw"
                className={styles.textileImage}
              />
            </div>
          </div>

          {/* Far Right: Vertical Divider & Stacked Text */}
          <div className={styles.textilePillarsCol} data-reveal="slide-right" aria-label="Textile Philosophy">
            <span className={styles.textilePillarItem}>A MATERIAL</span>
            <span className={styles.textilePillarItem}>A PLACE</span>
            <span className={styles.textilePillarItem}>A PEOPLE</span>
            <span className={styles.textilePillarItem}>A CONTINUING</span>
            <span className={styles.textilePillarItem}>STORY</span>
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
              BECOMES FABRIC.
            </h2>
          </div>
        </div>
      </section>

      {/* SECTION 05 — FROM COTTON TO CLOTH (Reference Section 5) */}
      <section className={styles.cottonToClothSection} aria-label="From Cotton to Cloth">
        <div className={styles.cottonToClothContainer}>
          {/* Header row: Left heading */}
          <div className={styles.clothHeaderRow} data-reveal>
            <h2 className={styles.clothHeading}>FROM COTTON TO CLOTH</h2>
          </div>

          {/* Sequential 4-Step Process & CTA Strip */}
          <div className={styles.clothProcessStrip} data-reveal-group>
            {/* CARD 01: Cotton */}
            <div className={styles.processCardItem}>
              <div className={styles.processImageWrapper}>
                <Image
                  src="/images/journey-strip/cotton.png"
                  alt="Raw cotton bolls - Pure. Natural. Local."
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className={styles.processImage}
                />
              </div>
              <div className={styles.processCardMeta}>
                <div className={styles.processNumberTitle}>
                  <span className={styles.processNum}>01</span>
                  <span className={styles.processTitle}>COTTON</span>
                </div>
                <p className={styles.processSubtitle}>Pure. Natural. Local.</p>
              </div>
            </div>

            {/* ARROW 1 */}
            <div className={styles.processArrow} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="20" y2="12" />
                <polyline points="14 6 20 12 14 18" />
              </svg>
            </div>

            {/* CARD 02: Yarn */}
            <div className={styles.processCardItem}>
              <div className={styles.processImageWrapper}>
                <Image
                  src="/images/journey-strip/yarn.png"
                  alt="Spools of natural cotton yarn - Strength in every strand."
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className={styles.processImage}
                />
              </div>
              <div className={styles.processCardMeta}>
                <div className={styles.processNumberTitle}>
                  <span className={styles.processNum}>02</span>
                  <span className={styles.processTitle}>YARN</span>
                </div>
                <p className={styles.processSubtitle}>Strength in every strand.</p>
              </div>
            </div>

            {/* ARROW 2 */}
            <div className={styles.processArrow} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="20" y2="12" />
                <polyline points="14 6 20 12 14 18" />
              </svg>
            </div>

            {/* CARD 03: Weaving */}
            <div className={styles.processCardItem}>
              <div className={styles.processImageWrapper}>
                <Image
                  src="/images/journey-strip/weaving.png"
                  alt="Traditional handloom weaving in motion - Tradition in motion."
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className={styles.processImage}
                />
              </div>
              <div className={styles.processCardMeta}>
                <div className={styles.processNumberTitle}>
                  <span className={styles.processNum}>03</span>
                  <span className={styles.processTitle}>WEAVING</span>
                </div>
                <p className={styles.processSubtitle}>Tradition in motion.</p>
              </div>
            </div>

            {/* ARROW 3 */}
            <div className={styles.processArrow} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="20" y2="12" />
                <polyline points="14 6 20 12 14 18" />
              </svg>
            </div>

            {/* CARD 04: Cloth */}
            <div className={styles.processCardItem}>
              <div className={styles.processImageWrapper}>
                <Image
                  src="/images/journey-strip/cloth.png"
                  alt="Folded handloom cotton cloth - For a better tomorrow."
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className={styles.processImage}
                />
              </div>
              <div className={styles.processCardMeta}>
                <div className={styles.processNumberTitle}>
                  <span className={styles.processNum}>04</span>
                  <span className={styles.processTitle}>CLOTH</span>
                </div>
                <p className={styles.processSubtitle}>For a better tomorrow.</p>
              </div>
            </div>

            {/* RIGHT-SIDE CTA PANEL */}
            <Link href="/capabilities" className={styles.journeyCtaPanel} aria-label="Explore the journey">
              <span className={styles.journeyCtaText}>
                EXPLORE<br />
                THE JOURNEY <span className={styles.journeyCtaArrow}>&rarr;</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 06 — OUR PLACE / BURGULA VILLAGE BANNER */}
      <section className={styles.villageBannerSection} aria-label="Our Place - Burgula Village">
        <Link href="/our-story" className={styles.villageBannerLink} aria-label="Discover Burgula - Our Story">
          <Image
            src="/images/burgula-aerial-clean.png"
            alt="Burgula Village Aerial Panorama"
            width={1024}
            height={229}
            priority
            sizes="100vw"
            className={styles.villageAerialBannerImg}
          />
          <div className={styles.villageBannerContent}>
            <span className={styles.villageBannerEyebrow}>OUR PLACE</span>
            <h2 className={styles.villageBannerHeading}>
              Kapās se Kapda Tak,<br />
              Ek Gaon Mein.
            </h2>
            <p className={styles.villageBannerSubtitle}>
              From cotton to cloth &mdash; within one village.
            </p>
            <div className={styles.villageBannerBtnWrapper}>
              <span className={styles.villageBannerBtn}>
                DISCOVER BURGULA <span className={styles.villageBannerArrow} aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* SECTION 07 — THE INSTITUTION */}
      <section className={styles.institutionSection} aria-label="The Burgula Cotton Trust">
        <div className={styles.institutionGrid}>
          <div className={styles.institutionVisual} data-reveal="image">
            <Image
              src="/images/img3.jpg"
              alt="Burgula Cotton spinning and yarn machinery operations in Telangana"
              fill
              sizes="(max-width: 992px) 100vw, 50vw"
              className={styles.institutionImg}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          <div className={styles.institutionContent} data-reveal>
            <span className="section-label section-label-light">04 — THE INSTITUTION</span>
            <h2 className={styles.institutionHeading}>The Burgula Cotton Trust</h2>
            <p className={styles.institutionPara}>
              The Trust exists to hold the ecosystem together — the land, the existing assets, the people already working in cotton and handloom, and the enterprise development needed to make it durable.
            </p>

            <ul className={styles.institutionList}>
              <li className={styles.institutionListItem}>
                <span>—</span>
                <span>Institutional foundation for the cotton and handloom ecosystem</span>
              </li>
              <li className={styles.institutionListItem}>
                <span>—</span>
                <span>Stewardship of existing land, buildings and machinery</span>
              </li>
              <li className={styles.institutionListItem}>
                <span>—</span>
                <span>Community mobilisation with farmers, weavers and artisans</span>
              </li>
              <li className={styles.institutionListItem}>
                <span>—</span>
                <span>Textile and cluster development planning</span>
              </li>
              <li className={styles.institutionListItem}>
                <span>—</span>
                <span>A long-term vision built around shared infrastructure</span>
              </li>
            </ul>

            <div className={styles.institutionCtaWrapper}>
              <Link href="/about" className="btn btn-hero-white">
                About the Trust &amp; Practice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — B2B TRADE & BESPOKE DEVELOPMENT */}
      <section className={styles.b2bSection} aria-label="B2B Commercial Sourcing">
        <div className="container">
          <div className={styles.b2bCard} data-reveal>
            <span className="section-label section-label-light">10 — B2B &amp; SOURCING</span>
            <h2 className={styles.b2bHeading}>Textiles for Purpose</h2>
            <p className={styles.b2bText}>
              For designers, labels, manufacturers, retailers, architects and hospitality brands seeking verified handloom yardage, custom weave developments, and traceable material origin.
            </p>
            <div className={styles.b2bButtonRow}>
              <Link href="/b2b" className="btn btn-hero-white">
                Start B2B Trade Enquiry
              </Link>
              <Link href="/capabilities" className="btn btn-hero-outline">
                View Development Workflow
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
