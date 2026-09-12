'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './CartDrawer.module.css';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, subtotal } = useCart();

  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isCartOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  // Move focus into the drawer when it opens, restore when it closes
  useEffect(() => {
    if (isCartOpen) {
      closeBtnRef.current?.focus();
    }
  }, [isCartOpen]);

  // Trap focus inside the drawer while it is open
  const handleDrawerKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab' || !drawerRef.current) return;

    const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, []);

  if (!isCartOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={() => setIsCartOpen(false)}
      aria-hidden="true"
    >
      <div
        ref={drawerRef}
        className={styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleDrawerKeyDown}
      >
        {/* Header */}
        <div className={styles.header}>
          <h2 id="cart-drawer-title" className={styles.title}>Swatch &amp; Sample Bag</h2>
          <button
            ref={closeBtnRef}
            type="button"
            className={styles.closeBtn}
            onClick={() => setIsCartOpen(false)}
            aria-label="Close swatch bag"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className={styles.body}>
          {items.length === 0 ? (
            <div className={styles.emptyState}>
              <p>Your swatch bag is currently empty.</p>
              <Link
                href="/textiles"
                className={`btn btn-secondary ${styles.emptyStateLink}`}
                onClick={() => setIsCartOpen(false)}
              >
                Browse Textiles Library
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.imageWrap}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="80px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div className={styles.itemInfo}>
                  <span className={styles.itemCode}>{item.code}</span>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemVariant}>{item.variantColor}</span>
                  <span className={styles.itemTypeBadge}>
                    {item.itemType === 'SWATCH'
                      ? 'Fabric Swatch'
                      : item.itemType === 'SAMPLE_CUT'
                      ? 'Sample Cut (1m)'
                      : 'Fabric Meter'}
                  </span>
                </div>

                <div className={styles.itemActions}>
                  <span className={styles.price}>₹{item.unitPrice * item.quantity}</span>

                  <div className={styles.qtyControls}>
                    <button
                      type="button"
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label={`${item.quantity === 1 ? 'Remove' : 'Decrease quantity of'} ${item.name}`}
                    >
                      {item.quantity === 1 ? <Trash2 size={12} /> : <Minus size={12} />}
                    </button>
                    <span className={styles.qtyNum} aria-live="polite" aria-label={`Quantity: ${item.quantity}`}>
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.subtotalRow}>
              <span>Estimated Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <p className={styles.shippingNote}>
              Complimentary standard courier dispatch on all verified swatch selections.
            </p>
            <Link
              href="/checkout"
              className={`btn btn-primary ${styles.checkoutBtn}`}
              onClick={() => setIsCartOpen(false)}
            >
              Proceed to Request Dispatch
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
