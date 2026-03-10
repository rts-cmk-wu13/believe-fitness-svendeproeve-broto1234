"use server"

// import { z } from "zod";
import { newsletterSchema } from "@/lib/newsletter-validation";
import { getNewsletter } from "@/dal/newsletter-dal";

export async function newsletterAction( prevState, formData ) {

  const email = formData.get("email");
  // console.log("prevState...:", prevState);

  if ( prevState?.values && 
        email === prevState.values.email ) {
    return prevState;
  }

  const emailParse = newsletterSchema.safeParse({ email });
  
  if (!emailParse.success) {
    return {
      values: { email },
      errors: emailParse.error.flatten().fieldErrors,
    };
  }

  await getNewsletter(email);  
  // console.log("Server response:", result);

  return { success: true };
  // return { success: true, values: { email }, errors: undefined };
}