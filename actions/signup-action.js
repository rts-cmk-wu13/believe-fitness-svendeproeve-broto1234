"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signupSchema } from "@/lib/signup-validation";
import { Signup } from "@/dal/signup-dal";

export async function signupData( prevState, formData ) {
  const cookiesStore = await cookies();
  const userFirstName = formData.get("userFirstName");
  const userLastName = formData.get("userLastName");
  const username = formData.get("username");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  
  const validationResult = signupSchema.safeParse({ userFirstName, userLastName, username, password, confirmPassword });

  if (!validationResult.success) {
    return {
      values: { userFirstName, userLastName, username, password, confirmPassword },
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const result = await Signup({ userFirstName, userLastName, username, password });

  if (!result) {
    return {
      values: { userFirstName, userLastName, username, password, confirmPassword },
      errors: { form: ["Failed to register user"] },
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
