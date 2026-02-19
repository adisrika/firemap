import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calculator } from 'lucide-react';
import { articleSchema, faqSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'The 4% Rule — The Foundation of FIRE Retirement Planning',
  description:
    'Everything you need to know about the 4% rule: what it is, the research behind it, its limitations, how to apply it, and what critics say. The most important concept in FIRE.',
  keywords: '4 percent rule, 4% rule FIRE, safe withdrawal rate, Trinity Study, William Bengen, retirement withdrawal rate, sequence of returns risk',
};

const faqs = [
  {
    question: 'What is the 4% rule?',
    answer: 'The 4% rule states that you can withdraw 4% of your portfolio in year one of retirement, then adjust that amount for inflation each year, and have a very high probability of not running out of money over a 30-year retirement period.',
  },
  {
    question: 'Where did the 4% rule come from?',
    answer: 'Financial advisor William Bengen introduced the 4% rule in his 1994 paper "Determining Withdrawal Rates Using Historical Data." He analyzed historical stock and bond returns from 1926-1976 and found that 4% was the safe withdrawal rate that survived every 30-year period in history.',
  },
  {
    question: 'Is the 4% rule still valid today?',
    answer: 'The 4% rule remains a useful starting point but has faced some scrutiny due to today\'s lower expected future returns and higher valuations. Some researchers now suggest 3-3.5% for early retirees with 40-50 year horizons. Big ERN\'s Safe Withdrawal Rate Series provides the most comprehensive modern analysis.',
  },
  {
    question: 'Does the 4% rule work for early retirement (40+ year horizon)?',
    answer: 'The original Trinity Study was based on a 30-year retirement. For early retirees with 40-50+ year horizons, the 4% rule has more risk. Many FIRE practitioners use 3-3.5% withdrawal rates or plan for some flexibility (like part-time work in down markets).',
  },
  {
    question: 'What is sequence of returns risk?',
    answer: 'Sequence of returns risk is the danger of experiencing poor market returns in the early years of retirement. If your portfolio drops 40% in year 1-3 while you\'re withdrawing 4%, you may permanently impair your ability to recover — even if markets later boom.',
  },
  {
    question: 'What is the Trinity Study?',
    answer: 'The Trinity Study (1998) by Cooley, Hubbard and Walz was a landmark academic paper that tested various withdrawal rates against historical data. It found that a 4% withdrawal rate from a 50/50 stock-bond portfolio had a 95%+ success rate over 30 years.',
  },
];

