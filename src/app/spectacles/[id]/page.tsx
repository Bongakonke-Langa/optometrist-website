'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import products from '../../../data/products.json';

export default function SpectacleDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const productId = parseInt(params.id); // Convert `id` to a number
  const product = products.find((s) => s.id === productId); // Find the product
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col font-sans bg-[#FAF5F1] text-[#292F36]">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Spectacle not found</h1>
          <button
            onClick={() => router.push('/products')}
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
    alert(`Thank you for purchasing ${quantity} ${product.name} spectacles!`);
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
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-bold mb-4">R {product.price.toFixed(2)}</p>
              <div className="flex items-center mb-4">
                <label htmlFor="quantity" className="mr-2">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
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
