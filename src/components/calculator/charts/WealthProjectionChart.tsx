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
import type { ProjectionPoint } from '@/types/calculator';

interface WealthProjectionChartProps {
  data: ProjectionPoint[];
  fireAge: number | null;
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

export function WealthProjectionChart({ data, fireAge }: WealthProjectionChartProps) {
  const chartData = data.map((d) => ({
    age: d.age,
    'Your Portfolio': d.portfolioValue,
    'FIRE Number': d.fireNumber,
  }));

  return (
    <div>
      <h3 className="text-lg font-bold text-navy-800 mb-4">Portfolio vs. FIRE Number</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
          <defs>
            <linearGradient id="portfolioGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="fireGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
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
            wrapperStyle={{ paddingTop: '16px', fontSize: '13px' }}
            iconType="circle"
            iconSize={8}
          />
          {fireAge && (
            <ReferenceLine
              x={fireAge}
              stroke="#ef4444"
              strokeDasharray="5 5"
              strokeWidth={2}
              label={{ value: `FIRE @ ${fireAge}`, position: 'top', fill: '#ef4444', fontSize: 11 }}
            />
          )}
          <Area
            type="monotone"
            dataKey="Your Portfolio"
            stroke="#f97316"
            strokeWidth={2.5}
            fill="url(#portfolioGrad)"
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
