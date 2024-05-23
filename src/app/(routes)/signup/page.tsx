import { SignUpDisplayed } from "@/app/auth/authentication-displayed";
import NavbarLayout from "@/components/layout/Navbar";
import React from "react";

function SignUpPage() {
  return (
    <div>
      <NavbarLayout className="bg-transparent" />
      <SignUpDisplayed />
    </div>
  );
}

export default SignUpPage;
