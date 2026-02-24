import type { Metadata } from 'next';
import { HeroSection } from '@/components/landing/HeroSection';
import { StatsSection } from '@/components/landing/StatsSection';
import { FireTypesOverview } from '@/components/landing/FireTypesOverview';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';

export const metadata: Metadata = {
  title: 'FIREmap — Free FIRE Calculator & Your Roadmap to Financial Independence',
  description:
    'Calculate your FIRE number instantly. Learn about Lean, Fat, Coast & Barista FIRE. Personalized projections based on your age, income, expenses & dependents. Free, no sign-up.',
  keywords:
    'FIRE number calculator, financial independence retire early, FIRE calculator, lean FIRE, fat FIRE, coast FIRE, barista FIRE, 4 percent rule',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FireTypesOverview />
      <HowItWorksSection />
    </>
  );
}
