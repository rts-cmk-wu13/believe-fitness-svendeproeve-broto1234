
import { getUserById } from "@/actions/user-action";
import ProfileInfoCard from "@/components/ui/profileInfoCard";
import MemberCard from "@/components/ui/memberCard";

export default async function UserProfile() {
  
  const user = await getUserById();
  // console.log("Fetched user data:", user);  

  return (
    <div className="min-h-screen px-6 mt-8">
      <h2>My Profile</h2>
      <ProfileInfoCard user={user} />
      <MemberCard user={user} />
    </div>
  );
}
