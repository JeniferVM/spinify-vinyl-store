"use client";

import { useCart } from "../context/cartContext";
import { useAuth } from "../context/authContext";
import { useToast } from "../context/toastContext";
import Link from "next/link";
import { PATHROUTES } from "../helpers/navItems";
import ProdMenu from "../components/ProdMenu";
import CartProd from "../components/CartProd";

export default function CartPage() {
  const { cartItems, clearCart, getItemCount, getTotal } = useCart();
  const { dataUser } = useAuth();
  const { showToast } = useToast();

  const handleClearCart = () => {
    showToast("Cart cleared!", "info");
    setTimeout(() => {
      clearCart();
    }, 100);
  };

  if (!dataUser) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-custume-orange/5 text-center max-w-md">
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
            <h1 className="text-4xl font-bold text-white mt-10 mb-2">
              Your Cart
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-custume-orange/50 to-transparent"></div>
          </div>

          <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-12 shadow-2xl shadow-custume-orange/5 text-center">
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
              SPIN IN PRODUCTS
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className=" mx-auto">
        <h2 className="text-4xl font-bold text-white mt-10 mb-2">YOUR CART</h2>

        <ProdMenu />

        <div className="grid lg:grid-cols-3 gap-8">
          <CartProd />

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-custume-orange/5 sticky top-6">
              <h2 className="text-2xl font-bold text-white mb-6">YOUR ORDER</h2>

              <div className="space-y-4 mb-6">
                <div className="space-y-2">
                  <span className="text-white/70 text-m font-bold">
                    Products ({getItemCount()})
                  </span>
                  <div className="max-h-32 overflow-y-auto space-y-1">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm text-white/60"
                      >
                        <span className="truncate mr-2">
                          {item.name} {item.quantity > 1 && `x${item.quantity}`}
                        </span>
                        <span className="flex-shrink-0">
                          ${(item.price * item.quantity).toFixed(2)}
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
                <button className="w-full px-6 py-4 bg-custume-orange text-black text-lg font-bold rounded-xl hover:bg-custume-orange/90 hover:scale-105 transition-all duration-300">
                  <Link href="/checkout">CHECK OUT</Link>
                </button>

                <button
                  onClick={handleClearCart}
                  className="w-full px-6 py-3 text-white/70 text-sm font-medium rounded-xl border border-white/20 hover:bg-white/5 hover:text-white transition-all duration-300"
                >
                  CLEAR CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
