"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/buttonLink";
import BelieveHeader from "@/components/ui/believeHeader";

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
      <BelieveHeader textColor="white"/>
      <div className="w-full flex justify-center mt-10">
        <Button btHref="/home" btText="Start Training" className={`text-black font-semibold text-[10px] px-4 py-2 rounded-full uppercase bg-primaryColor transition-opacity duration-500 ${isButtonVisible ? "opacity-100" : "opacity-0"}`} />
      </div>
    </div>    
  );
}
