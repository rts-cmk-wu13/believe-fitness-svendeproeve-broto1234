import { FaUser } from "react-icons/fa6";
import ShowClassCard from "@/components/ui/showclassCard";

export default function ProfileInfoCard({ user }) {
  console.log("ProfileInfo user prop:", user);
  return (
    <section className="flex flex-col justify-between items-center">
      <div className="w-full flex items-center gap-3 bg-white text-background text-center my-4">
        <div className="w-12 h-12 rounded-full bg-primaryColor flex items-center justify-center">
          <FaUser size={32} className="text-5xl mx-auto my-2" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold">{user.userFirstName} {user.userLastName}</p>   
          <p className="text-xs">{user.role === "instructor" ? "Instruktør" : "Medlem"}</p>  
        </div>
      </div> 

      <div className="w-full px-4 py-6">
          <ul className="space-y-3">
            {user.classes?.length ? (
              user.classes.map(cls => (
                <li key={cls.id} className="p-4 text-background rounded-xl border border-gray-300">
                  <h2 className="text-md font-semibold mb-2">{cls.className}</h2>
                  <div>
                    <p className="text-xs"><span className="capitalize">{cls.classDay}</span> - <span>kl. {cls.classTime}</span></p>
                  </div>
                  <ShowClassCard userId={user.id} classId={cls.id} />
                </li>
              ))
            ) : (
              <li>No classes available</li>
            )}
          </ul>
      </div>    
    </section>
  )
}