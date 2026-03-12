"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginSchema } from "@/lib/login-validation";
import { loginUser } from "@/dal/auth-dal";

export async function loginData( prevState, formData ) {
  const cookiesStore = await cookies();
  console.log("cookies...:", cookiesStore);
  const username = formData.get("username");
  const password = formData.get("password");
  // console.log("prevState...:", prevState);

  const validationResult = loginSchema.safeParse({ username, password });
  
  if (!validationResult.success) {
    return {
      values: { username, password },
      errors: validationResult.error.flatten().fieldErrors,
    };
  }
  
  const result = await loginUser({ username, password})
  
  if (!result) {
    return {
      values: { username, password },
      errors: { form: ["Invalid username or password"] },
    };
  }

  cookiesStore.set("accessToken", result.token);
  cookiesStore.set("userId", result.userId);

  const role = result.role ?? "default";
    if (role?.trim() === "default") { 
      redirect("/profile") 
    } 
    redirect("/instructor");
}