"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { addClass } from "@/dal/addClass-dal";

export async function addUserToClass(classId, isUserEnrolled) {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get("accessToken")?.value;
  const userId = cookiesStore.get("userId")?.value;

  if (!accessToken || !userId) {
    redirect("/login");
  }

  try {
    await addClass(userId, classId, isUserEnrolled, accessToken);
    
    revalidatePath(`/classes/${classId}`);
    
    return { 
      success: true, 
      message: isUserEnrolled 
      ?  "Successfully left class" 
      :  "Successfully joined class" 
    };
  } catch (error) {
    console.log("Network error:", error);
    return {
      success: false,
      message: error.message || "Network error while joining class"
    }
  } 
}
