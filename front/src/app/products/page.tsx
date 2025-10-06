import Image from "next/image";
import ProdMenu from "../components/ProdMenu";
import CategoryBar from "../components/CategoryBar";

export default function ProductsPage() {
  return (
    <div className="min-h-screen pb-12">
      <div className="pt-3 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl text-4xl font-hebbo font-bold text-white leading-tight">
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

          <div className="hidden lg:flex justify-center items-center relative">
            <Image
              src="/assets/track.jpeg"
              alt="Vintage turntable with vinyl record"
              width={300}
              height={300}
              className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 filter contrast-110 saturate-110"
            />
          </div>
        </div>
        <ProdMenu />

        <CategoryBar />
      </div>
      <div className="mt-20 text-center">
        <div className="relative w-1/3 mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-custume-orange/30 to-transparent"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-custume-orange/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
