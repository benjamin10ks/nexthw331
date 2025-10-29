"use client";
import { useState } from "react";

export default function Counter(props: any) {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");

  function handleIncrement() {
    setCount((prevCount) => {
      const newCount = prevCount + props.countBy;
      return newCount > 20 ? 0 : newCount;
    });
  }

  function handleColorChange() {
    const randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randColor);
  }

  return (
    <div>
      <div>Counter</div>
      <button style={{ backgroundColor: color }} onClick={handleColorChange}>
        Color
      </button>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+{props.countBy}</button>
    </div>
  );
}
