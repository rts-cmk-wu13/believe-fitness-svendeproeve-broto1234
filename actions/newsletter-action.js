"use server"

import { newsletterSchema } from "@/lib/newsletter-validation";
import { getNewsletter } from "@/dal/newsletter-dal";

export async function newsletterAction( prevState, formData ) {

  const email = formData.get("email");
  
  const emailParse = newsletterSchema.safeParse({ email });
  
  if (!emailParse.success) {
    return {
      values: { email },
      errors: emailParse.error.flatten().fieldErrors,
    };
  }

  await getNewsletter(email);  

  return { success: true };
}