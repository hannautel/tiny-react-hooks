import { useDisclosure } from './useDisclosure';

export default function Component() {
  const {
    isOpen,
    onClose,
    onOpen,
    onToggle,
  } = useDisclosure();

  return (
    <>
      <p>
        Value is <code>{isOpen.toString()}</code>
      </p>
      <button onClick={onClose}>Open</button>
      <button onClick={onOpen}>Close</button>
      <button onClick={onToggle}>Toggle</button>
    </>
  )
}