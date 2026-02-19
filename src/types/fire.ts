export type FireVariant = 'lean' | 'fat' | 'coast' | 'barista' | 'regular';

export interface FireTypeData {
  id: FireVariant;
  name: string;
  tagline: string;
  description: string;
  annualExpenses: { min: number | null; max: number | null };
  pros: string[];
  cons: string[];
  bestFor: string;
  color: string;
  emoji: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}
