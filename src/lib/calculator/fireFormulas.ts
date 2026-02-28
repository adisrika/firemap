import type {
  CalculatorInputs,
  CalculatorResults,
  FireType,
  ProjectionPoint,
} from '@/types/calculator';

/** Adjust monthly expenses for dependents (each adds 20%) */
export function calcAdjustedExpenses(
  monthlyExpenses: number,
  dependents: number
): number {
  return monthlyExpenses * (1 + dependents * 0.2);
}

/** FIRE Number = Annual expenses / withdrawalRate (default 4% = 25x rule) */
export function calcFireNumber(annualExpenses: number, withdrawalRate = 4): number {
  return annualExpenses / (withdrawalRate / 100);
}

/** Inflation-adjusted FIRE Number */
export function calcInflationAdjustedFireNumber(
  fireNumber: number,
  inflationRate: number,
  years: number
): number {
  return fireNumber * Math.pow(1 + inflationRate / 100, years);
}

/**
 * Future Value of portfolio with regular monthly contributions.
 * FV = PV*(1+r)^n + PMT*[((1+r)^n - 1) / r]
 * r = monthly rate, n = months
 */
export function calcPortfolioFV(
  presentValue: number,
  monthlyContribution: number,
  annualReturnRate: number,
  months: number
): number {
  if (months <= 0) return presentValue;
  const r = annualReturnRate / 100 / 12;
  if (r === 0) return presentValue + monthlyContribution * months;
  const growth = Math.pow(1 + r, months);
  return presentValue * growth + monthlyContribution * ((growth - 1) / r);
}

/**
 * Required monthly savings to reach a target FV.
 * Solve FV formula for PMT:
 * PMT = (FV - PV*(1+r)^n) * r / ((1+r)^n - 1)
 */
export function calcRequiredMonthlySavings(
  currentSavings: number,
  targetFV: number,
  annualReturnRate: number,
  months: number
): number {
  if (months <= 0) return Infinity;
  const r = annualReturnRate / 100 / 12;
  if (r === 0) {
    return Math.max(0, (targetFV - currentSavings) / months);
  }
  const growth = Math.pow(1 + r, months);
  return Math.max(0, (targetFV - currentSavings * growth) * r / (growth - 1));
}

/**
 * Coast FIRE Number: how much you need today so it grows to FIRE Number
 * by retirement without additional contributions.
 * Coast = FIRE_Number / (1 + returnRate)^yearsToRetirement
 */
export function calcCoastFireNumber(
  fireNumber: number,
  annualReturnRate: number,
  yearsToRetirement: number
): number {
  if (yearsToRetirement <= 0) return fireNumber;
  return fireNumber / Math.pow(1 + annualReturnRate / 100, yearsToRetirement);
}

/** Determine FIRE type based on annual expenses */
export function determineFireType(annualExpenses: number): FireType {
  if (annualExpenses < 40000) return 'lean';
  if (annualExpenses < 60000) return 'barista';
  if (annualExpenses < 100000) return 'regular';
  return 'fat';
}

/** Age-contextual FIRE messaging */
export function getAgeMessage(
  currentAge: number,
  yearsToFire: number | null,
  isAchievable: boolean
): string {
  if (!isAchievable || yearsToFire === null) {
    return "Adjust your savings rate or retirement age to make FIRE achievable. Consider Coast FIRE or Barista FIRE as intermediate milestones.";
  }
  if (currentAge <= 30 && yearsToFire <= 15) {
    return "Starting early — compound interest is your superpower! Stay consistent and you'll reach financial independence faster than most.";
  }
  if (currentAge <= 30) {
    return "Great start! Time is your biggest asset. Increasing your savings rate even slightly will dramatically accelerate your FIRE date.";
  }
  if (currentAge <= 40 && yearsToFire <= 20) {
    return "Strong trajectory — stay consistent and keep lifestyle inflation in check. You're in the prime wealth-building years.";
  }
  if (currentAge <= 40) {
    return "You still have plenty of time. Focus on increasing income and reducing expenses to boost your savings rate.";
  }
  if (yearsToFire <= 15) {
    return "Achievable with focus! Consider Coast FIRE or Barista FIRE as intermediate milestones. Every dollar saved now has significant impact.";
  }
  return "A targeted approach with increased savings rate and possibly higher return strategies can make this goal reachable. Consider consulting a financial advisor.";
}

/** Find how many years until portfolio reaches the FIRE number */
export function calcYearsToFireNumber(
  currentSavings: number,
  monthlySavings: number,
  returnRate: number,
  inflationRate: number,
  fireNumber: number
): number | null {
  for (let y = 1; y <= 50; y++) {
    const pv = calcPortfolioFV(currentSavings, monthlySavings, returnRate, y * 12);
    const fn = calcInflationAdjustedFireNumber(fireNumber, inflationRate, y);
    if (pv >= fn) return y;
  }
  return null;
}

