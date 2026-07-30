import { useEffect, useRef, useState } from 'react';

type UseCountUpOptions = {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
};

export function useCountUp({ end, duration = 1800, decimals = 0, suffix = '' }: UseCountUpOptions) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    let raf = 0;
    let startTime = 0;

    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          raf = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    const node = observerTarget.current;
    if (node) observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, duration]);

  const observerTarget = useRef<HTMLSpanElement | null>(null);

  const display = value.toLocaleString('fr-FR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return { ref: observerTarget, display: `${display}${suffix}` };
}
