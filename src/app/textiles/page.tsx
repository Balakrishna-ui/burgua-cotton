'use client';

import React, { useState, useEffect } from 'react';
import { VerifiedTextile, VERIFIED_TEXTILES } from '@/lib/seed-data';
import { FabricCard } from '@/components/ui/FabricCard';
import { JsonLd, createBreadcrumbSchema } from '@/components/ui/JsonLd';
import { Filter, Search as SearchIcon, RotateCcw } from 'lucide-react';

export default function TextilesPage() {
  const [textiles, setTextiles] = useState<VerifiedTextile[]>(VERIFIED_TEXTILES);
  const [selectedWeave, setSelectedWeave] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const weaves = ['ALL', 'Plain Weave', 'Twill', 'Textured Plain Weave', 'Fine Plain Weave'];

  useEffect(() => {
    setLoading(true);
    let filtered = VERIFIED_TEXTILES;

    if (selectedWeave !== 'ALL') {
      filtered = filtered.filter((t) =>
        t.weave.toLowerCase().includes(selectedWeave.toLowerCase())
      );
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.code.toLowerCase().includes(q) ||
          t.shortDescription.toLowerCase().includes(q) ||
          t.yarnCount.toLowerCase().includes(q)
      );
    }

    setTextiles(filtered);
    setLoading(false);
  }, [selectedWeave, searchQuery]);

  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', item: 'https://burgulacotton.com' },
    { name: 'Textiles', item: 'https://burgulacotton.com/textiles' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      {/* Hero */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }} data-reveal>
            <span className="eyebrow">Textile Archive</span>
            <h1 style={{ marginBottom: 'var(--space-4)' }}>Handloom Fabric Library</h1>
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)' }}>
              Verified qualities handwoven in Telangana from 27–30s unbaled cotton yarn and natural plant dyes. Available for sample swatch requests and bespoke B2B production runs.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ backgroundColor: 'var(--color-bg-surface)', borderBottom: '1px solid var(--color-border)', padding: 'var(--space-4) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
            {/* Weave Filters */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-2)' }}>
              <span style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 'var(--space-1)', marginRight: 'var(--space-2)' }}>
                <Filter size={14} /> Weave:
              </span>
              {weaves.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setSelectedWeave(w)}
                  className={`btn ${selectedWeave === w ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '0.4rem 0.875rem', fontSize: 'var(--text-xs)' }}
                >
                  {w}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', minWidth: '260px' }}>
              <div style={{ position: 'relative', width: '100%' }}>
                <SearchIcon size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                <input
                  type="text"
                  placeholder="Search by code, count, or weave..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-input"
                  style={{ paddingLeft: '36px', paddingRight: '12px', paddingTop: '0.5rem', paddingBottom: '0.5rem', fontSize: 'var(--text-sm)' }}
                />
              </div>

              {(selectedWeave !== 'ALL' || searchQuery !== '') && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedWeave('ALL');
                    setSearchQuery('');
                  }}
                  className="btn btn-secondary"
                  style={{ padding: '0.5rem', display: 'flex', alignItems: 'center' }}
                  title="Reset Filters"
                >
                  <RotateCcw size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section-padding">
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-16)' }}>
              <p>Loading textile library...</p>
            </div>
          ) : textiles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-16)', backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>
                No textiles match your criteria
              </h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                Try adjusting your search terms or filters.
              </p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setSelectedWeave('ALL');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div data-reveal-group style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'var(--space-8)' }}>
              {textiles.map((textile) => (
                <FabricCard key={textile.id} textile={textile} />
              ))}
            </div>
          )}

          {/* Trade CTA note */}
          <div className="spec-box" data-reveal style={{ marginTop: 'var(--space-16)', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>
              Looking for Bespoke Weaver Specifications?
            </h3>
            <p style={{ maxWidth: '640px', margin: '0 auto var(--space-6) auto', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
              We develop customized yarn counts, wild silk / bast hemp natural blends, and bespoke loom widths for fashion labels and architectural projects.
            </p>
            <a href="/b2b" className="btn btn-primary">
              Initiate Custom Development Enquiry →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
