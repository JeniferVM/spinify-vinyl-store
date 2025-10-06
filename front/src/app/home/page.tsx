"use client";

import newArrivals from "../helpers/newArrivals";
import bestSellers from "../helpers/bestSellers";
import ProductCard from "../components/ProductCard";
import ProdMenu from "../components/ProdMenu";

export default function Home() {
  return (
    <div className="space-y-8 pb-8">
      <ProdMenu />

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex">
          <div className="sticky left-0 z-20 bg-gradient-to-r from-black via-black/95 to-black/80 backdrop-blur-sm flex items-center min-w-fit border-r border-white/10">
            <div className="px-20 py-8 relative">
              <h3 className="text-4xl font-bold text-white text-center leading-tight">
                best <br />
                <span className="text-custume-orange">sellers</span>
              </h3>

              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gradient-to-r from-custume-orange to-transparent"></div>
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-custume-orange rounded-full shadow-lg shadow-custume-orange/50"></div>
            </div>
          </div>

          <div
            className="flex gap-8 pb-6 pl-8 pr-8"
            style={{ width: "max-content" }}
          >
            {bestSellers.map((product, index) => (
              <div
                key={`best-${product.name}`}
                className="flex-shrink-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-3/4 mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-custume-orange rounded-full shadow-lg shadow-custume-orange/50"></div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex">
          <div
            className="flex gap-8 pb-6 pl-8 pr-8"
            style={{ width: "max-content" }}
          >
            {newArrivals.map((product, index) => (
              <div
                key={`new-${product.name}`}
                className="flex-shrink-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div
            className="sticky right-0 z-20 bg-gradient-to-l from-black via-black/95 to-black/80 backdrop-blur-sm flex items-center min-w-fit border-l border-white/10"
            style={{ direction: "rtl" }}
          >
            <div className="px-20 py-8 relative" style={{ direction: "ltr" }}>
              <h3 className="text-4xl font-bold text-white text-center leading-tight">
                <span className="text-custume-orange">new</span> <br />
                arrivals
              </h3>

              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gradient-to-l from-custume-orange to-transparent"></div>
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-custume-orange rounded-full shadow-lg shadow-custume-orange/50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
