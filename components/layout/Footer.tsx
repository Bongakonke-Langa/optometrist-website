import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t bg-[#8F7A6E] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <nav className="flex flex-col space-y-2">
              <Link className="text-sm hover:underline" href="/">
                Home
              </Link>
              <Link className="text-sm hover:underline" href="/about">
                About Us
              </Link>
              <Link className="text-sm hover:underline" href="/contact">
                Contact
              </Link>
              <Link className="text-sm hover:underline" href="/faqs">
                FAQs
              </Link>
            </nav>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
            <p className="text-sm">123 Eye Care Lane</p>
            <p className="text-sm">Vision City, VC 12345</p>
            <p className="text-sm">Phone: (011) 456-7890</p>
            <p className="text-sm">Email: info@drbonga.com</p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full hover:bg-white hover:text-[#8F7A6E] transition-colors duration-300">
                <FaFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-white hover:text-[#8F7A6E] transition-colors duration-300">
                <FaTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-white hover:text-[#8F7A6E] transition-colors duration-300">
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          <p>© 2023 Dr. Bonga's Optometry Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
