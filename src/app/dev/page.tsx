import NavbarLayout from "@/components/layout/Navbar";
import db from "@/lib/pocketbase";
import React from "react";

const DevPage = async () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const result = await db.register(email, password);
    console.log("Result is:", result);
  };

  return (
    <div className="h-screen">
      <NavbarLayout />
      <h1>Dev Page </h1>
      <div className="m-12 rounded-lg border border-border p-8">
        <h2 className="max-w-full break-words">Token</h2>
      </div>
      <form
        action={handleSubmit}
        className="m-12 flex w-[500px] flex-col items-center justify-center gap-4 rounded-lg border  border-border p-8"
      >
        <label className="">Email:</label>
        <input
          type="text"
          name="email"
          placeholder="email"
          className="rounded-lg px-4 py-2 text-black"
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="*****"
          className="rounded-lg px-4 py-2 text-black"
        />
        <input className="px-4 py-2 border border-border rounded-lg" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default DevPage;
