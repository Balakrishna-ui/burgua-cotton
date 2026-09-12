import { MetadataRoute } from 'next';
import { VERIFIED_TEXTILES, VERIFIED_JOURNAL_ARTICLES } from '@/lib/seed-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://burgulacotton.com';

  // Use stable baseline timestamp for static pages and textile archive to prevent false cache churn
  const STATIC_CONTENT_DATE = new Date('2025-01-15T00:00:00.000Z');

  const staticRoutes = [
    '',
    '/about',
    '/our-story',
    '/capabilities',
    '/textiles',
    '/our-impact',
    '/our-vision',
    '/b2b',
    '/journal',
    '/contact',
    '/search',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: STATIC_CONTENT_DATE,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const textileRoutes = VERIFIED_TEXTILES.map((t) => ({
    url: `${baseUrl}/textiles/${t.slug}`,
    lastModified: STATIC_CONTENT_DATE,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const journalRoutes = VERIFIED_JOURNAL_ARTICLES.map((a) => ({
    url: `${baseUrl}/journal/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...textileRoutes, ...journalRoutes];
}
