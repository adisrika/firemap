export interface CalculatorInputs {
  currentAge: number;
  retirementAge: number;
  annualIncome: number;
  currentSavings: number;
  monthlyExpenses: number;
  dependents: number;
  returnRate: number;
  inflationRate: number;
  withdrawalRate: number;
}

export interface ProjectionPoint {
  year: number;
  age: number;
  portfolioValue: number;
  fireNumber: number;
}

export interface CalculatorResults {
  fireNumber: number;
  inflationAdjustedFireNumber: number;
  adjustedMonthlyExpenses: number;
  adjustedAnnualExpenses: number;
  yearsToFire: number | null;
  targetFireAge: number | null;
  requiredMonthlySavings: number;
  currentMonthlySavings: number;
  savingsRate: number;
  coastFireNumber: number;
  fireType: FireType;
  ageMessage: string;
  projectionData: ProjectionPoint[];
  isAchievable: boolean;
  portfolioAtRetirement: number;
}

export type FireType = 'lean' | 'barista' | 'regular' | 'fat';

export interface FireTypeInfo {
  type: FireType;
  label: string;
  annualExpenses: string;
  description: string;
  color: string;
}
