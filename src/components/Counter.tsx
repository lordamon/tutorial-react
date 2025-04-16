import { useState } from "react";

interface CounterProps {
  start?: number;
  increment?: number;
}

export const Counter = ({ start = 0, increment = 1 }: CounterProps) => {
  const [count, setCount] = useState(start);

  return (
    <div>
      <h3>
        Counter: {count} [parte da {start} ed incrementa di {increment}]
      </h3>
      <button onClick={() => setCount(count + increment)}>Add number</button>
    </div>
  );
};
