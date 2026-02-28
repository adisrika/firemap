'use client';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';
import { formatCurrency } from '@/lib/utils';
import { buildProjectionData } from '@/lib/calculator/fireFormulas';
import type { CalculatorInputs, CalculatorResults } from '@/types/calculator';

interface WealthProjectionChartProps {
  results: CalculatorResults;
  inputs: CalculatorInputs;
}

function CustomTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{ value: number; name: string; color: string }>;
  label?: number;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-3 text-sm">
      <p className="font-semibold text-navy-800 mb-2">Age {label}</p>
      {payload.map((p) => (
        <div key={p.name} className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
          <span className="text-gray-600">{p.name}:</span>
          <span className="font-semibold">{formatCurrency(p.value)}</span>
        </div>
      ))}
    </div>
  );
}

export function WealthProjectionChart({ results, inputs }: WealthProjectionChartProps) {
  const { currentSavings, returnRate, currentAge, retirementAge, inflationRate } = inputs;
  const { currentMonthlySavings, fireNumber, projectionData, targetFireAge } = results;

  const optimistic = buildProjectionData(
    currentSavings, currentMonthlySavings, returnRate + 2,
    currentAge, retirementAge, fireNumber, inflationRate
  );
  const pessimistic = buildProjectionData(
    currentSavings, currentMonthlySavings, Math.max(1, returnRate - 2),
    currentAge, retirementAge, fireNumber, inflationRate
  );

  const chartData = projectionData.map((b, i) => ({
    age: b.age,
    'Base Case': b.portfolioValue,
    'Optimistic (+2%)': optimistic[i]?.portfolioValue ?? b.portfolioValue,
    'Pessimistic (-2%)': pessimistic[i]?.portfolioValue ?? b.portfolioValue,
    'FIRE Number': b.fireNumber,
  }));

  return (
    <div>
      <h3 className="text-lg font-bold text-navy-800 mb-4">Portfolio Projection</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
          <defs>
            <linearGradient id="optimisticGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="portfolioGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="pessimisticGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="fireGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis
            dataKey="age"
            tick={{ fontSize: 11, fill: '#94a3b8' }}
            tickLine={false}
            label={{ value: 'Age', position: 'insideBottom', offset: -5, fill: '#94a3b8', fontSize: 11 }}
          />
          <YAxis
            tickFormatter={(v) => formatCurrency(v, { compact: true })}
            tick={{ fontSize: 11, fill: '#94a3b8' }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '16px', fontSize: '12px' }}
            iconType="circle"
            iconSize={8}
          />
          {targetFireAge && (
            <ReferenceLine
              x={targetFireAge}
              stroke="#ef4444"
              strokeDasharray="5 5"
              strokeWidth={2}
              label={{ value: `FIRE @ ${targetFireAge}`, position: 'top', fill: '#ef4444', fontSize: 11 }}
            />
          )}
          <Area
            type="monotone"
            dataKey="Pessimistic (-2%)"
            stroke="#ef4444"
            strokeWidth={1.5}
            fill="url(#pessimisticGrad)"
            strokeDasharray="4 2"
          />
          <Area
            type="monotone"
            dataKey="Base Case"
            stroke="#f97316"
            strokeWidth={2.5}
            fill="url(#portfolioGrad)"
          />
          <Area
            type="monotone"
            dataKey="Optimistic (+2%)"
            stroke="#10b981"
            strokeWidth={1.5}
            fill="url(#optimisticGrad)"
            strokeDasharray="4 2"
          />
          <Area
            type="monotone"
            dataKey="FIRE Number"
            stroke="#3b82f6"
            strokeWidth={2}
            strokeDasharray="6 3"
            fill="url(#fireGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
