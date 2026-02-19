import { ImageResponse } from 'next/og';
import { generateOgImageJsx } from '@/lib/seo/ogImageTemplate';

export const runtime = 'edge';
export const alt = 'FIREmap FIRE Learning Hub';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    generateOgImageJsx({
      title: 'FIRE Learning Hub',
      subtitle: 'Lean FIRE · Fat FIRE · Coast FIRE · Barista FIRE · The 4% Rule',
      badge: 'Learn FIRE',
    }),
    { width: 1200, height: 630 }
  );
}
