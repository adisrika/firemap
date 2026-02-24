// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GtagFn = (...args: any[]) => void;

export function trackEvent(name: string, params?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: GtagFn }).gtag) {
    (window as unknown as { gtag: GtagFn }).gtag('event', name, params);
  }
}
