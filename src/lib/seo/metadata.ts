import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://myfiremap.com';
const siteName = 'FIREmap';
const siteDescription =
  'Calculate your FIRE number, learn about financial independence strategies, and find curated resources to retire early. Free FIRE calculator with personalized projections.';

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function generatePageMetadata(options: PageMetadataOptions): Metadata {
  const {
    title,
    description,
    path = '',
    keywords = [],
    noIndex = false,
  } = options;

  const fullTitle = path === '' ? `${siteName} — ${title}` : `${title} | ${siteName}`;
  const canonicalUrl = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      'FIRE',
      'financial independence',
      'retire early',
      'FIRE calculator',
      'FIRE number',
      ...keywords,
    ].join(', '),
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: '@firemap_app',
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}

export { siteUrl, siteName, siteDescription };
