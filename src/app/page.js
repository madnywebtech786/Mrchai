import Image from "next/image";
import ComingSoon from "./sections/ComingSoon";
import FloatingElements from "./components/FloatingElements";
import Hero from "./sections/Hero";
import Categories from "./sections/Categories";
import About from "./sections/About";
import MenuFilter from "./components/MenuFilter";
import Offers from "./sections/Offers";
import Deals from "./sections/Deals";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import ContactForm from "./sections/ContactForm";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      {/* <ComingSoon /> */}
      <div className="min-h-screen bg-white relative">
        <FloatingElements />



        {/* Main Content */}
        <main className="pt-20">
          <Hero />
          <Categories />
          <About />
          <MenuFilter />
          <Deals />
          <Gallery />
          <Testimonials />
          <ContactForm />
        </main>

      </div>
    </>
  );
}
