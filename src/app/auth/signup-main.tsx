"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { signUpAction } from "./signUpAction";
import { ToastAuthButton } from "./auth-toast";
import { useAtom } from "jotai";
import Link from "next/link";
import { isLoggedInAtom } from "@/context/authentication";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";

export function SignUpDisplayed() {
  return (
    <>
      <div className="flex w-full max-w-md flex-col space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Create an Account</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your details to get started.
          </p>
        </div>
        <SignupForm />
      </div>
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        <span>Already have an account?</span>{" "}
        <Link
          className="font-medium text-gray-900 underline dark:text-gray-50"
          href="/auth/signin"
        >
          Sign in
        </Link>
      </div>
    </>
  );
}

const SignupForm = () => {
  const [state, formAction] = useFormState(signUpAction, { errors: {} });
  const [, setIsLoggedIn] = useAtom(isLoggedInAtom);
  if (state.record) {
    setIsLoggedIn(true);
    localStorage && localStorage.setItem('isLoggedIn', 'true');
    redirect("/");
  }

  return (
    <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
              name="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Enter a secure password"
              required
              type="password"
              name="password"
            />
          </div>
          <ToastAuthButton>Create account</ToastAuthButton>
        </form>
  )
}

export default SignupForm
