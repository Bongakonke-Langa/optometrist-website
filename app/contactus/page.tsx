'use client';


import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';  // Import the new X logo
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#FAF5F1] p-8">
         <header className="fixed top-0 left-0 right-0 bg-[#8F7A6E] text-white p-2 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-10 h-10 mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
            </svg>
            <h1 className="text-2xl font-bold">Dr. Bonga's Optometry Clinic</h1>
          </div>
          
          {/* Hamburger menu button for small screens */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation for larger screens */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-black transition-colors duration-300">Home</Link></li>
              <li><Link href="/eyeglasses" className="hover:text-black transition-colors duration-300">Eyeglasses</Link></li>
              <li><Link href="/spectacles" className="hover:text-black transition-colors duration-300">Spectacles</Link></li>
              <li><Link href="aboutus" className="hover:text-black transition-colors duration-300">About us</Link></li>
            </ul>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              <li><Link href="/" className="block py-2 hover:text-black transition-colors duration-300">Home</Link></li>
              <li><Link href="/eyeglasses" className="block py-2 hover:text-black transition-colors duration-300">Eyeglasses</Link></li>
              <li><Link href="/spectacles" className="block py-2 hover:text-black transition-colors duration-300">Spectacles</Link></li>
              <li><Link href="aboutus" className="block py-2 hover:text-black transition-colors duration-300">About us</Link></li>
            </ul>
          </nav>
        )}
      </header>
      <h1 className="text-4xl font-bold text-center mb-32 text-[#8F7A6E]">Contact Us</h1>  // Increased margin-bottom to move text down further
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#EDDDD4] p-6 rounded-lg shadow-md space-y-4">  
          <h2 className="text-2xl font-semibold text-[#8F7A6E]">Get in Touch</h2>
          <p className="text-[#8F7A6E]">We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.</p>
          <div>
            <h3 className="font-semibold text-[#8F7A6E]">Address:</h3>
            <p className="text-[#8F7A6E]">123 Eye Street, Vision City, VC 12345</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#8F7A6E]">Phone:</h3>
            <p className="text-[#8F7A6E]">(123) 456-7890</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#8F7A6E]">Email:</h3>
            <p className="text-[#8F7A6E]">info@eyecareclinic.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#8F7A6E]">Hours:</h3>
            <p className="text-[#8F7A6E]">Monday - Friday: 9am - 5pm</p>
            <p className="text-[#8F7A6E]">Saturday: 10am - 2pm</p>
            <p className="text-[#8F7A6E]">Sunday: Closed</p>
          </div>
        </div>
       
      </div>
    </div>
  );
}