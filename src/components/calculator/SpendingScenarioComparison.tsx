'use client';

import { useState } from 'react';
import { formatCurrency } from '@/lib/utils';
import { calcFireNumber, calcYearsToFireNumber } from '@/lib/calculator/fireFormulas';
import type { CalculatorInputs, CalculatorResults } from '@/types/calculator';

interface Props {
  results: CalculatorResults;
  inputs: CalculatorInputs;
}

const SCENARIOS = [
  { key: 'lean' as const, label: 'Lean FIRE', icon: '🌱', color: 'green', defaultPct: 85 },
  { key: 'regular' as const, label: 'Regular FIRE', icon: '🔥', color: 'blue', defaultPct: 100 },
  { key: 'fat' as const, label: 'Fat FIRE', icon: '💰', color: 'orange', defaultPct: 120 },
];

const COLOR_CLASSES: Record<string, { border: string; badge: string; number: string }> = {
  green: {
    border: 'border-green-200',
    badge: 'bg-green-50 text-green-700',
    number: 'text-green-700',
  },
  blue: {
    border: 'border-blue-200',
    badge: 'bg-blue-50 text-blue-700',
    number: 'text-blue-700',
  },
  orange: {
    border: 'border-orange-200',
    badge: 'bg-orange-50 text-orange-700',
    number: 'text-orange-700',
  },
};

export function SpendingScenarioComparison({ results, inputs }: Props) {
  const [percents, setPercents] = useState({
    lean: 85,
    regular: 100,
    fat: 120,
  });

  function handlePctChange(key: 'lean' | 'regular' | 'fat', raw: string) {
    const num = parseInt(raw, 10);
    if (!isNaN(num) && num >= 1 && num <= 200) {
      setPercents((p) => ({ ...p, [key]: num }));
    } else if (raw === '' || raw === '-') {
      // allow clearing the field without clamping
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {SCENARIOS.map(({ key, label, icon, color }) => {
        const pct = percents[key];
        const annualExp = results.adjustedAnnualExpenses * (pct / 100);
        const fireNum = calcFireNumber(annualExp, inputs.withdrawalRate);
        const years = calcYearsToFireNumber(
          inputs.currentSavings,
          results.currentMonthlySavings,
          inputs.returnRate,
          inputs.inflationRate,
          fireNum
        );
        const cls = COLOR_CLASSES[color];

        return (
          <div
            key={key}
            className={`rounded-xl border-2 ${cls.border} bg-white p-5 flex flex-col gap-3`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cls.badge}`}>
                {icon} {label}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-xs text-gray-500 whitespace-nowrap">% of spending</label>
              <input
                type="number"
                min={1}
                max={200}
                value={pct}
                onChange={(e) => handlePctChange(key, e.target.value)}
                onBlur={(e) => {
                  const num = parseInt(e.target.value, 10);
                  const clamped = isNaN(num) ? SCENARIOS.find((s) => s.key === key)!.defaultPct : Math.min(200, Math.max(1, num));
                  setPercents((p) => ({ ...p, [key]: clamped }));
                }}
                className="w-20 text-sm border border-gray-200 rounded-lg px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <span className="text-xs text-gray-400">%</span>
            </div>

            <div>
              <p className="text-xs text-gray-400">Annual expenses</p>
              <p className="text-sm font-semibold text-gray-700">{formatCurrency(annualExp)}</p>
            </div>

            <div>
              <p className="text-xs text-gray-400">FIRE number</p>
              <p className={`text-2xl font-bold ${cls.number}`}>{formatCurrency(fireNum, { compact: true })}</p>
            </div>

            <div className="mt-auto pt-2 border-t border-gray-100">
              {years !== null ? (
                <p className="text-sm font-semibold text-gray-700">
                  {years} year{years !== 1 ? 's' : ''} away
                </p>
              ) : (
                <p className="text-sm font-semibold text-green-600">Already there!</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
