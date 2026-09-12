import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import {
  JsonLd,
  createOrganizationSchema,
  createProductSchema,
  createArticleSchema,
} from '../components/ui/JsonLd';

describe('JSON-LD Structured Data & Security', () => {
  it('renders valid application/ld+json script tag', () => {
    const orgSchema = createOrganizationSchema();
    const { container } = render(<JsonLd data={orgSchema} />);
    const script = container.querySelector('script[type="application/ld+json"]');

    expect(script).not.toBeNull();
    const parsed = JSON.parse(script!.textContent || '{}');
    expect(parsed['@type']).toBe('Organization');
    expect(parsed.name).toBe('Burgula Cotton');
  });

  it('escapes </script> tags and HTML comments to prevent XSS breakout', () => {
    const maliciousPayload = {
      '@type': 'Product',
      name: 'Malicious Fabric</script><script>alert("xss")</script>',
      description: '<!-- malicious comment breakout -->',
    };

    const { container } = render(<JsonLd data={maliciousPayload} />);
    const htmlContent = container.innerHTML;

    // Must not contain raw unescaped closing script tag inside script contents
    expect(htmlContent).not.toContain('</script><script>');
    expect(htmlContent).toContain('<\\/script>');
    expect(htmlContent).toContain('<\\!--');
  });

  it('ensures product and article schemas generate absolute image URLs', () => {
    const productSchema = createProductSchema({
      name: 'Khadki Plain',
      code: 'BC-KK-01',
      slug: 'khadki-plain',
      shortDescription: 'Classic weave',
      heroImage: '/images/textiles/khadki.jpg',
      swatchPrice: 150,
    });

    expect(productSchema.image).toMatch(/^https?:\/\//);
    expect(productSchema.image).toContain('/images/textiles/khadki.jpg');

    const articleSchema = createArticleSchema({
      title: 'Decentralised Spinning',
      slug: 'decentralised-spinning',
      summary: 'Story of rural ginning',
      featuredImage: '/images/journal/spinning.jpg',
      publishedAt: '2025-01-15T00:00:00Z',
    });

    expect(articleSchema.image).toMatch(/^https?:\/\//);
    expect(articleSchema.image).toContain('/images/journal/spinning.jpg');
  });
});
