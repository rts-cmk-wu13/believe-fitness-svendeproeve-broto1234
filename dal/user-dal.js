
export async function fetchUserById(userId, accessToken) {
  console.log("Fetching user with ID:", userId);
  console.log("and accessToken:", accessToken);

  const url = `${process.env.API_URL}/api/v1/users/${userId}`;

  console.log("fetching from:", url);
  
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(res.status, text);
    throw new Error("Failed to fetch user data: " + text);
  }

  return res.json();
}