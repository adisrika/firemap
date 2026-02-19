import Link from 'next/link';
import { ArrowRight, Check, X } from 'lucide-react';

interface FireTypeCardProps {
  id?: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  annualExpenses: { min: number | null; max: number | null };
  pros: string[];
  cons: string[];
  bestFor: string;
  color: string;
  href: string;
}

function expenseRange(min: number | null, max: number | null): string {
  if (min === null && max !== null) return `Up to $${(max / 1000).toFixed(0)}K/yr`;
  if (max === null && min !== null) return `$${(min / 1000).toFixed(0)}K+/yr`;
  if (min !== null && max !== null) return `$${(min / 1000).toFixed(0)}K–$${(max / 1000).toFixed(0)}K/yr`;
  return 'Any amount';
}

export function FireTypeCard({
  name,
  emoji,
  tagline,
  description,
  annualExpenses,
  pros,
  cons,
  bestFor,
  href,
}: FireTypeCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-4xl">{emoji}</span>
          <div>
            <h3 className="text-xl font-bold text-navy-800">{name}</h3>
            <p className="text-sm text-fire-500 font-medium">{tagline}</p>
            <p className="text-xs text-gray-400 mt-0.5">{expenseRange(annualExpenses.min, annualExpenses.max)}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">Pros</p>
            <ul className="space-y-1.5">
              {pros.slice(0, 3).map((pro) => (
                <li key={pro} className="flex items-start gap-1.5 text-xs text-gray-600">
                  <Check className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">Cons</p>
            <ul className="space-y-1.5">
              {cons.slice(0, 3).map((con) => (
                <li key={con} className="flex items-start gap-1.5 text-xs text-gray-600">
                  <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <p className="text-xs font-semibold text-navy-700 mb-1">Best for:</p>
          <p className="text-xs text-gray-600">{bestFor}</p>
        </div>

        <Link
          href={href}
          className="flex items-center gap-2 text-sm font-semibold text-fire-500 hover:text-fire-600 transition-colors group"
        >
          Learn more about {name}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
