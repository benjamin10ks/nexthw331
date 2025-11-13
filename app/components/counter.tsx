"use client";
import { useState } from "react";

export default function Counter(props: { countBy: number }) {
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
    <div className="p-4 border rounded-lg max-w-xs text-center shadow">
      <h2 className="text-lg font-semibold mb-2">Counter</h2>

      <p className="text-xl mb-4">Count: {count}</p>

      <div className="flex justify-center gap-4">
        <button
          style={{ backgroundColor: color }}
          onClick={handleColorChange}
          className="px-4 py-2 border border-gray-400 rounded-md transition-colors hover:opacity-80"
        >
          Color
        </button>

        <button
          onClick={handleIncrement}
          className="px-4 py-2 border border-gray-400 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          +{props.countBy}
        </button>
      </div>
    </div>
  );
}
