import { renderHook } from '@testing-library/react';

import { useStableCallback } from './useStableCallback';

describe('useStableCallback()', () => {
  it('should return the callback', () => {
    const mockFn = vi.fn(() => 1);
    const { result } = renderHook(() => useStableCallback(mockFn));

    expect(result.current()).toBe(1);
    expect(typeof result.current).toBe('function');
  });

  describe('when fn is changed', () => {
    it('should return the correct callback', () => {
      const mockFn1 = vi.fn(() => 1);
      const mockFn2 = vi.fn(() => 2);
      const { result, rerender } = renderHook(
        ({ fn }) => useStableCallback(fn),
        { initialProps: { fn: mockFn1 } },
      );
      expect(result.current()).toBe(1);
      rerender({ fn: mockFn2 });
      expect(result.current()).toBe(2);
    });
  });
});
