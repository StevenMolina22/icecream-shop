import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

export function SignInDisplayed() {
  return (
    <div className="mx-auto text-foreground flex max-w-[800px] flex-col items-center justify-center space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Welcome to our app
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Please sign in or create an account to continue.
        </p>
      </div>
      <div className="flex w-full max-w-md flex-col space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Sign In</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email and password to sign in.
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Enter your password"
              required
              type="password"
            />
          </div>
          <Button className="w-full" type="submit">
            Sign In
          </Button>
        </form>
      </div>
      <p className="text-muted-foreground">Already have an account? {" "}
      <Link className="text-foreground border-b border-foreground" href="/signup">
          Sign up
        </Link>
      </p>
        
    </div>
  );
}

export function SignUpDisplayed() {
  return (
    <div className="mx-auto flex  text-foreground max-w-[800px] flex-col items-center justify-center space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Welcome to our app
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Please sign in or create an account to continue.
        </p>
      </div>
      <div className="flex w-full max-w-md flex-col space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Create an Account</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your details to get started.
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Enter a secure password"
              required
              type="password"
            />
          </div>
          <Button className="w-full" type="submit">
            Create Account
          </Button>
        </form>
      </div>
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        <span>Already have an account?</span>{" "}
        <Link
          className="font-medium text-gray-900 underline dark:text-gray-50"
          href="/signin"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
