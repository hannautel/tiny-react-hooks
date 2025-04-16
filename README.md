<div align="center">
<h1>tiny-react-hooks</h1>
<div>A React hook library, written in Typescript.</div>
<br />
<div align="center">
  <sub>Created by <a href="https://github.com/tuananhl">Tuan Anh</a>.</sub>
</div>

</div>
<br />

## 💫 Introduction

This is a React hooks library, written in Typescript and easy to use. It provides a set of hooks that enables you to build your React applications faster. There are hooks for most common use cases you might need.

### Usage example

```tsx
import { useDisclosure } from "tiny-react-hooks"; // might be deploy in the future

function Component() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  // ...
}
```

## 🪝 Available Hooks

<!-- HOOKS:START -->

- [`useDisclosure`] — handles boolean state with useful utility functions.
<!-- HOOKS:END -->
