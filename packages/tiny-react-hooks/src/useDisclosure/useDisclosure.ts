import { useCallback, useState } from 'react';

type UseDisclosureReturn = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

/**
 * Custom hook that handles boolean state with useful utility functions.
 * @param {boolean} [defaultValue] - The initial value for the boolean state (default is `false`).
 * @returns {UseDisclosureReturn} An object containing the boolean state value and utility functions to manipulate the state.
 * @throws Will throw an error if `defaultValue` is an invalid boolean value.
 * @public
 * @example
 * ```tsx
 * const { isOpen, onOpen, onClose, onToggle } = UseDisclosureReturn(true);
 * ```
 */
export function useDisclosure(defaultValue = false): UseDisclosureReturn {
  if (typeof defaultValue !== 'boolean') throw new Error('defaultValue must be a boolean value');
  const [isOpen, setOpen] = useState<boolean>(defaultValue);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onToggle = useCallback(() => {
    setOpen((isOpening) => !isOpening);
  }, []);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
}
