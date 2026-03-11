import Hero from "../../../components/home/hero";
import News from "../../../components/home/news";
import Newsletter from "../../../components/home/newsletter";
import Testimonials from "../../../components/home/testimonials";
import ContactUs from "@/components/home/contactus";
import Footer from "../../../components/home/footer";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <Hero />
      <News />
      <Newsletter />
      <Testimonials />
      <ContactUs />
      <Footer />
    </section>
  );
}