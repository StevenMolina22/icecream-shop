"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signInAction } from "./signInAction";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useAtom } from "jotai";
import { isLoggedInAtom } from "@/context/authentication";
import { redirect } from "next/navigation";

export function SignInDisplayed() {
  return (
    <div className="mx-auto flex max-w-[800px] flex-col items-center justify-center space-y-6 px-4 py-12 text-foreground sm:px-6 lg:px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Welcome to our app
          {/* <Status /> */}
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
        <SignInForm />
      </div>
      <p className="text-muted-foreground">
        Already have an account?{" "}
        <Link
          className="border-b border-foreground text-foreground"
          href="/auth/signup"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}

export function SignInForm() {
  const [state, formAction] = useFormState(signInAction, { erros: {} });
  const [, setIsLoggedIn] = useAtom(isLoggedInAtom);
  if (state.record) {
    setIsLoggedIn(true);
    localStorage && localStorage.setItem('isLoggedIn', 'true');
    redirect("/");
  }

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          placeholder="m@example.com"
          required
          type="email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          placeholder="Enter your password"
          required
          type="password"
        />
      </div>
      <Button className="w-full" type="submit">
        Sign In
      </Button>
      {state.errors && <p className="text-red-500">{state.errors.text}</p>}
    </form>
  );
}
