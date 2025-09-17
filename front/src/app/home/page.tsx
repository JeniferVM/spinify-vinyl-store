import Image from "next/image";
import newArrivals from "../helpers/newArrivals";
import bestSellers from "../helpers/bestSellers";
import ProductCard from "../components/ProductCard";
import NavBar from "../components/NavBar";
import Link from "next/link";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-around mt-2">
        <h3 className="text-2xl mb-2 text-white flex justify-between">
          <Link href={`products`}>all products</Link>
        </h3>
        <Image
          className="mb-2"
          src="/assets/Search.png"
          alt="SearchBar"
          width={28}
          height={28}
        />
      </div>
      <hr className="w-3/4 border-t-2 border-white mb-8 mx-auto" />

      <div className="overflow-x-auto scrollbar-hide flex mb-8">
        <div className="sticky left-0 z-10 bg-black flex items-center min-w-fit">
          <h3 className="text-3xl font-bold text-white px-8 py-4 text-center">
            best <br /> sellers
          </h3>
        </div>
        <div className="flex gap-6 pb-4 pl-4" style={{ width: "max-content" }}>
          {bestSellers.map((product) => {
            return (
              <div key={`best-${product.name}`} className="flex-shrink-0">
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>

      <hr className="w-3/4 border-t-2 border-white mb-8 mx-auto" />

      <div className="overflow-x-auto scrollbar-hide flex">
        <div className="flex gap-6 pb-4 pl-4" style={{ width: "max-content" }}>
          {newArrivals.map((product) => {
            return (
              <div key={`new-${product.name}`} className="flex-shrink-0">
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
        <div
          className="sticky right-0 z-10 bg-black flex items-center min-w-fit "
          style={{ direction: "rtl" }}
        >
          <h3 className="text-3xl font-bold text-white px-8 py-4 text-center">
            new <br /> arrivals
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}
