'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Shared hook for number inputs across all calculators.
 * Allows free typing without snapping, syncs from parent (e.g. slider),
 * and clamps to min/max only on blur.
 */
export function useNumberInput(
  value: number,
  min: number,
  max: number,
  onChange: (v: number) => void
) {
  const [displayValue, setDisplayValue] = useState(String(value));
  const isFocused = useRef(false);

  // Sync display from parent only when the input is not focused (e.g. slider move)
  useEffect(() => {
    if (!isFocused.current) {
      setDisplayValue(String(value));
    }
  }, [value]);

  function handleFocus() {
    isFocused.current = true;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDisplayValue(e.target.value);
    const num = Number(e.target.value);
    if (e.target.value !== '' && !isNaN(num) && num >= min && num <= max) {
      onChange(num);
    }
  }

  function handleBlur() {
    isFocused.current = false;
    const num = Number(displayValue);
    const clamped =
      displayValue === '' || isNaN(num) ? min : Math.min(max, Math.max(min, num));
    onChange(clamped);
    setDisplayValue(String(clamped));
  }

  return { displayValue, handleFocus, handleChange, handleBlur };
}
