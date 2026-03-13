import Image from "next/image";
import { getSingleTrainer } from "@/dal/singleTrainer";
import { getSingleClass } from "@/dal/singleClass-dal";
import { FaUser } from "react-icons/fa6";

export default async function instructorDetail({ params }) {
  const { id } = await params;
  const trainer = await getSingleTrainer(id);
  const singleClass = await getSingleClass(trainer.class.id);
  console.log("Trainer data:", trainer.class.id);
  console.log("Class data:", singleClass);
  
  return (
    <div className="min-h-screen px-6 mt-8">
      <h2>My Profile</h2>
      <section className="flex flex-col justify-between items-center">
      <div className="w-full flex items-center gap-3 bg-white text-background text-center my-4">
        <div className="w-14 h-14 rounded-full bg-primaryColor flex items-center justify-center">
          <Image src={trainer.asset.url} alt={trainer.trainerName} width={32} height={32} />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold">{trainer.trainerName}</p>   
          <p className="text-xs">Instructor</p>  
        </div>
      </div> 
      <div className="w-full">
        <p className="text-xs font-semibold">Participants:</p>
        <ul className="flex flex-col my-2">
          {singleClass.users && singleClass.users.length > 0 ? singleClass.users.map(user => (
              <li key={user.id} className="w-full flex justify-between items-center px-2 py-4 bg-white text-background rounded-md">
                <div className="w-full flex items-center gap-4 space-x-2 border border-gray-400 rounded-full px-2 py-1">
                  <FaUser size={26} className="inline-block" />
                  <p>{user.userFirstName || "Jhon"} {user.userLastName || "Dhoe"}</p>
                </div>
              </li>
            )) : (
              <p className="text-sm">No participants found.</p>
            )}
          </ul>
      </div>
    </section>
    </div>
  );
}