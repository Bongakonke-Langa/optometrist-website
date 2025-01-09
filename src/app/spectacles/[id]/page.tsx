'use client';

import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const spectacles = [
  { id: 1, name: "Classic Round", price: 2299.99, image: "/spectacles/classic-round.jpg", description: "Classic round frames, perfect for a sophisticated look." },
  { id: 2, name: "Modern Rectangle", price: 2499.99, image: "/spectacles/modern-rectangle.jpg", description: "Modern rectangular design, ideal for a professional setting." },
  { id: 3, name: "Vintage Cat-Eye", price: 2399.99, image: "/spectacles/vintage-cat-eye.jpg", description: "Stylish cat-eye shape, adding a touch of vintage glamour." },
  { id: 4, name: "Bold Oversized", price: 2599.99, image: "/spectacles/bold-oversized.jpg", description: "Oversized frames for a bold, fashion-forward statement." },
];

export default function SpectacleDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const spectacle = spectacles.find(s => s.id === parseInt(params.id));
  const [quantity, setQuantity] = useState(1);

  if (!spectacle) {
    return (
      <div className="min-h-screen flex flex-col font-sans bg-[#FAF5F1] text-[#292F36]">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Spectacle not found</h1>
          <button
            onClick={() => router.push('/spectacles')}
            className="bg-[#8F7A6E] text-white py-2 px-4 rounded hover:bg-[#7A6A5F] transition-colors duration-300"
          >
            Go Back
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  const handlePurchase = () => {
    // Here you would typically integrate with a payment gateway
    // For this example, we'll just show an alert
    alert(`Thank you for purchasing ${quantity} ${spectacle.name} spectacles!`);
    router.push('/spectacles');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF5F1] text-[#292F36]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="relative h-64 w-full md:w-96">
                <Image
                  src={spectacle.image}
                  alt={spectacle.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-6">{spectacle.name}</h1>
              <p className="text-gray-600 mb-4">{spectacle.description}</p>
              <p className="text-2xl font-bold mb-4">R {spectacle.price.toFixed(2)}</p>
              <div className="flex items-center mb-4">
                <label htmlFor="quantity" className="mr-2">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="border rounded px-2 py-1 w-16"
                />
              </div>
              <button
                onClick={handlePurchase}
                className="bg-[#8F7A6E] text-white py-2 px-4 rounded hover:bg-[#7A6A5F] transition-colors duration-300"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
