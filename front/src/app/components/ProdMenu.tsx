"use client";

import Link from "next/link";
import { useAuth } from "../context/authContext";
import { usePathname } from "next/navigation";

export function ProdMenu() {
  const { dataUser } = useAuth();
  const pathname = usePathname();

  const isNotCartPage = !pathname.startsWith("/cart");
  const isNotProductPage = !pathname.startsWith("/products");

  return (
    <div className="sticky top-25 z-50 bg-black">
      <div className="flex flex-col items-center py-4">
        <div className="flex justify-center gap-8 mb-4">
          {isNotProductPage && (
            <Link
              href="/products"
              className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-black/20 backdrop-blur-sm border border-custume-orange/30 hover:border-custume-orange/60 transition-all duration-300 hover:scale-105 hover:bg-custume-orange/10"
            >
              <span className="text-2xl text-custume-orange group-hover:text-orange-400 font-medium transition-colors duration-300">
                all products
              </span>
            </Link>
          )}
          {dataUser && isNotCartPage && (
            <Link
              href="/cartPage"
              className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-black/20 backdrop-blur-sm border border-custume-light/30 hover:border-custume-light/60 transition-all duration-300 hover:scale-105 hover:bg-custume-light/10"
            >
              <span className="text-2xl text-custume-light group-hover:text-light-400 font-medium transition-colors duration-300">
                my cart
              </span>
            </Link>
          )}
        </div>

        <div className="relative w-3/4">
          <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-custume-orange rounded-full shadow-lg shadow-custume-orange/50"></div>
        </div>
      </div>
    </div>
  );
}

export default ProdMenu;
