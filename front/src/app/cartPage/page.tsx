"use client";

import { useCart } from "../context/cartContext";
import { useAuth } from "../context/authContext";
import Image from "next/image";
import Link from "next/link";
import { PATHROUTES } from "../helpers/navItems";
import { createOrder } from "../Services/orders.serv";

export default function Cart() {
  const {
    cartItems,
    clearCart,
    getItemCount,
    getItemsId,
    getTotal,
    removeCart,
  } = useCart();
  const { dataUser } = useAuth();

  const handleCheckOut = async () => {
    const itemIds = getItemsId();
    const token = dataUser?.token;
    if (!token) {
      return;
    }
    try {
      await createOrder(itemIds, token);
      clearCart();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  if (!dataUser) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-custume-orange/5 text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-custume-orange/10 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-custume-orange/30"></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Do you have an account?
          </h2>
          <p className="text-white/70 mb-6">Please Login to order</p>
          <Link
            href={PATHROUTES.LOGIN}
            className="inline-block px-6 py-3 text-custume-orange text-lg font-medium rounded-xl border border-custume-orange/30 hover:bg-custume-orange/10 transition-all duration-300"
          >
            LOGIN
          </Link>
        </div>
      </div>
    );
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-black p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Your Cart</h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-custume-orange/50 to-transparent"></div>
          </div>

          <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-12 shadow-2xl shadow-custume-orange/5 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-custume-orange/10 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border-2 border-custume-orange/30"></div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-white/70 mb-8">
              Explore the products to find your spin sound
            </p>
            <Link
              href={PATHROUTES.PRODUCTS}
              className="inline-block px-8 py-4 text-custume-orange text-lg font-medium rounded-xl border border-custume-orange/30 hover:bg-custume-orange/10 hover:scale-105 transition-all duration-300"
            >
              SPIN PRODUCTS
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">
            Your Cart ({getItemCount()}{" "}
            {getItemCount() === 1 ? "item" : "spins"})
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-custume-orange/50 to-transparent"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-custume-orange/5"
              >
                <div className="flex gap-6">
                  <div className="w-24 h-24 bg-white/5 rounded-xl overflow-hidden border border-white/10">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-8 h-8 rounded border border-custume-orange/30"></div>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg mb-2 truncate">
                      {item.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      {item.description || "Vinyl record"}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-custume-orange">
                        ${item.price}
                      </div>

                      <button
                        onClick={() => removeCart(item.id)}
                        className="px-4 py-2 text-red-400 text-sm font-medium rounded-xl border border-red-400/30 hover:bg-red-400/10 hover:scale-105 transition-all duration-300"
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-custume-orange/5 sticky top-6">
              <h2 className="text-2xl font-bold text-white mb-6">Your order</h2>

              <div className="space-y-4 mb-6">
                <div className="space-y-2">
                  <span className="text-white/70 text-m font-bold">
                    {" "}
                    Products ({getItemCount()})
                  </span>
                  <div className="max-h-32 overflow-y-auto space-y-1">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm text-white/60"
                      >
                        <span className="truncate mr-2">{item.name}</span>
                        <span className="flex-shrink-0">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span className="text-custume-orange">
                      ${getTotal().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  className="w-full px-6 py-4 bg-custume-orange text-black text-lg font-bold rounded-xl hover:bg-custume-orange/90 hover:scale-105 transition-all duration-300"
                  onClick={handleCheckOut}
                >
                  Check out
                </button>

                <button
                  onClick={clearCart}
                  className="w-full px-6 py-3 text-white/70 text-sm font-medium rounded-xl border border-white/20 hover:bg-white/5 hover:text-white transition-all duration-300"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
