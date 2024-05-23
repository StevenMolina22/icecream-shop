import { SignInDisplayed } from "@/app/auth/authentication-displayed";
import NavbarLayout from "@/components/layout/Navbar";
import React from "react";

function SignInPage() {
  return (
    <div className="dark">
      <NavbarLayout className="bg-transparent" />
      <SignInDisplayed />
    </div>
  );
}

export default SignInPage;
