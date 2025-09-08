import React from "react";
import FloatingElements from "../components/FloatingElements";
import Hero from "../sections/Hero";
import CategoriesSection from "../sections/Categories";
import AboutSection from "../sections/About";
import MenuSection from "../components/MenuFilter";
import DealsSection from "../sections/Deals";
import GallerySection from "../sections/Gallery";
import TestimonialsSection from "../sections/Testimonials";
import ContactSection from "../sections/ContactForm";

export default function page() {
  return (
    <div>
      <div className="min-h-screen bg-white relative">
        <FloatingElements />

        {/* Main Content */}
        <main className="pt-20">
          <Hero />
          <CategoriesSection />
          <AboutSection />
          <MenuSection />
          <DealsSection />
          <GallerySection />
          <TestimonialsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
