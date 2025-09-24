"use client";

import { ProductCard } from "./ProductCard";
import productInterface from "../interface/productInterface";

interface ProductsListProps {
  products: productInterface[];
}

export function ProductsList({ products }: ProductsListProps) {
  return (
    <section className="max-w-7xl mt-2 mx-auto px-6">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10">
          <span className="text-white/70 text-sm font-medium">
            {products.length} products available
          </span>
          <div className="w-2 h-2 bg-custume-orange/60 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
        {products.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
    </section>
  );
}
