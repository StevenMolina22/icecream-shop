import { CartComponent } from "@/app/cart/cart-component";
import NavbarLayout from "@/components/layout/Navbar";
import React from "react";

function CardPage() {
  return (
    <div>
      <NavbarLayout />
      <div className="flex flex-col items-center p-6">
        <CartComponent />
      </div>
    </div>
  );
}

export default CardPage;
