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
    <section className="flex flex-col items-center gap-4 text-white py-16  bg-[url('/splashImgTwo.png')] bg-cover bg-center bg-no-repeat">
        <h2 className="w-70 text-4xl text-center font-bold">A word from other Believers</h2>
        <div className="text-center">
          <div className="flex flex-col justify-between my-4 h-30">
            <p className="text-xl px-8">{currentTestimonial.text}</p>
            <p className="text-3xl font-semibold mt-4">{currentTestimonial.name}</p>
          </div>
          <div className="flex gap-2 justify-center mt-16">
            <TfiArrowCircleLeft className="hover:text-orange-600 cursor-pointer" size={90} onClick={handlePrev} />
            <TfiArrowCircleRight className="hover:text-orange-600 cursor-pointer" size={90} onClick={handleNext} />
          </div>
        </div>
      </section>
  )
}
