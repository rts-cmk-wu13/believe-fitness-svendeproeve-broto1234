export async function addDeleteClass(userId, classId, isUserEnrolled, token) {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/users/${userId}/classes/${classId}`,
    {
      method: isUserEnrolled ? "DELETE" : "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Failed to join activity");
  }
  
  return await res.text();
}
