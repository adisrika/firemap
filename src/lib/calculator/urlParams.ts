import type { CalculatorInputs } from '@/types/calculator';

type SearchParams = Record<string, string | string[] | undefined>;

function getNum(params: SearchParams, key: string): number | undefined {
  const raw = params[key];
  if (raw === undefined) return undefined;
  const val = Number(Array.isArray(raw) ? raw[0] : raw);
  return isNaN(val) ? undefined : val;
}

export function parseCalculatorParams(
  searchParams: SearchParams
): Partial<CalculatorInputs> {
  const result: Partial<CalculatorInputs> = {};

  const age = getNum(searchParams, 'age');
  if (age !== undefined) result.currentAge = Math.round(age);

  const ret = getNum(searchParams, 'ret');
  if (ret !== undefined) result.retirementAge = Math.round(ret);

  const inc = getNum(searchParams, 'inc');
  if (inc !== undefined) result.annualIncome = inc;

  const sav = getNum(searchParams, 'sav');
  if (sav !== undefined) result.currentSavings = sav;

  const exp = getNum(searchParams, 'exp');
  if (exp !== undefined) result.monthlyExpenses = exp;

  const dep = getNum(searchParams, 'dep');
  if (dep !== undefined) result.dependents = Math.min(6, Math.max(0, Math.round(dep)));

  const rr = getNum(searchParams, 'rr');
  if (rr !== undefined) result.returnRate = rr;

  const ir = getNum(searchParams, 'ir');
  if (ir !== undefined) result.inflationRate = ir;

  const wr = getNum(searchParams, 'wr');
  if (wr !== undefined) result.withdrawalRate = wr;

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
