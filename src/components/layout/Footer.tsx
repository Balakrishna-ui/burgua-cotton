import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand & Narrative */}
          <div className={styles.brandCol}>
            <span className={styles.regdBadge}>Regd. No. 83/2007</span>

            <div className={styles.titleGroup}>
              <h2 className={styles.title}>Burgula Cotton Trust</h2>
              <span className={styles.teluguTitle} lang="te">బూర్గుల కాటన్ ట్రస్ట్</span>
            </div>

            {/* Tagline Pill from Certificate/Identity */}
            <div className={styles.mottoPill}>
              <span lang="te">పత్తిలో మా భరోసా.</span>
              <span className={styles.mottoDivider} aria-hidden="true">|</span>
              <span>In Cotton We Trust</span>
            </div>

            <p className={styles.statement}>
              Rooted in cotton. Built for the future. From cotton to yarn to cloth in Telangana.
            </p>
            <div className={styles.trustDistinction}>
              <strong>Institutional Foundation:</strong> Burgula Cotton Trust was established in 2007 as a public charitable foundation stewarding rural textile infrastructure, research, and maker livelihoods.
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className={styles.heading}>Textile Practice</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-story" className={styles.link}>
                  Our Story: Kapas aur Kora
                </Link>
              </li>
            </ul>
          </div>

          {/* Registered Office & Contact */}
          <div className={styles.contactCol}>
            <h3 className={styles.heading}>Registered Office & Contact</h3>
            <address className={styles.addressBlock}>
              <p className={styles.addressLine}>
                <strong>H.no:</strong> 1-47, Burgula, Farooq Nagar,<br />
                Ranga Reddy, Telangana &ndash; 509202
              </p>
            </address>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email:</span>
                <a href="mailto:cottontrustburgula@gmail.com" className={styles.contactLink}>
                  cottontrustburgula@gmail.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Web:</span>
                <a
                  href="https://www.cottontrustburgula.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  www.cottontrustburgula.in
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Regd:</span>
                <span className={styles.contactVal}>No. 83/2007</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Burgula Cotton Trust (Regd. No. 83/2007). All rights reserved.
          </div>
          <div className={styles.bottomMeta}>
            <span lang="te" className={styles.bottomTelugu}>పత్తిలో మా భరోసా.</span>
            <span aria-hidden="true">·</span>
            <span>Telangana Handloom Textile House</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
