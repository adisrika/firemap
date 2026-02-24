import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, Calculator } from 'lucide-react';
import { articleSchema, faqSchema } from '@/lib/seo/schemas';
import { MiniFireCalculator } from '@/components/learn/MiniFireCalculator';

export const metadata: Metadata = {
  title: 'Fat FIRE — Complete Guide to Retiring Abundantly on $100K+/Year',
  description:
    'Learn how Fat FIRE works — retire on $100,000+ per year without working. Strategies, FIRE number calculations, how to achieve Fat FIRE, and who it\'s for.',
  keywords: 'fat FIRE, fat FIRE calculator, fat FIRE number, retire rich, FIRE $100k, luxury early retirement',
};

const faqs = [
  {
    question: 'What is Fat FIRE?',
    answer: 'Fat FIRE means achieving financial independence on $100,000+ per year in annual expenses. It typically requires a portfolio of $2.5M or more, allowing you to retire comfortably with no lifestyle sacrifices.',
  },
  {
    question: 'How much do you need for Fat FIRE?',
    answer: 'Fat FIRE requires at least $2.5M in invested assets for $100K/year spending. $4M supports $160K/year. $5M supports $200K/year — all using the 4% safe withdrawal rate rule.',
  },
  {
    question: 'How long does Fat FIRE take to achieve?',
    answer: 'Fat FIRE typically takes 20-35 years for high earners. Those with household incomes of $200K+ and 40-50% savings rates can potentially achieve it in 15-20 years.',
  },
  {
    question: 'What income do you need for Fat FIRE?',
    answer: 'Fat FIRE is most achievable with household incomes of $150K-$500K+. Even on high income, a 40%+ savings rate is typically required. The key is maintaining a large gap between income and spending.',
  },
];

export default function FatFirePage() {
  const schema = [
    articleSchema({
      title: 'Fat FIRE: Complete Guide',
      description: 'Comprehensive guide to retiring abundantly on $100K+ per year',
      path: '/learn/fat-fire',
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
            <span className="text-navy-700">Fat FIRE</span>
          </nav>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-8 mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">💰</span>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-800">Fat FIRE</h1>
                <p className="text-orange-700 font-semibold">Retire abundantly, never compromise</p>
                <p className="text-gray-500 text-sm mt-1">Annual expenses: $100,000+ · FIRE Number: $2.5M+</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Fat FIRE is financial independence without lifestyle sacrifices — retiring on $100,000 or
              more per year, maintaining travel, dining, entertainment, and all the comforts you enjoy
              today. It requires a large portfolio but offers complete freedom and maximum security.
            </p>
          </div>

          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">What is Fat FIRE?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Fat FIRE practitioners retire with a portfolio large enough to support
              <strong> $100,000+ in annual spending</strong> using the 4% safe withdrawal rate.
              Unlike Lean FIRE which requires frugality, Fat FIRE preserves your current (or aspirational)
              lifestyle entirely.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The term was popularized in the FIRE community to distinguish those pursuing comfortable,
              luxury-adjacent retirement from those pursuing minimal spending. Fat FIRE is aspirational
              but achievable — particularly for high-income professionals in finance, tech, medicine,
              and law who maintain disciplined saving habits.
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h3 className="font-semibold text-orange-800 mb-3">Fat FIRE Numbers</h3>
              <div className="font-mono text-sm space-y-2">
                {[
                  ['$8,333/mo ($100K/yr)', '$2,500,000'],
                  ['$12,500/mo ($150K/yr)', '$3,750,000'],
                  ['$16,667/mo ($200K/yr)', '$5,000,000'],
                  ['$25,000/mo ($300K/yr)', '$7,500,000'],
                ].map(([exp, fire]) => (
                  <div key={exp} className="bg-white rounded-lg p-3 border border-orange-100 flex justify-between">
                    <span className="text-gray-500">{exp}</span>
                    <span className="text-orange-700 font-bold">{fire}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-6">Pros & Cons of Fat FIRE</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-700 mb-3">Advantages</h3>
                <ul className="space-y-3">
                  {[
                    'No lifestyle sacrifices — retire the way you live now',
                    'Large buffer for healthcare, dependents, emergencies',
                    'Most resilient to market downturns and inflation',
                    'Ability to give generously and leave a legacy',
                    'Complete time freedom without budget anxiety',
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 mb-3">Disadvantages</h3>
                <ul className="space-y-3">
                  {[
                    'Requires very high income and/or decades of saving',
                    'Typically takes 20-35 years even with high savings rate',
                    'Risk of lifestyle inflation pre-retirement undermining progress',
                    'Complex tax planning as portfolio grows',
                    'Identity challenges if career was central to self-worth',
                  ].map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Path to Fat FIRE</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Maximize income', desc: 'Invest in high-earning skills, negotiate aggressively, pursue promotions and side income. Fat FIRE requires capital.' },
                { step: '2', title: 'Resist lifestyle inflation', desc: 'The Fat FIRE trap: as income grows, spending grows too. Keep lifestyle increases modest relative to income growth.' },
                { step: '3', title: 'Invest in low-cost index funds', desc: 'Maximize tax-advantaged accounts (401k, IRA, HSA), then invest in taxable brokerage. Keep fees minimal.' },
                { step: '4', title: 'Plan for healthcare', desc: 'Healthcare is the #1 expense for early retirees. Budget for ACA premiums, build an HSA, or plan for international coverage.' },
                { step: '5', title: 'Optimize taxes', desc: 'Tax-loss harvesting, Roth conversions, asset location, and legacy planning become critical at Fat FIRE portfolio sizes.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-fire-500 text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-800">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
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

          <MiniFireCalculator variant="fat" />

          <div className="bg-navy-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Calculate Your Fat FIRE Number</h2>
            <p className="text-navy-200 text-sm mb-6">
              See exactly how long it will take to achieve Fat FIRE based on your income and savings rate.
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
