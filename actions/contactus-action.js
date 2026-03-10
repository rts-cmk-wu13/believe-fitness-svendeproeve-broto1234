"use server"

export async function contactData( prevState, formData ) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  console.log("prevState...:", prevState);

  // if ( prevState?.values && 
  //       name === prevState.values.name && 
  //       email === prevState.values.email && 
  //       message === prevState.values.message) {
  //   return prevState;
  // }

  const validationResult = formSchema.safeParse({ name, email, message });
  
  if (!validationResult.success) {
    return {
      values: { name, email, message },
      errors: z.flattenError(validationResult.error).fieldErrors,
    };
  }

  const res = await fetch(`${process.env.API_URL}/api/v1/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  if (!res.ok) {
    return {
      values: { name, email, message },
      errors: { form: ["Failed to send message"] },
    };
  }

  const result = await res.json();
  console.log("Server response:", result);

  return { success: true };
}