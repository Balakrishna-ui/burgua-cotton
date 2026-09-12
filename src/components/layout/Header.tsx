'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';

export function Header() {
  const pathname = usePathname();
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/our-story', label: 'OUR STORY' },
    { href: '/capabilities', label: 'CAPABILITIES' },
    { href: '/textiles', label: 'TEXTILES' },
    { href: '/our-impact', label: 'OUR IMPACT' },
    { href: '/our-vision', label: 'OUR VISION' },
  ];

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          {/* Brand Logo & Location */}
          <Link href="/" className={styles.brand} aria-label="Burgula Cotton Home">
            <span className={styles.brandTitle}>Burgula Cotton</span>
            <span className={styles.brandLocation}>Telangana · India</span>
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
            <Link href="/search" className={styles.iconBtn} aria-label="Search Textiles and Field Notes">
              <Search size={18} />
            </Link>

            <button
              type="button"
              className={styles.iconBtn}
              onClick={() => setIsCartOpen(true)}
              aria-label={`Swatch Bag (${itemCount} items)`}
            >
              <ShoppingBag size={18} />
              {itemCount > 0 && <span className={styles.badge}>{itemCount}</span>}
            </button>

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
