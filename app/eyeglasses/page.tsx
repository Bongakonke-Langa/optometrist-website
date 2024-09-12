import Link from 'next/link';

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
      <header className="bg-[#8F7A6E] text-white p-8">
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="text-3xl font-bold">Dr. Bonga's Optometry Clinic</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-black transition-colors duration-300">Home</Link></li>
              <li><Link href="/eyeglasses" className="hover:text-black transition-colors duration-300">Eyeglasses</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors duration-300">Rectangle Glasses</Link></li>
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

      <footer className="bg-[#8F7A6E] text-white p-4 text-center">
        © 2023 Dr. Bonga's Optometry Clinic. All rights reserved.
      </footer>
    </div>
  );
}
