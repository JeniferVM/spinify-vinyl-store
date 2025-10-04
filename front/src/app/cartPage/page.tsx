"use client";

import { useCart } from "../context/cartContext";
import { useAuth } from "../context/authContext";
import { useToast } from "../context/toastContext";
import Image from "next/image";
import Link from "next/link";
import { PATHROUTES } from "../helpers/navItems";
import { createOrder } from "../Services/orders.serv";
import ProdMenu from "../components/ProdMenu";

export default function CartPage() {
  const {
    cartItems,
    clearCart,
    getItemCount,
    getItemsId,
    getTotal,
    removeCart,
  } = useCart();
  const { dataUser, refreshUser } = useAuth();
  const { showToast } = useToast();

  const handleCheckOut = async () => {
    const itemIds = getItemsId();
    const token = dataUser?.token;
    if (!token) {
      showToast("You need to log in to checkout", "error");
      return;
    }
    try {
      await createOrder(itemIds, token);
      await refreshUser();
      clearCart();
      showToast("Your order has been placed!", "success");
    } catch (error) {
      console.log("Error: ", error);
      showToast("Something went wrong while processing your order", "error");
    }
  };

  const handleRemove = (id: string, name: string) => {
    showToast(`${name} removed from cart!`, "error");
    setTimeout(() => {
      removeCart(Number(id));
    }, 100);
  };

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
    <div className="p-6">
      <div className=" mx-auto">
        <h2 className="text-4xl font-bold text-white mb-2">
          Your Cart ({getItemCount()} {getItemCount() === 1 ? "item" : "spins"})
        </h2>

        <div className="mt-10 mb-10">
          <ProdMenu />
          <div className="relative w-3/4 mx-auto mt-5">
            <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-custume-orange rounded-full shadow-lg shadow-custume-orange/50"></div>
          </div>
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
                      <Link href={`/product/${item.id}`}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={96}
                          height={196}
                        />{" "}
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

                      <button
                        onClick={() =>
                          handleRemove(item.id.toString(), item.name)
                        }
                        className="px-4 py-2 text-sm font-medium rounded-xl border border-custume-orange text-custume-orange hover:bg-custume-orange hover:text-white transition-all"
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
                  onClick={handleClearCart}
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
