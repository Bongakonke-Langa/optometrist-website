
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaXTwitter } from 'react-icons/fa6';  // Import the new X logo
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
// Add this array of men's glasses data
const mensGlasses = [
    { id: 1, name: "Classic Aviator", price: 499.99, image: "/images/menglasses/men2.jpeg" },
    { id: 2, name: "Modern Wayfarer", price: 449.99, image: "/images/mens-wayfarer.jpg" },
    { id: 3, name: "Sleek Rectangular", price: 399.99, image: "/images/mens-rectangular.jpg" },
    { id: 4, name: "Sporty Wrap", price: 529.99, image: "/images/mens-wrap.jpg" },
    { id: 5, name: "Vintage Round", price: 479.99, image: "/images/mens-round.jpg" },
    { id: 6, name: "Professional Rimless", price: 599.99, image: "/images/mens-rimless.jpg" },
];

const MensGlasses: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF5F1] text-[#292F36] pt-20">
      <header className="fixed top-0 left-0 right-0 bg-[#8F7A6E] text-white p-2 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-10 h-10 mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
            </svg>
            <h1 className="text-2xl font-bold">Dr. Bonga's Optometry Clinic</h1>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-black transition-colors duration-300">Home</Link></li>
              <li><Link href="/eyeglasses" className="hover:text-black transition-colors duration-300">Eyeglasses</Link></li>
              <li><Link href="/spectacles" className="hover:text-black transition-colors duration-300">Spectacles</Link></li>
              <li><Link href="/aboutus" className="hover:text-black transition-colors duration-300">About Us</Link></li>
            </ul>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              <li><Link href="/" className="block py-2 hover:text-black transition-colors duration-300">Home</Link></li>
              <li><Link href="/eyeglasses" className="block py-2 hover:text-black transition-colors duration-300">Eyeglasses</Link></li>
              <li><Link href="/spectacles" className="block py-2 hover:text-black transition-colors duration-300">Spectacles</Link></li>
              <li><Link href="/aboutus" className="block py-2 hover:text-black transition-colors duration-300">About Us</Link></li>
            </ul>
          </nav>
        )}
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-center md:text-left">Men's Eyewear Collection</h2>
          <nav className="mt-4 md:mt-0 flex gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/men">
              Men
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/women">
              Women
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/kids">
              Kids
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sunglasses">
              Sunglasses
            </Link>
          </nav>
        </div>

        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Eyewear Designed for the Modern Man</h3>
          <p className="text-lg mb-4">
            Our men's eyewear collection combines style, durability, and comfort to meet the diverse needs of today's gentlemen. From classic frames that exude sophistication to contemporary designs that make a bold statement, we offer a wide range of options to suit every face shape and personal style.
          </p>
          <p className="text-lg mb-4">
            Whether you're looking for professional glasses for the boardroom, casual frames for weekend outings, or sports-inspired eyewear for an active lifestyle, our collection has you covered. Each pair is crafted with precision using high-quality materials to ensure longevity and comfort throughout your day.
          </p>
          <p className="text-lg">
            Explore our selection of aviators, wayfarers, rectangular frames, and more. With a focus on both form and function, our men's glasses not only sharpen your vision but also elevate your personal style. Find the perfect pair that reflects your unique personality and meets your lifestyle needs.
          </p>
        </section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mensGlasses.map((glass) => (
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
                <p className="text-lg font-bold text-[#8F7A6E] mb-4">R{glass.price.toFixed(2)}</p>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-[#EDDDD4] text-[#292F36] py-2 px-4 rounded-md hover:bg-[#D5B195] transition-colors duration-300">
                    View Details
                  </button>
                  <button className="flex-1 bg-[#E9E6DD] text-[#292F36] py-2 px-4 rounded-md hover:bg-[#6A8283] transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
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
                <Link className="text-sm hover:underline" href="aboutus">
                  About Us
                </Link>
                <Link className="text-sm hover:underline" href="contactus">
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
                  <FaXTwitter className="h-5 w-5" />  {/* Updated Twitter/X icon */}
                  <span className="sr-only">X (Twitter)</span>
                </a>
                <a href="#" className="p-2 rounded-full hover:bg-white hover:text-[#8F7A6E] transition-colors duration-300">
                  <FaInstagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="p-2 rounded-full hover:bg-white hover:text-[#8F7A6E] transition-colors duration-300">
                <FaWhatsapp className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
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
};

export default MensGlasses;
