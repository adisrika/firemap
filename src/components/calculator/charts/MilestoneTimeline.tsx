import { CheckCircle, Circle, Flag } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import type { CalculatorResults } from '@/types/calculator';

interface MilestoneTimelineProps {
  results: CalculatorResults;
  currentSavings: number;
}

export function MilestoneTimeline({
  results,
  currentSavings,
}: MilestoneTimelineProps) {
  const milestones = [
    {
      label: '25% of FIRE',
      value: results.fireNumber * 0.25,
      description: 'First major milestone',
    },
    {
      label: 'Coast FIRE',
      value: results.coastFireNumber,
      description: 'Can stop saving, still retire',
    },
    {
      label: '50% of FIRE',
      value: results.fireNumber * 0.5,
      description: 'Halfway to financial independence',
    },
    {
      label: '75% of FIRE',
      value: results.fireNumber * 0.75,
      description: 'Almost there!',
    },
    {
      label: 'Full FIRE',
      value: results.fireNumber,
      description: 'Financial independence achieved!',
    },
  ];

  return (
    <div>
      <h3 className="text-lg font-bold text-navy-800 mb-4">Milestone Timeline</h3>
      <div className="space-y-3">
        {milestones.map((m, i) => {
          const isReached = currentSavings >= m.value;
          const progress = Math.min(100, (currentSavings / m.value) * 100);
          const isFinal = i === milestones.length - 1;

          return (
            <div key={m.label} className="flex items-start gap-3">
              {/* Icon */}
              <div className="shrink-0 mt-0.5">
                {isFinal ? (
                  <Flag className={`w-5 h-5 ${isReached ? 'text-fire-500' : 'text-gray-300'}`} />
                ) : isReached ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-300" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-semibold ${isReached ? 'text-green-700' : 'text-navy-700'}`}>
                    {m.label}
                  </span>
                  <span className={`text-sm font-medium ${isReached ? 'text-green-600' : 'text-navy-600'}`}>
                    {formatCurrency(m.value)}
                  </span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      isReached ? 'bg-green-500' : isFinal ? 'bg-fire-500' : 'bg-blue-400'
                    }`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-0.5">{m.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
