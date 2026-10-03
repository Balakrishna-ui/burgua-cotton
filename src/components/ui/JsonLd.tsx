import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
}

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://burgulacotton.com';


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
    logo: `${SITE_URL}/images/logo2.png`,
    description: 'Premium market-facing handloom cotton and decentralised yarn fabric house rooted in Telangana.',
    foundingLocation: {
      '@type': 'Place',
      name: 'Telangana, India',
    },
    slogan: 'In Cotton We Trust. Handloom cotton, rooted in Telangana. From cotton to yarn to cloth.',
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
