import React from "react";
import MenuSection from "../components/MenuFilter";
import Breadcrumb from "../components/Breadcrumb";

export default function page() {
  return (
    <div className="min-h-screen  bg-white dark:bg-white">
      <Breadcrumb name={'Our Menu'} />
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-0">
        <p className="text-white/60 mb-8">
          Filter and explore all categories. Our menu cards have flavour tags,
          spice icons and quick-add buttons.
        </p>
        <MenuSection page={true} />
      </div>
    </div>
  );
}
