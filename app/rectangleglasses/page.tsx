import Link from 'next/link';


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
      
    </div>
  );
}
