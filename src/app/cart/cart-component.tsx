import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export async function CartComponent() {
  const products: Product[] = await getItems(
    "/api/collections/products/records",
  );
  const mediaURL = `${DB_HOST}/api/files/${products[0].collectionId}`;

  return (
    <div className="flex gap-6">
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Shopping Cart</CardTitle>
          <CardDescription>Your items are waiting for you</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {products &&
              products.map((product, index) => (
                <>
                  <div key={product.id} className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        alt="Thumbnail"
                        className="aspect-square rounded-lg object-cover"
                        height="100"
                        src={getMediaURL(product)}
                        width="100"
                      />
                      <div className="grid gap-1.5">
                        <h2 className="font-semibold">{product.name}</h2>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-0.5">
                            <span className="font-semibold">
                              {product.price.toFixed(2)}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              /unit
                            </span>
                          </div>
                          <CounterCart />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                </>
              ))}
          </div>
        </CardContent>
      </Card>
      <Checkout />
    </div>
  );
}

import React from "react";
import { getItems } from "../api/getItems";
import { Product } from "@/types/products";
import { DB_HOST } from "@/lib/pocketbase";
import CounterCart from "./CounterCart";
import { getMediaURL } from "@/utils/mediaProducts";

const Checkout = () => {
  return (
    <Card className="rounded-xl p-6">
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div>Subtotal</div>
          <div className="ml-auto font-medium">$260.33</div>
        </div>
        <div className="flex items-center gap-4">
          <div>Tax</div>
          <div className="ml-auto font-medium">$20.83</div>
        </div>
        <div className="flex items-center gap-4">
          <div>Shipping</div>
          <div className="ml-auto font-medium">$10.00</div>
        </div>
        <div className="flex items-center gap-4 font-semibold">
          <div>Total</div>
          <div className="ml-auto">$291.16</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Checkout</Button>
      </CardFooter>
    </Card>
  );
};

export default Checkout;

interface IconProps extends React.SVGProps<SVGSVGElement> {}
function MinusIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TrashIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
