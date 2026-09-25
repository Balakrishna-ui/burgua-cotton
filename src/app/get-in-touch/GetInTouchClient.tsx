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

              {/* Our Location Block */}
              <div className={styles.locationBlock}>
                <h2 className={styles.sectionTitle}>Our Location</h2>
                <p className={styles.sectionSubtitle}>
                  Visit us to experience our work, meet the community and learn more about our initiatives.
                </p>

                <div className={styles.mapCard}>
                  {/* Clean Vector Map Graphic matching the reference */}
                  <svg
                    className={styles.mapSvg}
                    viewBox="0 0 540 250"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Landmass background */}
                    <rect width="540" height="250" fill="#E8EFE6" />

                    {/* Secondary roads / terrain zones */}
                    <path
                      d="M -10 180 Q 150 160 300 200 T 560 170"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="18"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 120 -10 Q 200 90 240 180 T 320 260"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="14"
                      strokeLinecap="round"
                    />

                    {/* Main arterial highway (Yellow road on left) */}
                    <path
                      d="M 60 -10 L 60 260"
                      fill="none"
                      stroke="#FEE799"
                      strokeWidth="16"
                    />
                    <path
                      d="M 60 -10 L 60 260"
                      fill="none"
                      stroke="#E5B948"
                      strokeWidth="2"
                    />

                    {/* Connecting village street */}
                    <path
                      d="M 60 135 C 130 135 180 145 280 145 C 360 145 420 120 550 110"
                      fill="none"
                      stroke="#FEE799"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />

                    {/* Green vegetative zone patches */}
                    <ellipse cx="440" cy="60" rx="90" ry="50" fill="#DCE9D8" opacity="0.7" />
                    <ellipse cx="160" cy="40" rx="70" ry="35" fill="#DCE9D8" opacity="0.6" />
                    <ellipse cx="460" cy="210" rx="75" ry="40" fill="#DCE9D8" opacity="0.7" />

                    {/* Landmark: Burgula Town label */}
                    <circle cx="95" cy="115" r="3.5" fill="#5C554E" />
                    <text x="106" y="118" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#2E2B27">
                      Burgula
                    </text>

                    {/* Secondary landmark text */}
                    <circle cx="215" cy="145" r="3" fill="#7A746E" />
                    <text x="215" y="137" fontFamily="system-ui, sans-serif" fontSize="10" fill="#6B655E" textAnchor="end">
                      Burgula
                    </text>

                    {/* Temple Landmark */}
                    <circle cx="315" cy="120" r="3" fill="#8B857E" />
                    <text x="325" y="123" fontFamily="system-ui, sans-serif" fontSize="10.5" fill="#5F5953">
                      Burgula Shivalayam
                    </text>

                    {/* School Landmark */}
                    <circle cx="360" cy="178" r="7" fill="#6C8294" />
                    <circle cx="360" cy="178" r="3.5" fill="#FFFFFF" />
                    <text x="372" y="176" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600" fill="#425563">
                      ZP High School
                    </text>
                    <text x="372" y="188" fontFamily="system-ui, sans-serif" fontSize="9" fill="#5C6F7D">
                      Burgula
                    </text>

                    {/* Central Burgula Cotton Trust Pin (Prominent Red Marker) */}
                    <g transform="translate(268, 126)">
                      {/* Pin shadow */}
                      <ellipse cx="0" cy="16" rx="8" ry="3" fill="rgba(0,0,0,0.18)" />
                      {/* Red Pin Body */}
                      <path
                        d="M 0 16 C -3 10 -10 5 -10 -2 C -10 -8 -5 -13 0 -13 C 5 -13 10 -8 10 -2 C 10 5 3 10 0 16 Z"
                        fill="#D32F2F"
                      />
                      {/* Inner Pin White Dot */}
                      <circle cx="0" cy="-2" r="3.8" fill="#FFFFFF" />
                      {/* Text label beside pin */}
                      <text
                        x="14"
                        y="-4"
                        fontFamily="system-ui, sans-serif"
                        fontSize="11.5"
                        fontWeight="700"
                        fill="#A71D1D"
                      >
                        Burgula
                      </text>
                      <text
                        x="14"
                        y="8"
                        fontFamily="system-ui, sans-serif"
                        fontSize="11.5"
                        fontWeight="700"
                        fill="#A71D1D"
                      >
                        Cotton Trust
                      </text>
                    </g>
                  </svg>

                  {/* View on Google Maps Button */}
                  <a
                    href="https://maps.google.com/?q=Burgula,+Farooqnagar,+Telangana+509202"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapBtn}
                  >
                    <span>View on Google Maps</span>
                    <ArrowRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Send Us a Message Form */}
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <p className={styles.formSubtitle}>
                  Fill in the form below and our team will get back to you.
                </p>
              </div>

              {status === 'success' && (
                <div className={styles.feedbackSuccess} role="status">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <CheckCircle2 size={18} />
                    <strong>Thank you!</strong>
                  </div>
                  We have received your message. Our team will get back to you shortly.
                </div>
              )}

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

      {/* ====================================================================
          4. FINAL FEATURE SECTION — A SHARED FUTURE
          ==================================================================== */}
      <section className={styles.featureSection} aria-label="A Shared Future">
        <div className="container">
          <div className={styles.featureGrid}>
            {/* Left: Cotton Image */}
            <div className={styles.featureImageWrapper}>
              <Image
                src="/images/journey-strip/cotton.png"
                alt="Ripe organic cotton bolls ready for harvest in Burgula"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                className={styles.featureImage}
              />
            </div>

            {/* Right: Text Card Panel */}
            <div className={styles.featureContent}>
              <div className={styles.featureEyebrowRow}>
                <span className={styles.featureEyebrowDash} aria-hidden="true" />
                <span className={styles.featureEyebrow}>A SHARED FUTURE</span>
              </div>
              <h2 className={styles.featureHeading}>From Cotton to Community</h2>
              <p className={styles.featureParagraph}>
                We believe in partnerships, knowledge sharing and collective action to create a more equitable and sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
