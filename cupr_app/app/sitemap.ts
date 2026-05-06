import type { MetadataRoute } from 'next';
import { ROUTE_METADATA } from './seo';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://cupr.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return Object.values(ROUTE_METADATA).map(route => ({
    url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route.path === '/' ? 1 : 0.7,
  }));
}
