import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, Calculator } from 'lucide-react';
import { articleSchema, faqSchema } from '@/lib/seo/schemas';
import { MiniFireCalculator } from '@/components/learn/MiniFireCalculator';

export const metadata: Metadata = {
  title: 'Coast FIRE — Save Now, Let Compound Growth Do the Work',
  description:
    'Learn how Coast FIRE works — save aggressively early, reach your coast number, then only work to cover current expenses while compound growth handles retirement.',
  keywords: 'coast FIRE, coast FIRE calculator, coast FIRE number, coast FI, compound growth FIRE',
};

const faqs = [
  {
    question: 'What is Coast FIRE?',
    answer: 'Coast FIRE means saving enough early in life that — even without additional contributions — your investment portfolio will grow to your full FIRE number by traditional retirement age through compound growth alone.',
  },
  {
    question: 'How do I calculate my Coast FIRE number?',
    answer: 'Coast FIRE Number = FIRE Number ÷ (1 + return rate)^years to retirement. For example: $1M FIRE Number, 30 years to retirement at 7%: $1,000,000 ÷ (1.07)^30 = ~$131,000 Coast FIRE Number.',
  },
  {
    question: 'What do you do after reaching Coast FIRE?',
    answer: 'After reaching Coast FIRE, you only need to earn enough to cover your current living expenses. You can take lower-paying but more meaningful work, go part-time, take sabbaticals, or work in lower-stress roles — all without worrying about retirement savings.',
  },
  {
    question: 'What is the difference between Coast FIRE and Barista FIRE?',
    answer: 'Coast FIRE focuses on the math — having enough invested that growth alone will fund retirement. Barista FIRE is similar but emphasizes the lifestyle aspect: working enjoyable part-time jobs (like a barista) that also provide benefits like health insurance.',
  },
];

export default function CoastFirePage() {
  const schema = [
    articleSchema({
      title: 'Coast FIRE: Complete Guide',
      description: 'Save aggressively early, then let compound growth handle your retirement',
      path: '/learn/coast-fire',
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
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/learn" className="hover:text-fire-500">Learn</Link>
            <span className="mx-2">→</span>
            <span className="text-navy-700">Coast FIRE</span>
          </nav>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-8 mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">🏄</span>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-800">Coast FIRE</h1>
                <p className="text-cyan-700 font-semibold">Save now, coast to retirement</p>
                <p className="text-gray-500 text-sm mt-1">Reach your coast number → let compound growth handle the rest</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Coast FIRE is a powerful FIRE strategy where you save aggressively early in your career
              until your portfolio reaches a specific threshold — after which you only need to earn
              enough to cover current expenses. Compound interest does the heavy lifting for retirement.
            </p>
          </div>

          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">How Coast FIRE Works</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The math behind Coast FIRE is simple: if you invest enough money now, compound interest
              will grow it to your full FIRE number by the time you reach traditional retirement age —
              even if you never invest another dollar.
            </p>

            <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5 mb-4">
              <h3 className="font-semibold text-cyan-800 mb-3">Coast FIRE Formula</h3>
              <div className="font-mono text-sm bg-white rounded-lg p-4 border border-cyan-100">
                <p className="text-gray-600 mb-1">Coast FIRE Number =</p>
                <p className="text-cyan-700 font-bold text-base">
                  FIRE Number ÷ (1 + r)<sup>n</sup>
                </p>
                <p className="text-gray-400 text-xs mt-2">r = annual return rate, n = years until retirement</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-navy-800">Example Calculations (7% return, $1M FIRE number):</h3>
              {[
                { years: 40, coast: '$67,000', note: 'Age 25 → retire at 65' },
                { years: 30, coast: '$131,000', note: 'Age 30 → retire at 60' },
                { years: 20, coast: '$258,000', note: 'Age 40 → retire at 60' },
                { years: 15, coast: '$362,000', note: 'Age 45 → retire at 60' },
              ].map((ex) => (
                <div key={ex.years} className="flex justify-between items-center bg-gray-50 rounded-lg p-3 text-sm">
                  <span className="text-gray-600">{ex.note}</span>
                  <span className="text-cyan-700 font-bold">{ex.coast}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">The Coast FIRE Journey</h2>
            <div className="relative space-y-6">
              {[
                { phase: 'Phase 1: Aggressive Savings', desc: 'Save 40-60% of income and invest in low-cost index funds. The goal is to reach your Coast FIRE number as fast as possible.', color: 'bg-fire-500' },
                { phase: 'Phase 2: Reach Coast FIRE Number', desc: 'Once your portfolio hits the Coast number, you have optionality. You can work for enjoyment rather than necessity.', color: 'bg-gold' },
                { phase: 'Phase 3: Coast!', desc: 'Work only enough to cover current expenses. The portfolio grows on its own. Take sabbaticals, go part-time, change careers.', color: 'bg-cyan-500' },
                { phase: 'Phase 4: Full FIRE', desc: 'At traditional retirement age, your portfolio has grown to your full FIRE number through compound growth alone.', color: 'bg-green-500' },
              ].map((phase, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`w-3 h-3 rounded-full ${phase.color} shrink-0 mt-1.5`} />
                  <div>
                    <p className="font-semibold text-navy-800 mb-1">{phase.phase}</p>
                    <p className="text-gray-600 text-sm">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-6">Pros & Cons</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-700 mb-3">Advantages</h3>
                <ul className="space-y-2">
                  {['Removes retirement saving pressure once threshold is reached', 'Allows career pivots to meaningful/lower-paying work', 'Compound growth does the heavy lifting', 'Achievable intermediate goal that feels real', 'Reduces financial stress significantly'].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 mb-3">Disadvantages</h3>
                <ul className="space-y-2">
                  {['Still working until traditional retirement age', 'Requires discipline not to touch investments', 'Inflation over long periods is a risk', 'Healthcare still needs to be funded', 'Must trust long market growth assumptions'].map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

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

          <MiniFireCalculator variant="coast" />

          <div className="bg-navy-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Calculate Your Coast FIRE Number</h2>
            <p className="text-navy-200 text-sm mb-6">
              Our calculator shows your Coast FIRE number alongside your full FIRE projection.
            </p>
            <Link href="/calculator" className="inline-flex items-center gap-2 bg-fire-500 hover:bg-fire-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              <Calculator className="w-4 h-4" />
              Open FIRE Calculator <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
