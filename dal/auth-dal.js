
export async function loginUser({ username, password}) {
  const res = await fetch(`${process.env.API_URL}/auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
      throw new Error("Failed to send message");
  }
  return await res.json();
}