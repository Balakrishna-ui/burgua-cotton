import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { VerifiedTextile } from '@/lib/seed-data';
import { AddToSwatchBagButton } from './AddToSwatchBagButton';
import styles from './FabricCard.module.css';

interface FabricCardProps {
  textile: VerifiedTextile;
}

export function FabricCard({ textile }: FabricCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/textiles/${textile.slug}`} className={styles.imageContainer} tabIndex={-1}>
        <Image
          src={textile.heroImage}
          alt={`${textile.name} woven fabric drape`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.mainImage}
        />
        <Image
          src={textile.macroImage}
          alt={`${textile.name} macro weave structure`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.macroImage}
        />
        <span className={styles.macroBadge}>Macro Texture</span>
      </Link>

      <div className={styles.content}>
        <div className={styles.metaRow}>
          <span className={styles.code}>{textile.code}</span>
          <span className={styles.state}>
            {textile.inStock ? 'In Archive & Production' : 'Bespoke Development'}
          </span>
        </div>

        <h3 className={styles.title}>
          <Link href={`/textiles/${textile.slug}`} className={styles.titleLink}>
            {textile.name}
          </Link>
        </h3>

        <p className={styles.description}>{textile.shortDescription}</p>

        <div className={styles.specRow}>
          <div>
            <span className={styles.specLabel}>Weave: </span>
            <span className={styles.specVal}>{textile.weave}</span>
          </div>
          <div>
            <span className={styles.specLabel}>Yarn: </span>
            <span className={styles.specVal}>{textile.yarnCount}</span>
          </div>
          {textile.gsm && (
            <div>
              <span className={styles.specLabel}>Weight: </span>
              <span className={styles.specVal}>{textile.gsm}</span>
            </div>
          )}
          <div>
            <span className={styles.specLabel}>Width: </span>
            <span className={styles.specVal}>{textile.width}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <Link
            href={`/textiles/${textile.slug}`}
            className={`btn btn-secondary ${styles.specsBtn}`}
          >
            View Textile Specs
          </Link>
          <AddToSwatchBagButton textile={textile} />
        </div>
      </div>
    </article>
  );
}
