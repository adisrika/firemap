import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/calculator', priority: 0.95, changeFrequency: 'monthly' as const },
    { url: '/learn', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/learn/lean-fire', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/learn/fat-fire', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/learn/coast-fire', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/learn/barista-fire', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/learn/four-percent-rule', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/resources', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${siteUrl}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
