"use client";

import {useState} from "react";
import { addUserToClass } from "@/actions/addUserToClass-action";

export default function AddClass({ classItems}) {
  
  const [message, setMessage] = useState("");

  const classId = classItems.id;

  const handleJoin = async () => {  
    try {
      await addUserToClass(classId);
      setMessage("Successfully joined class");      
      setTimeout(() => {
        setMessage("");
      }, 5000)
    } catch (error) {
      setMessage("Please log in");
      setTimeout(() => {
        setMessage("");
      }, 5000)
    }
  };

  return (
    <div className="w-full">
        <button type="button" onClick={handleJoin} className="w-full text-center text-black font-semibold text-xs px-6 py-2 rounded-full uppercase  bg-primaryColor cursor-pointer">
          Add
        </button>
        {message && <p className="text-xs mt-2">{message}</p>}
    </div>
  );
}
