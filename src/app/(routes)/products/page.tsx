import { ProductCardPage } from "@/app/(routes)/products/product-card-page";
import NavbarLayout from "@/components/layout/Navbar";
import React from "react";

function ProductPage() {
  const productName = "Ice cream cone";
  const productPrice = 2.99;
  const productDescription =
    "A delicious ice cream cone with a scoop of vanilla ice cream on top. Don't miss it, you won't regret trying it . Perfect for a hot summer day! 🍦";
  const productData = { productName, productPrice, productDescription };
  return (
    <div>
      <NavbarLayout />
      <ProductCardPage {...productData} />
    </div>
  );
}

export default ProductPage;
