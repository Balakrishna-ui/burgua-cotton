import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
}

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://burgulacotton.com';

function toAbsoluteUrl(pathOrUrl: string): string {
  if (!pathOrUrl) return '';
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }
  return `${SITE_URL}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}

export function JsonLd({ data }: JsonLdProps) {
  const sanitizedJson = JSON.stringify(data)
    .replace(/<\//g, '<\\/')
    .replace(/<!--/g, '<\\!--')
    .replace(/<script/gi, '<\\script');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitizedJson }}
    />
  );
}

export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Burgula Cotton',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Premium market-facing handloom cotton and decentralised yarn fabric house rooted in Telangana.',
    foundingLocation: {
      '@type': 'Place',
      name: 'Telangana, India',
    },
    slogan: 'In Cotton We Trust. Handloom cotton, rooted in Telangana. From cotton to yarn to cloth.',
  };
}

export function createProductSchema(textile: {
  name: string;
  code: string;
  slug: string;
  shortDescription: string;
  heroImage: string;
  basePrice?: number;
  swatchPrice: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: textile.name,
    image: toAbsoluteUrl(textile.heroImage),
    description: textile.shortDescription,
    sku: textile.code,
    mpn: textile.code,
    brand: {
      '@type': 'Brand',
      name: 'Burgula Cotton',
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/textiles/${textile.slug}`,
      priceCurrency: 'INR',
      price: textile.basePrice || textile.swatchPrice,
      availability: 'https://schema.org/InStock',
    },
  };
}

export function createArticleSchema(article: {
  title: string;
  slug: string;
  summary: string;
  featuredImage: string;
  publishedAt: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    image: toAbsoluteUrl(article.featuredImage),
    description: article.summary,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Burgula Cotton Editorial',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Burgula Cotton',
    },
  };
}

export function createBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: it.item,
    })),
  };
}
