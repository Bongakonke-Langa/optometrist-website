'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
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
      <ul className="hidden md:flex space-x-4">
        <li><Link href="/" className="hover:text-black transition-colors duration-300">Home</Link></li>
        <li><Link href="/eyeglasses" className="hover:text-black transition-colors duration-300">Eyeglasses</Link></li>
        <li><Link href="/rectangleglasses" className="hover:text-black transition-colors duration-300">Rectangle Glasses</Link></li>
        <li><Link href="#" className="hover:text-black transition-colors duration-300">Frederica</Link></li>
      </ul>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="md:hidden mt-4 flex flex-col space-y-2">
          <li><Link href="/" className="block py-2 hover:text-black transition-colors duration-300">Home</Link></li>
          <li><Link href="/eyeglasses" className="block py-2 hover:text-black transition-colors duration-300">Eyeglasses</Link></li>
          <li><Link href="/rectangleglasses" className="block py-2 hover:text-black transition-colors duration-300">Rectangle Glasses</Link></li>
          <li><Link href="#" className="block py-2 hover:text-black transition-colors duration-300">Frederica</Link></li>
        </ul>
      )}
    </nav>
  );
}
