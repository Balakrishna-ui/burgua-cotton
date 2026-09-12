import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DataService } from '@/lib/data-service';
import { JsonLd, createBreadcrumbSchema } from '@/components/ui/JsonLd';

export const metadata: Metadata = {
  title: 'Journal & Research | Burgula Cotton',
  description:
    'Field notes, material research, and village stories on decentralised unbaled cotton yarn and handloom practice in Telangana.',
};

export default async function JournalPage() {
  const articles = await DataService.getJournalArticles();
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', item: 'https://burgulacotton.com' },
    { name: 'Journal', item: 'https://burgulacotton.com/journal' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      {/* Hero */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="eyebrow">Field Notes & Research</span>
            <h1 style={{ marginBottom: 'var(--space-4)' }}>The Burgula Journal</h1>
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)' }}>
              Essays, technical notes, and village stories documenting the revival of unbaled 27–30s cotton yarn and living handloom weaving in Telangana.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 'var(--space-8)' }}>
            {articles.map((article) => (
              <article
                key={article.id}
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Link href={`/journal/${article.slug}`} style={{ position: 'relative', width: '100%', height: '240px', display: 'block', backgroundColor: 'var(--color-bg-subtle)' }} tabIndex={-1}>
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Link>

                <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', flex: 1, gap: 'var(--space-3)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent)' }}>
                      {article.category}
                    </span>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                      {article.readingTime}
                    </span>
                  </div>

                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', lineHeight: 1.2 }}>
                    <Link href={`/journal/${article.slug}`} style={{ color: 'var(--color-text-primary)' }}>
                      {article.title}
                    </Link>
                  </h2>

                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                    {article.summary}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border-subtle)' }}>
                    <Link href={`/journal/${article.slug}`} className="btn btn-ghost" style={{ fontSize: 'var(--text-xs)' }}>
                      Read Full Article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
