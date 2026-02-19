import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  value: number,
  options?: { compact?: boolean; decimals?: number }
): string {
  if (options?.compact) {
    if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(options.decimals ?? 1)}M`;
    }
    if (value >= 1_000) {
      return `$${(value / 1_000).toFixed(options.decimals ?? 0)}K`;
    }
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: options?.decimals ?? 0,
  }).format(value);
}

export function formatNumber(value: number, decimals = 0): string {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: decimals,
  }).format(value);
}

export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}

export function clampValue(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
