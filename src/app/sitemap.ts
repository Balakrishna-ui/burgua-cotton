import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://burgulacotton.com';

  const STATIC_CONTENT_DATE = new Date('2025-01-15T00:00:00.000Z');

  const staticRoutes = [
    '',
    '/about',
    '/our-story',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: STATIC_CONTENT_DATE,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return staticRoutes;
}
