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
    <div className={styles.pageWrapper}>
      <JsonLd data={breadcrumbs} />

      {/* 1. HERO SECTION: Split layout matching reference design */}
      <section className={styles.heroSection} aria-label="Our Story: Burgula Village and Community">
        <div className={styles.heroGrid}>
          {/* Left Column: Narrative Content */}
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrowRow}>
              <span className={styles.heroEyebrowDash} aria-hidden="true" />
              <span className={styles.heroEyebrow}>OUR STORY</span>
            </div>
            <h1 className={styles.heroHeading}>
              A village. A community.<br />
              A continuing journey.
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
          </div>

          {/* Right Column: Village Landscape Visual */}
          <div
            className={styles.heroVisual}
            style={{ position: 'relative', width: '100%', minHeight: '340px', overflow: 'hidden' }}
          >
            <div className={styles.heroVisualFade} aria-hidden="true" />
            <Image
              src="/images/images.jpeg"
              alt="Burgula village aerial view, rural homes and surrounding community"
              fill
              priority
              sizes="(max-width: 991px) 100vw, 48vw"
              className={styles.heroImg}
            />
          </div>
        </div>
      </section>

      {/* 2. VILLAGE COMMUNITY & HISTORICAL FOUNDATION SECTION */}
      <section className={styles.villageSection} aria-label="Development begins with the village">
        <div className="container">
          <div className={styles.villageGrid}>
            {/* Left Column: Historical Photo of Villagers Under Banyan Tree */}
            <div className={styles.villageVisualCol}>
              <div
                className={styles.villageImageWrapper}
                style={{ position: 'relative', width: '100%', aspectRatio: '351/206', minHeight: '220px', overflow: 'hidden' }}
              >
                <Image
                  src="/images/village-community-tree.png"
                  alt="Community meeting under village tree in Burgula"
                  fill
                  sizes="(max-width: 991px) 100vw, 45vw"
                  className={styles.villageImage}
                />
              </div>
            </div>

            {/* Right Column: Narrative & Community Quote */}
            <div className={styles.villageContentCol}>
              <div className={styles.villageDash} aria-hidden="true" />
              <h2 className={styles.villageHeading}>
                Development begins with the village
              </h2>
              <div className={styles.villageBody}>
                <p className={styles.villageParagraph}>
                  The Trust&apos;s story is connected to a wider history of community-led development in Burgula. Earlier initiatives associated with the family and village included efforts towards a railway station, healthcare facilities, school infrastructure and educational support in surrounding habitations.
                </p>
                <p className={styles.villageParagraph}>
                  Village residents also contributed through shramadaan — voluntary community labour.
                </p>
                <p className={styles.villageParagraph}>
                  These efforts reflected a larger belief:
                </p>
                <div className={styles.villageQuoteBox}>
                  <blockquote className={styles.villageQuoteText}>
                    &ldquo;Development becomes meaningful when communities participate in creating it.&rdquo;
                  </blockquote>
                </div>
                <p className={styles.villageParagraph}>
                  The Cotton Trust grew from this foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FROM AGRICULTURE TO A VILLAGE TEXTILE ECONOMY (TEXT LEFT, IMAGE RIGHT) */}
      <section className={styles.economySection} aria-label="From Agriculture to a Village Textile Economy">
        <div className="container">
          <div className={styles.economyGrid}>
            {/* Left Column: Narrative, Economic Principle & Opportunities */}
            <div className={styles.economyContentCol}>
              <div className={styles.villageDash} aria-hidden="true" />
              <h2 className={styles.villageHeading}>
                From Agriculture to a Village Textile Economy
              </h2>
              <div className={styles.villageBody}>
                <p className={styles.villageParagraph}>
                  The textile initiative was conceived as a way of creating local employment and retaining value within the village.
                </p>
                <p className={styles.villageParagraph}>
                  The original vision was ambitious: to bring different stages of textile production closer together - from cotton and spinning to weaving and cloth.
                </p>
                <p className={styles.villageParagraph}>
                  The Trust&apos;s earlier plans included local cotton cultivation using NPM practices, supplying cotton to a small-scale spinning unit and exploring further value addition through organic cultivation and natural dyes.
                </p>
                <p className={styles.villageParagraph}>
                  The underlying economic principle was straightforward:
                </p>
                <div className={styles.villageQuoteBox}>
                  <blockquote className={styles.villageQuoteText}>
                    &ldquo;When more stages of production happen locally, more of the value created can remain within the local economy.&rdquo;
                  </blockquote>
                </div>
                <p className={styles.villageParagraph}>
                  This approach placed women and youth at the heart of the textile initiative &mdash; with opportunities in spinning, weaving, machine operation and other stages of production.
                </p>
              </div>
            </div>

            {/* Right Column: Photo of Hands Holding Raw Cotton Bolls */}
            <div className={styles.economyVisualCol}>
              <div
                className={styles.economyImageWrapper}
                style={{ position: 'relative', width: '100%', aspectRatio: '388/211', minHeight: '220px', overflow: 'hidden' }}
              >
                <Image
                  src="/images/cotton-hands.png"
                  alt="Hands holding raw harvested cotton bolls in Burgula"
                  fill
                  sizes="(max-width: 991px) 100vw, 45vw"
                  className={styles.villageImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE REVIVAL TODAY SECTION (IMAGE LEFT, TEXT RIGHT) */}
      <section className={styles.revivalSection} aria-label="The Revival Today">
        <div className="container">
          <div className={styles.revivalGrid}>
            {/* Left Column: Photo of Weaver at Handloom */}
            <div className={styles.revivalVisualCol}>
              <div
                className={styles.revivalImageWrapper}
                style={{ position: 'relative', width: '100%', aspectRatio: '378/198', minHeight: '220px', overflow: 'hidden' }}
              >
                <Image
                  src="/images/revival-loom.png"
                  alt="Traditional handloom weaving and warp threads in Burgula unit"
                  fill
                  sizes="(max-width: 991px) 100vw, 45vw"
                  className={styles.villageImage}
                />
              </div>
            </div>

            {/* Right Column: Narrative & Inquiry Callout */}
            <div className={styles.revivalContentCol}>
              <div className={styles.villageDash} aria-hidden="true" />
              <h2 className={styles.villageHeading}>
                The Revival Today
              </h2>
              <div className={styles.villageBody}>
                <p className={styles.villageParagraph}>
                  The textile work in Burgula continues to evolve.
                </p>
                <p className={styles.villageParagraph}>
                  In 2026, the Trust began a new phase of revival of its handloom unit, beginning on 1 March 2026. This phase brings renewed attention to cotton yarn production, fabric production, handloom development and sustainable economic opportunities.
                </p>
                <p className={styles.villageParagraph}>
                  On 2 October 2026, the Trust marks this phase through the <strong>formal beginning of yarn and fabric production at the Burgula unit</strong>, alongside a public presentation of its ongoing handloom and rural livelihood initiatives.
                </p>
                <p className={styles.villageParagraph}>
                  But revival, for us, does not mean simply recreating the past.
                </p>
                <p className={styles.villageParagraph}>
                  It means understanding what existed, learning from the knowledge embedded in it, and asking:
                </p>
                <div className={styles.villageQuoteBox}>
                  <p className={styles.revivalQuestionText}>
                    What can this become today?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FROM COTTON TO CLOTH, IN ONE VILLAGE & LOOKING AHEAD */}
      <section className={styles.journeySection} aria-label="From Cotton to Cloth, in One Village">
        <div className="container">
          {/* Header */}
          <div className={styles.journeyHeader}>
            <h2 className={styles.journeyHeading}>
              From Cotton to Cloth, in One Village
            </h2>
            <p className={styles.journeySubtitle}>
              Our vision can be understood through a simple journey:
            </p>
          </div>

          {/* Process Flow & Narrative Row */}
          <div className={styles.journeyFlowRow}>
            {/* 5-Step Visual Flow */}
            <div className={styles.journeySteps}>
              <div className={styles.stepItem}>
                <div
                  className={styles.stepCircle}
                  style={{ position: 'relative', width: '64px', height: '64px', minWidth: '64px', minHeight: '64px', borderRadius: '50%', overflow: 'hidden' }}
                >
                  <Image
                    src="/images/step-cotton.png"
                    alt="Cotton boll harvest"
                    fill
                    sizes="80px"
                    className={styles.stepImage}
                  />
                </div>
                <span className={styles.stepLabel}>COTTON</span>
              </div>

              <span className={styles.stepArrow} aria-hidden="true">&rarr;</span>

              <div className={styles.stepItem}>
                <div
                  className={styles.stepCircle}
                  style={{ position: 'relative', width: '64px', height: '64px', minWidth: '64px', minHeight: '64px', borderRadius: '50%', overflow: 'hidden' }}
                >
                  <Image
                    src="/images/step-yarn.png"
                    alt="Cotton yarn spool"
                    fill
                    sizes="80px"
                    className={styles.stepImage}
                  />
                </div>
                <span className={styles.stepLabel}>YARN</span>
              </div>

              <span className={styles.stepArrow} aria-hidden="true">&rarr;</span>

              <div className={styles.stepItem}>
                <div
                  className={styles.stepCircle}
                  style={{ position: 'relative', width: '64px', height: '64px', minWidth: '64px', minHeight: '64px', borderRadius: '50%', overflow: 'hidden' }}
                >
                  <Image
                    src="/images/step-weaving.png"
                    alt="Handloom weaving"
                    fill
                    sizes="80px"
                    className={styles.stepImage}
                  />
                </div>
                <span className={styles.stepLabel}>WEAVING</span>
              </div>

              <span className={styles.stepArrow} aria-hidden="true">&rarr;</span>

              <div className={styles.stepItem}>
                <div
                  className={styles.stepCircle}
                  style={{ position: 'relative', width: '64px', height: '64px', minWidth: '64px', minHeight: '64px', borderRadius: '50%', overflow: 'hidden' }}
                >
                  <Image
                    src="/images/step-fabric.png"
                    alt="Woven cotton fabric"
                    fill
                    sizes="80px"
                    className={styles.stepImage}
                  />
                </div>
                <span className={styles.stepLabel}>FABRIC</span>
              </div>

              <span className={styles.stepArrow} aria-hidden="true">&rarr;</span>

              <div className={styles.stepItem}>
                <div
                  className={styles.stepCircle}
                  style={{ position: 'relative', width: '64px', height: '64px', minWidth: '64px', minHeight: '64px', borderRadius: '50%', overflow: 'hidden' }}
                >
                  <Image
                    src="/images/step-livelihood.png"
                    alt="Community livelihood hands"
                    fill
                    sizes="80px"
                    className={styles.stepImage}
                  />
                </div>
                <span className={styles.stepLabel}>LIVELIHOOD</span>
              </div>
            </div>

            {/* Right Aside Statement */}
            <div className={styles.journeyAside}>
              <p className={styles.journeyAsideText}>
                The aim is to strengthen the connections between these stages rather than treating them as isolated activities.
              </p>
              <p className={styles.journeyAsideText}>
                This includes exploring different yarns and fabrics, strengthening weaving networks, developing skills, documenting knowledge and creating opportunities for contemporary applications of handloom.
              </p>
            </div>
          </div>

          {/* 2-Column Grid: Looking Ahead & Our Belief */}
          <div className={styles.futureGrid}>
            {/* Left Column: Looking Ahead */}
            <div className={styles.futureCol}>
              <h3 className={styles.futureHeading}>Looking Ahead</h3>
              <p className={styles.futureLead}>
                The future of Burgula Cotton Trust lies in combining continuity with experimentation. Alongside strengthening existing handloom practices, we see possibilities in:
              </p>
              <ul className={styles.futureList}>
                <li>new cotton yarns and fabric development</li>
                <li>natural and locally relevant fibres</li>
                <li>new weaving and pattern possibilities</li>
                <li>collaborations with designers and artists</li>
                <li>textile research and documentation</li>
                <li>student and institutional engagement</li>
                <li>workshops and knowledge exchange</li>
                <li>exhibitions, films and visual archives</li>
                <li>new livelihood and enterprise opportunities</li>
              </ul>
              <p className={styles.futureNote}>
                The Trust&apos;s original vision also recognised the importance of partnerships with other organisations to strengthen the social and economic ecosystem around the textile initiative.
              </p>
            </div>

            {/* Right Column: Our Belief */}
            <div className={styles.futureCol}>
              <h3 className={styles.futureHeading}>Our Belief</h3>
              <div className={styles.beliefGroup}>
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

              <div className={styles.communityStatement}>
                <h4 className={styles.communityStatementText}>
                  From Cotton to Community.
                </h4>
              </div>

              <div className={styles.trustSignature}>
                <span className={styles.trustName}>Burgula Cotton Trust</span>
                <span className={styles.trustTagline}>Handloom &bull; Heritage &bull; Sustainable Livelihoods</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
