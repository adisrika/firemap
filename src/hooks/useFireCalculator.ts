'use client';

import { useState, useMemo } from 'react';
import { calculateFire } from '@/lib/calculator/fireFormulas';
import type { CalculatorInputs, CalculatorResults } from '@/types/calculator';

const defaultInputs: CalculatorInputs = {
  currentAge: 30,
  retirementAge: 55,
  annualIncome: 85000,
  currentSavings: 25000,
  monthlyExpenses: 3500,
  dependents: 0,
  returnRate: 7,
  inflationRate: 3,
  withdrawalRate: 4,
};

export function useFireCalculator(initialInputs?: Partial<CalculatorInputs>) {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    ...defaultInputs,
    ...initialInputs,
  });

  const results: CalculatorResults = useMemo(() => calculateFire(inputs), [inputs]);

  const updateInput = <K extends keyof CalculatorInputs>(
    key: K,
    value: CalculatorInputs[K]
  ) => {
    setInputs((prev) => {
      const updated = { ...prev, [key]: value };
      // Ensure retirementAge > currentAge
      if (key === 'currentAge' && updated.retirementAge <= updated.currentAge) {
        updated.retirementAge = updated.currentAge + 1;
      }
      return updated;
    });
  };

  const updateInputs = (updates: Partial<CalculatorInputs>) => {
    setInputs((prev) => ({ ...prev, ...updates }));
  };

  const resetInputs = () => setInputs({ ...defaultInputs, ...initialInputs });

  return { inputs, results, updateInput, updateInputs, resetInputs };
}
