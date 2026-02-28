'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Shared hook for number inputs across all calculators.
 * Allows free typing without snapping or clamping.
 * On blur, reverts to last valid value if input is empty or NaN.
 */
export function useNumberInput(
  value: number,
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
    if (e.target.value !== '' && !isNaN(num)) {
      onChange(num);
    }
  }

  function handleBlur() {
    isFocused.current = false;
    const num = Number(displayValue);
    if (displayValue === '' || isNaN(num)) {
      // Revert display to last valid value; don't call onChange
      setDisplayValue(String(value));
    } else {
      onChange(num);
      setDisplayValue(String(num));
    }
  }

  return { displayValue, handleFocus, handleChange, handleBlur };
}
