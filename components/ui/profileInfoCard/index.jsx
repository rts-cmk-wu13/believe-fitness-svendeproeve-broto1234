import { FaUser } from "react-icons/fa6";
export default function ProfileInfoCard({ user }) {

  console.log("ProfileInfo user prop:", user);
  const userFirstName = user?.userFirstName || "Jhon";
  const userLastName = user?.userLastName || "Dhoe";

  return (
    <section className="flex flex-col justify-between items-center">
      <div className="w-full flex items-center gap-3 bg-white text-background text-center my-4">
        <div className="w-12 h-12 rounded-full bg-primaryColor flex items-center justify-center">
          <FaUser size={32} className="text-5xl mx-auto my-2" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold">{userFirstName} {userLastName}</p>   
          <p className="text-xs">{user.role === "admin" ? "Instructor" : "Member"}</p>  
        </div>
      </div> 
    </section>
  )
}