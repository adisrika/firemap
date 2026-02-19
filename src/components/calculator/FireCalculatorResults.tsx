import { TrendingUp, Target, Clock, DollarSign, BarChart3, Anchor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { formatCurrency, formatPercent } from '@/lib/utils';
import type { CalculatorResults } from '@/types/calculator';

const fireTypeConfig = {
  lean: { label: 'Lean FIRE', color: 'bg-green-100 text-green-800', emoji: '🌱' },
  barista: { label: 'Barista FIRE', color: 'bg-amber-100 text-amber-800', emoji: '☕' },
  regular: { label: 'Regular FIRE', color: 'bg-blue-100 text-blue-800', emoji: '🔥' },
  fat: { label: 'Fat FIRE', color: 'bg-orange-100 text-orange-800', emoji: '💰' },
};

interface FireCalculatorResultsProps {
  results: CalculatorResults;
  currentSavings: number;
}

export function FireCalculatorResults({ results, currentSavings }: FireCalculatorResultsProps) {
  const { fireType } = results;
  const fireConfig = fireTypeConfig[fireType];
  const progressPercent = Math.min(100, (currentSavings / results.fireNumber) * 100);

  return (
    <div className="space-y-6">
      {/* Primary FIRE Number */}
      <Card className="border-2 border-fire-200 bg-gradient-to-br from-fire-50 to-orange-50">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Your FIRE Number</p>
              <p className="text-4xl sm:text-5xl font-black gradient-fire-text">
                {formatCurrency(results.fireNumber)}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Inflation-adjusted: {formatCurrency(results.inflationAdjustedFireNumber)}
              </p>
            </div>
            <div className="text-right">
              <Badge className={`${fireConfig.color} border-0 text-sm font-semibold mb-2`}>
                {fireConfig.emoji} {fireConfig.label}
              </Badge>
              <p className="text-xs text-gray-500">Based on {formatCurrency(results.adjustedAnnualExpenses)}/yr</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-5">
            <div className="flex justify-between text-xs text-gray-500 mb-1.5">
              <span>Current: {formatCurrency(currentSavings)}</span>
              <span>{progressPercent.toFixed(1)}% of FIRE Number</span>
            </div>
            <Progress value={progressPercent} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Key metrics grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          {
            icon: Clock,
            label: 'Years to FIRE',
            value: results.yearsToFire ? `${results.yearsToFire} yrs` : 'Extend target',
            sub: results.targetFireAge ? `Age ${results.targetFireAge}` : 'Increase savings',
            color: 'text-fire-500',
            bg: 'bg-fire-50',
          },
          {
            icon: TrendingUp,
            label: 'Monthly Savings',
            value: formatCurrency(results.currentMonthlySavings),
            sub: `${formatPercent(results.savingsRate)} savings rate`,
            color: 'text-green-500',
            bg: 'bg-green-50',
          },
          {
            icon: Target,
            label: 'Required Monthly',
            value: formatCurrency(results.requiredMonthlySavings),
            sub: 'to hit target on time',
            color: 'text-blue-500',
            bg: 'bg-blue-50',
          },
          {
            icon: Anchor,
            label: 'Coast FIRE Number',
            value: formatCurrency(results.coastFireNumber),
            sub: 'stop saving, still retire',
            color: 'text-cyan-500',
            bg: 'bg-cyan-50',
          },
          {
            icon: DollarSign,
            label: 'Adj. Monthly Expenses',
            value: formatCurrency(results.adjustedMonthlyExpenses),
            sub: 'with dependents',
            color: 'text-purple-500',
            bg: 'bg-purple-50',
          },
          {
            icon: BarChart3,
            label: 'Portfolio at Target Age',
            value: formatCurrency(results.portfolioAtRetirement, { compact: true }),
            sub: results.isAchievable ? '✓ Meets FIRE number' : '⚠ Below FIRE number',
            color: results.isAchievable ? 'text-green-500' : 'text-amber-500',
            bg: results.isAchievable ? 'bg-green-50' : 'bg-amber-50',
          },
        ].map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label} className="border border-gray-100">
              <CardContent className="pt-4 pb-4">
                <div className={`${metric.bg} w-8 h-8 rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className={`w-4 h-4 ${metric.color}`} />
                </div>
                <p className="text-xs text-gray-500 font-medium">{metric.label}</p>
                <p className={`text-lg font-bold ${metric.color} mt-0.5`}>{metric.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{metric.sub}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
