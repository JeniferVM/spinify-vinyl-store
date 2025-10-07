import Image from "next/image";
import { useCart } from "../context/cartContext";
import { useToast } from "../context/toastContext";
import productInterface from "../interface/productInterface";

interface CardProps {
  product: productInterface;
}

export default function AddButton({ product }: CardProps) {
  const { addCart, cartItems } = useCart();
  const { showToast } = useToast();

  const handleAddCart = (e: React.MouseEvent) => {
    e.preventDefault();
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
    <div className="mt-6">
      <button
        className="w-full bg-black flex flex-row items-center justify-center text-custume-orange text-lg font-medium border border-custume-orange/40 tracking-widefont-medium py-3.5 px-4 rounded-xl transition-all duration-300 hover:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-custume-orange/50 focus:ring-offset-2 focus:ring-offset-black/20 active:scale-95 group-hover:bg-gradient-to-r hover:bg-custume-orange/20"
        onClick={handleAddCart}
      >
        {" "}
        Add to
        <Image
          src="/assets/AddCart.png"
          alt="AddToCart"
          width={20}
          height={20}
          className="ml-5 object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 filter contrast-110 saturate-110"
        />
      </button>
    </div>
  );
}
