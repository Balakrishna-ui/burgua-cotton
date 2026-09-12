'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShieldCheck, AlertCircle, ArrowLeft } from 'lucide-react';
import styles from './page.module.css';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    shippingAddressLine1: '',
    shippingAddressLine2: '',
    city: '',
    state: 'Telangana',
    postalCode: '',
    country: 'India',
    website_hp: '', // Honeypot field
  });

  const [idempotencyKey] = useState<string>(() => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return `idemp-${Date.now()}-${crypto.randomUUID()}`;
    }
    return `idemp-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (items.length === 0) {
      setErrorMsg('Your cart is empty. Please add fabrics or swatches first.');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        idempotencyKey,
        customerName: formData.customerName,
        email: formData.email,
        phone: formData.phone,
        shippingAddressLine1: formData.shippingAddressLine1,
        shippingAddressLine2: formData.shippingAddressLine2 || undefined,
        city: formData.city,
        state: formData.state,
        postalCode: formData.postalCode,
        country: formData.country,
        website_hp: formData.website_hp,
        items: items.map((it) => ({
          textileId: it.textileId,
          variantId: it.variantId,
          itemType: it.itemType,
          quantity: it.quantity,
        })),
      };

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.error?.message || 'Failed to place swatch request.');
        setLoading(false);
        return;
      }

      clearCart();
      const confirmedServerTotal = data.data?.totalAmount ?? subtotal;
      router.push(`/order-confirmation/${data.data.orderNumber}?total=${confirmedServerTotal}`);
    } catch {
      setErrorMsg('A network error occurred. Please try submitting again.');
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className={`section-padding container container-narrow ${styles.emptyContainer}`}>
        <h1 className={styles.emptyTitle}>
          Your Swatch Bag is Empty
        </h1>
        <p className={styles.emptyText}>
          Please browse our handloom library to select swatches or sample cuts.
        </p>
        <Link href="/textiles" className="btn btn-primary">
          Explore Handloom Textiles Library
        </Link>
      </div>
    );
  }

  return (
    <div className={`section-padding ${styles.pageWrapper}`}>
      <div className="container">
        <div className={styles.headerRow}>
          <Link href="/textiles" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Textiles
          </Link>
          <h1 className={styles.pageTitle}>
            Dispatch & Order Review
          </h1>
        </div>

        <div className={styles.layoutGrid}>
          {/* Form */}
          <div className={styles.formCard}>
            <h2 className={styles.sectionHeading}>
              1. Shipping & Trade Contact Details
            </h2>

            {errorMsg && (
              <div className={styles.errorBanner}>
                <AlertCircle size={16} />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Honeypot anti-spam */}
              <input
                type="text"
                name="website_hp"
                value={formData.website_hp}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="form-group">
                <label className="form-label" htmlFor="customerName">Full Name / Contact Person *</label>
                <input
                  id="customerName"
                  type="text"
                  name="customerName"
                  required
                  value={formData.customerName}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g. Ananya Rao"
                />
              </div>

              <div className={styles.twoColGrid}>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="ananya@studio.com"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone / WhatsApp *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="shippingAddressLine1">Address Line 1 *</label>
                <input
                  id="shippingAddressLine1"
                  type="text"
                  name="shippingAddressLine1"
                  required
                  value={formData.shippingAddressLine1}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Studio / Street Address"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="shippingAddressLine2">Address Line 2 (Optional)</label>
                <input
                  id="shippingAddressLine2"
                  type="text"
                  name="shippingAddressLine2"
                  value={formData.shippingAddressLine2}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Floor, Suite, Landmark"
                />
              </div>

              <div className={styles.threeColGrid}>
                <div className="form-group">
                  <label className="form-label" htmlFor="city">City *</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Hyderabad"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="state">State *</label>
                  <input
                    id="state"
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="postalCode">PIN Code *</label>
                  <input
                    id="postalCode"
                    type="text"
                    name="postalCode"
                    required
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="500001"
                  />
                </div>
              </div>

              <div className={styles.submitBtnWrapper}>
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn btn-primary ${styles.submitBtn}`}
                >
                  {loading ? 'Processing Dispatch Request...' : `Confirm & Request Dispatch (₹${subtotal.toFixed(2)})`}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className={styles.summaryColumn}>
            <div className={styles.summaryCard}>
              <h2 className={styles.summaryHeading}>
                2. Selected Items ({items.length})
              </h2>

              <div className={styles.itemsList}>
                {items.map((item) => (
                  <div key={item.id} className={styles.itemRow}>
                    <div className={styles.itemImageWrapper}>
                      <Image src={item.image} alt={item.name} fill sizes="60px" className={styles.itemImage} />
                    </div>
                    <div>
                      <span className={styles.itemCode}>{item.code}</span>
                      <h4 className={styles.itemName}>{item.name}</h4>
                      <span className={styles.itemVariant}>
                        {item.variantColor} · Qty: {item.quantity}
                      </span>
                    </div>
                    <div className={styles.itemPrice}>
                      ₹{item.unitPrice * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.totalsSection}>
                <div className={styles.totalRow}>
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className={styles.totalRow}>
                  <span>Standard Courier Dispatch</span>
                  <span className={styles.complimentaryText}>Complimentary</span>
                </div>
                <div className={styles.grandTotalRow}>
                  <span>Total Amount</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className={styles.securityNote}>
              <ShieldCheck size={20} className={styles.securityNoteIcon} />
              <span className={styles.securityNoteText}>
                Orders are recorded with immutable product and price snapshots in our PostgreSQL database.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
