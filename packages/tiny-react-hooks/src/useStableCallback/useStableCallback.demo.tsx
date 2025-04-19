import { useStableCallback } from './useStableCallback';

interface Props {
  count: number;
}

export default function Component({
  count,
}: Props) {
  const sum = useStableCallback(() => {
    console.log(count * 10);
  });

  return <button type="button" role="button" onClick={sum}>Click me and see the console</button>;
}
