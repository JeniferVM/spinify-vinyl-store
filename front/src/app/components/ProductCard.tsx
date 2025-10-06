"use client";

import Image from "next/image";
import productInterface from "../interface/productInterface";
import { useCart } from "../context/cartContext";
import { useToast } from "../context/toastContext";
import Link from "next/link";

interface CardProps {
  product: productInterface;
}

export const ProductCard = ({ product }: CardProps) => {
  const { addCart, cartItems } = useCart();
  const { showToast } = useToast();

  const handleAddCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Previene la navegación
    e.stopPropagation();

    if (product) {
      const isInCart = cartItems.some((item) => item.id === product.id);

      if (isInCart) {
        showToast(`${product.name} is already in your cart!`, "error");
      } else {
        addCart(product);
        showToast(`${product.name} added to cart!`, "success");
      }
    }
  };

  return (
    <Link href={`/product/${product.id}`} className="block">
      <div className="group w-80 h-auto bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-black/40 border border-white/10 hover:border-white/20 shadow-lg hover:shadow-2xl p-6 cursor-pointer">
        <div className="relative overflow-hidden rounded-xl mb-4">
          <Image
            width={320}
            height={320}
            src={product.image}
            alt={`Image product: ${product.name}`}
            className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20">
            ${product.price}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-custume-orange font-semibold text-lg leading-tight group-hover:text-orange-400 transition-colors duration-300">
            {product.author}
          </h4>

          <h3 className="text-white font-medium text-xl leading-tight group-hover:text-gray-200 transition-colors duration-300">
            {product.name}
          </h3>
        </div>

        <div className="mt-6">
          <button
            className="w-full bg-black  text-custume-orange text-lg font-medium border border-custume-orange/40 tracking-widefont-medium py-3.5 px-4 rounded-xl transition-all duration-300 hover:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-custume-orange/50 focus:ring-offset-2 focus:ring-offset-black/20 active:scale-95 group-hover:bg-gradient-to-r hover:bg-custume-orange/20"
            onClick={handleAddCart}
          >
            Add to Cart
          </button>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-custume-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </Link>
  );
};

export default ProductCard;
