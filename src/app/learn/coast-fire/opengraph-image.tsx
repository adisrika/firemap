import { ImageResponse } from 'next/og';
import { generateOgImageJsx } from '@/lib/seo/ogImageTemplate';

export const runtime = 'edge';
export const alt = 'Coast FIRE — Save Now, Coast to Retirement';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    generateOgImageJsx({
      title: 'Coast FIRE',
      subtitle: 'Save aggressively now, then stop and let compound interest do the rest.',
      badge: 'Save now, coast later',
    }),
    { width: 1200, height: 630 }
  );
}
