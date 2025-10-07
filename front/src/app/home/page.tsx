/* eslint-disable react/no-unescaped-entities */
import newArrivals from "../helpers/newArrivals";
import bestSellers from "../helpers/bestSellers";
import ProductCard from "../components/ProductCard";
import ProdMenu from "../components/ProdMenu";
import { secondChance } from "../helpers/secondChance";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8 pb-8">
      <ProdMenu />

      <div className="max-w-6xl mx-auto pt-0 py-16">
        <div className="relative">
          <div className="bg-black/40 backdrop-blur-md">
            <div className="text-center mb-8">
              <h2 className="text-5xl font-bold text-white mb-2">
                Get the best{" "}
                <span className="text-custume-orange"> vinyl spin</span>
              </h2>
              <div className="w-24 h-1 bg-custume-orange mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12 items-center">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-custume-orange rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-custume-light text-lg leading-relaxed">
                    We believe in{" "}
                    <span className="text-custume-orange font-semibold">
                      true ownership
                    </span>{" "}
                    of music. In an ephemeral digital world, vinyl records
                    represent something tangible,
                    <span className="text-white font-medium">
                      {" "}
                      something that truly belongs to you
                    </span>
                    .
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-custume-orange rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-custume-light text-lg leading-relaxed">
                    More than nostalgia, it's a{" "}
                    <span className="text-custume-orange font-semibold">
                      lifestyle
                    </span>
                    . It's appreciating the ritual of playing a record, admiring
                    the cover art, and feeling the{" "}
                    <span className="text-white font-medium">
                      analog warmth
                    </span>{" "}
                    that no stream can replicate.
                  </p>
                </div>
              </div>

              <div className="flex justify-center relative group">
                <div className="relative rounded-lg overflow-hidden border border-20px border-black/40">
                  <Image
                    src="/assets/vinilPicture.jpg"
                    alt="Vintage turntable with vinyl record"
                    width={350}
                    height={350}
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 filter contrast-110 saturate-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-custume-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center col-span-full">
              <p className="text-2xl text-custume-orange font-bold italic">
                "Music isn't rented, it's collected"
              </p>
            </div>
          </div>
        </div>
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

      <div className="relative w-3/4 mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-custume-orange rounded-full shadow-lg shadow-custume-orange/50"></div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex">
          <div className="sticky left-0 z-20 bg-gradient-to-r from-black via-black/95 to-black/80 backdrop-blur-sm flex items-center min-w-fit border-r border-white/10">
            <div className="px-20 py-8 relative">
              <h3 className="text-4xl font-bold text-white text-center leading-tight">
                secornd <br />
                <span className="text-custume-orange">chance</span>
              </h3>

              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gradient-to-r from-custume-orange to-transparent"></div>
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-custume-orange rounded-full shadow-lg shadow-custume-orange/50"></div>
            </div>
          </div>

          <div
            className="flex gap-8 pb-6 pl-8 pr-8"
            style={{ width: "max-content" }}
          >
            {secondChance.map((product, index) => (
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
    </div>
  );
}
