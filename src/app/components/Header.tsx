'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#8F7A6E] text-white p-2 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-10 h-10 mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
          </svg>
          <h1 className="text-2xl font-bold">Dr. Bonga's Optometry Clinic</h1>
        </div>
        
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-black transition-colors duration-300">Home</Link></li>
            <li><Link href="/eyeglasses" className="hover:text-black transition-colors duration-300">Eyeglasses</Link></li>
            <li><Link href="/spectacles" className="hover:text-black transition-colors duration-300">Spectacles</Link></li>
            <li><Link href="/aboutus" className="hover:text-black transition-colors duration-300">About us</Link></li>
          </ul>
        </nav>
      </div>
      
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li><Link href="/" className="block py-2 hover:text-black transition-colors duration-300">Home</Link></li>
            <li><Link href="/eyeglasses" className="block py-2 hover:text-black transition-colors duration-300">Eyeglasses</Link></li>
            <li><Link href="/spectacles" className="block py-2 hover:text-black transition-colors duration-300">Spectacles</Link></li>
            <li><Link href="/aboutus" className="block py-2 hover:text-black transition-colors duration-300">About us</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
} 