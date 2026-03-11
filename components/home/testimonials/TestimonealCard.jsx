"use client";

import { useState } from "react";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

export default function TestimonialCard( {testimonials} ) {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const currentTestimonial = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-white my-10">
        <h2 className="w-70 text-2xl text-balance text-center font-bold">A word from other Believers</h2>
        <div className="text-center relative flex flex-col items-center gap-4">
          <div className="h-30 flex flex-col justify-between my-4">
            <p className="text-sm px-8">{currentTestimonial.text}</p>
            <p className="text-md font-semibold mt-4">{currentTestimonial.name}</p>
          </div>
          <div className="flex gap-4 justify-center">
            <TfiArrowCircleLeft className="hover:text-orange-600 cursor-pointer" size={50} onClick={handlePrev} />
            <TfiArrowCircleRight className="hover:text-orange-600 cursor-pointer" size={50} onClick={handleNext} />
          </div>
        </div>
      </div>
  )
}
