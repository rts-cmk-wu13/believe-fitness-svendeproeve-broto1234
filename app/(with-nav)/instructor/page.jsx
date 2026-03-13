
import { getUserById } from "@/actions/user-action";
import { getAllClasses } from "@/dal/classes-dal";
import InstructorCard from "@/components/ui/instructorCard";
import ProfileInfoCard from "@/components/ui/profileInfoCard";

export default async function InstructorProfile() {
  
  const user = await getUserById();
  console.log("Fetched user data:", user);
  const classesItems = await getAllClasses();

  return (
    <div className="min-h-screen px-6 mt-8">
      <h2>My Profile</h2>
      <ProfileInfoCard user={user} />
      <InstructorCard classesItems={classesItems} />
    </div>
  );
}
