'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Home, Users, BookOpen } from 'lucide-react';
import styles from './Header.module.css';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'HOME', icon: Home },
    { href: '/about', label: 'ABOUT US', icon: Users },
    { href: '/our-story', label: 'OUR STORY', icon: BookOpen },
  ];

  return (
    <header className={styles.header}>
      {/* Subtle Handloom Heritage Accent Stripe */}
      <div className={styles.headerTopStripe} aria-hidden="true" />

      <div className={styles.headerContainer}>
        <div className={styles.inner}>
          {/* Brand Logo — EXACT EXISTING LOGO */}
          <Link href="/" className={styles.brand} aria-label="Burgula Cotton Trust Home">
            <Image
              src="/images/logo.png"
              alt="Burgula Cotton Trust"
              width={200}
              height={60}
              priority
              className={styles.logoImg}
            />
          </Link>

          {/* Desktop Navigation — Centered Heritage Layout with Icons */}
          <nav className={styles.nav} aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                >
                  <Icon size={14} className={styles.navIcon} aria-hidden="true" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Utilities — GET IN TOUCH */}
          <div className={styles.actions}>
            <Link href="/get-in-touch" className={styles.ctaBtn}>
              <span>GET IN TOUCH</span>
              <ArrowRight size={13} className={styles.ctaArrow} aria-hidden="true" />
            </Link>

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
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
              >
                <Icon size={16} aria-hidden="true" />
                <span>{link.label}</span>
              </Link>
            );
          })}
          <div className={styles.mobileCtaWrapper}>
            <Link href="/get-in-touch" className={styles.mobileCtaBtn}>
              <span>GET IN TOUCH</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
