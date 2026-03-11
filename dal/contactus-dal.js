
export async function createMessage(name, email, message) {
  const res = await fetch(`${process.env.API_URL}/api/v1/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  if (!res.ok) {
      throw new Error("Failed to send message");
  }
  return await res.json();
}