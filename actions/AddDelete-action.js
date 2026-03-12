import {cookies}  from "next/headers";
import {redirect} from "next/navigation"
import {addDeleteClass} from "@/dal/addDeleteClass"

export async function addDeleteClass(classId, isUserEnrolled) {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get("accessToken")?.value;
  const userId = cookiesStore.get("userId")?.value;

  if (!accessToken || !userId) {
    redirect("/login");
  }

  try {
    await addDeleteClass(userId, classId, isUserEnrolled, accessToken);
    
    revalidatePath(`/activities/${activityId}`);
    
    return { 
      success: true, 
      message: isUserEnrolled 
      ?  "Successfully left activity" 
      :  "Successfully joined activity" 
    };
  } catch (error) {
    console.log("Network error:", error);
    return {
      success: false,
      message: error.message || "Network error while joining activity"
    }
  } 
}