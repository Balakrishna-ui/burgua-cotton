'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Send, Mail, MapPin } from 'lucide-react';
import { JsonLd, createBreadcrumbSchema, createOrganizationSchema } from '@/components/ui/JsonLd';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: 'FABRIC_ENQUIRY',
    subject: '',
    message: '',
    website_hp: '', // Honeypot field
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const purposes = [
    { value: 'FABRIC_ENQUIRY', label: 'Fabric & Swatch Enquiry' },
    { value: 'B2B_BULK', label: 'B2B / Bulk Yardage Order' },
    { value: 'FABRIC_DEVELOPMENT', label: 'Custom Fabric Development' },
    { value: 'COLLABORATION', label: 'Design & Academic Collaboration' },
    { value: 'GENERAL', label: 'General Enquiry / Press' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.error?.message || 'Failed to submit contact message. Please review the form.');
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
      setSubmitting(false);
    } catch {
      setErrorMsg('A network error occurred. Please try again.');
      setSubmitting(false);
    }
  };

  const orgSchema = createOrganizationSchema();
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', item: 'https://burgulacotton.com' },
    { name: 'Contact', item: 'https://burgulacotton.com/contact' },
  ]);

  return (
    <>
      <JsonLd data={orgSchema} />
      <JsonLd data={breadcrumbs} />

      {/* Hero */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="eyebrow">Direct Contact</span>
            <h1 style={{ marginBottom: 'var(--space-4)' }}>Contact the House</h1>
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)' }}>
              Connect with our textile development desk, master weavers, and institutional foundation in Telangana.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'var(--space-12)' }}>
            {/* Left: Contact Info & Address */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
              <div>
                <span className="eyebrow">Location & Origin</span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: 'var(--space-4)' }}>
                  Rooted in Telangana
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                  Our production ecosystem spans village carding, decentralised ring spinning, and pit-loom weaving clusters across rural Telangana, India.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                  <MapPin size={20} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: 'var(--text-sm)' }}>Production & Trust Secretariat</strong>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>
                      Burgula Cotton Trust · Telangana, India
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                  <Mail size={20} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: 'var(--text-sm)' }}>Commercial Fabric Inquiries</strong>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>
                      contact@burgulacotton.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="spec-box">
                <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Trade Buyers Note</span>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
                  For structured commercial orders, sampling protocols, and export requirements, please use our dedicated{' '}
                  <a href="/b2b" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>
                    B2B Trade Portal
                  </a>.
                </p>
              </div>
            </div>

            {/* Right: Submission Form */}
            <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', padding: 'clamp(var(--space-4), 4vw, var(--space-8))' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: 'var(--space-8) 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)' }}>
                  <CheckCircle2 size={48} style={{ color: 'var(--color-success)' }} />
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Message Received</h3>
                  <p style={{ color: 'var(--color-text-secondary)', maxWidth: '420px' }}>
                    Thank you for reaching out. A member of our fabric development team will respond to your message shortly.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        purpose: 'FABRIC_ENQUIRY',
                        subject: '',
                        message: '',
                        website_hp: '',
                      });
                    }}
                    style={{ marginTop: 'var(--space-4)' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-6)' }}>
                    Send a Message
                  </h3>

                  {errorMsg && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--space-4)', backgroundColor: 'var(--color-error-bg)', color: 'var(--color-error)', marginBottom: 'var(--space-6)', borderRadius: 'var(--radius-xs)', fontSize: 'var(--text-sm)' }}>
                      <AlertCircle size={16} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

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

                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g. Radhika Sen"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
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
                        placeholder="radhika@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number (Optional)</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="purpose">Enquiry Purpose *</label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {purposes.map((p) => (
                        <option key={p.value} value={p.value}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject *</label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g. Inquiring about 28s Kora Twill Swatches"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Describe your inquiry, fabric questions, or collaboration details..."
                    />
                  </div>

                  <div style={{ marginTop: 'var(--space-6)' }}>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '0.875rem' }}
                    >
                      {submitting ? 'Sending Message...' : (
                        <>
                          <Send size={16} /> Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
