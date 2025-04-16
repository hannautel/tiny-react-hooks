import { useCallback, useRef, useState } from 'react';

type UseDisclosureReturn = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
};

type DisclosureDefaultValue = boolean | (() => boolean);

/**
 * Custom hook that handles boolean state with useful utility functions.
 * @param {DisclosureDefaultValue} [defaultValue] - The initial value or produce default value function for the boolean state (default is `false`).
 * @returns {UseDisclosureReturn} An object containing the boolean state value and utility functions to manipulate the state.
 * @throws Will throw an error if `defaultValue` is an invalid boolean value.
 * @public
 * @example
 * ```tsx
 * const { isOpen, onOpen, onClose, onToggle } = UseDisclosureReturn(true);
 * ```
 */
export function useDisclosure(
  init: DisclosureDefaultValue = false,
): UseDisclosureReturn {
  const initialValue = useRef<boolean>(
    typeof init === 'function' ? init() : init,
  );
  if (typeof initialValue.current !== 'boolean')
    throw new Error('defaultValue must be a boolean value');
  const [isOpen, setOpen] = useState<boolean>(initialValue.current);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onToggle = useCallback(() => {
    setOpen(isOpening => !isOpening);
  }, []);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
}
