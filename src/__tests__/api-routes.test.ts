import { describe, it, expect } from 'vitest';
import { NextRequest } from 'next/server';
import { POST as handleB2B } from '../app/api/b2b/route';
import { POST as handleContact } from '../app/api/contact/route';
import { POST as handleOrders } from '../app/api/orders/route';
import { GET as handleSearch } from '../app/api/search/route';
import { GET as handleTextiles } from '../app/api/textiles/route';
import { GET as handleJournal } from '../app/api/journal/route';

describe('API Route Handlers Integration & Error Boundaries', () => {
  describe('/api/b2b', () => {
    it('accepts valid B2B enquiry with 201 response', async () => {
      const req = new NextRequest('http://localhost:3000/api/b2b', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: 'Studio Deccan',
          contactName: 'Ramesh Rao',
          email: 'ramesh@studio-deccan.com',
          phone: '+91 9123456780',
          buyerType: 'DESIGNER',
          intendedUse: 'Sampling for Autumn collection',
        }),
      });

      const res = await handleB2B(req);
      const data = await res.json();

      expect(res.status).toBe(201);
      expect(data.success).toBe(true);
      expect(data.data.enquiryNumber).toMatch(/^ENQ-/);
    });

    it('rejects invalid B2B payload with 400 validation error', async () => {
      const req = new NextRequest('http://localhost:3000/api/b2b', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: '', // invalid
          email: 'not-an-email',
        }),
      });

      const res = await handleB2B(req);
      const data = await res.json();

      expect(res.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.error.code).toBe('VALIDATION_ERROR');
    });

    it('rejects spam bots populating honeypot', async () => {
      const req = new NextRequest('http://localhost:3000/api/b2b', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: 'Spam Bot Corp',
          contactName: 'Bot',
          email: 'bot@spam.com',
          phone: '+1 555-1234',
          buyerType: 'OTHER',
          intendedUse: 'Testing spam filter',
          website_hp: 'https://spam-link.org', // honeypot triggered
        }),
      });

      const res = await handleB2B(req);
      const data = await res.json();

      expect(res.status).toBe(400);
      expect(data.success).toBe(false);
    });
  });

  describe('/api/contact', () => {
    it('accepts valid contact submission with 201 response', async () => {
      const req = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Priya Sen',
          email: 'priya@example.com',
          purpose: 'GENERAL',
          subject: 'Visiting Burgula Trust',
          message: 'Hello, we would love to schedule a visit to the weaver pit-looms in Telangana.',
        }),
      });

      const res = await handleContact(req);
      const data = await res.json();

      expect(res.status).toBe(201);
      expect(data.success).toBe(true);
      expect(data.data.id).toBeDefined();
    });

    it('rejects short messages with 400', async () => {
      const req = new NextRequest('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Priya',
          email: 'priya@example.com',
          purpose: 'GENERAL',
          subject: 'Hi',
          message: 'Short',
        }),
      });

      const res = await handleContact(req);
      const data = await res.json();

      expect(res.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.error.code).toBe('VALIDATION_ERROR');
    });
  });

  describe('/api/orders', () => {
    it('creates an order with confirmed server totalAmount', async () => {
      const req = new NextRequest('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idempotencyKey: `test-order-${Date.now()}`,
          customerName: 'Aarav Mehta',
          email: 'aarav@mehta-textiles.in',
          phone: '+91 9876501234',
          shippingAddressLine1: 'Road No 36, Jubilee Hills',
          city: 'Hyderabad',
          state: 'Telangana',
          postalCode: '500033',
          country: 'India',
          items: [
            {
              textileId: 'tex-001',
              itemType: 'SWATCH',
              quantity: 2,
            },
          ],
        }),
      });

      const res = await handleOrders(req);
      const data = await res.json();

      expect(res.status).toBe(201);
      expect(data.success).toBe(true);
      expect(data.data.orderNumber).toMatch(/^BC-/);
      expect(typeof data.data.totalAmount).toBe('number');
      expect(data.data.totalAmount).toBeGreaterThan(0);
    });
  });

  describe('/api/search', () => {
    it('returns search results for valid search query', async () => {
      const req = new NextRequest('http://localhost:3000/api/search?q=cotton');
      const res = await handleSearch(req);
      const data = await res.json();

      expect(res.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.data.query).toBe('cotton');
      expect(Array.isArray(data.data.textiles)).toBe(true);
    });

    it('rejects empty search queries with 400', async () => {
      const req = new NextRequest('http://localhost:3000/api/search?q=');
      const res = await handleSearch(req);
      const data = await res.json();

      expect(res.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.error.code).toBe('VALIDATION_ERROR');
    });
  });

  describe('/api/textiles', () => {
    it('returns textiles archive with rate limiting headers', async () => {
      const req = new NextRequest('http://localhost:3000/api/textiles?isFeatured=true');
      const res = await handleTextiles(req);
      const data = await res.json();

      expect(res.status).toBe(200);
      expect(data.success).toBe(true);
      expect(Array.isArray(data.data)).toBe(true);
    });

    it('rejects invalid boolean query param with 400', async () => {
      const req = new NextRequest('http://localhost:3000/api/textiles?isFeatured=not_boolean');
      const res = await handleTextiles(req);
      const data = await res.json();

      expect(res.status).toBe(400);
      expect(data.success).toBe(false);
    });
  });

  describe('/api/journal', () => {
    it('returns articles with optional valid category', async () => {
      const req = new NextRequest('http://localhost:3000/api/journal?category=craft-process');
      const res = await handleJournal(req);
      const data = await res.json();

      expect(res.status).toBe(200);
      expect(data.success).toBe(true);
      expect(Array.isArray(data.data)).toBe(true);
    });

    it('rejects malformed category containing malicious characters with 400', async () => {
      const req = new NextRequest('http://localhost:3000/api/journal?category=craft%27%3B--');
      const res = await handleJournal(req);
      const data = await res.json();

      expect(res.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.error.code).toBe('VALIDATION_ERROR');
    });
  });
});
