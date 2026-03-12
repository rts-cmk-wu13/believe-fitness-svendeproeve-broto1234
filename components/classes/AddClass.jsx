"use client";

import { addUserToClass } from "@/actions/addUserToClass-action";

export default function AddClass({ user, classItems, isUserEnrolled }) {

  console.log("User in AddClass:", user);
  console.log("Class:", classItems)
  console.log("Inrolled:", isUserEnrolled)

  const classId = classItems.id;
  
  const handleJoin = () => {  
    addUserToClass(classId, isUserEnrolled);
  };

  if (isUserEnrolled) {
    return null; // Don't render the button if the user is already enrolled
  }

  return (
        <button type="submit" onClick={handleJoin} className="w-full mx-auto text-center text-black font-semibold text-xs px-6 py-2 rounded-full uppercase  bg-primaryColor">
          {isUserEnrolled ? "" : "Add"}
        </button>
  );
}
