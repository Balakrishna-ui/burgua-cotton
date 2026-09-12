import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { DataService } from '@/lib/data-service';
import { SpecificationMatrix } from '@/components/ui/SpecificationMatrix';
import { FabricCard } from '@/components/ui/FabricCard';
import { JsonLd, createProductSchema, createBreadcrumbSchema } from '@/components/ui/JsonLd';
import TextileDetailClient from './TextileDetailClient';
import styles from './TextileDetail.module.css';

interface TextilePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: TextilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const textile = await DataService.getTextileBySlug(slug);

  if (!textile) {
    return {
      title: 'Textile Not Found | Burgula Cotton',
    };
  }

  return {
    title: `${textile.name} (${textile.code}) | Burgula Cotton`,
    description: textile.shortDescription,
    openGraph: {
      title: `${textile.name} - Handloom Cotton Fabric`,
      description: textile.shortDescription,
      images: [{ url: textile.heroImage, width: 1200, height: 800, alt: textile.name }],
    },
  };
}

export default async function TextileDetailPage({ params }: TextilePageProps) {
  const { slug } = await params;
  const textile = await DataService.getTextileBySlug(slug);

  if (!textile) {
    notFound();
  }

  const allTextiles = await DataService.getTextiles();
  const relatedTextiles = allTextiles.filter((t) => t.id !== textile.id).slice(0, 3);

  const productSchema = createProductSchema(textile);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: 'https://burgulacotton.com' },
    { name: 'Textiles', item: 'https://burgulacotton.com/textiles' },
    { name: textile.name, item: `https://burgulacotton.com/textiles/${textile.slug}` },
  ]);

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
        <div className="container">
          <div className={styles.breadcrumbList}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <Link href="/textiles" className={styles.breadcrumbLink}>Textiles</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>{textile.name}</span>
          </div>
        </div>
      </nav>

      {/* Main Detail Section */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.detailWrapper}>
            {/* Top Grid: Images + Commercial Actions */}
            <div className={styles.topGrid}>
              {/* Images */}
              <div className={styles.imageColumn}>
                <div className={styles.heroImageWrapper}>
                  <Image
                    src={textile.heroImage}
                    alt={textile.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.imageCover}
                  />
                </div>

                <div className={styles.thumbnailsGrid}>
                  <div className={styles.macroImageWrapper}>
                    <Image
                      src={textile.macroImage}
                      alt={`${textile.name} macro weave texture`}
                      fill
                      sizes="25vw"
                      className={styles.imageCover}
                    />
                    <span className={styles.macroTag}>Macro Close-up</span>
                  </div>

                  <div className={styles.originCard}>
                    <span className={styles.originLabel}>Origin & Loom</span>
                    <strong className={styles.originHeading}>Telangana Pit-Loom</strong>
                    <span className={styles.originSubtext}>Unbaled 27-30s Yarn</span>
                  </div>
                </div>
              </div>

              {/* Right: Info & Client Interactive CTAs */}
              <TextileDetailClient textile={textile} />
            </div>

            {/* Middle: Material Story & Verified Specs */}
            <div className={styles.storySpecsSection}>
              <div>
                <span className="eyebrow">Material Narrative</span>
                <h2 className={styles.sectionHeading}>The Material Story</h2>
                <p className={styles.storyText}>{textile.materialStory}</p>
              </div>

              <div>
                <span className="eyebrow">Technical Parameters</span>
                <h3 className={styles.subHeading}>Specification Matrix</h3>
                <SpecificationMatrix textile={textile} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Textiles */}
      {relatedTextiles.length > 0 && (
        <section className={`section-padding ${styles.relatedSection}`}>
          <div className="container">
            <div className={styles.relatedHeader}>
              <span className="eyebrow">Curated Complements</span>
              <h2 className={styles.sectionHeading}>Related Handloom Qualities</h2>
            </div>

            <div className={styles.relatedGrid}>
              {relatedTextiles.map((rel) => (
                <FabricCard key={rel.id} textile={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
