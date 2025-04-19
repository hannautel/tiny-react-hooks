import { useEffect, useMemo, useRef } from 'react';

/** Hook return type */
type UseStableCallbackReturnType<T extends (...args: unknown[]) => unknown> = T;

/**
 * Custom hook that ...
 * @param {Function} [fn] - your function need to be stable
 * @returns {UseStableCallbackReturnType} return the the stable callback that will apply the newest function
 * @public
 * @example
 * ```tsx
 * const stableFn = useStableCallback((a: number, b: number) => {
 *  return a + b;
 * });
 *
 * console.log(stableFn(1, 2)); // 3
 * ```
 */
export function useStableCallback<T extends (...args: unknown[]) => unknown>(
  fn: T,
): UseStableCallbackReturnType<T> {
  const callbackRef = useRef<T>(fn);

  useEffect(() => {
    callbackRef.current = fn;
  }, [fn]);

  return useMemo(() => ((...args) => callbackRef.current(...args)) as T, []);
}
