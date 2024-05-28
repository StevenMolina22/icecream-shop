import db, { pb } from "@/lib/pocketbase";
import { redirect } from "next/navigation";

export async function signUpAction(formData: FormData) {
  "use server";

  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    passwordConfirm: formData.get("password"),
  };
  const email = rawFormData.email as string;
  const record = await pb.collection("users").create(rawFormData);
  console.log("Sign up action, record: ", record);

  await pb.collection("users").requestVerification(email);

  redirect("/auth/signin")
}
