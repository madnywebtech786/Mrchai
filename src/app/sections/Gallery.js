import Image from "next/image";

export default function GallerySection() {
  const images = [
    '/images/gallery/g1.webp',
    '/images/gallery/g5.webp',
    '/images/gallery/g2.webp',
    '/images/gallery/g7.webp',
    '/images/gallery/g4.webp',
    '/images/gallery/g6.webp',
  ]

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">
          Café <span className="text-[#e5ab61]">Gallery</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image,index) => (
            <div
              key={'image'+index}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64"></div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <Image
                  src={image}
                  width={500}
                  height={350}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
