import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Burgula Cotton Trust Footer">
      {/* ====================================================================
          TOP BANNER: HANDLOOM WARP THREADS PHOTO + DUAL-STROKE GOLD WAVE
          ==================================================================== */}
      <div className={styles.bannerContainer} aria-hidden="true">
        <div className={styles.handloomImgWrap}>
          <Image
            src="/images/footer-cotton-mountains.png"
            alt="Vibrant cotton field with mountains and rock hills"
            fill
            sizes="100vw"
            quality={95}
            priority={false}
            className={styles.handloomImg}
          />
          <div className={styles.handloomOverlay} />
        </div>

        {/* Sweeping Layered Organic Wave Transition with Dual Gold Contour Lines */}
        <div className={styles.waveSvgWrap}>
          <svg
            className={styles.topCurveSvg}
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Layer 1: Top-Left Translucent Sage/Cream Ribbon */}
            <path
              d="M 0,0 C 90,8 180,24 280,48 C 210,58 110,64 0,68 Z"
              fill="rgba(155, 178, 78, 0.35)"
            />
            <path
              d="M 0,0 C 90,8 180,24 280,48"
              stroke="#e7b234"
              strokeWidth="1.6"
              strokeOpacity="0.85"
              fill="none"
            />

            {/* Layer 2: Right-Side Golden Accent Glow Ribbon */}
            <path
              d="M 880,122 C 1040,140 1240,148 1440,138 L 1440,148 C 1240,158 1040,150 880,132 Z"
              fill="rgba(231, 178, 52, 0.28)"
            />
            <path
              d="M 880,122 C 1040,140 1240,148 1440,138"
              stroke="#e7b234"
              strokeWidth="1.4"
              strokeOpacity="0.85"
              fill="none"
            />

            {/* Layer 3: Main Yale Blue (#103f5f) Body Base Fill */}
            <path
              d="M 0,64 C 260,72 520,92 780,118 C 1040,144 1260,152 1440,144 L 1440,180 L 0,180 Z"
              fill="#103f5f"
            />

            {/* Layer 4: Primary Golden Edge Stroke */}
            <path
              d="M 0,64 C 260,72 520,92 780,118 C 1040,144 1260,152 1440,144"
              stroke="#e7b234"
              strokeWidth="2.4"
              fill="none"
            />

            {/* Layer 5: Secondary Inner Delicate Parallel Gold Stroke */}
            <path
              d="M 0,72 C 260,80 520,100 780,126 C 1040,152 1260,160 1440,152"
              stroke="#e7b234"
              strokeWidth="0.9"
              strokeOpacity="0.5"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* ====================================================================
          MAIN FOOTER BODY (YALE BLUE #103F5F)
          ==================================================================== */}
      <div className={styles.footerBody}>
        <div className="container">
          <div className={styles.grid}>
            {/* ---------------- COLUMN 1: BRAND & MISSION ---------------- */}
            <div className={styles.brandCol}>
              <div className={styles.regdBadgeGroup}>
                <span className={styles.regdDash} aria-hidden="true" />
                <span className={styles.regdBadge}>REGD. NO. 83/2007</span>
              </div>

              <div className={styles.titleGroup}>
                <h2 className={styles.title}>Burgula Cotton Trust</h2>
                <span className={styles.teluguTitle} lang="te">బూర్గుల కాటన్ ట్రస్ట్</span>
              </div>

              {/* Tagline Pill Badge — Leaf Green (#9bb24e) per Reference */}
              <div className={styles.mottoPill}>
                <span className={styles.mottoIconWrap} aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                  </svg>
                </span>
                <span lang="te" className={styles.mottoTelugu}>పత్తిలో మా భరోసా.</span>
                <span className={styles.mottoDivider} aria-hidden="true">|</span>
                <span className={styles.mottoEnglish}>In Cotton We Trust</span>
              </div>

              {/* Narrative Text */}
              <p className={styles.statement}>
                Rooted in cotton. Built for the future.<br />
                From cotton to cloth in Telangana.
              </p>

              {/* 4 Pillars Row */}
              <div className={styles.pillarsRow}>
                {/* 1. Community First */}
                <div className={styles.pillarItem}>
                  <svg className={styles.pillarIcon} viewBox="0 0 24 24" fill="none" stroke="#e7b234" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div className={styles.pillarText}>
                    <span>COMMUNITY</span>
                    <span>FIRST</span>
                  </div>
                </div>

                {/* 2. Sustainable Livelihoods */}
                <div className={styles.pillarItem}>
                  <svg className={styles.pillarIcon} viewBox="0 0 24 24" fill="none" stroke="#e7b234" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22V10" />
                    <path d="M12 10C10 6 6 5 3 6c0 5 4 8 9 8" />
                    <path d="M12 14c5 0 9-3 9-8-3-1-7 0-9 4" />
                  </svg>
                  <div className={styles.pillarText}>
                    <span>SUSTAINABLE</span>
                    <span>LIVELIHOODS</span>
                  </div>
                </div>

                {/* 3. Rural Development */}
                <div className={styles.pillarItem}>
                  <svg className={styles.pillarIcon} viewBox="0 0 24 24" fill="none" stroke="#e7b234" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <div className={styles.pillarText}>
                    <span>RURAL</span>
                    <span>DEVELOPMENT</span>
                  </div>
                </div>

                {/* 4. Handloom Heritage */}
                <div className={styles.pillarItem}>
                  <svg className={styles.pillarIcon} viewBox="0 0 24 24" fill="none" stroke="#e7b234" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3.6 9h16.8" />
                    <path d="M3.6 15h16.8" />
                    <path d="M11.5 3a16 16 0 0 0 0 18" />
                    <path d="M12.5 3a16 16 0 0 1 0 18" />
                  </svg>
                  <div className={styles.pillarText}>
                    <span>HANDLOOM</span>
                    <span>HERITAGE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Column Separator */}
            <div className={styles.colDivider} aria-hidden="true" />

            {/* ---------------- COLUMN 2: QUICK LINKS ---------------- */}
            <div className={styles.linksCol}>
              <div className={styles.headingGroup}>
                <h3 className={styles.heading}>QUICK LINKS</h3>
                <span className={styles.headingDash} aria-hidden="true" />
              </div>

              <ul className={styles.linkList}>
                <li>
                  <Link href="/" className={styles.link}>
                    <span>Home</span>
                    <span className={styles.linkChevron} aria-hidden="true">&gt;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={styles.link}>
                    <span>About Us</span>
                    <span className={styles.linkChevron} aria-hidden="true">&gt;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/our-story" className={styles.link}>
                    <span>Our Story: Kapas aur Kora</span>
                    <span className={styles.linkChevron} aria-hidden="true">&gt;</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Vertical Column Separator */}
            <div className={styles.colDivider} aria-hidden="true" />

            {/* ------------ COLUMN 3: REGISTERED OFFICE & CONTACT ------------ */}
            <div className={styles.contactCol}>
              <div className={styles.headingGroup}>
                <h3 className={styles.heading}>REGISTERED OFFICE &amp; CONTACT</h3>
                <span className={styles.headingDash} aria-hidden="true" />
              </div>

              <div className={styles.contactItems}>
                {/* Location */}
                <div className={styles.contactItem}>
                  <span className={styles.contactIconWrap} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#e7b234" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <address className={styles.addressBlock}>
                    <strong className={styles.hNo}>H.no:</strong> 1&ndash;47, Burgula, Farooq Nagar,<br />
                    Ranga Reddy, Telangana &ndash; 509202
                  </address>
                </div>

                {/* Email */}
                <div className={styles.contactItem}>
                  <span className={styles.contactIconWrap} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#e7b234" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <a href="mailto:cottontrustburgula@gmail.com" className={styles.contactLink}>
                    cottontrustburgula@gmail.com
                  </a>
                </div>

                {/* Web */}
                <div className={styles.contactItem}>
                  <span className={styles.contactIconWrap} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#e7b234" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </span>
                  <a
                    href="https://www.cottontrustburgula.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    www.cottontrustburgula.in
                  </a>
                </div>

                {/* Regd No */}
                <div className={styles.contactItem}>
                  <span className={styles.contactIconWrap} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#e7b234" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </span>
                  <span className={styles.contactVal}>Regd. No. 83/2007</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================================
            BOTTOM BAR WITH DECORATIVE GOLD THREAD WAVES & MAROON SPOOL
            ==================================================================== */}
        <div className={styles.bottomBarWrap}>
          {/* Flowing Golden Thread Lines + Handloom Spool in Bottom Right */}
          <div className={styles.threadWavesDecor} aria-hidden="true">
            <svg
              className={styles.threadWavesSvg}
              viewBox="0 0 520 120"
              fill="none"
              preserveAspectRatio="xMaxYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Flowing Yarn Lines Sweeping to the Spool */}
              <path d="M 0,105 C 160,105 280,118 470,98" stroke="#e7b234" strokeWidth="1.2" opacity="0.65" />
              <path d="M 40,95 C 180,90 300,112 470,95" stroke="#e7b234" strokeWidth="0.9" opacity="0.45" />
              <path d="M 70,110 C 200,110 320,122 470,100" stroke="#e7b234" strokeWidth="1" opacity="0.55" />
              <path d="M 120,118 C 230,115 340,116 470,103" stroke="#e7b234" strokeWidth="0.8" opacity="0.35" />
              <path d="M 150,85 C 250,80 350,104 470,92" stroke="#e7b234" strokeWidth="1.1" opacity="0.5" />
              <path d="M 190,70 C 280,68 370,90 470,88" stroke="#e7b234" strokeWidth="0.85" opacity="0.4" />
              <path d="M 230,58 C 310,58 390,80 470,84" stroke="#e7b234" strokeWidth="0.75" opacity="0.3" />

              {/* Handloom Bobbin / Spool with Maroon (#79170e) Wound Yarn */}
              <g transform="translate(465, 62) scale(0.95)">
                {/* Top Flange */}
                <ellipse cx="16" cy="6" rx="13" ry="4.5" stroke="#e7b234" strokeWidth="1.6" fill="#103f5f" />
                <line x1="9" y1="3" x2="23" y2="9" stroke="#e7b234" strokeWidth="0.9" opacity="0.7" />
                {/* Cylinder Core with Maroon Thread (#79170e) */}
                <rect x="6" y="6" width="20" height="26" stroke="#e7b234" strokeWidth="1.6" fill="#79170e" />
                {/* Thread Bands */}
                <line x1="6" y1="11" x2="26" y2="11" stroke="#e7b234" strokeWidth="1.1" opacity="0.75" />
                <line x1="6" y1="15" x2="26" y2="15" stroke="#e7b234" strokeWidth="1.1" opacity="0.75" />
                <line x1="6" y1="19" x2="26" y2="19" stroke="#e7b234" strokeWidth="1.1" opacity="0.75" />
                <line x1="6" y1="23" x2="26" y2="23" stroke="#e7b234" strokeWidth="1.1" opacity="0.75" />
                <line x1="6" y1="27" x2="26" y2="27" stroke="#e7b234" strokeWidth="1.1" opacity="0.75" />
                {/* Diagonal Winding Filaments */}
                <line x1="6" y1="8" x2="26" y2="30" stroke="#e7b234" strokeWidth="0.85" opacity="0.55" />
                <line x1="6" y1="30" x2="26" y2="8" stroke="#e7b234" strokeWidth="0.85" opacity="0.55" />
                {/* Bottom Flange */}
                <ellipse cx="16" cy="32" rx="13" ry="4.5" stroke="#e7b234" strokeWidth="1.6" fill="#103f5f" />
                <line x1="9" y1="29" x2="23" y2="35" stroke="#e7b234" strokeWidth="0.9" opacity="0.7" />
              </g>
            </svg>
          </div>

          <div className="container">
            <div className={styles.bottomBar}>
              <div className={styles.copyright}>
                &copy; {currentYear} Burgula Cotton Trust (Regd. No. 83/2007). All rights reserved.
              </div>

              <div className={styles.bottomMeta}>
                <span className={styles.bottomSep} aria-hidden="true">|</span>
                <span lang="te" className={styles.bottomTelugu}>పత్తిలో మా భరోసా.</span>
                <span className={styles.bottomDot} aria-hidden="true">&middot;</span>
                <span className={styles.bottomHouse}>Telangana Handloom Textile House</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
