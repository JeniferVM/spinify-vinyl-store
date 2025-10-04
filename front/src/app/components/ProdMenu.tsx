"use client";

import Link from "next/link";
import { useAuth } from "../context/authContext";
import { usePathname } from "next/navigation";

export function ProdMenu() {
  const { dataUser } = useAuth();
  const pathname = usePathname();

  const isNotCartPage = !pathname.startsWith("/cartPage");

  return (
    <div className="flex justify-around items-center">
      <Link
        href="/products"
        className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-black/20 backdrop-blur-sm border border-custume-orange/30 hover:border-custume-orange/60 transition-all duration-300 hover:scale-105 hover:bg-custume-orange/10"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-custume-orange/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <span className="text-2xl text-custume-orange group-hover:text-orange-400 font-medium transition-colors duration-300">
          all products
        </span>
      </Link>
      {dataUser && isNotCartPage && (
        <Link
          href="/cartPage"
          className="group flex items-center gap-3 ml-10 px-6 py-3 rounded-2xl bg-black/20 backdrop-blur-sm border border-custume-light/30 hover:border-custume-light/60 transition-all duration-300 hover:scale-105 hover:bg-custume-light/10"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-custume-light/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <span className="text-2xl text-custume-light group-hover:text-light-400 font-medium transition-colors duration-300">
            my cart
          </span>
        </Link>
      )}
    </div>
  );
}

export default ProdMenu;
