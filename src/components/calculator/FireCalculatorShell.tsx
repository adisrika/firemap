'use client';

import { useState, useRef, useEffect } from 'react';
import { useFireCalculator } from '@/hooks/useFireCalculator';
import { FireCalculatorForm } from './FireCalculatorForm';
import { FireCalculatorResults } from './FireCalculatorResults';
import { AgeMessageBanner } from './AgeMessageBanner';
import { DependentsWarning } from './DependentsWarning';
import { WealthProjectionChart } from './charts/WealthProjectionChart';
import { SpendingScenarioComparison } from './SpendingScenarioComparison';
import { SavingsBreakdownChart } from './charts/SavingsBreakdownChart';
import { MilestoneTimeline } from './charts/MilestoneTimeline';
import { FireTypeRecommendation } from './charts/FireTypeRecommendation';
import { Separator } from '@/components/ui/separator';
import { RotateCcw, Share2, Check } from 'lucide-react';
import { buildShareUrl } from '@/lib/calculator/urlParams';
import { trackEvent } from '@/lib/analytics';
import type { CalculatorInputs } from '@/types/calculator';

export function FireCalculatorShell({
  initialInputs,
}: {
  initialInputs?: Partial<CalculatorInputs>;
}) {
  const { inputs, results, updateInput, resetInputs } = useFireCalculator(initialInputs);
  const [copied, setCopied] = useState(false);
  const startedRef = useRef(false);
  const completedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current && !completedRef.current) {
      completedRef.current = true;
      trackEvent('calculator_completed', { fire_type: results.fireType });
    }
  }, [results]);

  function handleUpdate<K extends keyof CalculatorInputs>(key: K, value: CalculatorInputs[K]) {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent('calculator_started');
    }
    updateInput(key, value);
  }

  function handleShare() {
    trackEvent('result_shared');
    const url = buildShareUrl(inputs);
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="space-y-8">
      {/* Form */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-navy-800">Your Information</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-fire-500 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-green-500">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  Share Results
                </>
              )}
            </button>
            <button
              onClick={resetInputs}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-fire-500 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>
        <FireCalculatorForm inputs={inputs} onUpdate={handleUpdate} />
      </div>

      {/* Banners */}
      <div className="space-y-3">
        <AgeMessageBanner
          message={results.ageMessage}
          isAchievable={results.isAchievable}
          targetFireAge={results.targetFireAge}
        />
        <DependentsWarning
          dependents={inputs.dependents}
          originalMonthlyExpenses={inputs.monthlyExpenses}
          adjustedMonthlyExpenses={results.adjustedMonthlyExpenses}
        />
      </div>

      {/* Results */}
      <div>
        <h2 className="text-xl font-bold text-navy-800 mb-4">Your Results</h2>
        <FireCalculatorResults
          results={results}
          currentSavings={inputs.currentSavings}
        />
      </div>

      <div>
        <h2 className="text-xl font-bold text-navy-800 mb-4">Spending Scenarios</h2>
        <SpendingScenarioComparison results={results} inputs={inputs} />
      </div>

      <Separator />

      {/* Charts */}
      <div>
        <h2 className="text-xl font-bold text-navy-800 mb-6">Visualizations</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <WealthProjectionChart results={results} inputs={inputs} />
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <SavingsBreakdownChart
              results={results}
              currentSavings={inputs.currentSavings}
            />
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <MilestoneTimeline
              results={results}
              currentSavings={inputs.currentSavings}
            />
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <FireTypeRecommendation
              fireType={results.fireType}
              annualExpenses={results.adjustedAnnualExpenses}
            />
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-400 text-center leading-relaxed max-w-2xl mx-auto">
        This calculator is for educational purposes only and does not constitute financial advice.
        Results are based on simplified models and historical averages. Consult a licensed financial
        advisor before making investment decisions.
      </p>
    </div>
  );
}
