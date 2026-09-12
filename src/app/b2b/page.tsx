'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { JsonLd, createBreadcrumbSchema } from '@/components/ui/JsonLd';

function B2BForm() {
  const searchParams = useSearchParams();
  const prefilledTextile = searchParams.get('textile') || '';

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    buyerType: 'DESIGNER',
    intendedUse: '',
    preferredTextileId: prefilledTextile,
    approximateQuantity: '',
    timeline: '',
    customRequirement: '',
    website_hp: '', // Honeypot field
  });

  const [submitting, setSubmitting] = useState(false);
  const [successResult, setSuccessResult] = useState<{ enquiryNumber: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const buyerTypes = [
    { value: 'DESIGNER', label: 'Fashion & Apparel Designer' },
    { value: 'FASHION_LABEL', label: 'Fashion Brand / Label' },
    { value: 'MANUFACTURER', label: 'Garment / Textile Manufacturer' },
    { value: 'ARCHITECT', label: 'Architect / Interior Designer' },
    { value: 'HOSPITALITY', label: 'Hospitality / Hotel Group' },
    { value: 'RETAILER', label: 'Textile Retailer / Boutique' },
    { value: 'PROFESSIONAL_BUYER', label: 'Professional Sourcing Agent' },
    { value: 'OTHER', label: 'Other Enterprise Buyer' },
  ];

  const tradeSteps = [
    { step: '01', title: 'Tell Us What You Need', desc: 'Share your intended application, target count/weight, timeline, and yardage volume.' },
    { step: '02', title: 'Receive Swatches & Specs', desc: 'We dispatch curated sample swatches and technical data cards for review.' },
    { step: '03', title: 'Sample & Develop', desc: 'Sample pit-looms prototype custom weave structures or test natural plant dye batches.' },
    { step: '04', title: 'Confirm Specifications', desc: 'Finalize width, GSM, shrinkage parameters, and batch delivery schedule.' },
    { step: '05', title: 'Production & Dispatch', desc: 'Handwoven in Telangana artisan clusters with batch quality assurance.' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/b2b', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.error?.message || 'Failed to submit trade enquiry. Please review the form.');
        setSubmitting(false);
        return;
      }

      setSuccessResult(data.data);
      setSubmitting(false);
    } catch {
      setErrorMsg('A network error occurred. Please try again.');
      setSubmitting(false);
    }
  };

  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', item: 'https://burgulacotton.com' },
    { name: 'B2B Trade', item: 'https://burgulacotton.com/b2b' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      {/* Hero */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="eyebrow">Trade & Custom Sourcing</span>
            <h1 style={{ marginBottom: 'var(--space-4)' }}>B2B & Bespoke Fabric Development</h1>
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)' }}>
              Partnering with designers, fashion labels, architects, and hospitality groups to produce authentic, certified handloom cotton fabrics from 27–30s unbaled yarn in Telangana.
            </p>
          </div>
        </div>
      </section>

      {/* Trade Process Overview */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-subtle)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <span className="eyebrow">Our Trade Workflow</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem' }}>How We Work With Brands</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-6)' }}>
            {tradeSteps.map((s) => (
              <div
                key={s.step}
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border)',
                  padding: 'var(--space-6)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-2)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-accent)', fontWeight: 500 }}>
                  {s.step}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>{s.title}</h3>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            {successResult ? (
              <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', padding: 'var(--space-12) var(--space-8)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)' }}>
                <CheckCircle2 size={48} style={{ color: 'var(--color-success)' }} />
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem' }}>
                  Enquiry Received
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', maxWidth: '500px' }}>
                  Thank you for submitting your trade requirements. Our commercial textile team has received your enquiry.
                </p>
                <div style={{ backgroundColor: 'var(--color-bg-subtle)', padding: 'var(--space-4) var(--space-6)', border: '1px dashed var(--color-border)', margin: 'var(--space-2) 0' }}>
                  <span style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block' }}>
                    Enquiry Reference
                  </span>
                  <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-text-primary)' }}>
                    {successResult.enquiryNumber}
                  </strong>
                </div>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                  We will review your specifications and contact you with sample availability within 1–2 business days.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setSuccessResult(null);
                    setFormData({
                      companyName: '',
                      contactName: '',
                      email: '',
                      phone: '',
                      buyerType: 'DESIGNER',
                      intendedUse: '',
                      preferredTextileId: '',
                      approximateQuantity: '',
                      timeline: '',
                      customRequirement: '',
                      website_hp: '',
                    });
                  }}
                  style={{ marginTop: 'var(--space-4)' }}
                >
                  Submit Another Trade Enquiry
                </button>
              </div>
            ) : (
              <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', padding: 'var(--space-8)' }}>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <span className="eyebrow">Direct Commercial Portal</span>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>
                    Start a Trade or Fabric Development Enquiry
                  </h2>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
                    Please fill out the details below. All submissions are directly reviewed by our Telangana fabric development desk.
                  </p>
                </div>

                {errorMsg && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--space-4)', backgroundColor: 'var(--color-error-bg)', color: 'var(--color-error)', marginBottom: 'var(--space-6)', borderRadius: 'var(--radius-xs)', fontSize: 'var(--text-sm)' }}>
                    <AlertCircle size={16} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="website_hp"
                    value={formData.website_hp}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="companyName">Studio / Company Name *</label>
                      <input
                        id="companyName"
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="e.g. Studio Vardhan Design"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contactName">Contact Person *</label>
                      <input
                        id="contactName"
                        type="text"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="e.g. Vikram Rao"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Business Email *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="vikram@studiovardhan.com"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone / WhatsApp Number *</label>
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

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="buyerType">Buyer Profile *</label>
                      <select
                        id="buyerType"
                        name="buyerType"
                        value={formData.buyerType}
                        onChange={handleChange}
                        className="form-select"
                      >
                        {buyerTypes.map((b) => (
                          <option key={b.value} value={b.value}>
                            {b.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="preferredTextileId">Preferred Fabric / Code</label>
                      <input
                        id="preferredTextileId"
                        type="text"
                        name="preferredTextileId"
                        value={formData.preferredTextileId}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="e.g. BC-KK-2801 or Custom Weave"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="intendedUse">Intended Application / Collection Context *</label>
                    <input
                      id="intendedUse"
                      type="text"
                      name="intendedUse"
                      required
                      value={formData.intendedUse}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g. SS27 Menswear shirting and unstructured jackets"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="approximateQuantity">Estimated Yardage (Meters)</label>
                      <input
                        id="approximateQuantity"
                        type="text"
                        name="approximateQuantity"
                        value={formData.approximateQuantity}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="e.g. 100 - 300 meters"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="timeline">Target Delivery Timeline</label>
                      <input
                        id="timeline"
                        type="text"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="e.g. Within 6-8 weeks"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="customRequirement">Custom Specifications / Fiber Blend Notes</label>
                    <textarea
                      id="customRequirement"
                      name="customRequirement"
                      rows={4}
                      value={formData.customRequirement}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Specify custom GSM requirements, plant dye shades, loom width, or natural bast hemp/silk blend questions..."
                    />
                  </div>

                  <div style={{ marginTop: 'var(--space-6)' }}>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '1rem' }}
                    >
                      {submitting ? 'Submitting Trade Enquiry...' : (
                        <>
                          <Send size={16} /> Submit B2B Trade Enquiry
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default function B2BPage() {
  return (
    <Suspense fallback={<div className="section-padding container">Loading trade portal...</div>}>
      <B2BForm />
    </Suspense>
  );
}