/** Build year-by-year projection data */
export function buildProjectionData(
  currentSavings: number,
  monthlySavings: number,
  annualReturnRate: number,
  currentAge: number,
  retirementAge: number,
  fireNumber: number,
  inflationRate: number
): ProjectionPoint[] {
  const years = retirementAge - currentAge;
  const totalYears = Math.max(years + 10, 30);
  const data: ProjectionPoint[] = [];

  for (let y = 0; y <= totalYears; y++) {
    const portfolioValue = calcPortfolioFV(
      currentSavings,
      monthlySavings,
      annualReturnRate,
      y * 12
    );
    const inflatedFireNumber = calcInflationAdjustedFireNumber(
      fireNumber,
      inflationRate,
      y
    );
    data.push({
      year: y,
      age: currentAge + y,
      portfolioValue: Math.round(portfolioValue),
      fireNumber: Math.round(inflatedFireNumber),
    });
  }

  return data;
}

/** Main calculation function — returns all results */
export function calculateFire(inputs: CalculatorInputs): CalculatorResults {
  const {
    currentAge,
    retirementAge,
    annualIncome,
    currentSavings,
    monthlyExpenses,
    dependents,
    returnRate,
    inflationRate,
    withdrawalRate,
  } = inputs;

  const yearsToTarget = retirementAge - currentAge;

  // Adjusted expenses for dependents
  const adjustedMonthlyExpenses = calcAdjustedExpenses(monthlyExpenses, dependents);
  const adjustedAnnualExpenses = adjustedMonthlyExpenses * 12;

  // FIRE numbers
  const fireNumber = calcFireNumber(adjustedAnnualExpenses, withdrawalRate);
  const inflationAdjustedFireNumber = calcInflationAdjustedFireNumber(
    fireNumber,
    inflationRate,
    yearsToTarget
  );

  // Current monthly savings (income / 12 - expenses)
  const monthlyIncome = annualIncome / 12;
  const currentMonthlySavings = Math.max(0, monthlyIncome - adjustedMonthlyExpenses);
  const savingsRate = annualIncome > 0 ? (currentMonthlySavings * 12 / annualIncome) * 100 : 0;

  // Portfolio at target retirement age
  const portfolioAtRetirement = calcPortfolioFV(
    currentSavings,
    currentMonthlySavings,
    returnRate,
    yearsToTarget * 12
  );

  // Is target achievable?
  const isAchievable = portfolioAtRetirement >= inflationAdjustedFireNumber;

  // Find actual years to FIRE (iterate)
  let yearsToFire: number | null = null;
  let targetFireAge: number | null = null;
  for (let y = 1; y <= 50; y++) {
    const pv = calcPortfolioFV(currentSavings, currentMonthlySavings, returnRate, y * 12);
    const fn = calcInflationAdjustedFireNumber(fireNumber, inflationRate, y);
    if (pv >= fn) {
      yearsToFire = y;
      targetFireAge = currentAge + y;
      break;
    }
  }

  // Required monthly savings to hit FIRE at target age
  const requiredMonthlySavings = calcRequiredMonthlySavings(
    currentSavings,
    inflationAdjustedFireNumber,
    returnRate,
    yearsToTarget * 12
  );

  // Coast FIRE number
  const coastFireNumber = calcCoastFireNumber(fireNumber, returnRate, yearsToTarget);

  // FIRE type based on unadjusted annual expenses (lifestyle choice)
  const fireType = determineFireType(adjustedAnnualExpenses);

  // Age message
  const ageMessage = getAgeMessage(currentAge, yearsToFire, isAchievable || yearsToFire !== null);

  // Projection data
  const projectionData = buildProjectionData(
    currentSavings,
    currentMonthlySavings,
    returnRate,
    currentAge,
    retirementAge,
    fireNumber,
    inflationRate
  );

  return {
    fireNumber: Math.round(fireNumber),
    inflationAdjustedFireNumber: Math.round(inflationAdjustedFireNumber),
    adjustedMonthlyExpenses: Math.round(adjustedMonthlyExpenses),
    adjustedAnnualExpenses: Math.round(adjustedAnnualExpenses),
    yearsToFire,
    targetFireAge,
    requiredMonthlySavings: Math.round(requiredMonthlySavings),
    currentMonthlySavings: Math.round(currentMonthlySavings),
    savingsRate: Math.round(savingsRate * 10) / 10,
    coastFireNumber: Math.round(coastFireNumber),
    fireType,
    ageMessage,
    projectionData,
    isAchievable,
    portfolioAtRetirement: Math.round(portfolioAtRetirement),
  };
}
