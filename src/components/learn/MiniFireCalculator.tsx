'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { calcFireNumber, calcCoastFireNumber } from '@/lib/calculator/fireFormulas';
import { formatCurrency } from '@/lib/utils';
import { useNumberInput } from '@/hooks/useNumberInput';

type Variant = 'lean' | 'fat' | 'barista' | 'coast' | 'fourpercent';

interface MiniFireCalculatorProps {
  variant: Variant;
}

export function MiniFireCalculator({ variant }: MiniFireCalculatorProps) {
  const [monthlyExpenses, setMonthlyExpenses] = useState(3500);
  const [partTimeIncome, setPartTimeIncome] = useState(1500);
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);

  const expenseInput = useNumberInput(monthlyExpenses, 0, 50000, setMonthlyExpenses);
  const partTimeInput = useNumberInput(partTimeIncome, 0, 10000, setPartTimeIncome);
  const currentAgeInput = useNumberInput(currentAge, 18, 79, (v) => setCurrentAge(Math.min(v, retirementAge - 1)));
  const retirementAgeInput = useNumberInput(retirementAge, 19, 80, (v) => setRetirementAge(Math.max(v, currentAge + 1)));

  const annualExpenses = monthlyExpenses * 12;
  const annualPartTime = partTimeIncome * 12;
  const yearsLeft = Math.max(1, retirementAge - currentAge);
  const returnRate = 7;

  let result: number;
  let resultLabel: string;

  if (variant === 'barista') {
    const netAnnual = Math.max(0, annualExpenses - annualPartTime);
    result = calcFireNumber(netAnnual);
    resultLabel = 'Barista FIRE Number';
  } else if (variant === 'coast') {
    const fireNum = calcFireNumber(annualExpenses);
    result = calcCoastFireNumber(fireNum, returnRate, yearsLeft);
    resultLabel = 'Coast FIRE Number';
  } else {
    result = calcFireNumber(annualExpenses);
    resultLabel = 'FIRE Number';
  }

  const inputClass = "w-full border border-gray-200 rounded-lg pl-8 pr-4 py-2.5 text-navy-800 focus:outline-none focus:ring-2 focus:ring-fire-500 focus:border-transparent transition";
  const ageInputClass = "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-navy-800 focus:outline-none focus:ring-2 focus:ring-fire-500 focus:border-transparent transition";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold text-navy-800 mb-4">
        {variant === 'barista' && 'Calculate Your Barista FIRE Number'}
        {variant === 'coast' && 'Calculate Your Coast FIRE Number'}
        {variant === 'lean' && 'Calculate Your Lean FIRE Number'}
        {variant === 'fat' && 'Calculate Your Fat FIRE Number'}
        {variant === 'fourpercent' && 'Calculate Your FIRE Number'}
      </h3>

      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        {/* Monthly expenses — all variants */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Monthly Expenses
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
            <input
              type="number"
              value={expenseInput.displayValue}
              onChange={expenseInput.handleChange}
              onFocus={expenseInput.handleFocus}
              onBlur={expenseInput.handleBlur}
              className={inputClass}
              min={0}
              max={50000}
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
        </div>

        {/* Barista: part-time income */}
        {variant === 'barista' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Part-Time Monthly Income
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
              <input
                type="number"
                value={partTimeInput.displayValue}
                onChange={partTimeInput.handleChange}
                onFocus={partTimeInput.handleFocus}
                onBlur={partTimeInput.handleBlur}
                className={inputClass}
                min={0}
                max={10000}
                step={100}
              />
            </div>
            <input
              type="range"
              value={partTimeIncome}
              onChange={(e) => setPartTimeIncome(Number(e.target.value))}
              min={0}
              max={5000}
              step={100}
              className="w-full mt-2 accent-fire-500"
            />
          </div>
        )}

        {/* Coast: current age + retirement age */}
        {variant === 'coast' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Age
              </label>
              <input
                type="number"
                value={currentAgeInput.displayValue}
                onChange={currentAgeInput.handleChange}
                onFocus={currentAgeInput.handleFocus}
                onBlur={currentAgeInput.handleBlur}
                className={ageInputClass}
                min={18}
                max={79}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Retirement Age
              </label>
              <input
                type="number"
                value={retirementAgeInput.displayValue}
                onChange={retirementAgeInput.handleChange}
                onFocus={retirementAgeInput.handleFocus}
                onBlur={retirementAgeInput.handleBlur}
                className={ageInputClass}
                min={19}
                max={80}
              />
            </div>
          </>
        )}
      </div>

      {/* Result */}
      <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center mb-4">
        <p className="text-sm text-gray-500 mb-1">{resultLabel}</p>
        <p className="text-4xl font-black gradient-fire-text">
          {formatCurrency(result, { compact: false })}
        </p>
        {variant === 'barista' && (
          <p className="text-xs text-gray-400 mt-1">
            Based on ${monthlyExpenses.toLocaleString()}/mo expenses − ${partTimeIncome.toLocaleString()}/mo part-time income
          </p>
        )}
        {variant === 'coast' && (
          <p className="text-xs text-gray-400 mt-1">
            Save this by age {currentAge} — let compound growth handle the rest
          </p>
        )}
      </div>

      <Link
        href="/calculator"
        className="inline-flex items-center gap-2 text-fire-500 font-semibold text-sm hover:text-fire-600 transition-colors group"
      >
        Get full projection with charts
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
