import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { JsonLd, createBreadcrumbSchema } from '@/components/ui/JsonLd';
import styles from './page.module.css';

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

  return (
    <div
      className={styles.pageWrapper}
      style={{
        position: 'relative',
        isolation: 'isolate',
        zIndex: 1,
        backgroundColor: '#FAF7F2',
        backgroundImage: 'none',
      }}
    >
      <JsonLd data={breadcrumbs} />

      {/* 1. HERO SECTION: Asymmetric Editorial Split with Organic Curved Transition */}
      <section className={styles.heroSection} aria-label="Our Story: Burgula Village and Community">
        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            {/* Left Column: Narrative Content */}
            <div className={styles.heroContent}>
              <div className={styles.heroEyebrowRow}>
                <span className={styles.heroEyebrowDash} aria-hidden="true" />
                <span className={styles.heroEyebrow}>OUR STORY</span>
              </div>
              <h1 className={styles.heroHeading}>
                <span className={styles.heroHeadingNavy}>A village. A community.</span>
                <span className={styles.heroHeadingGold}>A continuing journey.</span>
              </h1>
              <div className={styles.heroBody}>
                <p className={styles.heroParagraph}>
                  The story of Burgula Cotton Trust begins not with a product, but with a concern for the development of a village and its people.
                </p>
                <p className={styles.heroParagraph}>
                  Burgula has historically been an agricultural community. The Trust&apos;s original note describes the challenges faced by rural households, particularly women and educated youth who had fewer opportunities to find employment locally.
                </p>
                <p className={styles.heroParagraph}>
                  This concern led community members to come together and form a Village Development Forum.
                </p>
                <p className={styles.heroParagraph}>
                  The Forum encouraged members of the family of late Sri Burgula Venkateshwar Rao, younger brother of Dr. Burgula Ramakrishna Rao, to undertake developmental activities in the village. These efforts eventually led to the establishment of the Burgula Cotton Trust.
                </p>
              </div>
              <div className={styles.heroBottomDash} aria-hidden="true" />
            </div>

            {/* Right Column: Aerial Village Visual with Organic Curved Accents */}
            <div className={styles.heroVisualCol}>
              <div className={styles.heroVisualWrap}>
                {/* Navy Backing Shape (Top-Left of Image) */}
                <div className={styles.heroNavyAccent} aria-hidden="true" />

                {/* Gold Backing Shape (Bottom-Right of Image) */}
                <div className={styles.heroGoldAccent} aria-hidden="true" />

                {/* Sweeping Organic Gold Curve SVG */}
                <svg
                  className={styles.heroOrganicCurveSvg}
                  viewBox="0 0 600 500"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 520,0 C 420,10 260,30 200,160 C 130,300 240,430 450,470 C 510,480 570,490 600,495"
                    stroke="#E7B234"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Delicate Cotton Botanical Line Watermark */}
                <svg
                  className={styles.heroBotanicalWatermark}
                  viewBox="0 0 200 240"
                  fill="none"
                  stroke="#E7B234"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M 100,230 C 95,190 90,140 110,95" />
                  <path d="M 102,175 C 115,160 135,155 145,160" />
                  <path d="M 94,130 C 75,120 60,128 50,135" />
                  <ellipse cx="115" cy="80" rx="22" ry="20" />
                  <path d="M 98,80 C 105,65 125,65 132,80" />
                  <path d="M 115,60 C 115,75 115,95 115,100" />
                  <path d="M 102,96 C 108,102 122,102 128,96" />
                  <path d="M 95,95 C 105,108 115,104 115,100 C 115,104 125,108 135,95" />
                  <ellipse cx="52" cy="145" rx="18" ry="16" />
                  <path d="M 38,145 C 44,132 60,132 66,145" />
                  <path d="M 52,129 C 52,141 52,157 52,161" />
                  <ellipse cx="152" cy="170" rx="16" ry="15" />
                  <path d="M 140,170 C 145,158 159,158 164,170" />
                  <path d="M 152,155 C 152,166 152,181 152,185" />
                </svg>

                {/* Main Burgula Aerial Photo */}
                <div className={styles.heroImageFrame}>
                  <Image
                    src="/images/images.jpeg"
                    alt="Burgula village aerial view, rural homes and surrounding community"
                    fill
                    priority
                    quality={90}
                    sizes="(max-width: 991px) 100vw, 55vw"
                    className={styles.heroImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VILLAGE COMMUNITY & HISTORICAL FOUNDATION SECTION */}
      <section className={styles.villageSection} aria-label="Development begins with the village">
        <div className={styles.villageContainer}>
          <div className={styles.villageGrid}>
            {/* Left Column: Narrative Content (~55%) */}
            <div className={styles.villageContentCol}>
              <div className={styles.villageEyebrowRow}>
                <span className={styles.villageEyebrowDash} aria-hidden="true" />
                <span className={styles.villageEyebrow}>OUR BEGINNINGS</span>
              </div>
              <h2 className={styles.villageTitle}>
                Development begins<br />with the village
              </h2>
              <div className={styles.villageBodyText}>
                <p className={styles.villagePara}>
                  The Trust&apos;s story is connected to a wider history of community-led development in Burgula. Earlier initiatives associated with the family and village included efforts towards a railway station, healthcare facilities, school infrastructure and educational support in surrounding habitations.
                </p>
                <p className={styles.villagePara}>
                  Village residents also contributed through shramadaan — voluntary community labour.
                </p>
                <p className={styles.villagePara}>
                  These efforts reflected a larger belief:
                </p>
                <div className={styles.villageHighlightQuote}>
                  <div className={styles.villageQuoteIconBadge} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.villageQuoteSvg}>
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <blockquote className={styles.villageHighlightQuoteText}>
                    &ldquo;Development becomes meaningful when communities participate in creating it.&rdquo;
                  </blockquote>
                </div>
                <p className={styles.villageFinalSentence}>
                  The Cotton Trust grew from this foundation.
                </p>
              </div>
              <div className={styles.villageBottomDash} aria-hidden="true" />
            </div>

            {/* Right Column: Large Documentary Photo with Navy & Gold Offset Shapes (~45%) */}
            <div className={styles.villageVisualCol}>
              <div className={styles.villageVisualWrap}>
                {/* Navy Offset Backing Shape (Top-Left) */}
                <div className={styles.villageNavyAccent} aria-hidden="true" />

                {/* Gold Offset Backing Shape (Bottom-Right) */}
                <div className={styles.villageGoldAccent} aria-hidden="true" />

                {/* Main Photo Frame */}
                <div className={styles.villageImageFrame}>
                  <Image
                    src="/images/village-community-tree.png"
                    alt="Community meeting under village tree in Burgula"
                    fill
                    sizes="(max-width: 991px) 100vw, 46vw"
                    quality={90}
                    className={styles.villageMainImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FROM AGRICULTURE TO A VILLAGE TEXTILE ECONOMY (TEXT LEFT, IMAGE RIGHT) */}
      <section className={styles.economySection} aria-label="From Agriculture to a Village Textile Economy">
        <div className={styles.economyContainer}>
          <div className={styles.economyGrid}>
            {/* Left Column: Narrative, Economic Principle & Opportunities (~55%) */}
            <div className={styles.economyContentCol}>
              <div className={styles.economyTopDash} aria-hidden="true" />
              <h2 className={styles.economyHeading}>
                <span className={styles.economyHeadingNavy}>From Agriculture to a</span>
                <span className={styles.economyHeadingGold}>Village Textile Economy</span>
              </h2>
              <div className={styles.economyBodyText}>
                <p className={styles.economyPara}>
                  The textile initiative was conceived as a way of creating local employment and retaining value within the village.
                </p>
                <p className={styles.economyPara}>
                  The original vision was ambitious: to bring different stages of textile production closer together - from cotton and spinning to weaving and cloth.
                </p>
                <p className={styles.economyPara}>
                  The Trust&apos;s earlier plans included local cotton cultivation using NPM practices, supplying cotton to a small-scale spinning unit and exploring further value addition through organic cultivation and natural dyes.
                </p>
                <p className={styles.economyPara}>
                  The underlying economic principle was straightforward:
                </p>
                <div className={styles.economyHighlightQuote}>
                  <div className={styles.economyQuoteIconBadge} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.economyQuoteSvg}>
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <blockquote className={styles.economyHighlightQuoteText}>
                    &ldquo;When more stages of production happen locally, more of the value created can remain within the local economy.&rdquo;
                  </blockquote>
                </div>
                <p className={styles.economyPara}>
                  This approach placed women and youth at the heart of the textile initiative &mdash; with opportunities in spinning, weaving, machine operation and other stages of production.
                </p>
              </div>
            </div>

            {/* Right Column: Photo of Hands Holding Raw Cotton Bolls with Layered Accents (~45%) */}
            <div className={styles.economyVisualCol}>
              <div className={styles.economyVisualWrap}>
                {/* Navy Offset Backing Shape (Top-Left) */}
                <div className={styles.economyNavyAccent} aria-hidden="true" />

                {/* Thin Gold Outline Accent (Top-Right) */}
                <div className={styles.economyGoldOutlineAccent} aria-hidden="true" />

                {/* Gold Offset Backing Shape (Bottom-Right) */}
                <div className={styles.economyGoldAccent} aria-hidden="true" />

                {/* Main Photo Frame */}
                <div className={styles.economyImageFrame}>
                  <Image
                    src="/images/cotton-hands.png"
                    alt="Hands holding raw harvested cotton bolls in Burgula"
                    fill
                    sizes="(max-width: 991px) 100vw, 46vw"
                    quality={90}
                    className={styles.economyMainImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE REVIVAL TODAY SECTION (IMAGE LEFT, TEXT RIGHT) */}
      <section className={styles.revivalSection} aria-label="The Revival Today">
        <div className={styles.revivalContainer}>
          <div className={styles.revivalGrid}>
            {/* Left Column: Photo of Weaver at Handloom with Layered Accents (~45%) */}
            <div className={styles.revivalVisualCol}>
              <div className={styles.revivalVisualWrap}>
                {/* Navy Offset Backing Shape (Top-Left) */}
                <div className={styles.revivalNavyAccent} aria-hidden="true" />

                {/* Sweeping Gold Arc Behind Image */}
                <svg
                  className={styles.revivalGoldArcSvg}
                  viewBox="0 0 300 300"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 50,280 C 10,180 80,40 220,20 C 270,12 290,40 295,80"
                    stroke="#DE9F35"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Gold Offset Backing Shape (Bottom-Right) */}
                <div className={styles.revivalGoldAccent} aria-hidden="true" />

                {/* Main Photo Frame */}
                <div className={styles.revivalImageFrame}>
                  <Image
                    src="/images/revival-loom.png"
                    alt="Traditional handloom weaving and warp threads in Burgula unit"
                    fill
                    sizes="(max-width: 991px) 100vw, 46vw"
                    quality={90}
                    className={styles.revivalMainImage}
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Inquiry Callout (~55%) */}
            <div className={styles.revivalContentCol}>
              <div className={styles.revivalTopDash} aria-hidden="true" />
              <h2 className={styles.revivalHeading}>
                <span className={styles.revivalHeadingNavy}>The Revival</span>{' '}
                <span className={styles.revivalHeadingGold}>Today</span>
              </h2>
              <div className={styles.revivalBodyText}>
                <p className={styles.revivalPara}>
                  The textile work in Burgula continues to evolve.
                </p>
                <p className={styles.revivalPara}>
                  In 2026, the Trust began a new phase of revival of its handloom unit, beginning on 1 March 2026. This phase brings renewed attention to cotton yarn production, fabric production, handloom development and sustainable economic opportunities.
                </p>
                <p className={styles.revivalPara}>
                  On 2 October 2026, the Trust marks this phase through the <strong>formal beginning of yarn and fabric production at the Burgula unit</strong>, alongside a public presentation of its ongoing handloom and rural livelihood initiatives.
                </p>
                <p className={styles.revivalPara}>
                  But revival, for us, does not mean simply recreating the past.
                </p>
                <p className={styles.revivalPara}>
                  It means understanding what existed, learning from the knowledge embedded in it, and asking:
                </p>
                <div className={styles.revivalHighlightBox}>
                  <blockquote className={styles.revivalHighlightText}>
                    &ldquo;What can this become today?&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FROM COTTON TO CLOTH, IN ONE VILLAGE */}
      <section className={styles.journeySection} aria-label="From Cotton to Cloth, in One Village">
        <div className={styles.journeyContainer}>
          {/* Header */}
          <div className={styles.journeyHeader}>
            <div className={styles.journeyTopDash} aria-hidden="true" />
            <h2 className={styles.journeyHeading}>
              <span className={styles.journeyHeadingNavy}>From Cotton to Cloth,</span>
              <br />
              <span className={styles.journeyHeadingGold}>in One Village</span>
            </h2>
            <p className={styles.journeySubtitle}>
              Our vision can be understood through a simple journey:
            </p>
          </div>

          {/* Main Content Grid: Horizontal Journey Track (Left) + Editorial Aside (Right) */}
          <div className={styles.journeyMainGrid}>
            {/* Left: Continuous 5-Stage Journey Track */}
            <div className={styles.journeyTrackWrapper}>
              {/* Continuous Flowing Thread Line (SVG) */}
              <svg
                className={styles.journeyThreadSvg}
                viewBox="0 0 1000 120"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 10,60 C 80,42 140,78 220,60 C 300,42 360,78 440,60 C 520,42 580,78 660,60 C 740,42 800,78 880,60 C 930,48 970,62 990,60"
                  stroke="#DE9F35"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>

              {/* 5 Stages with Arrow Badges */}
              <div className={styles.journeyStagesRow}>
                {/* Stage 1: COTTON */}
                <div className={styles.stageItem}>
                  <div className={styles.stageVisualWrapper}>
                    <div className={`${styles.stageBlob} ${styles.blobCotton}`} aria-hidden="true" />
                    <div className={styles.stageCircleFrame}>
                      <Image
                        src="/images/c1.png"
                        alt="Cotton"
                        fill
                        sizes="130px"
                        className={styles.stageImage}
                      />
                    </div>
                  </div>
                  <span className={styles.stageLabel}>COTTON</span>
                  <span className={styles.stageLabelDash} aria-hidden="true" />
                </div>

                {/* Arrow 1 -> 2 */}
                <div className={styles.stageArrowBadge} aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={styles.stageArrowSvg}>
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </div>

                {/* Stage 2: YARN */}
                <div className={styles.stageItem}>
                  <div className={styles.stageVisualWrapper}>
                    <div className={`${styles.stageBlob} ${styles.blobYarn}`} aria-hidden="true" />
                    <div className={styles.stageCircleFrame}>
                      <Image
                        src="/images/c2.png"
                        alt="Yarn"
                        fill
                        sizes="130px"
                        className={styles.stageImage}
                      />
                    </div>
                  </div>
                  <span className={styles.stageLabel}>YARN</span>
                  <span className={styles.stageLabelDash} aria-hidden="true" />
                </div>

                {/* Arrow 2 -> 3 */}
                <div className={styles.stageArrowBadge} aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={styles.stageArrowSvg}>
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </div>

                {/* Stage 3: WEAVING */}
                <div className={styles.stageItem}>
                  <div className={styles.stageVisualWrapper}>
                    <div className={`${styles.stageBlob} ${styles.blobWeaving}`} aria-hidden="true" />
                    <div className={styles.stageCircleFrame}>
                      <Image
                        src="/images/c3.png"
                        alt="Weaving"
                        fill
                        sizes="130px"
                        className={styles.stageImage}
                      />
                    </div>
                  </div>
                  <span className={styles.stageLabel}>WEAVING</span>
                  <span className={styles.stageLabelDash} aria-hidden="true" />
                </div>

                {/* Arrow 3 -> 4 */}
                <div className={styles.stageArrowBadge} aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={styles.stageArrowSvg}>
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </div>

                {/* Stage 4: FABRIC */}
                <div className={styles.stageItem}>
                  <div className={styles.stageVisualWrapper}>
                    <div className={`${styles.stageBlob} ${styles.blobFabric}`} aria-hidden="true" />
                    <div className={styles.stageCircleFrame}>
                      <Image
                        src="/images/c4.png"
                        alt="Fabric"
                        fill
                        sizes="130px"
                        className={styles.stageImage}
                      />
                    </div>
                  </div>
                  <span className={styles.stageLabel}>FABRIC</span>
                  <span className={styles.stageLabelDash} aria-hidden="true" />
                </div>

                {/* Arrow 4 -> 5 */}
                <div className={styles.stageArrowBadge} aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={styles.stageArrowSvg}>
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </div>

                {/* Stage 5: LIVELIHOOD */}
                <div className={styles.stageItem}>
                  <div className={styles.stageVisualWrapper}>
                    <div className={`${styles.stageBlob} ${styles.blobLivelihood}`} aria-hidden="true" />
                    <div className={styles.stageCircleFrame}>
                      <Image
                        src="/images/c5.png"
                        alt="Livelihood"
                        fill
                        sizes="130px"
                        className={styles.stageImage}
                      />
                    </div>
                  </div>
                  <span className={styles.stageLabel}>LIVELIHOOD</span>
                  <span className={styles.stageLabelDash} aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Right: Supporting Editorial Narrative Block */}
            <div className={styles.journeyAside}>
              <div className={styles.journeyAsideBorder} aria-hidden="true" />
              <div className={styles.journeyAsideContent}>
                <p className={styles.journeyAsideText}>
                  The aim is to strengthen the connections between these stages rather than treating them as isolated activities.
                </p>
                <p className={styles.journeyAsideText}>
                  This includes exploring different yarns and fabrics, strengthening weaving networks, developing skills, documenting knowledge and creating opportunities for contemporary applications of handloom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOOKING AHEAD & OUR BELIEF */}
      <section className={styles.futureSection} aria-label="Looking Ahead & Our Belief">
        <div className={styles.futureContainer}>
          <div className={styles.futureGrid}>
            {/* Left Column: Looking Ahead Roadmap */}
            <div className={styles.futureColLeft}>
              <div className={styles.aheadTopDash} aria-hidden="true" />
              <h2 className={styles.aheadHeading}>
                <span className={styles.aheadHeadingNavy}>Looking</span>{' '}
                <span className={styles.aheadHeadingGold}>Ahead</span>
              </h2>
              <div className={styles.aheadLeadText}>
                <p className={styles.aheadLead}>
                  The future of Burgula Cotton Trust lies in combining continuity with experimentation.
                </p>
                <p className={styles.aheadLead}>
                  Alongside strengthening existing handloom practices, we see possibilities in:
                </p>
              </div>

              {/* 9 Possibilities Roadmap with Connecting Golden Thread Line */}
              <div className={styles.aheadRoadmapWrap}>
                {/* Row 1: 5 Possibilities */}
                <div className={styles.aheadRowWrapper}>
                  {/* Wave Thread for Row 1 */}
                  <svg
                    className={styles.aheadThreadSvgRow1}
                    viewBox="0 0 600 60"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 10,30 C 70,14 90,46 150,30 C 210,14 230,46 290,30 C 350,14 370,46 430,30 C 490,14 530,46 590,30"
                      stroke="#DE9F35"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className={styles.aheadRow5}>
                    {/* 1. new cotton yarns and fabric development */}
                    <div className={styles.aheadCard}>
                      <div className={`${styles.aheadIconBadge} ${styles.badgeYarn}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#103F5F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={styles.aheadIconSvg}>
                          <path d="M7 3h10M7 21h10" />
                          <path d="M8 3v18M16 3v18" />
                          <path d="M8 7l8 3M8 11l8 3M8 15l8 3" />
                        </svg>
                      </div>
                      <span className={styles.aheadCardLabel}>new cotton yarns and fabric development</span>
                    </div>

                    {/* 2. natural and locally relevant fibres */}
                    <div className={styles.aheadCard}>
                      <div className={`${styles.aheadIconBadge} ${styles.badgeLeaf}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#103F5F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={styles.aheadIconSvg}>
                          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c0 2.5-.5 4.5-1.5 8.5A7 7 0 0 1 11 20z" />
                          <path d="M2 21c0-3 1.5-5.5 4-7l6-6" />
                        </svg>
                      </div>
                      <span className={styles.aheadCardLabel}>natural and locally relevant fibres</span>
                    </div>

                    {/* 3. new weaving and pattern possibilities */}
                    <div className={styles.aheadCard}>
                      <div className={`${styles.aheadIconBadge} ${styles.badgeWeave}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#103F5F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={styles.aheadIconSvg}>
                          <path d="M4 8h16M4 16h16M8 4v16M16 4v16" />
                          <rect x="7" y="7" width="10" height="10" rx="1" strokeWidth="1.2" strokeDasharray="2 2" />
                        </svg>
                      </div>
                      <span className={styles.aheadCardLabel}>new weaving and pattern possibilities</span>
                    </div>

                    {/* 4. collaborations with designers and artists */}
                    <div className={styles.aheadCard}>
                      <div className={`${styles.aheadIconBadge} ${styles.badgeCollab}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#103F5F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={styles.aheadIconSvg}>
                          <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-1.7 1.7" />
                          <path d="m13 7-2-2a1 1 0 0 0-1.4 0L5.3 9.3a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l1.7-1.7" />
                          <path d="m9 11 4 4" />
                          <path d="m19 13 2-2M5 11l-2 2" />
                        </svg>
                      </div>
                      <span className={styles.aheadCardLabel}>collaborations with designers and artists</span>
                    </div>

                    {/* 5. textile research and documentation */}
                    <div className={styles.aheadCard}>
                      <div className={`${styles.aheadIconBadge} ${styles.badgeResearch}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#103F5F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={styles.aheadIconSvg}>
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <path d="M14 2v6h6M16 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM15 15l3 3" />
                        </svg>
                      </div>
                      <span className={styles.aheadCardLabel}>textile research and documentation</span>
                    </div>
                  </div>
                </div>

                {/* Row 2: 4 Possibilities */}
                <div className={styles.aheadRowWrapper}>
                  {/* Wave Thread for Row 2 */}
                  <svg
                    className={styles.aheadThreadSvgRow2}
                    viewBox="0 0 500 60"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 20,30 C 80,14 100,46 170,30 C 240,14 260,46 330,30 C 400,14 440,46 480,30"
                      stroke="#DE9F35"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className={styles.aheadRow4}>
                    {/* 6. student and institutional engagement */}
                    <div className={styles.aheadCard}>
                      <div className={`${styles.aheadIconBadge} ${styles.badgeStudent}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#103F5F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={styles.aheadIconSvg}>
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>
                      <span className={styles.aheadCardLabel}>student and institutional engagement</span>
                    </div>

                    {/* 7. workshops and knowledge exchange */}
                    <div className={styles.aheadCard}>
                      <div className={`${styles.aheadIconBadge} ${styles.badgeWorkshop}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#103F5F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={styles.aheadIconSvg}>
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <span className={styles.aheadCardLabel}>workshops and knowledge exchange</span>
                    </div>

                    {/* 8. exhibitions, films and visual archives */}
                    <div className={styles.aheadCard}>
                      <div className={`${styles.aheadIconBadge} ${styles.badgeExhibition}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#103F5F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={styles.aheadIconSvg}>
                          <rect width="18" height="18" x="3" y="3" rx="2" />
                          <circle cx="9" cy="9" r="2" />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                      </div>
                      <span className={styles.aheadCardLabel}>exhibitions, films and visual archives</span>
                    </div>

                    {/* 9. new livelihood and enterprise opportunities */}
                    <div className={styles.aheadCard}>
                      <div className={`${styles.aheadIconBadge} ${styles.badgeLivelihood}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#103F5F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={styles.aheadIconSvg}>
                          <path d="M3 3v18h18" />
                          <path d="m19 9-5 5-4-4-3 3" />
                          <path d="M14 9h5v5" />
                        </svg>
                      </div>
                      <span className={styles.aheadCardLabel}>new livelihood and enterprise opportunities</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Closing Statement */}
              <p className={styles.aheadPartnershipText}>
                The Trust&apos;s original vision also recognised the importance of partnerships with other organisations to strengthen the social and economic ecosystem around the textile initiative.
              </p>
            </div>

            {/* Right Column: Our Belief & Handloom Visual */}
            <div className={styles.futureColRight}>
              <div className={styles.aheadTopDash} aria-hidden="true" />
              <h2 className={styles.aheadHeading}>
                <span className={styles.aheadHeadingNavy}>Our</span>{' '}
                <span className={styles.aheadHeadingGold}>Belief</span>
              </h2>

              {/* Subgrid: Belief Text (Left) + Loom Visual (Right) */}
              <div className={styles.beliefSubgrid}>
                <div className={styles.beliefTextWrap}>
                  <p className={styles.beliefParagraph}>
                    We believe that heritage is not something that belongs only in the past. It can be a foundation for the future.
                  </p>
                  <p className={styles.beliefParagraph}>
                    A village can be a place of production, learning, creativity and enterprise.
                  </p>
                  <p className={styles.beliefParagraph}>
                    A loom can carry knowledge across generations.
                  </p>
                  <p className={styles.beliefParagraph}>
                    Cotton can become yarn.
                  </p>
                  <p className={styles.beliefParagraph}>
                    Yarn can become cloth.
                  </p>
                  <p className={styles.beliefParagraph}>
                    And cloth can become livelihood.
                  </p>
                </div>

                {/* Handloom Photo with Layered Offset Accents */}
                <div className={styles.beliefVisualCol}>
                  <div className={styles.beliefVisualWrap}>
                    {/* Navy Offset Backing Shape */}
                    <div className={styles.beliefNavyAccent} aria-hidden="true" />

                    {/* Sweeping Gold Arc Behind Image */}
                    <svg
                      className={styles.beliefGoldArcSvg}
                      viewBox="0 0 240 240"
                      fill="none"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M 30,220 C 10,140 60,30 170,16 C 210,10 230,30 235,60"
                        stroke="#DE9F35"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* Gold Offset Backing Shape */}
                    <div className={styles.beliefGoldAccent} aria-hidden="true" />

                    {/* Main Photo Frame */}
                    <div className={styles.beliefImageFrame}>
                      <Image
                        src="/images/intut2.png"
                        alt="Burgula handloom unit loom frame and woven textile"
                        fill
                        sizes="(max-width: 991px) 100vw, 24vw"
                        quality={90}
                        className={styles.beliefMainImage}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Manifesto Callout Box */}
              <div className={styles.communityManifestoBox}>
                <h3 className={styles.communityManifestoText}>
                  From Cotton to Community.
                </h3>
              </div>

              {/* Trust Signature */}
              <div className={styles.trustSignatureWrap}>
                <span className={styles.trustSignatureName}>Burgula Cotton Trust</span>
                <span className={styles.trustSignatureTagline}>Handloom &bull; Heritage &bull; Sustainable Livelihoods</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
