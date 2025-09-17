import Image from "next/image";
import { IProduct } from "@/app/interface/product.interface";

interface CardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: CardProps) => {
  return (
    <div className="w-80 h-130 bg-black rounded-lg overflow-hidden transition-transform hover:scale-105 p-7">
      <div className="overflow-hidden">
        <Image
          width={320}
          height={320}
          src={product.image}
          alt={`Image product: ${product.name}`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6 text-center">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-white font-bold text-2xl">{product.name}</h4>
          <span className="text-white font-bold text-xl">${product.price}</span>
        </div>

        <p className="text-gray-300 font-medium text-lg mb-4 flex items-left">
          {product.author}
        </p>
      </div>

      <div className="px-6 pb-6">
        <button className="w-full bg-white text-gray-900 font-medium py-3 px-4 rounded-md transition-all duration-200 hover:bg-gray-100 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 active:scale-100">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
