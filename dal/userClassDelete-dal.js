
export async function deleteUserFromClass(userId, classId, accessToken) {
  console.log("Fetching user with ID:", userId);

  const res = await fetch(`${process.env.API_URL}/api/v1/users/${userId}/classes/${classId}`, {
    method: "DELETE",
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

  const text = await res.text();
  if(!text) {
    return {
      success: true,
      message: "User successfully removed from class"
    };
  }

  return JSON.parse(text);
}