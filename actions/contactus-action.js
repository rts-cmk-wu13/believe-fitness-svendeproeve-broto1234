"use server";

import { formSchema } from "@/lib/form-validation";
import { createMessage } from "@/dal/contactus-dal";

export async function contactData( prevState, formData ) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const validationResult = formSchema.safeParse({ name, email, message });
  
  if (!validationResult.success) {
    return {
      values: { name, email, message },
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  try { 
    await createMessage(name, email, message);
    return { success: true };
  } catch (error) {
    return {
      values: { name, email, message },
      errors: { form: ["Failed to send message"] },
    };
  }
}
