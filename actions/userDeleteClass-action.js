"use server";

import { cookies } from "next/headers";
import { deleteUserFromClass } from "@/dal/userClassDelete-dal";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import { signupSchema } from "@/lib/signup-validation";
// import { Signup } from "@/dal/signup-dal";

export async function userDeleteClass( userId, classId ) {
  try {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get("accessToken")?.value;

  // if(!accessToken || !userId) {
  //   throw new Error("User not authenticated");
  // }

  const result = await deleteUserFromClass(userId, classId, accessToken);

  revalidatePath("/classes")

  return {
    success: true,
    message: "You have successfully delete the class",
    data: result || null,
  };
} catch (error) {
  console.log("Network error:", error);
  return {
    success: false,
    message: error.message || "Network error while deleting class",
  };
}


  // if (!result.success) {
  //   throw new Error("Failed to delete user from class");
  // }

  // const result = await res.json();
  // console.log("Signup result:", result);
  //   cookiesStore.set("accessToken", result.token);
  //   cookiesStore.set("userId", result.userId);

  //   const role = result.role ?? "default";
  //   if (role?.trim() === "default") { 
  //     redirect("/profile") 
  //   } 
  //   redirect("/instructor");
}
