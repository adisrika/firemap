import { Users } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface DependentsWarningProps {
  dependents: number;
  originalMonthlyExpenses: number;
  adjustedMonthlyExpenses: number;
}

export function DependentsWarning({
  dependents,
  originalMonthlyExpenses,
  adjustedMonthlyExpenses,
}: DependentsWarningProps) {
  if (dependents === 0) return null;

  const extraMonthly = adjustedMonthlyExpenses - originalMonthlyExpenses;
  const extraAnnual = extraMonthly * 12;

  return (
    <div className="flex gap-3 p-4 rounded-xl bg-purple-50 border border-purple-200 text-sm">
      <Users className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
      <div>
        <p className="font-semibold text-purple-800 mb-1">
          Dependents adjustment applied
        </p>
        <p className="text-purple-700">
          {dependents} dependent{dependents > 1 ? 's' : ''} add{' '}
          <strong>{formatCurrency(extraMonthly)}/mo</strong> ({formatCurrency(extraAnnual)}/yr)
          to your expense estimate — increasing your FIRE number accordingly.
        </p>
      </div>
    </div>
  );
}
