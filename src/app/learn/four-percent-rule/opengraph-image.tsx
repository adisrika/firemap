import { ImageResponse } from 'next/og';
import { generateOgImageJsx } from '@/lib/seo/ogImageTemplate';

export const runtime = 'edge';
export const alt = 'The 4% Rule — The Foundation of FIRE';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    generateOgImageJsx({
      title: 'The 4% Rule',
      subtitle: 'The math behind FIRE. Your FIRE number = annual expenses ÷ 0.04.',
      badge: 'Foundation of FIRE',
    }),
    { width: 1200, height: 630 }
  );
}
