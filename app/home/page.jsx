import Hero from "../../components/home/hero";
import News from "../../components/home/news";
import Newsletter from "../../components/home/newsletter";
import Testimonials from "../../components/home/testimonials";
import ContactUs from "../../components/home/contactus";

export default function Home() {
  return (
    <section>
      <Hero />
      <News />
      <Newsletter />
      <Testimonials />
      <ContactUs />
    </section>
  );
}