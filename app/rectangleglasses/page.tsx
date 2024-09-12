import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

// Add this array of glasses data
const glasses = [
    { id: 1, name: "Classic Rectangle", price: 129.99, image: "/images/spectacle1.jpg" },
    { id: 2, name: "Modern Slim", price: 149.99, image: "/images/spectacle2.jpg" },
    { id: 3, name: "Bold Frame", price: 159.99, image: "/images/spectacle3.JPG" },
    { id: 1, name: "Small Rectangle", price: 179.99, image: "/images/spectacle4.jpg" },
    { id: 2, name: "Old Slim", price: 119.99, image: "/images/spectacle5.JPG" },
    { id: 3, name: "Silver Frame", price: 139.99, image: "/images/spectacle6.JPG" },

    // Add more glasses as needed
  ];

export default function RectangleGlasses() {
    return (
      <div className="min-h-screen flex flex-col font-sans bg-[#FAF5F1] text-[#292F36]">
        <header className="bg-[#8F7A6E] text-white p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <svg className="w-10 h-10 mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 7C6.88071 7 8 5.88071 8 4.5C8 3.11929 6.88071 2 5.5 2C4.11929 2 3 3.11929 3 4.5C3 5.88071 4.11929 7 5.5 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 7C19.8807 7 21 5.88071 21 4.5C21 3.11929 19.8807 2 18.5 2C17.1193 2 16 3.11929 16 4.5C16 5.88071 17.1193 7 18.5 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 4.5H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 14L4 15L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 14L20 15L22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 14V17C6 19.2091 7.79086 21 10 21H14C16.2091 21 18 19.2091 18 17V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h1 className="text-3xl font-bold">Dr. Bonga's Optometry Clinic</h1>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/" className="hover:text-black transition-colors duration-300">Home</Link></li>
                <li><Link href="/eyeglasses" className="hover:text-black transition-colors duration-300">Eyeglasses</Link></li>
                <li><Link href="rectangleglasses" className="hover:text-black transition-colors duration-300">Rectangle Glasses</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors duration-300">Frederica</Link></li>
              </ul>
            </nav>
          </div>
         
        </header>
        
        {/* You can add more content here, such as a list or grid of rectangle glasses */}

        <main className="flex-grow container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Glasses Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {glasses.map((glass) => (
              <div key={glass.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src={glass.image}
                    alt={glass.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{glass.name}</h3>
                  <p className="text-lg font-bold text-[#8F7A6E]">R{glass.price.toFixed(2)}</p>
                  <button className="mt-4 bg-[#8F7A6E] text-white py-2 px-4 rounded hover:bg-[#7A6A5F] transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
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
