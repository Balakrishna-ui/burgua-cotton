'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Handshake,
  MessageSquare,
  Leaf,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import styles from './page.module.css';

interface EnquiryOption {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  purpose: 'COLLABORATION' | 'B2B_BULK' | 'GENERAL' | 'FABRIC_ENQUIRY';
}

const ENQUIRY_OPTIONS: EnquiryOption[] = [
  { id: 'partnership', label: 'Partnership', icon: Users, purpose: 'COLLABORATION' },
  { id: 'b2b', label: 'B2B Sourcing', icon: Handshake, purpose: 'B2B_BULK' },
  { id: 'general', label: 'General Enquiry', icon: MessageSquare, purpose: 'GENERAL' },
];

export function GetInTouchClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'partnership',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const selectedOption = ENQUIRY_OPTIONS.find((opt) => opt.id === formData.enquiryType) || ENQUIRY_OPTIONS[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          purpose: selectedOption.purpose,
          subject: `Enquiry: ${selectedOption.label}`,
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          enquiryType: 'partnership',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(
          result?.error?.message ||
            (result?.error && typeof result.error === 'string' ? result.error : 'Failed to send message. Please try again.')
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ====================================================================
          1. HERO SECTION
          ==================================================================== */}
      <section className={styles.heroSection} aria-label="Get in Touch Hero">
        <Image
          src="/images/w1.png"
          alt="Artisan weaver crafting cotton cloth at traditional pit-loom"
          fill
          priority
          sizes="100vw"
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>GET IN TOUCH</span>
            <h1 className={styles.heroHeading}>
              Let’s Work<br />
              for a Stronger Tomorrow.
            </h1>
            <p className={styles.heroSubtitle}>
              We welcome partnerships, collaborations and conversations that support cotton, handloom and rural livelihoods.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. MAIN SECTION: CONTACT INFO + MESSAGE FORM
          ==================================================================== */}
      <section className={styles.mainSection} aria-label="Contact Information and Enquiry Form">
        <div className="container">
          <div className={styles.twoColGrid}>
            {/* LEFT COLUMN: Contact Details & Location */}
            <div className={styles.leftCol}>
              {/* Contact Information Block */}
              <div>
                <h2 className={styles.sectionTitle}>Contact Information</h2>
                <p className={styles.sectionSubtitle}>
                  Reach out to us for partnerships, sourcing, research, collaborations or general enquiries.
                </p>

                <div className={styles.infoItemsList}>
                  {/* Phone */}
                  <div className={styles.infoItemCard}>
                    <div className={styles.infoIconBadge} aria-hidden="true">
                      <Phone size={20} />
                    </div>
                    <div className={styles.infoContent}>
                      <span className={styles.infoEyebrow}>PHONE</span>
                      <a href="tel:+919876543210" className={`${styles.infoText} ${styles.infoLink}`}>
                        +91 98765 43210
                      </a>
                      <a href="tel:+919391234567" className={`${styles.infoSubtext} ${styles.infoLink}`}>
                        +91 93912 34567
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className={styles.infoItemCard}>
                    <div className={styles.infoIconBadge} aria-hidden="true">
                      <Mail size={20} />
                    </div>
                    <div className={styles.infoContent}>
                      <span className={styles.infoEyebrow}>EMAIL</span>
                      <a href="mailto:info@burgulacotton.org" className={`${styles.infoText} ${styles.infoLink}`}>
                        info@burgulacotton.org
                      </a>
                      <a href="mailto:contact@burgulacotton.org" className={`${styles.infoSubtext} ${styles.infoLink}`}>
                        contact@burgulacotton.org
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className={styles.infoItemCard}>
                    <div className={styles.infoIconBadge} aria-hidden="true">
                      <MapPin size={20} />
                    </div>
                    <div className={styles.infoContent}>
                      <span className={styles.infoEyebrow}>ADDRESS</span>
                      <p className={styles.infoText}>Burgula Cotton Trust</p>
                      <p className={styles.infoSubtext}>Burgula Village, Mahabubnagar District</p>
                      <p className={styles.infoSubtext}>Telangana, India – 509202</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className={styles.infoItemCard}>
                    <div className={styles.infoIconBadge} aria-hidden="true">
                      <Clock size={20} />
                    </div>
                    <div className={styles.infoContent}>
                      <span className={styles.infoEyebrow}>WORKING HOURS</span>
                      <p className={styles.infoText}>Monday – Saturday</p>
                      <p className={styles.infoSubtext}>9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            {/* RIGHT COLUMN: Send Us a Message Form / Success State */}
            <div className={styles.formCard}>
              {status === 'success' ? (
                <div className={styles.successState} role="status" aria-live="polite">
                  <div className={styles.successIconWrap} aria-hidden="true">
                    <CheckCircle2 size={36} className={styles.successCheckIcon} />
                  </div>
                  <h2 className={styles.successHeading}>THANK YOU FOR CONTACTING US</h2>
                  <p className={styles.successDescription}>
                    Your message has been received successfully. We’ll get back to you soon.
                  </p>
                  <p className={styles.successSubtext}>
                    Thank you for reaching out to Burgula Cotton Trust.
                  </p>
                </div>
              ) : (
                <>
                  <div className={styles.formHeader}>
                    <h2 className={styles.formTitle}>Send Us a Message</h2>
                    <p className={styles.formSubtitle}>
                      Fill in the form below and our team will get back to you.
                    </p>
                  </div>

                  {status === 'error' && (
                    <div className={styles.feedbackError} role="alert">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <AlertCircle size={18} />
                        <strong>Unable to send message</strong>
                      </div>
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                    {/* Full Name */}
                    <div className={styles.formGroup}>
                      <label htmlFor="fullName" className={styles.formLabel}>
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="Enter your name"
                        className={styles.inputField}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    {/* Email Address */}
                    <div className={styles.formGroup}>
                      <label htmlFor="emailAddress" className={styles.formLabel}>
                        Email Address *
                      </label>
                      <input
                        id="emailAddress"
                        type="email"
                        required
                        placeholder="Enter your email"
                        className={styles.inputField}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    {/* Phone Number */}
                    <div className={styles.formGroup}>
                      <label htmlFor="phoneNumber" className={styles.formLabel}>
                        Phone Number
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        placeholder="Enter your phone number"
                        className={styles.inputField}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    {/* Enquiry Type — 6 Selectable Grid Options */}
                    <div className={styles.formGroup}>
                      <span className={styles.formLabel}>Enquiry Type *</span>
                      <div className={styles.enquiryGrid} role="radiogroup" aria-label="Enquiry Type">
                        {ENQUIRY_OPTIONS.map((opt) => {
                          const IconComponent = opt.icon;
                          const isSelected = formData.enquiryType === opt.id;
                          return (
                            <div
                              key={opt.id}
                              role="radio"
                              aria-checked={isSelected}
                              tabIndex={0}
                              className={`${styles.enquiryOption} ${isSelected ? styles.enquiryOptionActive : ''}`}
                              onClick={() => setFormData({ ...formData, enquiryType: opt.id })}
                              onKeyDown={(e) => {
                                if (e.key === ' ' || e.key === 'Enter') {
                                  e.preventDefault();
                                  setFormData({ ...formData, enquiryType: opt.id });
                                }
                              }}
                            >
                              <IconComponent size={20} className={styles.enquiryIcon} />
                              <span className={styles.enquiryLabel}>{opt.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message */}
                    <div className={styles.formGroup}>
                      <label htmlFor="messageField" className={styles.formLabel}>
                        Message *
                      </label>
                      <textarea
                        id="messageField"
                        required
                        rows={4}
                        placeholder="Write your message here..."
                        className={styles.textareaField}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className={styles.submitBtn}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>SENDING...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <ArrowRight size={15} aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. LET’S BUILD TOGETHER SECTION
          ==================================================================== */}
      <section className={styles.buildTogetherSection} aria-label="Let's Build Together">
        <div className="container">
          <div className={styles.buildTogetherGrid}>
            {/* Left Narrative */}
            <div className={styles.buildHeaderCol}>
              <h2 className={styles.buildHeading}>Let’s Build Together</h2>
              <p className={styles.buildParagraph}>
                Whether you are a farmer, weaver, designer, brand, researcher or supporter, we would love to hear from you. Together, we can strengthen cotton, handloom and rural communities.
              </p>
            </div>

            {/* Right 3 Cards */}
            <div className={styles.buildCardsRow}>
              {/* PARTNER */}
              <div className={styles.buildCard}>
                <Leaf size={22} className={styles.buildCardIcon} aria-hidden="true" />
                <h3 className={styles.buildCardTitle}>PARTNER</h3>
                <p className={styles.buildCardText}>Collaborate with us for a greater impact.</p>
              </div>

              {/* VISIT */}
              <div className={styles.buildCard}>
                <Users size={22} className={styles.buildCardIcon} aria-hidden="true" />
                <h3 className={styles.buildCardTitle}>VISIT</h3>
                <p className={styles.buildCardText}>Come and see our work on the ground.</p>
              </div>

              {/* SUPPORT */}
              <div className={styles.buildCard}>
                <HeartHandshake size={22} className={styles.buildCardIcon} aria-hidden="true" />
                <h3 className={styles.buildCardTitle}>SUPPORT</h3>
                <p className={styles.buildCardText}>Help us build sustainable livelihoods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
