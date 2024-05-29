import { CartComponent } from "@/app/cart/cart-main";
import NavbarLayout from "@/components/layout/Navbar";
import React from "react";

function CardPage() {
  return (
    <div className="swiss-theme bg-background min-h-screen">
      <NavbarLayout />
      <div className="flex flex-col items-center p-6">
        <CartComponent />
      </div>
      <button className=" text-primary-foreground px-4 py-2 m-6 rounded-lg">Hello world</button>
    </div>
  );
}

export default CardPage;
