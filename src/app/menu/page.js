import React from "react";
import MenuSection from "../components/MenuFilter";

export default function page() {
  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 py-16">
      <div className="">
        <p className="text-white/60 mb-8">
          Filter and explore all categories. Our menu cards have flavour tags,
          spice icons and quick-add buttons.
        </p>
        <MenuSection />
      </div>
    </div>
  );
}
