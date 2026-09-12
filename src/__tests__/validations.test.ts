import { describe, it, expect } from 'vitest';
import {
  B2BEnquirySchema,
  ContactSubmissionSchema,
  CreateOrderSchema,
  SearchQuerySchema,
  TextilesQuerySchema,
  JournalQuerySchema,
} from '../lib/validations';

describe('Validation Schemas & Anti-Spam Protections', () => {
  it('validates a valid B2B trade enquiry', () => {
    const validData = {
      companyName: 'Ananya Design Studio',
      contactName: 'Ananya Rao',
      email: 'ananya@studio.com',
      phone: '+91 9876543210',
      buyerType: 'DESIGNER',
      intendedUse: 'Menswear summer shirting',
      preferredTextileId: 'BC-KK-2801',
      approximateQuantity: '100m',
      timeline: '4 weeks',
      customRequirement: 'Natural madder dye accents',
    };
    const result = B2BEnquirySchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects B2B enquiry with spam bot honeypot populated', () => {
    const botData = {
      companyName: 'Bot Co',
      contactName: 'Bot User',
      email: 'bot@spam.com',
      phone: '+1 5550001111',
      buyerType: 'OTHER',
      intendedUse: 'Spamming',
      website_hp: 'http://spam-link.com', // Filled honeypot
    };
    const result = B2BEnquirySchema.safeParse(botData);
    expect(result.success).toBe(false);
  });

  it('validates contact form submissions with valid email and purpose', () => {
    const validContact = {
      name: 'Vikram',
      email: 'vikram@example.com',
      purpose: 'FABRIC_DEVELOPMENT',
      subject: 'Custom bast hemp blend questions',
      message: 'We would like to explore 30s cotton with hemp weft for upholstery.',
    };
    const result = ContactSubmissionSchema.safeParse(validContact);
    expect(result.success).toBe(true);
  });

  it('rejects contact submission with short message or invalid email', () => {
    const invalidContact = {
      name: 'V',
      email: 'invalid-email',
      purpose: 'GENERAL',
      subject: 'Hi',
      message: 'Short',
    };
    const result = ContactSubmissionSchema.safeParse(invalidContact);
    expect(result.success).toBe(false);
  });

  it('validates order creation with required items and idempotency key', () => {
    const validOrder = {
      idempotencyKey: 'idemp-12345678',
      customerName: 'Kavita Reddy',
      email: 'kavita@domain.com',
      phone: '+91 9988776655',
      shippingAddressLine1: 'Banjara Hills, Road 12',
      city: 'Hyderabad',
      state: 'Telangana',
      postalCode: '500034',
      country: 'India',
      items: [
        {
          textileId: 'tex-001',
          variantId: 'var-001-1',
          itemType: 'SWATCH',
          quantity: 2,
        },
      ],
    };
    const result = CreateOrderSchema.safeParse(validOrder);
    expect(result.success).toBe(true);
  });

  it('validates search query terms', () => {
    expect(SearchQuerySchema.safeParse({ q: 'indigo' }).success).toBe(true);
    expect(SearchQuerySchema.safeParse({ q: '' }).success).toBe(false);
  });

  it('validates textiles query parameters', () => {
    const valid = TextilesQuerySchema.safeParse({
      weave: 'Plain Weave',
      yarnCount: '27s/30s',
      isFeatured: 'true',
      search: 'khadi',
    });
    expect(valid.success).toBe(true);

    const invalid = TextilesQuerySchema.safeParse({
      isFeatured: 'invalid_boolean',
    });
    expect(invalid.success).toBe(false);
  });

  it('validates journal category filter and rejects malformed characters', () => {
    expect(JournalQuerySchema.safeParse({ category: 'field-notes' }).success).toBe(true);
    expect(JournalQuerySchema.safeParse({ category: undefined }).success).toBe(true);
    // Malformed injection strings rejected
    expect(JournalQuerySchema.safeParse({ category: 'notes; DROP TABLE articles;' }).success).toBe(false);
    expect(JournalQuerySchema.safeParse({ category: '<script>' }).success).toBe(false);
  });
});
