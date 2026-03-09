"use client";

import { useEffect, useState } from "react";
import { getAllProducts } from "../Services/prod.serv";
import productInterface from "../interface/productInterface";
import ProductsList from "../components/ProductList";

const categoriesById = [
  { id: 1, name: "rock" },
  { id: 2, name: "pop" },
  { id: 3, name: "soul" },
  { id: 4, name: "hard Rock" },
  { id: 5, name: "alternative rock" },
  { id: 6, name: "hip hop" },
  { id: 7, name: "folk" },
  { id: 8, name: "jazz" },
  { id: 9, name: "electronic" },
];

export default function CategoryBar() {
  const [allProducts, setAllProducts] = useState<productInterface[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleCategorySelect = (id: number | null) => {
    setSelectedCategoryId(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="hidden md:block sticky top-44 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 p-5 min-w-max">
            <button
              onClick={() => setSelectedCategoryId(null)}
              className={`px-6 py-2.5 rounded-lg border transition-all whitespace-nowrap hover:bg-custume-light/20 ${
                selectedCategoryId === null
                  ? "border-custume-light text-custume-light font-semibold"
                  : "border-custume-light/40 text-custume-light/70"
              }`}
            >
              todos los productos
            </button>

            {categoriesById.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`px-6 py-2.5 rounded-lg border transition-all whitespace-nowrap hover:bg-custume-orange/20 ${
                  selectedCategoryId === cat.id
                    ? "border-custume-orange text-custume-orange font-semibold"
                    : "border-custume-orange/40 text-custume-orange/70"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden sticky top-44 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10 p-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full px-4 py-3 rounded-lg border border-custume-orange text-custume-orange font-semibold flex items-center justify-between"
        >
          <span>
            {selectedCategoryId
              ? categoriesById.find((c) => c.id === selectedCategoryId)?.name
              : "all products"}
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-black/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl mx-4 max-h-96 overflow-y-auto">
            <button
              onClick={() => handleCategorySelect(null)}
              className={`w-full text-left px-4 py-3 transition-all border-b border-white/5 ${
                selectedCategoryId === null
                  ? "bg-custume-light/10 text-custume-light font-semibold"
                  : "text-custume-light/70 hover:bg-white/5"
              }`}
            >
              todos los productos
            </button>
            {categoriesById.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`w-full text-left px-4 py-3 transition-all border-b border-white/5 ${
                  selectedCategoryId === cat.id
                    ? "bg-custume-orange/10 text-custume-orange font-semibold"
                    : "text-custume-orange/70 hover:bg-white/5"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <ProductsList products={filteredProducts} />
    </>
  );
}
