'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { VerifiedTextile, VerifiedJournalArticle } from '@/lib/seed-data';
import { FabricCard } from '@/components/ui/FabricCard';
import { Search as SearchIcon, FileText } from 'lucide-react';
import { JsonLd, createBreadcrumbSchema } from '@/components/ui/JsonLd';

function SearchResults() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [textiles, setTextiles] = useState<VerifiedTextile[]>([]);
  const [journalArticles, setJournalArticles] = useState<VerifiedJournalArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (initialQuery.trim() !== '') {
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  const performSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    setSearched(true);

    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`);
      const data = await res.json();
      if (data.success) {
        setTextiles(data.data.textiles || []);
        setJournalArticles(data.data.journalArticles || []);
      }
    } catch {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(query);
  };

  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', item: 'https://burgulacotton.com' },
    { name: 'Search', item: 'https://burgulacotton.com/search' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      {/* Header */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container container-narrow">
          <span className="eyebrow">Search Archive</span>
          <h1 style={{ marginBottom: 'var(--space-6)' }}>Search Textiles & Research</h1>

          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <SearchIcon size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by weave, yarn count, keyword (e.g. indigo, twill, malkha)..."
                className="form-input"
                style={{ paddingLeft: '48px', fontSize: 'var(--text-base)' }}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-12)' }}>
              <p>Searching database...</p>
            </div>
          ) : searched && textiles.length === 0 && journalArticles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-12)', backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>
                No results found for &ldquo;{query}&rdquo;
              </h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                Try searching for broader terms like &ldquo;cotton&rdquo;, &ldquo;indigo&rdquo;, or &ldquo;plain weave&rdquo;.
              </p>
              <Link href="/textiles" className="btn btn-secondary">
                View Full Textile Archive
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
              {/* Textile Results */}
              {textiles.length > 0 && (
                <div>
                  <div style={{ marginBottom: 'var(--space-6)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>
                      Textiles ({textiles.length})
                    </h2>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
                    {textiles.map((t) => (
                      <FabricCard key={t.id} textile={t} />
                    ))}
                  </div>
                </div>
              )}

              {/* Journal Results */}
              {journalArticles.length > 0 && (
                <div>
                  <div style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>
                      Journal & Field Notes ({journalArticles.length})
                    </h2>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
                    {journalArticles.map((a) => (
                      <div key={a.id} style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-accent)', fontSize: 'var(--text-xs)', fontWeight: 600 }}>
                          <FileText size={14} />
                          <span>{a.category}</span>
                        </div>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem' }}>
                          <Link href={`/journal/${a.slug}`}>{a.title}</Link>
                        </h3>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                          {a.summary}
                        </p>
                        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-2)' }}>
                          <Link href={`/journal/${a.slug}`} className="btn btn-ghost" style={{ fontSize: 'var(--text-xs)' }}>
                            Read Note →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="section-padding container">Loading search...</div>}>
      <SearchResults />
    </Suspense>
  );
}
