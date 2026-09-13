import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { DataService } from '@/lib/data-service';
import { JsonLd, createArticleSchema, createBreadcrumbSchema } from '@/components/ui/JsonLd';
import { ArrowLeft } from 'lucide-react';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await DataService.getJournalArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Burgula Cotton',
    };
  }

  return {
    title: `${article.seoTitle || article.title} | Burgula Cotton`,
    description: article.seoDescription || article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [{ url: article.featuredImage, width: 1200, height: 630, alt: article.title }],
    },
  };
}

export default async function JournalArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await DataService.getJournalArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = await DataService.getJournalArticles();
  const relatedArticles = allArticles.filter((a) => a.id !== article.id).slice(0, 2);

  const articleSchema = createArticleSchema(article);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: 'https://burgulacotton.com' },
    { name: 'Journal', item: 'https://burgulacotton.com/journal' },
    { name: article.title, item: `https://burgulacotton.com/journal/${article.slug}` },
  ]);

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article className="section-padding">
        <div className="container container-narrow">
          {/* Top meta & Back button */}
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <Link href="/journal" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-4)' }}>
              <ArrowLeft size={14} /> Back to Journal
            </Link>

            <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
              <span className="eyebrow" style={{ marginBottom: 0 }}>{article.category}</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>· {article.readingTime}</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>· {article.publishedAt}</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', marginTop: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
              {article.title}
            </h1>

            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
              {article.summary}
            </p>
          </div>

          {/* Featured Image */}
          <div style={{ position: 'relative', width: '100%', height: '420px', backgroundColor: 'var(--color-bg-subtle)', marginBottom: 'var(--space-10)', border: '1px solid var(--color-border)' }}>
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 840px) 100vw, 840px"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Body Content */}
          <div style={{ fontSize: 'var(--text-base)', lineHeight: '1.85', color: 'var(--color-text-primary)' }}>
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} style={{ marginBottom: 'var(--space-6)' }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div style={{ marginTop: 'var(--space-16)', paddingTop: 'var(--space-12)', borderTop: '1px solid var(--color-border)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-6)' }}>
                Related Field Notes
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'var(--space-6)' }}>
                {relatedArticles.map((rel) => (
                  <div key={rel.id} style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', padding: 'var(--space-6)' }}>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-accent)', textTransform: 'uppercase', fontWeight: 600 }}>{rel.category}</span>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: 'var(--space-2) 0' }}>
                      <Link href={`/journal/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>{rel.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
