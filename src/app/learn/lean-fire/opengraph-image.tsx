import { ImageResponse } from 'next/og';
import { generateOgImageJsx } from '@/lib/seo/ogImageTemplate';

export const runtime = 'edge';
export const alt = 'Lean FIRE — Financial Independence Under $40K/year';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    generateOgImageJsx({
      title: 'Lean FIRE',
      subtitle: 'Achieve financial independence on under $40K/year. The minimalist path to early retirement.',
      badge: 'Under $40K/year',
    }),
    { width: 1200, height: 630 }
  );
}
