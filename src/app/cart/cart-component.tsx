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
import Checkout from "./cart-checkout";
import ProductsDisplayed from "./cart-products";


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
          <ProductsDisplayed products={products} />
        </CardContent>
      </Card>
      <Checkout />
    </div>
  );
}


// interface IconProps extends React.SVGProps<SVGSVGElement> {}
// function MinusIcon(props: IconProps) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M5 12h14" />
//     </svg>
//   );
// }

// function PlusIcon(props: IconProps) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M5 12h14" />
//       <path d="M12 5v14" />
//     </svg>
//   );
// }

// function TrashIcon(props: IconProps) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 6h18" />
//       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//     </svg>
//   );
// }
