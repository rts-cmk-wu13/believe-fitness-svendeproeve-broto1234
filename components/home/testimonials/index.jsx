import { getAllTestimonials } from "../../../dal/testimonial-dal";
import TestimonialCard from "./TestimonealCard";

export default async function Testimonials() {
  const testimonials = await getAllTestimonials();
  // console.log("Testimonials in component:", testimonials);

  return (
    <section className="testimonials bg-[url('/splashImgTwo.png')] bg-cover bg-center bg-no-repeat">
      <TestimonialCard testimonials={testimonials} />
    </section>
  );
}