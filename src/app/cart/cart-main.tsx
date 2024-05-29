import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import React from "react";
import { getItems } from "../api/getItems";
import { Product } from "@/types/products";
import Checkout from "./components/cart-checkout";
import CartProducts from "./components/cart-products";

export async function CartComponent() {
  const products: Product[] = await getItems(
    "/api/collections/products/records",
  );

  return (
    <div className="flex gap-6">
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Shopping Cart</CardTitle>
          <CardDescription>Your items are waiting for you</CardDescription>
        </CardHeader>
        <CardContent>
          <CartProducts products={products} />
        </CardContent>
      </Card>
      <Checkout />
    </div>
  );
}
