"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fetchUserById } from "@/dal/user-dal";

export async function getUserById() {

  const cookiesStore = await cookies();
  
  if (!cookiesStore.has("userId") || !cookiesStore.has("accessToken")) {
    redirect("/login");
  }

  const userId = cookiesStore.get("userId")?.value;
  const accessToken = cookiesStore.get("accessToken")?.value;

  return fetchUserById(userId, accessToken);
}