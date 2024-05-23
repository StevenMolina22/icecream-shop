import { SignUpDisplayed } from "@/app/auth/authentication-displayed";
import NavbarLayout from "@/components/layout/Navbar";
import React from "react";

function SignUpPage() {
  return (
    <div className="swiss-theme min-h-screen bg-background">
      <NavbarLayout className="bg-transparent" />
      <SignUpDisplayed />
    </div>
  );
}

export default SignUpPage;
