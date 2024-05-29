import { useAtom } from "jotai";
import { useState } from "react";
import { shippingAtom, subTotalAtom, taxAtom } from "./cart-store";

// cart counter
export const useCartCounter = (price: number) => {
  const [count, setCount] = useState(0);
  // Atom state
  const [subTotal, setSubTotal] = useAtom(subTotalAtom);
  const [shipping, setShipping] = useAtom(shippingAtom);
  const [tax, setTax] = useAtom(taxAtom);

  // Counter functions
  const increment = () => {
    setCount(count + 1);
    setSubTotal(subTotal + price);
    setShipping(shipping + price * 0.1);
    setTax(tax + price * 0.05);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setSubTotal(subTotal - price);
      setShipping(shipping - price * 0.1);
      setTax(tax - price * 0.05);
    }
  };

  const reset = () => {
    setSubTotal(subTotal - price * count);
    setShipping(shipping - price * count * 0.1);
    setTax(tax - price * count * 0.05);
    setCount(0);
  };
  return { count, increment, decrement, reset };
};
