
export async function getNewsletter(email) {
  const res = await fetch(`${process.env.API_URL}/api/v1/newsletter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    return {
      values: { email },
      errors: { form: ["Failed to send newsletter subscription"] },
    };
  }

  return await res.json();
  
}