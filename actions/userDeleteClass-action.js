"use server"

import { cookies } from "next/headers";
import { deleteUserFromClass } from "@/dal/userClassDelete-dal";
import { revalidatePath } from "next/cache";

export async function userDeleteClass( userId, classId ) {
  try {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get("accessToken")?.value;

  const result = await deleteUserFromClass(userId, classId, accessToken);

  revalidatePath("/profile")

  return {
    success: true,
    message: "You have successfully deleted the class",
    data: result || null,
  };
  } catch (error) {
  console.log("Network error:", error);
    return {
      success: false,
      message: error.message || "Network error while deleting class",
    };
  }
}
