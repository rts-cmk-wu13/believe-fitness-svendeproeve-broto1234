"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SplashPage() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [splashBgImage, setSplashBgImage] = useState("");
  
  useEffect(() => {
    const images = ["/splashImgOne.png", "/splashImgTwo.png"];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setSplashBgImage(randomImage);

    const timer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
     className="w-full h-screen flex flex-col items-start pb-12 justify-end text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${splashBgImage}')` }}
     >
      <div className="flex gap-1 items-end">
        
        <div className="w-10 h-1 bg-white mb-2"></div>
        <div className="flex flex-col items-start">
          {/* <Image src="/Line 51.svg" alt="" width={100} height={100} /> */}
          <h2 className="w-20 text-xl text-start leading-none text-primaryColor font-bold">Believe Fitness</h2>
          <p className="text-white text-md">Train like a pro</p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <Link
        href="/home"
        className={`text-black font-semibold text-[10px] px-4 py-2 rounded-full uppercase bg-primaryColor transition-opacity duration-500 ${isButtonVisible ? "opacity-100" : "opacity-0"}`}
        >
          Start Training
        </Link>
      </div>
    </div>    
  );
}