export default function FourPercentRulePage() {
  const schema = [
    articleSchema({
      title: 'The 4% Rule: Complete Guide for FIRE Planning',
      description: 'The foundational concept behind FIRE — safe withdrawal rates explained',
      path: '/learn/four-percent-rule',
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
            <span className="text-navy-700">The 4% Rule</span>
          </nav>

          {/* Hero */}
          <div className="bg-gradient-to-br from-navy-800 to-navy-950 rounded-2xl p-8 mb-10 text-white">
            <p className="text-fire-400 text-sm font-semibold tracking-wider uppercase mb-3">
              The Cornerstone of FIRE
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
              The 4% Rule Explained
            </h1>
            <p className="text-navy-200 leading-relaxed max-w-2xl">
              The 4% rule is the most important concept in FIRE planning. It tells you exactly how
              much you can withdraw from your portfolio each year without running out of money —
              and it&apos;s backed by decades of research.
            </p>
          </div>

          {/* What is it */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">What is the 4% Rule?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The 4% rule states: <em>withdraw 4% of your portfolio value in year one of retirement,
              then adjust that amount for inflation each year.</em> Following this rule, historical
              data shows your portfolio has survived every 30-year retirement period in the last century.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-fire-50 border border-fire-200 rounded-xl p-5">
                <h3 className="font-bold text-fire-700 mb-2">The Rule in Practice</h3>
                <div className="font-mono text-sm space-y-2">
                  <div className="bg-white rounded p-2">
                    <span className="text-gray-500">$1M portfolio</span>
                    <span className="text-fire-600 font-bold"> → $40,000/yr</span>
                  </div>
                  <div className="bg-white rounded p-2">
                    <span className="text-gray-500">$1.5M portfolio</span>
                    <span className="text-fire-600 font-bold"> → $60,000/yr</span>
                  </div>
                  <div className="bg-white rounded p-2">
                    <span className="text-gray-500">$2.5M portfolio</span>
                    <span className="text-fire-600 font-bold"> → $100,000/yr</span>
                  </div>
                </div>
              </div>
              <div className="bg-navy-800 text-white rounded-xl p-5">
                <h3 className="font-bold text-fire-400 mb-2">The FIRE Number Formula</h3>
                <p className="font-mono text-sm mb-2">FIRE Number = Annual Expenses × 25</p>
                <p className="font-mono text-sm mb-3">or: Annual Expenses ÷ 0.04</p>
                <p className="text-navy-300 text-xs">Multiplying by 25 = dividing by 4% = the same thing</p>
              </div>
            </div>
          </section>

          {/* History */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-6">The Research Behind the Rule</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-fire-500 pl-5">
                <h3 className="font-bold text-navy-800 mb-1">William Bengen (1994)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Financial advisor William Bengen analyzed historical data from 1926-1992 and discovered
                  that a 4% withdrawal rate from a portfolio of 50% stocks / 50% bonds never failed over
                  any 30-year period in history. This became known as SAFEMAX — the maximum safe withdrawal rate.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-5">
                <h3 className="font-bold text-navy-800 mb-1">The Trinity Study (1998)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cooley, Hubbard, and Walz published the landmark Trinity Study which tested multiple
                  withdrawal rates (3%, 4%, 5%, 6%) against historical data. It showed that a 4% withdrawal
                  rate from a stock-heavy portfolio succeeded in 95%+ of all 30-year periods tested.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-5">
                <h3 className="font-bold text-navy-800 mb-1">Big ERN&apos;s SWR Series (2016-present)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Karsten Jeske (Big ERN) published the most comprehensive modern analysis of safe
                  withdrawal rates in 50+ parts. His research accounts for today&apos;s high valuations,
                  sequence-of-returns risk, and extended retirement horizons common in FIRE — suggesting
                  3.25-3.5% for 40-50 year retirements.
                </p>
              </div>
            </div>
          </section>

          {/* Limitations */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Limitations & Criticisms</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Originally designed for 30-year retirements',
                  detail: 'Early retirees at 40 may need 50+ years of portfolio longevity. The 4% rule becomes riskier over longer horizons. Consider 3-3.5% for very long retirements.',
                },
                {
                  title: 'Sequence of returns risk',
                  detail: 'A severe bear market in the first 5 years of retirement can permanently cripple a 4% withdrawal strategy. This is sequence-of-returns risk — the biggest threat to early retirees.',
                },
                {
                  title: 'Today\'s lower expected returns',
                  detail: 'Low interest rates and high stock valuations (high CAPE ratios) have led some researchers to lower their expected return assumptions, suggesting more conservative withdrawal rates.',
                },
                {
                  title: 'US-centric historical data',
                  detail: 'The original research used US market data, which has historically outperformed global markets. International early retirees may need more conservative withdrawal rates.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <div className="w-1 bg-amber-400 rounded shrink-0" />
                  <div>
                    <p className="font-semibold text-navy-800 mb-1">{item.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-navy-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Practical guidance */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">How to Apply the 4% Rule Safely</h2>
            <div className="space-y-4">
              {[
                { title: 'Use a flexible withdrawal strategy', desc: 'Plan to reduce spending by 10-15% during market downturns. This "flexible withdrawals" approach dramatically increases portfolio survival rates.' },
                { title: 'Keep 1-2 years of expenses in cash', desc: 'A cash buffer means you won\'t be forced to sell stocks at depressed prices during a bear market — protecting against sequence of returns risk.' },
                { title: 'Consider a slightly lower rate (3.5%)', desc: 'If retiring before 45 or in a period of high valuations, using 3.5% as your withdrawal rate adds significant safety margin.' },
                { title: 'Have a "return to work" plan', desc: 'Knowing you can earn $20-30K from part-time work if needed is a powerful safety valve. Even 2-3 years of earnings at the start of a bear market can save a retirement.' },
                { title: 'Optimize tax withdrawal order', desc: 'Withdraw from taxable accounts first, then tax-deferred, then Roth. This sequencing minimizes lifetime taxes and extends portfolio longevity.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-fire-500 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-800 mb-1">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-navy-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">See the 4% Rule Applied to Your Situation</h2>
            <p className="text-navy-200 text-sm mb-6 max-w-xl mx-auto">
              Our calculator uses the 4% rule with inflation adjustments to give you a personalized FIRE number and timeline.
            </p>
            <Link href="/calculator" className="inline-flex items-center gap-2 bg-fire-500 hover:bg-fire-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              <Calculator className="w-4 h-4" />
              Calculate My FIRE Number <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
