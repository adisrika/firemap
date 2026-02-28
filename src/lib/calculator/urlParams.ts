import type { CalculatorInputs } from '@/types/calculator';

type SearchParams = Record<string, string | string[] | undefined>;

function getNum(params: SearchParams, key: string): number | undefined {
  const raw = params[key];
  if (raw === undefined) return undefined;
  const val = Number(Array.isArray(raw) ? raw[0] : raw);
  return isNaN(val) ? undefined : val;
}

function clamp(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max);
}

export function parseCalculatorParams(
  searchParams: SearchParams
): Partial<CalculatorInputs> {
  const result: Partial<CalculatorInputs> = {};

  const age = getNum(searchParams, 'age');
  if (age !== undefined) result.currentAge = clamp(Math.round(age), 18, 70);

  const ret = getNum(searchParams, 'ret');
  if (ret !== undefined) {
    const minRet = result.currentAge !== undefined ? result.currentAge + 1 : 19;
    result.retirementAge = clamp(Math.round(ret), minRet, 80);
  }

  const inc = getNum(searchParams, 'inc');
  if (inc !== undefined) result.annualIncome = clamp(inc, 1_000, 10_000_000);

  const sav = getNum(searchParams, 'sav');
  if (sav !== undefined) result.currentSavings = clamp(sav, 0, 100_000_000);

  const exp = getNum(searchParams, 'exp');
  if (exp !== undefined) result.monthlyExpenses = clamp(exp, 500, 50_000);

  const dep = getNum(searchParams, 'dep');
  if (dep !== undefined) result.dependents = clamp(Math.round(dep), 0, 6);

  const rr = getNum(searchParams, 'rr');
  if (rr !== undefined) result.returnRate = clamp(rr, 1, 20);

  const ir = getNum(searchParams, 'ir');
  if (ir !== undefined) result.inflationRate = clamp(ir, 0, 15);

  const wr = getNum(searchParams, 'wr');
  if (wr !== undefined) result.withdrawalRate = clamp(wr, 2, 6);

  return result;
}

export function buildShareUrl(inputs: CalculatorInputs): string {
  const params = new URLSearchParams({
    age: String(inputs.currentAge),
    ret: String(inputs.retirementAge),
    inc: String(inputs.annualIncome),
    sav: String(inputs.currentSavings),
    exp: String(inputs.monthlyExpenses),
    dep: String(inputs.dependents),
    rr: String(inputs.returnRate),
    ir: String(inputs.inflationRate),
    wr: String(inputs.withdrawalRate),
  });
  return `${window.location.origin}/calculator?${params.toString()}`;
}
