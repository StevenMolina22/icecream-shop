import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import React from "react";
import Checkout from "./components/cart-checkout";
import CartProducts from "./components/cart-products";

export async function CartComponent() {
  
  
  return (
    <div className="flex gap-6 md:flex-row flex-col">
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Shopping Cart</CardTitle>
          <CardDescription>Your items are waiting for you</CardDescription>
        </CardHeader>
        <CardContent>
          <CartProducts />
        </CardContent>
      </Card>
      <Checkout />
    </div>
  );
}
