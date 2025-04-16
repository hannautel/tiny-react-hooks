import { useDisclosure } from './useDisclosure';

export function Component() {
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();
  // const {
  //   isOpen,
  //   onClose,
  //   onOpen,
  //   onToggle,
  // } = useDisclosure(false);
  // const {
  //   isOpen,
  //   onClose,
  //   onOpen,
  //   onToggle,
  // } = useDisclosure(() => false);

  return (
    <>
      <p>
        Value is <code>{isOpen.toString()}</code>
      </p>
      <button onClick={onClose}>Open</button>
      <button onClick={onOpen}>Close</button>
      <button onClick={onToggle}>Toggle</button>
    </>
  );
}
