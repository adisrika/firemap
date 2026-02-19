import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import type { FireType } from '@/types/calculator';

const fireTypeDetails: Record<FireType, {
  label: string;
  emoji: string;
  description: string;
  pros: string[];
  href: string;
  color: string;
  gradient: string;
}> = {
  lean: {
    label: 'Lean FIRE',
    emoji: '🌱',
    description: 'Your lifestyle aligns with Lean FIRE — financial independence through intentional, minimal spending.',
    pros: ['Smallest FIRE number — fastest to achieve', 'Maximum freedom from 9-5', 'Compound growth does heavy lifting'],
    href: '/learn/lean-fire',
    color: 'text-green-700',
    gradient: 'from-green-50 to-emerald-50',
  },
  barista: {
    label: 'Barista FIRE',
    emoji: '☕',
    description: 'Your expense level suggests Barista FIRE — build a portfolio, then supplement with part-time work you enjoy.',
    pros: ['Smaller portfolio than full FIRE', 'Healthcare through employer', 'Social engagement & purpose'],
    href: '/learn/barista-fire',
    color: 'text-amber-700',
    gradient: 'from-amber-50 to-yellow-50',
  },
  regular: {
    label: 'Regular FIRE',
    emoji: '🔥',
    description: 'You\'re pursuing traditional FIRE — full financial independence with a comfortable lifestyle.',
    pros: ['Full freedom, never work again', 'Well-studied withdrawal strategies', 'Comfortable lifestyle maintained'],
    href: '/learn',
    color: 'text-fire-700',
    gradient: 'from-fire-50 to-orange-50',
  },
  fat: {
    label: 'Fat FIRE',
    emoji: '💰',
    description: 'Your spending points to Fat FIRE — retiring abundantly on $100K+ per year.',
    pros: ['Maximum comfort & security', 'Large buffer for unexpected costs', 'Travel, luxury, full flexibility'],
    href: '/learn/fat-fire',
    color: 'text-orange-700',
    gradient: 'from-orange-50 to-red-50',
  },
};

interface FireTypeRecommendationProps {
  fireType: FireType;
  annualExpenses: number;
}

export function FireTypeRecommendation({ fireType, annualExpenses }: FireTypeRecommendationProps) {
  const details = fireTypeDetails[fireType];

  return (
    <div className={`rounded-xl bg-gradient-to-br ${details.gradient} border border-gray-200 p-5`}>
      <h3 className="text-lg font-bold text-navy-800 mb-3">Your FIRE Type</h3>
      <div className="flex items-start gap-3 mb-4">
        <span className="text-3xl">{details.emoji}</span>
        <div>
          <p className={`font-bold text-xl ${details.color}`}>{details.label}</p>
          <p className="text-sm text-gray-500">
            Based on {formatCurrency(annualExpenses)}/year in expenses
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">{details.description}</p>
      <div className="space-y-2 mb-4">
        {details.pros.map((pro) => (
          <div key={pro} className="flex items-start gap-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
            {pro}
          </div>
        ))}
      </div>
      <Link
        href={details.href}
        className={`inline-flex items-center gap-2 text-sm font-semibold ${details.color} hover:underline`}
      >
        Learn more about {details.label} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
