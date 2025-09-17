import { ProductCard } from "@/app/components/ProductCard";
import { mockProducts } from "@/app/helpers/mockProducts";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

export default function ProductsPage() {
  return (
    <div>
      <NavBar />
      <h1 className="text-3xl font-bold mb-2 text-white flex justify-center m">
        Find your spin sound
      </h1>
      <hr className="w-3/4 border-t-2 border-white mb-8 mx-auto" />
      <br />
      <section className="flex flex-wrap gap-6">
        {mockProducts.map((product) => {
          return <ProductCard product={product} key={product.name} />;
        })}
      </section>
      <Footer />
    </div>
  );
}
