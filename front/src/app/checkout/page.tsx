"use client";

import { useCart } from "../context/cartContext";
import { useAuth } from "../context/authContext";
import Image from "next/image";
import Link from "next/link";
import { PATHROUTES } from "../helpers/navItems";
import ProdMenu from "../components/ProdMenu";
import CheckoutForm from "../components/forms/CheckoutForm";

export default function Checkout() {
  const { cartItems, getItemCount, getTotal } = useCart();
  const { dataUser } = useAuth();

  if (!dataUser) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6">
        <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-custume-orange/5 text-center max-w-md w-full">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Do you have an account?
          </h2>
          <p className="text-white/70 mb-6">Please Login to order</p>
          <Link
            href={PATHROUTES.LOGIN}
            className="inline-block px-6 py-3 text-custume-orange text-base sm:text-lg font-medium rounded-xl border border-custume-orange/30 hover:bg-custume-orange/10 transition-all duration-300"
          >
            LOGIN
          </Link>
        </div>
      </div>
    );
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-black p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              CHECK OUT
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-custume-orange/50 to-transparent"></div>
          </div>

          <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl shadow-custume-orange/5 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Did you already have an order?
            </h2>
            <p className="text-white/70 mb-8 text-sm sm:text-base">
              Explore the products to find your spin sound
            </p>
            <Link
              href={PATHROUTES.PRODUCTS}
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-custume-orange text-base sm:text-lg font-medium rounded-xl border border-custume-orange/30 hover:bg-custume-orange/10 hover:scale-105 transition-all duration-300"
            >
              SPIN IN PRODUCTS
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
          CHECK OUT
        </h2>

        <ProdMenu />

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/3 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-custume-orange/5">
            <div className="space-y-4">
              <span className="text-white/70 text-xl sm:text-2xl font-bold">
                Products ({getItemCount()})
              </span>
              <div className="max-h-64 sm:max-h-96 overflow-y-auto space-y-3 sm:space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10"
                  >
                    <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/5 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                      {item.image ? (
                        <Link href={`/product/${item.id}`}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                          />
                        </Link>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded border border-custume-orange/30"></div>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-custume-orange font-semibold text-sm sm:text-lg mb-1 truncate">
                        {item.name}
                      </h3>
                      <span className="text-base sm:text-lg font-bold text-white">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between text-lg sm:text-xl font-bold text-white">
                  <span>Total</span>
                  <span className="text-custume-orange">
                    ${getTotal().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-custume-orange/5 lg:sticky lg:top-6 h-fit">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </div>
  );
}
