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
            <h2 className={styles.title}>Burgula Cotton</h2>
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
              <li>
                <Link href="/capabilities" className={styles.link}>
                  Capabilities & Process
                </Link>
              </li>
              <li>
                <Link href="/textiles" className={styles.link}>
                  Textiles Archive
                </Link>
              </li>
              <li>
                <Link href="/our-impact" className={styles.link}>
                  Our Impact & Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/our-vision" className={styles.link}>
                  Our Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Trade & Editorial */}
          <div>
            <h3 className={styles.heading}>Commercial & Field Notes</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/b2b" className={styles.link}>
                  B2B & Trade Sourcing
                </Link>
              </li>
              <li>
                <Link href="/journal" className={styles.link}>
                  Journal & Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact House
                </Link>
              </li>
              <li>
                <Link href="/search" className={styles.link}>
                  Fabric Search Archive
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Origin */}
          <div>
            <h3 className={styles.heading}>Geographical Origin</h3>
            <p className={styles.statement} style={{ fontSize: 'var(--text-xs)' }}>
              Burgula Village · Shadnagar Mandal · Telangana, India.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Burgula Cotton. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-inverse-muted)' }}>
              Telangana Handloom Textile House
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
