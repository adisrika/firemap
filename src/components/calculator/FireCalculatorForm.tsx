'use client';

import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import type { CalculatorInputs } from '@/types/calculator';

interface FireCalculatorFormProps {
  inputs: CalculatorInputs;
  onUpdate: <K extends keyof CalculatorInputs>(key: K, value: CalculatorInputs[K]) => void;
}

function FormField({
  label,
  id,
  children,
  hint,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium text-navy-700 mb-1.5 block">
        {label}
      </Label>
      {children}
      {hint && <p className="text-xs text-gray-500 mt-1">{hint}</p>}
    </div>
  );
}

function NumberInput({
  id,
  value,
  onChange,
  min,
  max,
  step = 1,
  prefix,
  suffix,
}: {
  id: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="relative">
      {prefix && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">
          {prefix}
        </span>
      )}
      <input
        id={id}
        type="number"
        value={value}
        onChange={(e) => onChange(Math.min(max, Math.max(min, Number(e.target.value) || min)))}
        min={min}
        max={max}
        step={step}
        className={cn(
          'w-full h-10 rounded-lg border border-input bg-background text-sm ring-offset-background transition',
          'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          prefix ? 'pl-7 pr-3' : 'px-3',
          suffix ? 'pr-8' : ''
        )}
      />
      {suffix && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">
          {suffix}
        </span>
      )}
    </div>
  );
}

export function FireCalculatorForm({ inputs, onUpdate }: FireCalculatorFormProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Current Age */}
        <FormField label="Current Age" id="currentAge" hint="Your age today">
          <NumberInput
            id="currentAge"
            value={inputs.currentAge}
            onChange={(v) => onUpdate('currentAge', v)}
            min={18}
            max={70}
            suffix="yrs"
          />
          <Slider
            value={[inputs.currentAge]}
            onValueChange={([v]) => onUpdate('currentAge', v)}
            min={18}
            max={70}
            step={1}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>18</span><span>70</span>
          </div>
        </FormField>

        {/* Retirement Age */}
        <FormField label="Target Retirement Age" id="retirementAge" hint="When you want to FIRE">
          <NumberInput
            id="retirementAge"
            value={inputs.retirementAge}
            onChange={(v) => onUpdate('retirementAge', Math.max(inputs.currentAge + 1, v))}
            min={inputs.currentAge + 1}
            max={80}
            suffix="yrs"
          />
          <Slider
            value={[inputs.retirementAge]}
            onValueChange={([v]) => onUpdate('retirementAge', Math.max(inputs.currentAge + 1, v))}
            min={inputs.currentAge + 1}
            max={80}
            step={1}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>{inputs.currentAge + 1}</span><span>80</span>
          </div>
        </FormField>

        {/* Annual Income */}
        <FormField label="Annual Income (Pre-Tax)" id="annualIncome" hint="Gross annual salary">
          <NumberInput
            id="annualIncome"
            value={inputs.annualIncome}
            onChange={(v) => onUpdate('annualIncome', v)}
            min={1000}
            max={10000000}
            step={1000}
            prefix="$"
          />
          <Slider
            value={[Math.min(inputs.annualIncome, 300000)]}
            onValueChange={([v]) => onUpdate('annualIncome', v)}
            min={20000}
            max={300000}
            step={1000}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>$20K</span><span>$300K+</span>
          </div>
        </FormField>

        {/* Current Savings */}
        <FormField label="Current Portfolio / Savings" id="currentSavings" hint="Total invested assets today">
          <NumberInput
            id="currentSavings"
            value={inputs.currentSavings}
            onChange={(v) => onUpdate('currentSavings', v)}
            min={0}
            max={100000000}
            step={1000}
            prefix="$"
          />
          <Slider
            value={[Math.min(inputs.currentSavings, 500000)]}
            onValueChange={([v]) => onUpdate('currentSavings', v)}
            min={0}
            max={500000}
            step={1000}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>$0</span><span>$500K+</span>
          </div>
        </FormField>

        {/* Monthly Expenses */}
        <FormField label="Monthly Expenses" id="monthlyExpenses" hint="All monthly spending (before dependents adjustment)">
          <NumberInput
            id="monthlyExpenses"
            value={inputs.monthlyExpenses}
            onChange={(v) => onUpdate('monthlyExpenses', v)}
            min={500}
            max={50000}
            step={100}
            prefix="$"
          />
          <Slider
            value={[Math.min(inputs.monthlyExpenses, 15000)]}
            onValueChange={([v]) => onUpdate('monthlyExpenses', v)}
            min={500}
            max={15000}
            step={100}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>$500</span><span>$15K</span>
          </div>
        </FormField>

        {/* Dependents */}
        <FormField label="Number of Dependents" id="dependents" hint="Each adds 20% to expense estimate">
          <div className="flex gap-2 flex-wrap">
            {[0, 1, 2, 3, 4, 5, 6].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => onUpdate('dependents', n)}
                className={cn(
                  'w-10 h-10 rounded-lg font-semibold text-sm transition-all border',
                  inputs.dependents === n
                    ? 'gradient-fire text-white border-transparent shadow-md'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-fire-400'
                )}
              >
                {n}
              </button>
            ))}
          </div>
        </FormField>

        {/* Expected Return Rate */}
        <FormField label="Expected Annual Return" id="returnRate" hint="Historical stock market avg: 7% (inflation-adjusted)">
          <NumberInput
            id="returnRate"
            value={inputs.returnRate}
            onChange={(v) => onUpdate('returnRate', v)}
            min={1}
            max={20}
            step={0.5}
            suffix="%"
          />
          <Slider
            value={[inputs.returnRate]}
            onValueChange={([v]) => onUpdate('returnRate', v)}
            min={1}
            max={15}
            step={0.5}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>1%</span><span>15%</span>
          </div>
        </FormField>

        {/* Inflation Rate */}
        <FormField label="Inflation Rate" id="inflationRate" hint="Historical avg: 2-3%">
          <NumberInput
            id="inflationRate"
            value={inputs.inflationRate}
            onChange={(v) => onUpdate('inflationRate', v)}
            min={0}
            max={15}
            step={0.25}
            suffix="%"
          />
          <Slider
            value={[inputs.inflationRate]}
            onValueChange={([v]) => onUpdate('inflationRate', v)}
            min={0}
            max={10}
            step={0.25}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>0%</span><span>10%</span>
          </div>
        </FormField>
      </div>
    </div>
  );
}
