export default function DealsSection  () {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-white">
      <div className="">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">
          Daily <span className="text-[#e5ab61]">Deals</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="bg-gradient-to-br from-[#e5ab61] to-amber-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="text-5xl mb-4">☕</div>
            <h3 className="text-2xl font-bold mb-2">Chai & Samosa Combo</h3>
            <p className="mb-4">Classic masala chai with a freshly made samosa</p>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold">$45</span>
              <span className="line-through text-white text-opacity-70">$60</span>
            </div>
            <button className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300">
              Order Now
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 text-white shadow-xl">
            <div className="text-5xl mb-4">☕</div>
            <h3 className="text-2xl font-bold mb-2">Coffee & Pastry</h3>
            <p className="mb-4">Filter coffee with your choice of pastry</p>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold">$75</span>
              <span className="line-through text-white text-opacity-70">$95</span>
            </div>
            <button className="mt-6 w-full bg-[#e5ab61] text-black py-3 rounded-lg hover:bg-amber-500 transition duration-300 font-bold">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};