import Image from "next/image";

export default function Hero  ()  {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-16">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#e5ab61] via-white to-black opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#e5ab61] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-[#e5ab61] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
    </div>
    
    <div className="relative z-10 container mx-auto px-4 py-20 pt-0">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-block mb-6">
            <span className="bg-black text-[#e5ab61] px-4 py-2 rounded-full text-sm font-bold tracking-wider">
              AUTHENTIC INDIAN CAFÉ
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-black mb-6 leading-tight">
            WELCOME TO 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black to-[#e5ab61]">
              MR. CHAI
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Experience the authentic taste of India with our handcrafted teas, aromatic coffees, and traditional desi delicacies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
              Explore Menu
            </button>
            <button className="border-2 border-black text-black hover:bg-black hover:text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg">
              Book a Table
            </button>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[#e5ab61] rounded-2xl z-0"></div>
            <div className="relative bg-gray-200 border-2 border-dashed rounded-2xl w-full h-96 z-10">
              <Image src={'/images/hero.png'} width={800} height={450} className="h-96 rounded-2xl" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 z-20">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#e5ab61] flex items-center justify-center mr-4">
                  <span className="text-2xl">☕</span>
                </div>
                <div>
                  <p className="font-bold text-black">Masala Chai</p>
                  <p className="text-gray-600">Our Signature Blend</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/4 -left-12 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 z-20 transform rotate-6">
              <div className="text-3xl">🍵</div>
              <p className="font-bold text-black mt-2">Premium Tea</p>
            </div>
            
            <div className="absolute top-1/3 -right-12 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 z-20 transform -rotate-6">
              <div className="text-3xl">🥟</div>
              <p className="font-bold text-black mt-2">Fresh Samosa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
        <svg className="w-5 h-5 text-[#e5ab61]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
  );
};