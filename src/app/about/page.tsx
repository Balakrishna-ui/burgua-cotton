import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Users, BookOpen, Leaf, Handshake } from 'lucide-react';
import { JsonLd, createOrganizationSchema, createBreadcrumbSchema } from '@/components/ui/JsonLd';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us | Burgula Cotton Trust',
  description:
    'Burgula Cotton Trust is a community-oriented organisation working to strengthen handloom, cotton-based textile production and sustainable rural livelihoods in Telangana.',
};

export default function AboutPage() {
  const orgSchema = createOrganizationSchema();
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', item: 'https://burgulacotton.com' },
    { name: 'About Us', item: 'https://burgulacotton.com/about' },
  ]);

  return (
    <div className={styles.pageWrapper}>
      <JsonLd data={orgSchema} />
      <JsonLd data={breadcrumbs} />

      {/* ====================================================================
          1. ABOUT US HERO SECTION
          ==================================================================== */}
      <section className={styles.heroSection} aria-label="About Burgula Cotton Trust">
        <div className={styles.heroGrid}>
          {/* Left Column: Heading & Tagline */}
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>ABOUT US</span>
            <h1 className={styles.heroHeading}>Burgula Cotton Trust</h1>
            <p className={styles.heroSubheading}>From Cotton to Community</p>
            <div className={styles.heroDivider} aria-hidden="true" />
            <div className={styles.heroTaglineRow}>
              <span>People</span>
              <span className={styles.heroTaglineSep}>|</span>
              <span>Handloom</span>
              <span className={styles.heroTaglineSep}>|</span>
              <span>Livelihoods</span>
              <span className={styles.heroTaglineSep}>|</span>
              <span>A Stronger Tomorrow</span>
            </div>
          </div>

          {/* Right Column Spacer */}
          <div className={styles.heroVisual} aria-hidden="true" />
        </div>
      </section>

      {/* ====================================================================
          2. OUR STORY SECTION
          ==================================================================== */}
      <section className={styles.storySection} aria-label="Our Story">
        <div className="container">
          <div className={styles.storyGrid}>
            {/* Left Narrative Column */}
            <div className={styles.storyContent}>
              <span className={styles.storyEyebrow}>OUR STORY</span>
              <h2 className={styles.storyHeading}>
                A Community Rooted<br />
                in Purpose
              </h2>
              <p className={styles.storyParagraph}>
                Burgula Cotton Trust is a community-oriented organisation working to
                strengthen handloom, cotton-based textile production and sustainable
                rural livelihoods in and around Burgula, Telangana.
              </p>
              <p className={styles.storyParagraph}>
                Our work is rooted in a simple idea: when production, knowledge and value
                remain connected to the communities that sustain them, textiles can become
                more than products – they can become a means of creating livelihoods, skills
                and local economic opportunity.
              </p>
              <p className={styles.storyParagraph}>
                Based in Burgula village, the Trust works towards rebuilding a connected
                textile ecosystem – bringing together cotton, yarn, weaving, skills, people and
                local enterprise.
              </p>
              <p className={styles.storyParagraph}>
                Our present work builds on a longer history of community development in
                Burgula, where local leaders, community members and the family of
                Sri Burgula Venkateshwar Rao came together around the needs and
                opportunities of the village. This led to the establishment of the Burgula
                Cotton Trust, with an emphasis on women, youth, education, rural employment
                and sustainable local development.
              </p>
              <div className={styles.storyBtnWrapper}>
                <Link href="/our-story" className={styles.storyBtn}>
                  <span>OUR STORY</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Column: Weaver at Loom */}
            <div className={styles.storyVisual}>
              <Image
                src="/images/hero-weaver.png"
                alt="Telangana handloom weaver working at traditional pit-loom"
                fill
                sizes="(max-width: 992px) 100vw, 50vw"
                className={styles.storyImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. WHAT WE DO SECTION
          ==================================================================== */}
      <section className={styles.whatWeDoSection} aria-label="What We Do">
        <div className="container">
          {/* Header Row */}
          <div className={styles.whatWeDoHeaderRow}>
            <div className={styles.whatWeDoTitleCol}>
              <span className={styles.whatWeDoEyebrow}>WHAT WE DO</span>
              <h2 className={styles.whatWeDoHeading}>
                Working Together<br />
                for a Stronger Tomorrow
              </h2>
            </div>
            <p className={styles.whatWeDoIntroText}>
              We work across the textile value chain and the wider community, creating opportunities
              for people, skills and local enterprise.
            </p>
          </div>

          {/* 6 Cards Grid */}
          <div className={styles.whatWeDoCardsGrid}>
            {/* Card 1: Cotton & Yarn */}
            <div className={styles.whatWeDoCard}>
              <div className={styles.whatWeDoCardIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9z" />
                  <path d="M12 8v8" />
                  <path d="m8.5 10.5 7 3" />
                  <path d="m8.5 13.5 7-3" />
                </svg>
              </div>
              <h3 className={styles.whatWeDoCardTitle}>Cotton &amp; Yarn</h3>
              <p className={styles.whatWeDoCardDesc}>
                Strengthening local cotton and yarn production with micro-scale yarn
                production, yarn development and fabric production.
              </p>
            </div>

            {/* Card 2: Handloom Development */}
            <div className={styles.whatWeDoCard}>
              <div className={styles.whatWeDoCardIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M7 9v12" />
                  <path d="M11 9v12" />
                  <path d="M15 9v12" />
                  <path d="M19 9v12" />
                </svg>
              </div>
              <h3 className={styles.whatWeDoCardTitle}>Handloom Development</h3>
              <p className={styles.whatWeDoCardDesc}>
                Supporting handloom as a living livelihood system — connecting yarn, weaving,
                workers, weavers and local production networks.
              </p>
            </div>

            {/* Card 3: Skills & Livelihoods */}
            <div className={styles.whatWeDoCard}>
              <div className={styles.whatWeDoCardIcon}>
                <Users size={30} strokeWidth={1.6} aria-hidden="true" />
              </div>
              <h3 className={styles.whatWeDoCardTitle}>Skills &amp; Livelihoods</h3>
              <p className={styles.whatWeDoCardDesc}>
                Creating economic opportunities for women, youth, weavers, artisans and rural
                communities.
              </p>
            </div>

            {/* Card 4: Knowledge & Training */}
            <div className={styles.whatWeDoCard}>
              <div className={styles.whatWeDoCardIcon}>
                <BookOpen size={30} strokeWidth={1.6} aria-hidden="true" />
              </div>
              <h3 className={styles.whatWeDoCardTitle}>Knowledge &amp; Training</h3>
              <p className={styles.whatWeDoCardDesc}>
                Facilitating training, knowledge exchange, workshops, student engagement and
                interaction between traditional practitioners and new learners.
              </p>
            </div>

            {/* Card 5: Community Development */}
            <div className={styles.whatWeDoCard}>
              <div className={styles.whatWeDoCardIcon}>
                <Leaf size={30} strokeWidth={1.6} aria-hidden="true" />
              </div>
              <h3 className={styles.whatWeDoCardTitle}>Community Development</h3>
              <p className={styles.whatWeDoCardDesc}>
                Working towards education, children&apos;s welfare, youth resources and community
                support systems for long-term village development.
              </p>
            </div>

            {/* Card 6: Collaboration */}
            <div className={styles.whatWeDoCard}>
              <div className={styles.whatWeDoCardIcon}>
                <Handshake size={30} strokeWidth={1.6} aria-hidden="true" />
              </div>
              <h3 className={styles.whatWeDoCardTitle}>Collaboration</h3>
              <p className={styles.whatWeDoCardDesc}>
                Partnering with weavers, farmers, designers, researchers, institutions and
                organisations to explore new possibilities while keeping local knowledge at the centre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4 & 5. DUAL ROW: OUR APPROACH & OUR VISION (SIDE-BY-SIDE 50/50)
          ==================================================================== */}
      <section className={styles.approachVisionSection} aria-label="Our Approach and Vision">
        <div className={styles.approachVisionGrid}>
          {/* Left Panel: OUR APPROACH (Background image: intut2.png) */}
          <div className={styles.approachCol}>
            <div className={styles.approachInner}>
              <span className={styles.approachEyebrow}>OUR APPROACH</span>
              <h2 className={styles.approachHeading}>
                Handloom is not only a fabric.
              </h2>
              <p className={styles.approachSubheading}>
                It is a relationship between material, labour, knowledge, technology, land and community.
              </p>

              {/* 5-Step Process Flow */}
              <div className={styles.processStepsRow}>
                {/* Step 1: Cotton */}
                <div className={styles.processStepItem}>
                  <div className={styles.processCircle}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="8" />
                      <path d="M12 8v8" />
                      <path d="m8.5 10.5 7 3" />
                    </svg>
                  </div>
                  <span className={styles.processStepLabel}>Cotton</span>
                </div>

                <span className={styles.processArrow} aria-hidden="true">&rarr;</span>

                {/* Step 2: Yarn */}
                <div className={styles.processStepItem}>
                  <div className={styles.processCircle}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <ellipse cx="12" cy="6" rx="6" ry="3" />
                      <path d="M6 6v12c0 1.66 2.69 3 6 3s6-1.34 6-3V6" />
                      <path d="M6 12c0 1.66 2.69 3 6 3s6-1.34 6-3" />
                    </svg>
                  </div>
                  <span className={styles.processStepLabel}>Yarn</span>
                </div>

                <span className={styles.processArrow} aria-hidden="true">&rarr;</span>

                {/* Step 3: Weaving */}
                <div className={styles.processStepItem}>
                  <div className={styles.processCircle}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="14" height="14" x="5" y="5" rx="1" />
                      <path d="M5 9h14" />
                      <path d="M9 9v10" />
                      <path d="M15 9v10" />
                    </svg>
                  </div>
                  <span className={styles.processStepLabel}>Weaving</span>
                </div>

                <span className={styles.processArrow} aria-hidden="true">&rarr;</span>

                {/* Step 4: Fabric */}
                <div className={styles.processStepItem}>
                  <div className={styles.processCircle}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                  </div>
                  <span className={styles.processStepLabel}>Fabric</span>
                </div>

                <span className={styles.processArrow} aria-hidden="true">&rarr;</span>

                {/* Step 5: Livelihood */}
                <div className={styles.processStepItem}>
                  <div className={styles.processCircle}>
                    <Users size={20} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <span className={styles.processStepLabel}>Livelihood</span>
                </div>
              </div>

              <p className={styles.approachBottomNote}>
                Every stage has value. By strengthening these connections, we aim to create
                a textile ecosystem in which production and opportunity can remain closer
                to the village and the people who sustain it.
              </p>
            </div>
          </div>

          {/* Right Panel: OUR VISION */}
          <div className={styles.visionCol}>
            <div className={styles.visionInner}>
              <span className={styles.visionEyebrow}>OUR VISION</span>
              <h2 className={styles.visionHeading}>
                A stronger rural<br />
                textile ecosystem.
              </h2>
              <p className={styles.visionText}>
                We envision Burgula as a place where cotton, yarn, handloom, skills, enterprise and
                community development can work together &mdash; creating sustainable economic
                opportunities while keeping textile knowledge alive and relevant.
              </p>
            </div>

            {/* Bottom Tagline */}
            <div className={styles.visionBottomBar}>
              <span>Handloom &bull; Heritage &bull; Sustainable Livelihoods</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
