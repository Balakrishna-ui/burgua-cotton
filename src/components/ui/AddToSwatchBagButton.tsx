'use client';

import React from 'react';
import { VerifiedTextile } from '@/lib/seed-data';
import { useCart } from '@/context/CartContext';
import styles from './FabricCard.module.css';

interface AddToSwatchBagButtonProps {
  textile: VerifiedTextile;
}

export function AddToSwatchBagButton({ textile }: AddToSwatchBagButtonProps) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      className={`btn btn-primary ${styles.swatchBtn}`}
      onClick={() => addItem(textile, 'SWATCH')}
      aria-label={`Add swatch of ${textile.name} to bag`}
    >
      + Swatch
    </button>
  );
}
