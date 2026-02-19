import type { Metadata } from 'next';
import { FireCalculatorShell } from '@/components/calculator/FireCalculatorShell';
import { webApplicationSchema } from '@/lib/seo/schemas';
import { parseCalculatorParams } from '@/lib/calculator/urlParams';

export const metadata: Metadata = {
  title: 'FIRE Calculator — Personalized Financial Independence Calculator',
  description:
    'Calculate your exact FIRE number with personalized projections. Enter your age, income, expenses, and dependents to see your path to early retirement with charts and milestones.',
  keywords:
    'FIRE number calculator, financial independence calculator, early retirement calculator, coast FIRE calculator, 4% rule calculator',
};

export default function CalculatorPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const initialInputs = parseCalculatorParams(searchParams);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema()) }}
      />
      <div className="bg-gray-50 min-h-screen pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block text-fire-500 text-sm font-semibold tracking-wider uppercase mb-3">
              Free FIRE Calculator
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4">
              Calculate Your FIRE Number
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get a personalized projection based on your age, income, expenses, and dependents.
              Results update instantly — no sign-up required.
            </p>
          </div>

          <FireCalculatorShell initialInputs={initialInputs} />
        </div>
      </div>
    </>
  );
}
