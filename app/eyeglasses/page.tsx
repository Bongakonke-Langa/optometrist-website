import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


export default function Eyeglasses() {
  const eyeglassCategories = [
    { name: "Men's Glasses", description: "Stylish and durable frames for men" },
    { name: "Women's Glasses", description: "Elegant and fashionable frames for women" },
    { name: "Kids' Glasses", description: "Fun and sturdy frames for children" },
    { name: "Unisex Glasses", description: "Versatile frames suitable for everyone" },
  ];

  const popularStyles = [
    "Rectangle", "Oval", "Round", "Square", "Cat Eye", "Aviator", "Wayfarer", "Rimless"
  ];

  return (
    <div className="min-h-screen font-sans bg-[#FAF5F1] text-[#292F36]">
      <header className="fixed top-0 left-0 right-0 bg-[#8F7A6E] text-white p-4 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-10 h-10 mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* ... SVG path ... */}
            </svg>
            <h1 className="text-2xl font-bold">Dr. Bonga's Optometry Clinic</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-black transition-colors duration-300">Home</Link></li>
              <li><Link href="/eyeglasses" className="hover:text-black transition-colors duration-300">Eyeglasses</Link></li>
              <li><Link href="/rectangleglasses" className="hover:text-black transition-colors duration-300">Rectangle Glasses</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors duration-300">Frederica</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="p-8">
        <h1 className="text-4xl font-bold mb-8">Eyeglasses Collection</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eyeglassCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Popular Styles</h2>
          <div className="flex flex-wrap gap-4">
            {popularStyles.map((style, index) => (
              <span key={index} className="bg-[#E9E6DD] text-[#292F36] px-4 py-2 rounded-full">
                {style}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our Eyeglasses?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>High-quality materials for durability and comfort</li>
            <li>Wide range of styles to suit every face shape and personal preference</li>
            <li>Affordable options without compromising on quality</li>
            <li>Expert fitting service to ensure perfect fit</li>
            <li>UV protection options available for all glasses</li>
            <li>Customizable lens options (anti-glare, blue light filtering, etc.)</li>
          </ul>
        </section>
      </main>

      <footer className="border-t bg-[#8F7A6E] text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <nav className="flex flex-col space-y-2">
                <Link className="text-sm hover:underline" href="#">
                  About Us
                </Link>
                <Link className="text-sm hover:underline" href="#">
                  Contact
                </Link>
                <Link className="text-sm hover:underline" href="#">
                  FAQs
                </Link>
                <Link className="text-sm hover:underline" href="#">
                  Store Locator
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
    </div>
  );
}