"use client";

import Link from "next/link";
import { useCart } from "../context/cartContext";
import Image from "next/image";
import { useToast } from "../context/toastContext";

export default function CartProd() {
  const { cartItems, removeCart, updateQuantity } = useCart();
  const { showToast } = useToast();

  const handleRemove = (id: string, name: string) => {
    showToast(`${name} removed from cart!`, "error");
    setTimeout(() => {
      removeCart(Number(id));
    }, 100);
  };

  const handleIncreaseQuantity = (id: number, currentQuantity: number) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const handleDecreaseQuantity = (
    id: number,
    name: string,
    currentQuantity: number
  ) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    } else {
      handleRemove(id.toString(), name);
    }
  };

  return (
    <div className="lg:col-span-2 space-y-4">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-custume-orange/5"
        >
          <div className="flex gap-6">
            <div className="w-24 h-24 bg-white/5 rounded-xl overflow-hidden border border-white/10">
              {item.image ? (
                <Link href={`/product/${item.id}`}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={96}
                    height={96}
                  />
                </Link>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-8 h-8 rounded border border-custume-orange/30"></div>
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-custume-orange font-semibold text-lg mb-2 truncate">
                {item.name}
              </h3>
              <p className="text-white text-lg mb-4">
                {item.author || "Vinyl record"}
              </p>
              <p className="text-white/70 text-sm mb-4">
                {item.description || "Vinyl record"}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-white">
                  ${item.price}
                </span>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-white/5 rounded-xl border border-white/10 p-1">
                    <button
                      onClick={() =>
                        handleDecreaseQuantity(
                          item.id,
                          item.name,
                          item.quantity ?? 0
                        )
                      }
                      className="w-8 h-8 flex items-center justify-center text-custume-orange hover:bg-custume-orange hover:text-white rounded-lg transition-all"
                    >
                      -
                    </button>
                    <span className="text-white font-medium min-w-[2rem] text-center">
                      {item.quantity ?? 0}
                    </span>
                    <button
                      onClick={() =>
                        handleIncreaseQuantity(item.id, item.quantity ?? 0)
                      }
                      className="w-8 h-8 flex items-center justify-center text-custume-orange hover:bg-custume-orange hover:text-white rounded-lg transition-all"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemove(item.id.toString(), item.name)}
                    className="px-4 py-2 text-sm font-medium rounded-xl border border-custume-orange text-custume-orange hover:bg-custume-orange/20 hover:text-white transition-all"
                  >
                    <Image
                      src="/assets/deleteIcon.png"
                      alt="deleteIcon"
                      width={15}
                      height={15}
                      className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 filter contrast-110 saturate-110"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
