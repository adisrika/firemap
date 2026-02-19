import { ImageResponse } from 'next/og';
import { generateOgImageJsx } from '@/lib/seo/ogImageTemplate';

export const runtime = 'edge';
export const alt = 'Barista FIRE — The Semi-Retirement Strategy';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    generateOgImageJsx({
      title: 'Barista FIRE',
      subtitle: 'Leave the high-stress career. Work part-time for income + benefits. Live life now.',
      badge: 'Semi-retirement strategy',
    }),
    { width: 1200, height: 630 }
  );
}
