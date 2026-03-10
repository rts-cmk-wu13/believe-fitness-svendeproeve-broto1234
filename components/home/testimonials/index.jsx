import { getAllTestimonials } from "../../../dal/testimonial-dal";
// import CommentCard from "./CommentCard";
import TestimonialCard from "./TestimonealCard";

export default async function Testimonials() {
  const testimonials = await getAllTestimonials();
  // console.log("Testimonials in component:", testimonials);

  return (
    <section className="my-20">
      <TestimonialCard testimonials={testimonials} />
    </section>
  );
}