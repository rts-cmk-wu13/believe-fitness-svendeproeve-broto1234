
export async function Signup({ userFirstName, userLastName, username, password }) {
  const res = await fetch(`${process.env.API_URL}/api/v1/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userFirstName, userLastName, username, password }),
  });

  if (!res.ok) {
      throw new Error("Failed to send message");
  }
  return await res.json();
}