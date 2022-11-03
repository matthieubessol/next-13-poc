"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count (composant chargé côté client) : <span className="text-blue-500">{count}</span></p>
      <button className="bg-blue-500 p-3" onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
}
