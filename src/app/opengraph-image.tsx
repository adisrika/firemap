import { ImageResponse } from 'next/og';
import { generateOgImageJsx } from '@/lib/seo/ogImageTemplate';

export const runtime = 'edge';
export const alt = 'FIREmap — Your Roadmap to Financial Independence';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    generateOgImageJsx({
      title: 'Your Roadmap to Financial Independence',
      subtitle: 'Free FIRE calculator, learning guides, and curated resources.',
      badge: 'FIREmap',
    }),
    { width: 1200, height: 630 }
  );
}
