import { ImageResponse } from 'next/og';
import { generateOgImageJsx } from '@/lib/seo/ogImageTemplate';

export const runtime = 'edge';
export const alt = 'Fat FIRE — $100K+/year Lifestyle in Early Retirement';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    generateOgImageJsx({
      title: 'Fat FIRE',
      subtitle: 'Retire early without sacrificing lifestyle. $100K+/year financial independence.',
      badge: '$100K+/year',
    }),
    { width: 1200, height: 630 }
  );
}
