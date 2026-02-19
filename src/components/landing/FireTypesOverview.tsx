import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const fireTypes = [
  {
    emoji: '🌱',
    name: 'Lean FIRE',
    href: '/learn/lean-fire',
    annualExpenses: '< $40K/yr',
    tagline: 'Freedom through frugality',
    description: 'Achieve financial independence on a minimal budget. Perfect for minimalists who value freedom over luxury.',
    color: 'from-green-400 to-emerald-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    textColor: 'text-green-700',
  },
  {
    emoji: '☕',
    name: 'Barista FIRE',
    href: '/learn/barista-fire',
    annualExpenses: '$40-60K/yr',
    tagline: 'Part-time work, full-time freedom',
    description: 'Build a portfolio to cover most expenses, then supplement with enjoyable part-time work.',
    color: 'from-amber-400 to-yellow-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    textColor: 'text-amber-700',
  },
  {
    emoji: '🔥',
    name: 'Regular FIRE',
    href: '/learn',
    annualExpenses: '$60-100K/yr',
    tagline: 'The classic path to independence',
    description: 'Full financial independence. Never need to work again, living comfortably on 4% annual withdrawals.',
    color: 'from-fire-400 to-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    textColor: 'text-orange-700',
  },
  {
    emoji: '💰',
    name: 'Fat FIRE',
    href: '/learn/fat-fire',
    annualExpenses: '$100K+/yr',
    tagline: 'Retire abundantly',
    description: 'Retire on $100K+ per year. Maximum comfort and flexibility with a portfolio of $2.5M+.',
    color: 'from-fire-500 to-red-600',
    bg: 'bg-red-50',
    border: 'border-red-200',
    textColor: 'text-red-700',
  },
  {
    emoji: '🏄',
    name: 'Coast FIRE',
    href: '/learn/coast-fire',
    annualExpenses: 'Any amount',
    tagline: 'Save now, coast later',
    description: 'Save aggressively early so compound growth handles your retirement — then work only to cover expenses.',
    color: 'from-cyan-400 to-blue-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    textColor: 'text-cyan-700',
  },
];

export function FireTypesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-fire-500 text-sm font-semibold tracking-wider uppercase mb-3">
            Choose Your Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4">
            Which FIRE Type Fits You?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            FIRE is not one-size-fits-all. There are several approaches depending on your
            lifestyle goals, income, and risk tolerance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fireTypes.map((type) => (
            <Link
              key={type.name}
              href={type.href}
              className={`group p-6 rounded-2xl border ${type.bg} ${type.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-3xl mb-2 block">{type.emoji}</span>
                  <h3 className={`text-xl font-bold ${type.textColor}`}>{type.name}</h3>
                  <span className="text-xs font-medium text-gray-500">{type.annualExpenses}</span>
                </div>
                <ArrowRight className={`w-5 h-5 ${type.textColor} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all`} />
              </div>
              <p className={`text-sm font-semibold ${type.textColor} mb-2`}>{type.tagline}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
            </Link>
          ))}

          {/* CTA Card */}
          <div className="relative overflow-hidden p-6 rounded-2xl gradient-navy text-white flex flex-col justify-between">
            <div>
              <span className="text-3xl mb-2 block">🎯</span>
              <h3 className="text-xl font-bold mb-2">Not Sure Which?</h3>
              <p className="text-navy-200 text-sm leading-relaxed">
                Use our calculator to find out which FIRE type matches your current
                lifestyle and goals.
              </p>
            </div>
            <Link
              href="/calculator"
              className="mt-6 inline-flex items-center gap-2 bg-fire-500 hover:bg-fire-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Calculate My Type <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
