"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function MenuSection({page=false}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8); // show first 6 items initially

  const categories = [
    "All",
    "Brunch",
    "Appetizers & Sides",
    "Hot & Cold Drinks",
    "Desserts",
  ];

  const menuItems = [
    // Brunch
    {
      id: 1,
      name: "Veg Noodles",
      category: "Brunch",
      price: "$11",
      description: "Stir-fried veg noodles with light soya and spices",
      img: "/images/menu/veg-noodles.webp",
    },
    {
      id: 2,
      name: "Chicken Noodles",
      category: "Brunch",
      price: "$13",
      description: "Chicken strips with wok-fried noodles",
      img: "/images/menu/chicken-noodles.webp",
    },
    {
      id: 3,
      name: "Chicken Chapli Burger",
      category: "Brunch",
      price: "$11",
      description: "Spiced chicken patty, chutney & salad",
      img: "/images/menu/chapli-burger.webp",
    },
    {
      id: 4,
      name: "Aloo Tikki Burger",
      category: "Brunch",
      price: "$9",
      description: "Crispy potato patty with mint chutney",
      img: "/images/menu/aloo-tikki.webp",
    },
    {
      id: 5,
      name: "Club Sandwich",
      category: "Brunch",
      price: "$12",
      description: "Triple-decker with grilled chicken, egg & salad",
      img: "/images/menu/club-sandwich.webp",
    },
    {
      id: 6,
      name: "Desi Nashta",
      category: "Brunch",
      price: "$13",
      description: "A homely platter of chai + paratha + pickle",
      img: "/images/menu/desi-nashta.webp",
    },
    {
      id: 7,
      name: "English Breakfast",
      category: "Brunch",
      price: "$15",
      description: "Eggs, sausage, toast, beans & tea/coffee",
      img: "/images/menu/english-breakfast.webp",
    },
    {
      id: 8,
      name: "Grilled Cheese",
      category: "Brunch",
      price: "$5",
      description: "Buttery grilled cheese on sourdough",
      img: "/images/menu/grilled-cheese.webp",
    },
    {
      id: 9,
      name: "Pancakes",
      category: "Brunch",
      price: "$10",
      description: "Stack of pancakes with syrup",
      img: "/images/menu/pancakes.webp",
    },

    // Appetizers & Sides
    {
      id: 10,
      name: "Veg Pakora",
      category: "Appetizers & Sides",
      price: "$7",
      description: "Mixed vegetable fritters",
      img: "/images/menu/veg-pakora.webp",
    },
    {
      id: 11,
      name: "Fish Pakora",
      category: "Appetizers & Sides",
      price: "$11",
      description: "Crispy fish bites with chutney",
      img: "/images/menu/fish-pakora.webp",
    },
    {
      id: 12,
      name: "Samosa Chaat",
      category: "Appetizers & Sides",
      price: "$10",
      description: "Crispy samosa topped with chutneys & yoghurt",
      img: "/images/menu/samosa-chaat.webp",
    },
    {
      id: 13,
      name: "Samosa (Chicken / Keema / Veg) — 2pcs",
      category: "Appetizers & Sides",
      price: "$5",
      description: "Choose chicken, keema or veg — served hot (2 pcs)",
      img: "/images/menu/samosa.webp",
    },
    {
      id: 14,
      name: "Spring Roll (Veg) — 3pcs",
      category: "Appetizers & Sides",
      price: "$7",
      description: "Crunchy veg spring rolls (3 pcs)",
      img: "/images/menu/spring-veg.webp",
    },
    {
      id: 15,
      name: "Spring Roll (Chicken) — 3pcs",
      category: "Appetizers & Sides",
      price: "$9",
      description: "Chicken spring rolls (3 pcs)",
      img: "/images/menu/spring-chicken.webp",
    },
    {
      id: 16,
      name: "Papdi Chaat",
      category: "Appetizers & Sides",
      price: "$9",
      description: "Tangy & spicy papdi chaat",
      img: "/images/menu/papdi-chaat.webp",
    },
    {
      id: 17,
      name: "Masala Fries",
      category: "Appetizers & Sides",
      price: "$7",
      description: "Crispy fries tossed in chaat masala",
      img: "/images/menu/masala-fries.webp",
    },
    {
      id: 18,
      name: "Mr. Chai Chicken Bites",
      category: "Appetizers & Sides",
      price: "$11",
      description: "Bite-size marinated chicken pieces",
      img: "/images/menu/chicken-bites.webp",
    },
    {
      id: 19,
      name: "Lentil Soup",
      category: "Appetizers & Sides",
      price: "$7",
      description: "Warm spiced lentil soup",
      img: "/images/menu/lentil-soup.webp",
    },

    // Hot & Cold Drinks
    {
      id: 20,
      name: "Falooda",
      category: "Hot & Cold Drinks",
      price: "$8",
      description: "Classic rose falooda with vermicelli",
      img: "/images/menu/falooda.webp",
    },
    {
      id: 21,
      name: "Lassi (Mango, Sweet, Salted)",
      category: "Hot & Cold Drinks",
      price: "$7",
      description: "Choose your lassi flavour",
      img: "/images/menu/lassi.webp",
    },
    {
      id: 22,
      name: "Lemon Tea",
      category: "Hot & Cold Drinks",
      price: "$4",
      description: "Zesty lemon infusion",
      img: "/images/menu/lemon-tea.webp",
    },
    {
      id: 23,
      name: "Rooh Refresher",
      category: "Hot & Cold Drinks",
      price: "$4",
      description: "Cooling rooh afza mocktail",
      img: "/images/menu/rooh-refresher.webp",
    },
    {
      id: 24,
      name: "Milk Rooh Magic",
      category: "Hot & Cold Drinks",
      price: "$5",
      description: "Milky rose fusion",
      img: "/images/menu/milk-rooh.webp",
    },
    {
      id: 25,
      name: "Karak Chai",
      category: "Hot & Cold Drinks",
      price: "$3 / $4 (large)",
      description: "Rich, strong karak tea",
      img: "/images/menu/karak-chai.webp",
    },
    {
      id: 26,
      name: "Masala Chai",
      category: "Hot & Cold Drinks",
      price: "$3 / $4 (large)",
      description: "Our signature spiced chai",
      img: "/images/menu/masala.webp",
    },
    {
      id: 27,
      name: "Kashmiri Chai",
      category: "Hot & Cold Drinks",
      price: "$4 / $5 (large)",
      description: "Saffron & pink salt kahwa",
      img: "/images/menu/kashmiri.webp",
    },
    {
      id: 28,
      name: "Americano",
      category: "Hot & Cold Drinks",
      price: "$5",
      description: "Classic americano",
      img: "/images/menu/americano.webp",
    },
    {
      id: 29,
      name: "Coffee",
      category: "Hot & Cold Drinks",
      price: "$3",
      description: "Regular brewed coffee",
      img: "/images/menu/coffee.webp",
    },
    {
      id: 30,
      name: "Iced Caramel Latte",
      category: "Hot & Cold Drinks",
      price: "$6",
      description: "Iced latte with caramel",
      img: "/images/menu/iced-caramel-latte.webp",
    },
    {
      id: 31,
      name: "Mocha",
      category: "Hot & Cold Drinks",
      price: "$6",
      description: "Chocolate espresso drink",
      img: "/images/menu/mocha.webp",
    },
    {
      id: 32,
      name: "Hot Chocolate",
      category: "Hot & Cold Drinks",
      price: "$4",
      description: "Creamy hot chocolate",
      img: "/images/menu/hot-chocolate.webp",
    },
    {
      id: 33,
      name: "French Vanilla",
      category: "Hot & Cold Drinks",
      price: "$4",
      description: "Vanilla flavoured coffee",
      img: "/images/menu/french-vanilla.webp",
    },
    {
      id: 34,
      name: "Matcha",
      category: "Hot & Cold Drinks",
      price: "$5",
      description: "Whisked matcha latte",
      img: "/images/menu/matcha.webp",
    },

    // Desserts
    {
      id: 35,
      name: "Gulab Jamun",
      category: "Desserts",
      price: "$6",
      description: "Soft syrup-soaked dumplings",
      img: "/images/menu/gulab-jamun.webp",
    },
    {
      id: 36,
      name: "Kheer",
      category: "Desserts",
      price: "$6",
      description: "Creamy rice pudding",
      img: "/images/menu/kheer.webp",
    },
    {
      id: 37,
      name: "Jalebi",
      category: "Desserts",
      price: "$6",
      description: "Crispy, syrupy jalebi",
      img: "/images/menu/jalebi.webp",
    },
  ];

  // filter items by active category
  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  // When category changes, reset visibleCount to initial 6
  useEffect(() => {
    setVisibleCount(8);
  }, [activeCategory]);

  // items to render (slice by visibleCount)
  const visibleItems = filteredItems.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, filteredItems.length));
  };

  return (
    <section className={`${page?"py-0":"py-20"} bg-white`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">
          Our <span className="text-[#e5ab61]">Menu</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#e5ab61] text-black"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 bg-gray-200 border-2 border-dashed w-full">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={500}
                  height={350}
                  className="object-cover w-full h-48 rounded-xl"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-black">{item.name}</h3>
                  <span className="text-[#e5ab61] font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show more button */}
        {visibleCount < filteredItems.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleShowMore}
              className="px-6 py-3 rounded-full bg-[#e5ab61] text-black font-semibold hover:brightness-95 transition"
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
