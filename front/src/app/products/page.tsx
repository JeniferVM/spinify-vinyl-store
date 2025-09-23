import { ProductCard } from "@/app/components/ProductCard";
import Image from "next/image";
import { getAllProducts } from "../Services/prod.serv";

export default async function ProductsPage() {
  const allProducts = await getAllProducts();

  return (
    <div className="min-h-screen pb-12">
      <div className="pt-12 pb-16 px-6 max-w-7xl ml-30 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-hebbo font-bold text-white leading-tight">
              Find your
              <span className="block text-custume-orange mt-2 relative">
                spin sound
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-custume-orange/80 via-custume-orange/40 to-transparent"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-md">
              Discover the perfect vinyl to complete your collection
            </p>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <Image
              src="/assets/track.jpeg"
              alt="Vintage turntable with vinyl record"
              width={300}
              height={300}
              className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 filter contrast-110 saturate-110"
            />
            <div className="absolute top-4 right-4 w-3 h-3 bg-custume-orange rounded-full opacity-80 animate-pulse"></div>
          </div>
        </div>

        <div className="relative w-3/4 mx-auto mt-5">
          <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-custume-orange rounded-full shadow-lg shadow-custume-orange/50"></div>
        </div>
      </div>
      <section className="max-w-7xl mt-2 mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10">
            <span className="text-white/70 text-sm font-medium">
              {allProducts.length} products available
            </span>
            <div className="w-2 h-2 bg-custume-orange/60 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
          {allProducts.map((product) => (
            <ProductCard product={product} key={product.name} />
          ))}
        </div>
      </section>
      <div className="mt-20 text-center">
        <div className="relative w-1/3 mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-custume-orange/30 to-transparent"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-custume-orange/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
