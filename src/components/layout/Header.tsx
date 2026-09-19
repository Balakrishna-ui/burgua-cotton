'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/our-story', label: 'OUR STORY' },
  ];

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          {/* Brand Logo */}
          <Link href="/" className={styles.brand} aria-label="Burgula Cotton Home">
            <Image
              src="/images/logo.png"
              alt="Burgula Cotton Trust"
              width={200}
              height={60}
              priority
              className={styles.logoImg}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav} aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Utilities */}
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileNav}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileNavLink} ${isActive ? styles.navLinkActive : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
          <div style={{ marginTop: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <Link href="/b2b" className="btn btn-primary" style={{ textAlign: 'center' }}>
              B2B & Trade Sourcing
            </Link>
            <Link href="/contact" className="btn btn-secondary" style={{ textAlign: 'center' }}>
              Contact House
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
