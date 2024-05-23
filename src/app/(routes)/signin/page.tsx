import { SignInDisplayed } from "@/app/auth/authentication-displayed";
import NavbarLayout from "@/components/layout/Navbar";
import React from "react";

function SignInPage() {
  return (
    <div className="swiss-theme min-h-screen bg-background">
      <NavbarLayout className="bg-transparent" />
      <SignInDisplayed />
    </div>
  );
}

export default SignInPage;
