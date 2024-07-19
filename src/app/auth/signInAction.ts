"use server";
import db from "@/lib/pocketbase";
import { error } from "console";
import { redirect } from "next/navigation";

export async function signInAction(previousState: any,  formData: FormData) {
  "use server";
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const email = rawFormData.email as string;
  const password = rawFormData.password as string;
  const record = await db.authenticate(email, password);
  
  console.log("Sign in action, record: ", record);
  
  if (!record) {
    return { errors: { text: !record && "Invalid email or password" } };
  }
  return { record: record }; 
}
