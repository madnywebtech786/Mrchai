import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-[#e5ab61] w-64 h-64 rounded-full absolute -top-6 -left-6 opacity-20"></div>
              <div className="bg-black w-64 h-64 rounded-full absolute -bottom-6 -right-6 opacity-20"></div>
              <div className="relative bg-gray-200 border-2 border-dashed rounded-xl w-full h-96">
                <Image
                  src={"/images/about.png"}
                  width={800}
                  height={450}
                  className="h-96 rounded-xl"
                  alt="Mr.chai hot coffee image"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-black">
              About <span className="text-[#e5ab61]">Mr. Chai</span>
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Founded with a passion for bold, comforting flavours, Mr. Chai
              brings the warmth of traditional chai houses to your neighborhood.
              Our journey began with a simple mission: to serve the perfect cup
              of chai.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              Every ingredient is carefully sourced and each recipe refined over
              years of practice. From our signature masala chai to crispy
              samosas, we celebrate time-honoured flavours and homely recipes.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#e5ab61] flex items-center justify-center mr-3">
                  <span className="text-black font-bold text-lg">☕</span>
                </div>
                <div>
                  <div className="text-gray-700 font-semibold">
                    Brewed fresh daily
                  </div>
                  <div className="text-gray-500 text-sm">
                    Small-batch blends & house recipes
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#e5ab61] flex items-center justify-center mr-3">
                  <span className="text-black font-bold">35+</span>
                </div>
                <div>
                  <div className="text-gray-700 font-semibold">Menu items</div>
                  <div className="text-gray-500 text-sm">
                    Savory & sweet favourites
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
