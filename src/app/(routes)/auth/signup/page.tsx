import { SignUpDisplayed } from "@/app/auth/signup-main";
import NavbarLayout from "@/components/layout/Navbar";
import React from "react";

function SignUpPage() {
  return (
    <div className="swiss-theme min-h-screen bg-background">
      <NavbarLayout className="bg-transparent" />
      <div className="mx-auto flex  max-w-[800px] flex-col items-center justify-center space-y-6 px-4 py-12 text-foreground sm:px-6 lg:px-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Welcome to our app
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Please sign in or create an account to continue.
          </p>
        </div>
        <SignUpDisplayed />
      </div>
    </div>
  );
}

export default SignUpPage;
