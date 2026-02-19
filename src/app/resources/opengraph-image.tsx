import { ImageResponse } from 'next/og';
import { generateOgImageJsx } from '@/lib/seo/ogImageTemplate';

export const runtime = 'edge';
export const alt = 'FIREmap — 30+ Curated FIRE Resources';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    generateOgImageJsx({
      title: '30+ Curated FIRE Resources',
      subtitle: 'Books, podcasts, blogs, calculators, and tools hand-picked for the FIRE community.',
      badge: 'Resources',
    }),
    { width: 1200, height: 630 }
  );
}
