import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 sm:px-8 md:px-12 lg:px-20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              MR. <span className="text-[#e5ab61]">CHAI</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Authentic Indian flavors in every cup. Bringing tradition to your
              neighborhood since 2010.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#e5ab61] transition duration-300"
              >
                📱
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#e5ab61] transition duration-300"
              >
                📘
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#e5ab61] transition duration-300"
              >
                📸
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#e5ab61] transition duration-300"
              >
                🐦
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#e5ab61] transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#e5ab61] transition duration-300"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#e5ab61] transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#e5ab61] transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Monday-Friday</span>
                <span>8:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>9:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className=" flex gap-4">
              <Facebook
                size={40}
                className="text-black bg-white rounded-full p-2"
              />
              <Instagram
                size={40}
                className="text-black bg-white rounded-full p-2"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Mr. Chai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
