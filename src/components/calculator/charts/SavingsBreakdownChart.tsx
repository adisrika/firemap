'use client';

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';
import { formatCurrency } from '@/lib/utils';
import type { CalculatorResults } from '@/types/calculator';

interface SavingsBreakdownChartProps {
  results: CalculatorResults;
  currentSavings: number;
}

const COLORS = ['#f97316', '#3b82f6', '#f59e0b'];

export function SavingsBreakdownChart({ results, currentSavings }: SavingsBreakdownChartProps) {
  // Reliable breakdown
  const totalNeeded = results.fireNumber;
  const alreadySaved = Math.min(currentSavings, totalNeeded);
  const yearsLeft = results.yearsToFire || 20;
  const totalContributions = Math.min(
    results.requiredMonthlySavings * yearsLeft * 12,
    totalNeeded - alreadySaved
  );
  const growthContribution = Math.max(0, totalNeeded - alreadySaved - totalContributions);

  const pieData = [
    { name: 'Current Portfolio', value: Math.round(alreadySaved) },
    { name: 'Future Contributions', value: Math.round(totalContributions) },
    { name: 'Compound Growth', value: Math.round(growthContribution) },
  ].filter((d) => d.value > 100);

  return (
    <div>
      <h3 className="text-lg font-bold text-navy-800 mb-4">FIRE Number Breakdown</h3>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
            >
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number | undefined) => [value !== undefined ? formatCurrency(value) : '$0', '']}
              contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '12px' }}
            />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Stats */}
        <div className="w-full sm:w-auto space-y-3 shrink-0">
          {pieData.map((d, i) => (
            <div key={d.name} className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full shrink-0" style={{ background: COLORS[i] }} />
              <div>
                <p className="text-xs text-gray-500">{d.name}</p>
                <p className="text-sm font-semibold text-navy-800">{formatCurrency(d.value)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
