import { ImageResponse } from 'next/og';
import { generateOgImageJsx } from '@/lib/seo/ogImageTemplate';

export const runtime = 'edge';
export const alt = 'FIREmap FIRE Number Calculator';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    generateOgImageJsx({
      title: 'FIRE Number Calculator',
      subtitle: 'Enter your age, income, expenses & savings. Get your personalized FIRE projection instantly.',
      badge: 'Free Calculator',
    }),
    { width: 1200, height: 630 }
  );
}
