export default function OffersSection  () {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-16bg-gradient-to-r from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Special <span className="text-[#e5ab61]">Offers</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#e5ab61] bg-opacity-10 rounded-2xl p-8 border border-[#e5ab61]">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-4">Happy Hour</h3>
            <p className="text-gray-300 mb-6">
              Enjoy 20% off on all teas and coffees every weekday from 3-5 PM.
            </p>
            <div className="text-[#e5ab61] font-bold">Valid: Mon-Fri, 3-5 PM</div>
          </div>
          
          <div className="bg-[#e5ab61] bg-opacity-10 rounded-2xl p-8 border border-[#e5ab61]">
            <div className="text-5xl mb-4">🎁</div>
            <h3 className="text-2xl font-bold mb-4">Student Special</h3>
            <p className="text-gray-300 mb-6">
              Students get 15% off with valid ID. Perfect for study sessions!
            </p>
            <div className="text-[#e5ab61] font-bold">Valid: Anytime</div>
          </div>
        </div>
      </div>
    </section>
  );
};