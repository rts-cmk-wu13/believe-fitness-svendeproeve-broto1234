"use client"

import Image from "next/image";
import { IoStar } from "react-icons/io5";

export default function SnapClasses({ classes }) {

  console.log("Classes in SnapClasses:", classes);

  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {classes.map((cls) => (
            <div 
              key={cls.id} 
              className="w-24 snap-start"
              onClick={() => setBigImage(cls)}
            >
              <div className="relative w-24 h-32 overflow-hidden rounded-lg">
                <Image src={cls.asset.url} alt={cls.className} width={400} height={400} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 px-2 py-2 bg-primaryColor  rounded-[0em_2.5em_0em_0em]">
                  <h2 className="text-[0.4rem] font-bold">{cls.className}</h2>
                  <p className="text-[0.4rem] flex items-center gap-2 mt-1">
                    <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /> 
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
  )
}