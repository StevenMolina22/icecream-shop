import db from "@/lib/pocketbase";
import { redirect } from "next/navigation";

export async function signInAction(formData: FormData) {
  "use server";

  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const email = rawFormData.email as string;
  const password = rawFormData.password as string;
  const record = await db.authenticate(email, password);
  
  console.log("Sign in action, record: ", record)
  redirect('/');
}
