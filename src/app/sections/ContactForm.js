import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Contact <span className="text-[#e5ab61]">Us</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-[#e5ab61] text-2xl mr-4">📍</div>
                <div>
                  <h4 className="font-bold text-lg">Our Location</h4>
                  <p className="text-gray-300">
                    #208 55 Westwinds Crescent NE T3J5H2
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#e5ab61] text-2xl mr-4">📞</div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <Link href={"tel:+15876799700"}>
                    <p className="text-gray-300">587-679-9700</p>
                  </Link>
                </div>
              </div>

              {/* <div className="flex items-start">
                <div className="text-[#e5ab61] text-2xl mr-4">✉️</div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-gray-300">hello@mrchai.com</p>
                </div>
              </div>  */}

              <div className="flex items-start">
                <div className="text-[#e5ab61] text-2xl mr-4">🕒</div>
                <div>
                  <h4 className="font-bold text-lg">Opening Hours</h4>
                  <p className="text-gray-300">Mon-Sun: 10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#e5ab61]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#e5ab61]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#e5ab61]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#e5ab61] text-black font-bold py-3 px-6 rounded-lg hover:bg-amber-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
