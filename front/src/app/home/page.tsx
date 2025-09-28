import Image from "next/image";
import newArrivals from "../helpers/newArrivals";
import bestSellers from "../helpers/bestSellers";
import ProductCard from "../components/ProductCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8 pb-8">
      <div className="flex justify-around items-center px-6 mt-20">
        <div className="flex justify-around items-center">
          <Link
            href="/products"
            className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-black/20 backdrop-blur-sm border border-custume-orange/30 hover:border-custume-orange/60 transition-all duration-300 hover:scale-105 hover:bg-custume-orange/10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-custume-orange/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <span className="text-2xl text-custume-orange group-hover:text-orange-400 font-medium transition-colors duration-300">
              all products
            </span>
          </Link>

          <Link
            href="/cartPage"
            className="group flex items-center gap-3 ml-10 px-6 py-3 rounded-2xl bg-black/20 backdrop-blur-sm border border-custume-light/30 hover:border-custume-light/60 transition-all duration-300 hover:scale-105 hover:bg-custume-light/10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-custume-light/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <span className="text-2xl text-custume-light group-hover:text-light-400 font-medium transition-colors duration-300">
              my cart
            </span>
          </Link>
        </div>

        <div>
          <button className="group p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:bg-white/10">
            <Image
              src="/assets/Search.png"
              alt="SearchBar"
              width={28}
              height={28}
              className="transition-all duration-300 group-hover:brightness-125"
            />
            <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <div className="relative w-3/4 mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-custume-orange rounded-full shadow-lg shadow-custume-orange/50"></div>
      </div>

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
