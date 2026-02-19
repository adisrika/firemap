import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, Calculator } from 'lucide-react';
import { articleSchema, faqSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Lean FIRE — Complete Guide to Financial Independence on a Lean Budget',
  description:
    'Learn how Lean FIRE works — achieve financial independence on under $40,000 per year. Strategies, FIRE number calculations, pros/cons, and who it\'s best for.',
  keywords: 'lean FIRE, lean FIRE calculator, lean FIRE number, frugal FIRE, FIRE on $40k, minimal FIRE',
};

const faqs = [
  {
    question: 'What is Lean FIRE?',
    answer: 'Lean FIRE means achieving financial independence on a minimal budget — typically under $40,000 per year (under $3,333/month). It requires a FIRE number under $1 million and is achieved through aggressive frugality and lower spending.',
  },
  {
    question: 'What is the Lean FIRE number?',
    answer: 'Using the 4% rule, Lean FIRE number = Annual Expenses ÷ 0.04. For $30,000/year: $30,000 ÷ 0.04 = $750,000. For $40,000/year: $40,000 ÷ 0.04 = $1,000,000.',
  },
  {
    question: 'Who is Lean FIRE best for?',
    answer: 'Lean FIRE is best for single individuals, minimalists, digital nomads, geographic arbitrageurs (living in low cost-of-living areas), and people who prioritize freedom and time over material possessions.',
  },
  {
    question: 'What are the risks of Lean FIRE?',
    answer: 'The main risks are: little buffer for unexpected expenses, healthcare costs straining a lean budget, potential need to return to work during severe market downturns, and lifestyle adjustments that may feel restrictive.',
  },
];

export default function LeanFirePage() {
  const schema = [
    articleSchema({
      title: 'Lean FIRE: Complete Guide',
      description: 'Comprehensive guide to achieving financial independence on a lean budget',
      path: '/learn/lean-fire',
    }),
    faqSchema(faqs),
  ];

  return (
    <>
      {schema.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <div className="bg-gray-50 min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/learn" className="hover:text-fire-500">Learn</Link>
            <span className="mx-2">→</span>
            <span className="text-navy-700">Lean FIRE</span>
          </nav>

          {/* Hero */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">🌱</span>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-800">Lean FIRE</h1>
                <p className="text-green-700 font-semibold">Freedom through frugality</p>
                <p className="text-gray-500 text-sm mt-1">Annual expenses: under $40,000 · FIRE Number: under $1M</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Lean FIRE is the most aggressive form of financial independence — achieving complete
              freedom from work on a minimal budget. Lean FIREs trade material possessions for
              time, often retiring a decade or more earlier than traditional FIRE practitioners.
            </p>
          </div>

          {/* What is Lean FIRE */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">What is Lean FIRE?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lean FIRE practitioners achieve financial independence by keeping their annual expenses
              below <strong>$40,000 per year</strong> ($3,333/month). By minimizing lifestyle costs,
              they dramatically reduce their required FIRE number — often achieving independence with
              a portfolio under $1 million.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The term &quot;lean&quot; refers to both the budget and the mindset — stripping away
              unnecessary spending to focus on what truly brings value and happiness. Many Lean FIREs
              live in low cost-of-living areas, embrace minimalism, or leverage geographic arbitrage
              (living abroad in cheaper countries).
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-semibold text-green-800 mb-3">Lean FIRE Formula</h3>
              <div className="font-mono text-sm space-y-2">
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <span className="text-gray-500">Monthly expenses $2,500 →</span>
                  <span className="text-green-700 font-bold"> FIRE: $750,000</span>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <span className="text-gray-500">Monthly expenses $3,000 →</span>
                  <span className="text-green-700 font-bold"> FIRE: $900,000</span>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-100">
                  <span className="text-gray-500">Monthly expenses $3,333 →</span>
                  <span className="text-green-700 font-bold"> FIRE: $1,000,000</span>
                </div>
              </div>
            </div>
          </section>

          {/* Pros & Cons */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-6">Pros & Cons of Lean FIRE</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4" /> Advantages
                </h3>
                <ul className="space-y-3">
                  {[
                    'Smallest FIRE number — achievable in 10-15 years on average income',
                    'Maximum freedom from employment',
                    'Forces intentional, values-aligned spending',
                    'Less vulnerable to inflation (lower spending base)',
                    'Can be supplemented with occasional work without undermining independence',
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                  <X className="w-4 h-4" /> Disadvantages
                </h3>
                <ul className="space-y-3">
                  {[
                    'Little buffer for unexpected large expenses',
                    'Healthcare costs (especially in the US) can strain lean budgets',
                    'May need to return to work in severe/prolonged market downturns',
                    'Not suitable for those with dependents or high fixed costs',
                    'Lifestyle may feel restrictive if not genuinely aligned with values',
                  ].map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Who it's for */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Is Lean FIRE Right for You?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lean FIRE tends to work best for specific lifestyles and circumstances:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Single individuals or DINK couples without children',
                'Minimalists who genuinely don\'t value material possessions',
                'Digital nomads living abroad in low cost-of-living countries',
                'Those in areas with low cost of living',
                'People with reliable healthcare access outside employment',
                'Those who value time and freedom above all else',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-600 bg-green-50 rounded-lg p-3">
                  <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-navy-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-navy-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Calculate Your Lean FIRE Number</h2>
            <p className="text-navy-200 text-sm mb-6">
              See how quickly you can achieve Lean FIRE based on your income and expenses.
            </p>
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 bg-fire-500 hover:bg-fire-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <Calculator className="w-4 h-4" />
              Open FIRE Calculator <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
