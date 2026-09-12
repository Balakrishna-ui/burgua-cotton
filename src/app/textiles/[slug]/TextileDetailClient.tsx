'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { VerifiedTextile } from '@/lib/seed-data';
import { useCart } from '@/context/CartContext';
import { Check, ShieldCheck } from 'lucide-react';
import styles from './TextileDetail.module.css';

export default function TextileDetailClient({ textile }: { textile: VerifiedTextile }) {
  const { addItem } = useCart();
  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    textile.variants[0]?.id || ''
  );
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const selectedVariant = textile.variants.find((v) => v.id === selectedVariantId);

  const handleAction = (type: 'SWATCH' | 'SAMPLE_CUT' | 'FABRIC_METER', label: string) => {
    addItem(textile, type, selectedVariantId);
    setActionSuccess(`${label} added to swatch selection bag`);
    setTimeout(() => setActionSuccess(null), 3500);
  };

  return (
    <div className={styles.clientContainer}>
      <div>
        <span className={styles.textileCode}>
          {textile.code}
        </span>
        <h1 className={styles.textileTitle}>
          {textile.name}
        </h1>
        <p className={styles.textileDescription}>
          {textile.shortDescription}
        </p>
      </div>

      {/* Colour Way Selector */}
      {textile.variants.length > 0 && (
        <div className={styles.colorwaySection}>
          <label className={styles.colorwayLabel}>
            Available Colorway: <strong className={styles.colorwayActiveName}>{selectedVariant?.colorName}</strong>
          </label>
          <div className={styles.colorwayList}>
            {textile.variants.map((v) => {
              const isSelected = selectedVariantId === v.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedVariantId(v.id)}
                  className={`${styles.colorwayBtn} ${isSelected ? styles.colorwayBtnActive : ''}`}
                >
                  <span
                    className={styles.colorSwatch}
                    style={{ backgroundColor: v.colorHex }}
                  />
                  <span className={`${styles.colorwayBtnText} ${isSelected ? styles.colorwayBtnTextActive : ''}`}>
                    {v.colorName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Material Acquisition & Sourcing Actions */}
      <div className={styles.actionsContainer}>
        <span className={styles.actionsLabel}>
          Material Acquisition & Sampling
        </span>

        <div className={styles.samplingGrid}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleAction('SWATCH', 'Swatch')}
          >
            Request Swatch (₹{textile.swatchPrice})
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleAction('SAMPLE_CUT', '1-Meter Sample')}
          >
            Request 1m Sample (₹{textile.samplePrice})
          </button>
        </div>

        <Link
          href={`/b2b?textile=${encodeURIComponent(textile.name)}&code=${encodeURIComponent(textile.code)}`}
          className={`btn btn-primary ${styles.bulkEnquiryBtn}`}
        >
          Start Bulk / B2B Fabric Enquiry →
        </Link>

        {textile.basePrice && (
          <button
            type="button"
            className={`btn btn-ghost ${styles.directMeterBtn}`}
            onClick={() => handleAction('FABRIC_METER', 'Fabric Meter')}
          >
            Direct Meter Order (₹{textile.basePrice}/m)
          </button>
        )}
      </div>

      {actionSuccess && (
        <div className={styles.actionSuccess}>
          <Check size={14} /> {actionSuccess}
        </div>
      )}

      {/* Production & Dispatch Note */}
      <div className={styles.originNote}>
        <ShieldCheck size={18} className={styles.originNoteIcon} />
        <p className={styles.originNoteText}>
          <strong>Verified Handloom Origin:</strong> Handwoven on Telangana pit-looms with decentralised unbaled yarn. Swatches dispatch in 2–3 working days.
        </p>
      </div>
    </div>
  );
}
