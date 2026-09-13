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
          src="/images/img11.png"
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
              <span className={styles.heroHeadingLine}>BURGULA COTTON.</span>
              <span className={styles.heroHeadingLine}>IN COTTON WE TRUST.</span>
            </h1>

            <p className={styles.heroParagraph}>
              Handloom cotton, rooted in Telangana &mdash; from cotton to yarn to cloth, crafted for a more thoughtful tomorrow.
            </p>

            <div className={styles.heroButtons}>
              <Link href="/textiles" className={styles.heroPrimaryBtn}>
                EXPLORE FABRICS
                <span className={styles.btnArrow} aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/our-story" className={styles.heroSecondaryBtn}>
                OUR STORY
              </Link>
            </div>

            {/* Slide Pagination Indicator */}
            <div className={styles.heroPagination} aria-label="Slide Indicator">
              <span className={styles.paginationActive}>01</span>
              <span className={styles.paginationLine} aria-hidden="true" />
              <span className={styles.paginationMuted}>02</span>
              <span className={styles.paginationMuted}>03</span>
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

            <Link href="/our-story" className={styles.watchStoryBtn} aria-label="Watch our story">
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
          {/* Left Column: Eyebrow, Heading, Description & Link (approx 42% width) */}
          <div className={styles.textileContentCol} data-reveal>
            <span className={styles.textileEyebrow}>OUR TEXTILE</span>
            <h2 className={styles.textileHeading}>Cotton. Yarn. Cloth.</h2>
            <p className={styles.textileParagraph}>
              We work with the purest cotton, skilled hands and traditional techniques to create fabrics that are natural, breathable and timeless.
            </p>
            <div className={styles.textileLinkWrapper}>
              <Link href="/textiles" className={styles.textileLearnMoreLink}>
                LEARN MORE
                <span className={styles.learnMoreArrow} aria-hidden="true">&rarr;</span>
              </Link>
            </div>
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
            <p className={styles.handloomParagraph}>
              Weaving connects yarn and material into living cloth. On traditional pit-looms in Telangana, generational weavers translate unbaled cotton into breathable, durable cloth with authentic character.
            </p>
            <div className={styles.sectionCtaWrapper}>
              <Link href="/textiles" className="btn btn-hero-white">
                EXPLORE FABRICS &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — FEATURED FABRICS (Reference 4 Top) */}
      <section className={styles.featuredCollectionSection} aria-label="Featured Fabrics Collection">
        <div className={styles.featuredCollectionContainer}>
          {/* Header Area */}
          <div className={styles.collectionHeaderRow} data-reveal>
            <div className={styles.collectionTitleArea}>
              <span className={styles.collectionEyebrow}>FEATURED FABRICS</span>
              <h2 className={styles.collectionHeading}>The Burgula Cotton Collection</h2>
            </div>
            <div className={styles.collectionLinkArea}>
              <Link href="/textiles" className={styles.exploreAllFabricsLink}>
                EXPLORE ALL FABRICS
                <span className={styles.collectionArrow} aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* 4 Fabric Cards Grid */}
          <div className={styles.fabricCardsGrid} data-reveal-group>
            <Link href="/textiles" className={styles.fabricCardItem}>
              <div className={styles.fabricCardImgWrapper}>
                <Image
                  src="/images/fabrics/plains.png"
                  alt="Plains handloom cotton fabric: Clean & versatile"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={styles.fabricCardImg}
                />
              </div>
              <h3 className={styles.fabricCardTitle}>Plains</h3>
              <p className={styles.fabricCardSubtitle}>Clean &amp; versatile</p>
            </Link>

            <Link href="/textiles" className={styles.fabricCardItem}>
              <div className={styles.fabricCardImgWrapper}>
                <Image
                  src="/images/fabrics/stripes.png"
                  alt="Stripes handloom cotton fabric: Subtle & timeless"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={styles.fabricCardImg}
                />
              </div>
              <h3 className={styles.fabricCardTitle}>Stripes</h3>
              <p className={styles.fabricCardSubtitle}>Subtle &amp; timeless</p>
            </Link>

            <Link href="/textiles" className={styles.fabricCardItem}>
              <div className={styles.fabricCardImgWrapper}>
                <Image
                  src="/images/fabrics/textured.png"
                  alt="Textured handloom cotton fabric: Character in every weave"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={styles.fabricCardImg}
                />
              </div>
              <h3 className={styles.fabricCardTitle}>Textured</h3>
              <p className={styles.fabricCardSubtitle}>Character in every weave</p>
            </Link>

            <Link href="/textiles" className={styles.fabricCardItem}>
              <div className={styles.fabricCardImgWrapper}>
                <Image
                  src="/images/fabrics/yarn-dyed.png"
                  alt="Yarn-dyed handloom cotton fabric: Depth in every thread"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={styles.fabricCardImg}
                />
              </div>
              <h3 className={styles.fabricCardTitle}>Yarn-dyed</h3>
              <p className={styles.fabricCardSubtitle}>Depth in every thread</p>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 05 — FROM COTTON TO CLOTH (Reference Section 5) */}
      <section className={styles.cottonToClothSection} aria-label="From Cotton to Cloth">
        <div className={styles.cottonToClothContainer}>
          {/* Header row: Left heading, Right description aligned horizontally */}
          <div className={styles.clothHeaderRow} data-reveal>
            <h2 className={styles.clothHeading}>FROM COTTON TO CLOTH</h2>
            <p className={styles.clothSubheading}>A simple journey. A stronger tomorrow.</p>
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
              <div className={styles.botanicalBgWrapper} aria-hidden="true">
                <Image
                  src="/images/journey-strip/cotton-botanical.png"
                  alt=""
                  fill
                  sizes="240px"
                  className={styles.botanicalBgImg}
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 06 — OUR PLACE / BURGULA VILLAGE BANNER */}
      <section className={styles.villageBannerSection} aria-label="Our Place - Burgula Village">
        <Link href="/our-story" className={styles.villageBannerLink} aria-label="Discover Burgula - Our Story">
          <Image
            src="/images/burgula-aerial-banner.png"
            alt="Our Place — Burgula: Kapās se Kapda Tak, Ek Gaon Mein. From cotton to cloth within one village."
            width={1024}
            height={229}
            priority
            sizes="100vw"
            className={styles.villageAerialBannerImg}
          />
        </Link>
      </section>

      {/* SECTION 07 — THE INSTITUTION */}
      <section className={styles.institutionSection} aria-label="The Burgula Cotton Trust">
        <div className={styles.institutionGrid}>
          <div className={styles.institutionVisual} data-reveal="image">
            <Image
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=85"
              alt="Rural spinning shed facility and water infrastructure in Telangana"
              fill
              sizes="(max-width: 992px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
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

      {/* SECTION 08 — FEATURED EDITORIAL & BURGULA JOURNAL */}
      <section className={styles.editorialSection} aria-label="Editorial Stories and Burgula Journal">
        <div className={styles.editorialContainer}>
          {/* Top 3 Featured Cards */}
          <div className={styles.topFeaturedRow} data-reveal-group>
            {/* Card 1: Our Story */}
            <div className={styles.topFeaturedCard}>
              <div className={styles.topCardContent}>
                <span className={`${styles.topCardEyebrow} ${styles.eyebrowStory}`}>OUR STORY</span>
                <h3 className={styles.topCardHeading}>
                  A Textile Story<br />
                  Rooted in Burgula
                </h3>
                <p className={styles.topCardDesc}>
                  People, place and practice come together to build a living textile ecosystem in Telangana.
                </p>
                <div className={styles.topCardCtaWrapper}>
                  <Link href="/our-story" className={styles.topCardCtaBtn}>
                    <span>READ OUR STORY</span>
                    <span className={styles.topCardArrow} aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className={styles.topCardImgWrapper}>
                <Image
                  src="/images/editorial/our-story-weaver.png"
                  alt="Telangana woman artisan working at a traditional handloom"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.topCardImg}
                />
              </div>
            </div>

            {/* Card 2: The Trust */}
            <div className={styles.topFeaturedCard}>
              <div className={styles.topCardContent}>
                <span className={`${styles.topCardEyebrow} ${styles.eyebrowTrust}`}>THE TRUST</span>
                <h3 className={styles.topCardHeading}>
                  A Public Purpose<br />
                  Behind the Fabric
                </h3>
                <p className={styles.topCardDesc}>
                  Burgula Cotton Trust works towards rural development, education, skill building and sustainable livelihoods.
                </p>
                <div className={styles.topCardCtaWrapper}>
                  <Link href="/about" className={styles.topCardCtaBtn}>
                    <span>ABOUT THE TRUST</span>
                    <span className={styles.topCardArrow} aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className={styles.topCardImgWrapper}>
                <Image
                  src="/images/editorial/trust-village.png"
                  alt="Rural Telangana village house and heritage trees in Burgula"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.topCardImg}
                />
              </div>
            </div>

            {/* Card 3: B2B */}
            <div className={styles.topFeaturedCard}>
              <div className={styles.topCardContent}>
                <span className={`${styles.topCardEyebrow} ${styles.eyebrowB2b}`}>B2B</span>
                <h3 className={styles.topCardHeading}>
                  Cotton for Designers,<br />
                  Brands &amp; Makers
                </h3>
                <p className={styles.topCardDesc}>
                  Partner with us for high-quality handloom cotton fabrics, samples, large orders and custom development.
                </p>
                <div className={styles.topCardCtaWrapper}>
                  <Link href="/b2b" className={styles.topCardCtaBtn}>
                    <span>WORK WITH US</span>
                    <span className={styles.topCardArrow} aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className={styles.topCardImgWrapper}>
                <Image
                  src="/images/editorial/b2b-fabrics.png"
                  alt="Handloom cotton fabric swatches, bespoke samples, and yarn developments"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.topCardImg}
                />
              </div>
            </div>
          </div>

          {/* THE BURGULA JOURNAL Underneath */}
          <div className={styles.journalUnderneathArea}>
            {/* Journal Header */}
            <div className={styles.journalHeaderRow} data-reveal>
              <div className={styles.journalHeaderLeft}>
                <h3 className={styles.journalMainHeading}>THE BURGULA JOURNAL</h3>
                <p className={styles.journalSubtitle}>
                  Stories, people, place and ideas around cotton, yarn, weaving and contemporary textile practice.
                </p>
              </div>
              <div className={styles.journalHeaderRight}>
                <Link href="/journal" className={styles.viewAllStoriesLink}>
                  <span>VIEW ALL STORIES</span>
                  <span className={styles.viewAllArrow} aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Journal Row: 4 Cards + Quote Block */}
            <div className={styles.journalMainRow}>
              {/* 4 Cards Grid/Flex */}
              <div className={styles.journalCardsContainer} data-reveal-group>
                {/* Card 1 */}
                <Link href="/journal/kapas-aur-kora-reviving-village-centred-yarn-tradition" className={styles.journalMiniCard}>
                  <div className={styles.journalMiniImgWrap}>
                    <Image
                      src="/images/editorial/journal-cotton.png"
                      alt="Raw cotton bolls - The Story of Our Cotton"
                      fill
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className={styles.journalMiniImg}
                    />
                  </div>
                  <h4 className={styles.journalMiniTitle}>The Story of Our Cotton</h4>
                  <span className={styles.journalMiniCategory}>MATERIAL</span>
                </Link>

                {/* Card 2 */}
                <Link href="/journal" className={styles.journalMiniCard}>
                  <div className={styles.journalMiniImgWrap}>
                    <Image
                      src="/images/editorial/journal-weaving.png"
                      alt="Generational weaver hands working with handloom - Hands That Weave"
                      fill
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className={styles.journalMiniImg}
                    />
                  </div>
                  <h4 className={styles.journalMiniTitle}>Hands That Weave</h4>
                  <span className={styles.journalMiniCategory}>PEOPLE</span>
                </Link>

                {/* Card 3 */}
                <Link href="/journal/kapas-se-kapda-tak-philosophy-of-place" className={styles.journalMiniCard}>
                  <div className={styles.journalMiniImgWrap}>
                    <Image
                      src="/images/editorial/journal-landscape.png"
                      alt="Telangana boulders and rocky hill landscape - Burgula: A Living Landscape"
                      fill
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className={styles.journalMiniImg}
                    />
                  </div>
                  <h4 className={styles.journalMiniTitle}>Burgula: A Living Landscape</h4>
                  <span className={styles.journalMiniCategory}>PLACE</span>
                </Link>

                {/* Card 4 */}
                <Link href="/journal/natural-fibre-blends-hemp-silk-handloom-cotton" className={styles.journalMiniCard}>
                  <div className={styles.journalMiniImgWrap}>
                    <Image
                      src="/images/editorial/journal-fabric.png"
                      alt="Close-up macro texture of handloom cloth - Weave, Texture, Life"
                      fill
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className={styles.journalMiniImg}
                    />
                  </div>
                  <h4 className={styles.journalMiniTitle}>Weave, Texture, Life</h4>
                  <span className={styles.journalMiniCategory}>PROCESS</span>
                </Link>
              </div>

              {/* Quotation Block on the Right */}
              <div className={styles.quoteBlockWrapper} data-reveal="slide-right">
                <div className={styles.quoteDividerLine} aria-hidden="true" />
                <div className={styles.quoteContent}>
                  <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
                  <blockquote className={styles.quoteText}>
                    Cloth carries the story<br />
                    of a place, its people<br />
                    and their possibilities.
                  </blockquote>
                  <cite className={styles.quoteAuthor}>&mdash; BURGULA COTTON</cite>
                </div>
                <div className={styles.quoteBotanicalWrap} aria-hidden="true">
                  <Image
                    src="/images/editorial/quote-cotton-botanical.png"
                    alt=""
                    fill
                    sizes="180px"
                    className={styles.quoteBotanicalImg}
                  />
                </div>
              </div>
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
