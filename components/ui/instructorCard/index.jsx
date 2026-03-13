import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

export default function InstructorCard({ classesItems }) {
  console.log("InstructorCard classesItems:", classesItems);

  return (
    <ul className="space-y-3">
            {classesItems.length > 0 ? (
              classesItems.map(cls => (
                <li key={cls.id} className="p-4 text-black rounded-2xl border border-gray-400 space-y-2">  
                  <h2 className="text-md font-semibold">{cls.className}</h2>
                  <p className="text-xs"><span className="capitalize">{cls.classDay}</span> - <span>kl. {cls.classTime}</span></p>
                  <div className="flex justify-between items-center">
                    <p className="text-xs">Max. participants: {cls.maxParticipants}</p>
                    <p className="text-xs">Joined: {cls.users?.length || 0}</p>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <Link href={`/instructor/${cls.id}`} className="text-xs px-6 py-2 bg-primaryColor text-white rounded-full shadow-lg/80 shadow-gray-800">Participants</Link>
                    <div className="flex space-x-2">
                        <FaEdit size={36} className="inline-block cursor-pointer px-2 py-1 bg-primaryColor rounded-full hover:bg-green-400"/>
                        <AiOutlineDelete size={36} className="inline-block cursor-pointer px-2 py-1 bg-primaryColor rounded-full hover:bg-orange-400" />
                    </div>
                  </div>
                </li>
              ))  
            ) : (
              <li>No activities available</li>
            )}
          </ul>
  )}