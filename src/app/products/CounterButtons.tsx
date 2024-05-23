"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";

function CounterButtons() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev > 0 ? prev - 1 : prev);

  return (
    <div className="flex items-center justify-between px-4">
      <button
        onClick={decrement}
        className="rounded-full bg-muted/70 p-2 hover:bg-muted"
      >
        <MinusIcon className="h-4 w-4" />
      </button>
      <span className="mx-2">{count}</span>
      <button
        onClick={increment}
        className="rounded-full bg-muted/70 p-2 hover:bg-muted"
      >
        <PlusIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

export default CounterButtons;
