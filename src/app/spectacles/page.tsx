'use client';

import Image from "next/image";
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Spectacles() {

  const products = [
    { id: 1, name: "Classic Round", price: 2299.99, image: "/spectacles/classic-round.jpg", description: "Classic round frames, perfect for a sophisticated look." },
    { id: 2, name: "Modern Rectangle", price: 2499.99, image: "/spectacles/modern-rectangle.jpg", description: "Modern rectangular design, ideal for a professional setting." },
    { id: 3, name: "Vintage Cat-Eye", price: 2399.99, image: "/spectacles/vintage-cat-eye.jpg", description: "Stylish cat-eye shape, adding a touch of vintage glamour." },
    { id: 4, name: "Bold Oversized", price: 2599.99, image: "/spectacles/bold-oversized.jpg", description: "Oversized frames for a bold, fashion-forward statement." },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF5F1] text-[#292F36]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Spectacles Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-lg font-bold mb-4">R {product.price.toFixed(2)}</p>
                <Link href={`/spectacles/${product.id}`}>
                  <span className="bg-[#8F7A6E] text-white py-2 px-4 rounded hover:bg-[#7A6A5F] transition-colors duration-300">
                    View Details
                  </span>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

