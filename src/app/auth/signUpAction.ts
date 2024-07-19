"use server";
import { pb } from "@/lib/pocketbase";

export async function signUpAction(prevState: any, formData: FormData) {

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

  if (!record) {
    return { errors: { text: !record && "Invalid email or password" }};
  }
  return { errors: {}};
}
