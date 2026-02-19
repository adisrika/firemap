import type { Metadata } from 'next';
import Link from 'next/link';
import { ComparisonTable } from '@/components/learn/ComparisonTable';
import { FireTypeCard } from '@/components/learn/FireTypeCard';
import { ArrowRight } from 'lucide-react';
import fireTypesData from '@/lib/data/fire-types.json';

export const metadata: Metadata = {
  title: 'Learn FIRE — Lean, Fat, Coast & Barista FIRE Explained',
  description:
    'Comprehensive guide to all FIRE types. Compare Lean FIRE, Fat FIRE, Coast FIRE, and Barista FIRE with our detailed comparison table and individual deep-dives.',
  keywords:
    'FIRE types comparison, lean FIRE vs fat FIRE, coast FIRE explained, barista FIRE, 4% rule, financial independence strategies',
};

const hrefMap: Record<string, string> = {
  lean: '/learn/lean-fire',
  fat: '/learn/fat-fire',
  coast: '/learn/coast-fire',
  barista: '/learn/barista-fire',
  regular: '/learn',
};

export default function LearnPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="inline-block text-fire-500 text-sm font-semibold tracking-wider uppercase mb-3">
            FIRE Education Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4">
            Learn Everything About FIRE
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Financial Independence, Retire Early (FIRE) is a movement built on a simple idea:
            save aggressively, invest wisely, and gain the freedom to work only if you want to.
            But there are many flavors of FIRE — find the one that fits your life.
          </p>
        </div>

        {/* What is FIRE */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">What is FIRE?</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-gray-600 text-sm leading-relaxed">
            <div>
              <p className="mb-3">
                FIRE stands for <strong className="text-navy-700">Financial Independence, Retire Early</strong>.
                The movement grew from the 1992 book <em>Your Money or Your Life</em> by Vicki Robin
                and was popularized in the 2010s by bloggers like Mr. Money Mustache.
              </p>
              <p>
                The core idea: aggressively save 40-70% of your income, invest in low-cost index funds,
                and retire decades earlier than traditional retirement age by living off your portfolio&apos;s
                returns using the <strong className="text-navy-700">4% safe withdrawal rate</strong>.
              </p>
            </div>
            <div>
              <p className="mb-3">
                The <strong className="text-navy-700">FIRE Number</strong> is the portfolio size you need
                to retire. It&apos;s calculated as 25× your annual expenses (which equals the 4% rule):
              </p>
              <div className="bg-fire-50 border border-fire-200 rounded-xl p-4 font-mono text-sm">
                <p className="text-fire-700 font-bold mb-1">FIRE Number Formula</p>
                <p className="text-navy-800">Annual Expenses × 25 = FIRE Number</p>
                <p className="text-gray-500 text-xs mt-2">Or: Annual Expenses ÷ 0.04</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-6">FIRE Types Comparison</h2>
          <ComparisonTable />
        </div>

        {/* FIRE Type Cards */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-6">Explore Each FIRE Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {fireTypesData.map((type) => (
              <FireTypeCard
                key={type.id}
                {...type}
                href={hrefMap[type.id] || '/learn'}
              />
            ))}
          </div>
        </div>

        {/* 4% Rule teaser */}
        <div className="bg-navy-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">The Foundation: The 4% Rule</h2>
          <p className="text-navy-200 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
            The 4% rule is the cornerstone of FIRE planning — it tells you how much you can safely
            withdraw from your portfolio each year without running out of money over a 30-year retirement.
            Understanding it is essential before you FIRE.
          </p>
          <Link
            href="/learn/four-percent-rule"
            className="inline-flex items-center gap-2 bg-fire-500 hover:bg-fire-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Read the Full 4% Rule Guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
