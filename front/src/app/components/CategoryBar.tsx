"use client";

import { useEffect, useState } from "react";
import { getAllProducts } from "../Services/prod.serv";
import productInterface from "../interface/productInterface";
import ProductsList from "../components/ProductList";

const categoriesById = [
  { id: 1, name: "Rock" },
  { id: 2, name: "Pop" },
  { id: 3, name: "Soul/R&B" },
  { id: 4, name: "Hard Rock" },
  { id: 5, name: "Alternative Rock" },
  { id: 6, name: "Hip Hop" },
  { id: 7, name: "Folk" },
  { id: 8, name: "Jazz" },
  { id: 9, name: "Electronic" },
];

export default function CategoryBar() {
  const [allProducts, setAllProducts] = useState<productInterface[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  const filteredProducts = selectedCategoryId
    ? allProducts.filter((p) => p.categoryId === selectedCategoryId)
    : allProducts;

  return (
    <>
      <div className="sticky top-44 z-50 bg-black flex justify-center flex-wrap gap-4 p-5 mt-8">
        <button
          onClick={() => setSelectedCategoryId(null)}
          className={`bg-black border border-custume-light/40 px-4 py-2 rounded-lg border transition-all hover:bg-custume-light/20 ${
            selectedCategoryId === null
              ? "bg-black border border-custume-light/40 text-custume-light"
              : "bg-transparent text-custume-light border-custume-light"
          }`}
        >
          Todos los productos
        </button>

        {categoriesById.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategoryId(cat.id)}
            className={`px-4 py-2 rounded-lg border transition-all hover:bg-custume-orange/20 ${
              selectedCategoryId === cat.id
                ? "bg-transparent border-custume-orange text-custume-orange"
                : "bg-transparent text-custume-orange border-custume-orange"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <ProductsList products={filteredProducts} />
    </>
  );
}
