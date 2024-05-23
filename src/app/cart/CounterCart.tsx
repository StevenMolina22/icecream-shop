"use client";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import React, { useState } from "react";

function CounterCart() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));
  const reset = () => setCount(0);

  return (
    <>
      <div className="flex gap-1">
        <Button onClick={decrement} size="icon" variant="outline">
          <MinusIcon className="h-3 w-3" />
          <span className="sr-only">Decrease</span>
        </Button>
        <span className="flex w-12 items-center justify-center rounded-md border border-gray-200 dark:border-gray-800">
          {count}
        </span>
        <Button onClick={increment} size="icon" variant="outline">
          <PlusIcon className="h-3 w-3" />
          <span className="sr-only">Increase</span>
        </Button>
      </div>
      <Button onClick={reset} size="icon" variant="outline">
        <TrashIcon className="h-4 w-4" />
        <span className="sr-only">Remove</span>
      </Button>
    </>
  );
}

export default CounterCart;
