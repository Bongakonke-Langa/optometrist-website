import React from "react";
import { useRouter } from "next/router";
import products from "../../../src/data/products.json"

const ProductDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
        <button onClick={() => router.back()}>Go Back</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: "200px" }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default ProductDetailsPage;
