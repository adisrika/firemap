'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator } from 'lucide-react';
import { calcAdjustedExpenses, calcFireNumber } from '@/lib/calculator/fireFormulas';
import { formatCurrency } from '@/lib/utils';
import { useNumberInput } from '@/hooks/useNumberInput';

export function QuickCalculatorCard() {
  const [monthlyExpenses, setMonthlyExpenses] = useState(3500);
  const [dependents, setDependents] = useState(0);

  const expenseInput = useNumberInput(monthlyExpenses, setMonthlyExpenses);

  const adjustedExpenses = calcAdjustedExpenses(monthlyExpenses, dependents);
  const fireNumber = calcFireNumber(adjustedExpenses * 12);

  return (
    <div className="glass rounded-2xl p-8 border-white/15">
      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        {/* Monthly expenses */}
        <div>
          <label className="block text-navy-200 text-sm font-medium mb-2">
            Monthly Expenses
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-300 font-medium">$</span>
            <input
              type="number"
              value={expenseInput.displayValue}
              onChange={expenseInput.handleChange}
              onFocus={expenseInput.handleFocus}
              onBlur={expenseInput.handleBlur}
              className="w-full bg-navy-900/50 border border-white/20 rounded-lg pl-8 pr-4 py-3 text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-fire-500 focus:border-transparent transition"
              placeholder="3500"
              step={100}
            />
          </div>
          <input
            type="range"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
            min={0}
            max={15000}
            step={100}
            className="w-full mt-2 accent-fire-500"
          />
          <div className="flex justify-between text-xs text-navy-400 mt-1">
            <span>$0</span>
            <span>$15,000</span>
          </div>
        </div>

        {/* Dependents */}
        <div>
          <label className="block text-navy-200 text-sm font-medium mb-2">
            Number of Dependents
          </label>
          <div className="flex gap-2 flex-wrap">
            {[0, 1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => setDependents(n)}
                className={`w-12 h-12 rounded-lg font-semibold text-sm transition-all ${
                  dependents === n
                    ? 'gradient-fire text-white shadow-lg shadow-fire-500/30'
                    : 'bg-navy-900/50 border border-white/20 text-navy-300 hover:border-fire-500/50'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          <p className="text-xs text-navy-400 mt-2">
            Each dependent adds ~20% to your expense estimate
          </p>
        </div>
      </div>

      {/* Result */}
      <div className="bg-navy-900/60 rounded-xl p-6 border border-fire-500/20 text-center mb-6">
        <p className="text-navy-300 text-sm mb-1">Your Estimated FIRE Number</p>
        <p className="text-5xl font-black gradient-fire-text">
          {formatCurrency(fireNumber, { compact: false })}
        </p>
        <div className="flex justify-center gap-6 mt-4 text-sm text-navy-300">
          <span>
            Adj. Annual Expenses:{' '}
            <span className="text-white font-medium">
              {formatCurrency(adjustedExpenses * 12)}
            </span>
          </span>
          <span>
            Safe Withdrawal Rate:{' '}
            <span className="text-fire-400 font-medium">4%</span>
          </span>
        </div>
      </div>

      <div className="text-center">
        <Link href="/calculator">
          <button className="inline-flex items-center gap-3 gradient-fire text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 shadow-xl shadow-fire-500/25 transition group text-base">
            Get Full Projection with Charts
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
        <p className="text-navy-400 text-xs mt-3">
          Includes age-based messaging, Coast FIRE, milestone timeline & more
        </p>
      </div>
    </div>
  );
}

export function QuickCalculator() {
  return (
    <section className="py-20 gradient-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-fire-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-fire-400 text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4" />
            Quick FIRE Estimate
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            What&apos;s Your FIRE Number?
          </h2>
          <p className="text-navy-200 text-lg">
            Get an instant estimate. Use the full calculator for a personalized projection.
          </p>
        </div>

        <QuickCalculatorCard />
      </div>
    </section>
  );
}
