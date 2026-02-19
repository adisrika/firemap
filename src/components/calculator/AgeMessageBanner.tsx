import { CheckCircle, AlertTriangle, Zap } from 'lucide-react';

interface AgeMessageBannerProps {
  message: string;
  isAchievable: boolean;
  targetFireAge: number | null;
}

export function AgeMessageBanner({ message, isAchievable, targetFireAge }: AgeMessageBannerProps) {
  if (!message) return null;

  const isEarly = targetFireAge !== null && targetFireAge <= 45;
  const isWarning = !isAchievable || targetFireAge === null;

  return (
    <div
      className={`flex gap-3 p-4 rounded-xl border text-sm leading-relaxed ${
        isWarning
          ? 'bg-amber-50 border-amber-200 text-amber-800'
          : isEarly
          ? 'bg-fire-50 border-fire-200 text-fire-800'
          : 'bg-blue-50 border-blue-200 text-blue-800'
      }`}
    >
      <div className="shrink-0 mt-0.5">
        {isWarning ? (
          <AlertTriangle className="w-5 h-5 text-amber-500" />
        ) : isEarly ? (
          <Zap className="w-5 h-5 text-fire-500" />
        ) : (
          <CheckCircle className="w-5 h-5 text-blue-500" />
        )}
      </div>
      <p>{message}</p>
    </div>
  );
}
