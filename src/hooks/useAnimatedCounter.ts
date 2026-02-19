'use client';

import { useState, useEffect, useRef } from 'react';

export function useAnimatedCounter(
  targetValue: number,
  duration = 2000,
  startOnMount = true
) {
  const [current, setCurrent] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const frameRef = useRef<number>();
  const startRef = useRef<number>();

  const start = () => {
    if (hasStarted) return;
    setHasStarted(true);
    startRef.current = undefined;

    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * targetValue));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCurrent(targetValue);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (startOnMount) start();
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startOnMount, targetValue]);

  return { current, start };
}
