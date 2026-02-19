import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, Calculator } from 'lucide-react';
import { articleSchema, faqSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Barista FIRE — Work Part-Time, Live Fully, Retire On Your Terms',
  description:
    'Learn Barista FIRE — build a portfolio that covers most expenses, supplement with enjoyable part-time work. Perfect if you want to leave stressful careers without full retirement.',
  keywords: 'barista FIRE, semi-retirement, part-time FIRE, barista FI, semi-FIRE, work optional',
};

const faqs = [
  {
    question: 'What is Barista FIRE?',
    answer: 'Barista FIRE is a semi-retirement strategy where you build an investment portfolio large enough to cover most of your expenses, then supplement the rest with enjoyable part-time work. The name comes from the Starbucks "barista" — a part-time job that offers health benefits.',
  },
  {
    question: 'Why is it called "Barista" FIRE?',
    answer: 'The name originally referred to the Starbucks employee benefit of health insurance for part-time workers (20+ hours/week). Early retirees could work part-time as baristas to access healthcare while their portfolio covered most living expenses.',
  },
  {
    question: 'How much do I need for Barista FIRE?',
    answer: 'It depends on how much your part-time income covers. If you earn $20K/year part-time and spend $50K/year, you need your portfolio to cover $30K/year: $30K ÷ 0.04 = $750,000 portfolio. The higher your part-time income, the less portfolio you need.',
  },
  {
    question: 'Is Barista FIRE the same as semi-retirement?',
    answer: 'Yes, essentially. Barista FIRE is a form of semi-retirement where you deliberately choose work you enjoy (rather than work you need financially). The key difference from traditional work: you work because you want to, not because you have to.',
  },
];

export default function BaristaFirePage() {
  const schema = [
    articleSchema({
      title: 'Barista FIRE: Complete Guide',
      description: 'Semi-retirement through part-time work and a portfolio covering most expenses',
      path: '/learn/barista-fire',
    }),
    faqSchema(faqs),
  ];

  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <div className="bg-gray-50 min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/learn" className="hover:text-fire-500">Learn</Link>
            <span className="mx-2">→</span>
            <span className="text-navy-700">Barista FIRE</span>
          </nav>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-8 mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">☕</span>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-800">Barista FIRE</h1>
                <p className="text-amber-700 font-semibold">Part-time work, full-time freedom</p>
                <p className="text-gray-500 text-sm mt-1">Portfolio covers most expenses · Part-time work fills the gap</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Barista FIRE sits between full employment and complete early retirement — you build a
              portfolio large enough to cover most expenses, then supplement with enjoyable, flexible
              work. You leave your stressful career, but stay engaged and earn just enough to bridge the gap.
            </p>
          </div>

          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">How Barista FIRE Works</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Barista FIRE lets you reach financial semi-independence earlier than full FIRE by reducing
              the portfolio size needed. Your part-time income covers the gap between your portfolio&apos;s
              4% withdrawal and your actual expenses.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <h3 className="font-semibold text-amber-800 mb-3">Barista FIRE Formula</h3>
              <div className="font-mono text-sm space-y-2">
                <div className="bg-white rounded-lg p-3 border border-amber-100">
                  <p className="text-gray-500 mb-1">Annual expenses: $60,000</p>
                  <p className="text-gray-500 mb-1">Part-time income: $20,000/yr</p>
                  <p className="text-gray-500 mb-1">Portfolio must cover: $40,000</p>
                  <p className="text-amber-700 font-bold">Barista FIRE Number: $40K ÷ 0.04 = $1,000,000</p>
                </div>
                <p className="text-gray-400 text-xs">vs. Full FIRE: $60K ÷ 0.04 = $1,500,000</p>
                <p className="text-amber-700 text-xs font-semibold">You can retire 5-8 years earlier!</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">What Part-Time Work Fits Barista FIRE?</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Coffee shop / barista (origin of the name)',
                'Freelance work in your area of expertise',
                'Part-time consulting',
                'Teaching or tutoring',
                'Retail or hospitality with benefits',
                'Remote contract work',
                'Dog walking / pet sitting',
                'Airbnb hosting / property management',
                'Writing, content creation',
                'Local guide, tour operator',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-600 bg-amber-50 rounded-lg p-3">
                  <span className="text-amber-500">•</span> {item}
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
                  {['Achievable years before full FIRE', 'Maintain social engagement and structure', 'Employer benefits (especially healthcare)', 'Buffer against sequence-of-returns risk', 'Psychological ease of gradual transition'].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 mb-3">Disadvantages</h3>
                <ul className="space-y-2">
                  {['Still technically working (even if you enjoy it)', 'Part-time income may not always be available', 'May feel like "not really retired" to some', 'Requires finding genuinely enjoyable work', 'Income may be inconsistent'].map((c) => (
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

          <div className="bg-navy-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Calculate Your Barista FIRE Number</h2>
            <p className="text-navy-200 text-sm mb-6">
              Use our calculator to see how soon you could achieve Barista FIRE.
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
