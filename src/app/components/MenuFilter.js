'use client'
import Image from "next/image";
import { useState } from "react";

export default function MenuSection ()  {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Tea', 'Coffee', 'Samosa', 'Snacks'];
  
  const menuItems = [
    { id: 1, name: 'Masala Chai', category: 'Tea', price: '$30', description: 'Spiced black tea with milk', img:"/images/menu/masala.png" },
    { id: 2, name: 'Ginger Tea', category: 'Tea', price: '$25', description: 'Refreshing ginger infused tea', img:"/images/menu/ginger.png" },
    { id: 3, name: 'Kashmiri Kahwa', category: 'Tea', price: '$40', description: 'Traditional green tea with saffron', img:"/images/menu/kashmiri.png" },
    { id: 4, name: 'Filter Coffee', category: 'Coffee', price: '$35', description: 'South Indian style filter coffee', img:"/images/menu/filter.png" },
    { id: 5, name: 'Irish Coffee', category: 'Coffee', price: '$60', description: 'Coffee with Irish whiskey', img:"/images/menu/irish.png" },
    { id: 6, name: 'Samosa', category: 'Samosa', price: '$20', description: 'Crispy potato and pea filling', img:"/images/menu/samosa.png" },
    { id: 7, name: 'Pakora', category: 'Snacks', price: '$25', description: 'Vegetable fritters with spices', img:"/images/menu/pakora.png" },
    { id: 8, name: 'Kachori', category: 'Snacks', price: '$30', description: 'Spiced lentil filled pastry', img:"/images/menu/kachori.png" },
  ];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-white">
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
                  ? 'bg-[#e5ab61] text-black'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 bg-gray-200 border-2 border-dashed w-full">
                <Image src={item.img} alt="" width={500} height={350} className="h-48 " />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-black">{item.name}</h3>
                  <span className="text-[#e5ab61] font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-[#e5ab61] hover:text-black transition duration-300">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};