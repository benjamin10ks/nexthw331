import { useState } from "react";

export default function Counter(props: any) {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(props.countBy ? count + props.countBy : count + 1);
  }

  return (
    <div>
      <div>Counter</div>
      <button>Color</button>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+{props}</button>
      <button onClick={handleIncrement}>+{props}</button>
    </div>
  );
}
