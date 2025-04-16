import { act, renderHook } from '@testing-library/react';
import { useDisclosure } from './useDisclosure';

describe('useDisclosure()', () => {
  it('should return correct value and methods', () => {
    const { result } = renderHook(() => useDisclosure());

    expect(result.current.isOpen).toBe(false);
    expect(typeof result.current.isOpen).toBe('boolean');
    expect(typeof result.current.onOpen).toBe('function');
    expect(typeof result.current.onClose).toBe('function');
    expect(typeof result.current.onToggle).toBe('function');
  });

  describe('with no default value', () => {
    it('should return isOpen with false when nothing is passed as argument', () => {
      const { result } = renderHook(() => useDisclosure());
      expect(result.current.isOpen).toBe(false);
    });
  });

  describe('with default value', () => {
    describe('with correct default value', () => {
      describe('with default value is a boolean', () => {
        it('should return isOpen with true', () => {
          const { result } = renderHook(() => useDisclosure(true));
          expect(result.current.isOpen).toBe(true);
        });
        it('should return isOpen with false', () => {
          const { result } = renderHook(() => useDisclosure(false));
          expect(result.current.isOpen).toBe(false);
        });
      });

      describe('with default value is function', () => {
        it('should return isOpen with true', () => {
          const { result } = renderHook(() => useDisclosure(() => true));
          expect(result.current.isOpen).toBe(true);
        });
        it('should return isOpen with false', () => {
          const { result } = renderHook(() => useDisclosure(() => false));
          expect(result.current.isOpen).toBe(false);
        });
      });
    });
    describe('with incorrect default value type', () => {
      describe('with default value is a boolean', () => {
        it('should throw an error', () => {
          const nonBoolean = '' as never;
          vi.spyOn(console, 'error').mockImplementation(() => vi.fn());
          expect(() => {
            renderHook(() => useDisclosure(nonBoolean));
          }).toThrowError('defaultValue must be a boolean value');
          vi.resetAllMocks();
        });
      });
      describe('with default value is a function', () => {
        it('should throw an error', () => {
          const nonBoolean = () => '' as never;
          vi.spyOn(console, 'error').mockImplementation(() => vi.fn());
          expect(() => {
            renderHook(() => useDisclosure(nonBoolean));
          }).toThrowError('defaultValue must be a boolean value');
          vi.resetAllMocks();
        });
      });
    });
  });

  describe('onOpen', () => {
    it('should set to true', () => {
      const { result } = renderHook(() => useDisclosure(false));

      act(() => {
        result.current.onOpen();
      });

      expect(result.current.isOpen).toBe(true);
    });
  });

  describe('onClose', () => {
    it('should set to false', () => {
      const { result } = renderHook(() => useDisclosure(true));

      act(() => {
        result.current.onClose();
      });

      expect(result.current.isOpen).toBe(false);
    });
  });

  describe('onToggle', () => {
    describe('toggle the value when false', () => {
      it('should set to true', () => {
        const { result } = renderHook(() => useDisclosure(false));
        act(() => {
          result.current.onToggle();
        });

        expect(result.current.isOpen).toBe(true);
      });
    });
    describe('toggle the value when true', () => {
      it('should set to false', () => {
        const { result } = renderHook(() => useDisclosure(true));
        act(() => {
          result.current.onToggle();
        });

        expect(result.current.isOpen).toBe(false);
      });
    });
    describe('toggle multiple time', () => {
      it('should set to correct open state', () => {
        const { result } = renderHook(() => useDisclosure(false));
        act(() => {
          result.current.onToggle(); // true
          result.current.onToggle(); // false
          result.current.onToggle(); // true
          result.current.onToggle(); // false
          result.current.onToggle(); // true -> result
        });

        expect(result.current.isOpen).toBe(true);
      });
    });
  });
});
