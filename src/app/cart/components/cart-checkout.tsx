"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useAtom } from "jotai";
import { shippingAtom, subTotalAtom, taxAtom } from "../cart-store";
import Link from "next/link";

const Checkout = () => {
  const [subTotal] = useAtom(subTotalAtom);
  const [shipping] = useAtom(shippingAtom);
  const [tax] = useAtom(taxAtom);
  return (
    <Card className="rounded-xl p-6">
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div>Subtotal</div>
          <div className="ml-auto font-medium">${subTotal}</div>
        </div>
        <div className="flex items-center gap-4">
          <div>Tax</div>
          <div className="ml-auto font-medium">${shipping}</div>
        </div>
        <div className="flex items-center gap-4">
          <div>Shipping</div>
          <div className="ml-auto font-medium">${tax}</div>
        </div>
        <div className="flex items-center gap-4 font-semibold">
          <div>Total</div>
          <div className="ml-auto">${subTotal + shipping + tax}</div>
        </div>
      </CardContent>
      <CardFooter>
      <Link href="/checkout"><Button className="w-full">Checkout</Button></Link>
        
      </CardFooter>
    </Card>
  );
};

export default Checkout;
