"use client";

import { useState } from "react";

export function User() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((state) => state + 1)}>Increment</button>
    </div>
  );
}
