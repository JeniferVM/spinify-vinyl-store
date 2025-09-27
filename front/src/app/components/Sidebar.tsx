"use client";

import Link from "next/link";
import Image from "next/image";
import { navItems, PATHROUTES } from "../helpers/navItems";
import { useState } from "react";
import { useAuth } from "../context/authContext";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SideBarProps) => {
  const [isClient, setIsClient] = useState(false);
  const { dataUser, logout } = useAuth();

  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <aside
        className={`
        fixed top-0 left-0 h-screen w-72 z-50 flex flex-col p-8
        bg-gradient-to-br from-black/60 via-black/40 to-black/60 
        backdrop-blur-xl border-r border-white/10 
        shadow-2xl shadow-custume-orange/5
        transform transition-all duration-500 ease-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="mb-12 flex justify-end">
          <button
            onClick={onClose}
            className="group relative p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            <div className="absolute inset-0 rounded-full bg-custume-orange/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <Image
              src="/assets/close.png"
              alt="close"
              width={24}
              height={24}
              className="relative z-10 transition-all duration-300 group-hover:brightness-125"
            />
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          {navItems.map((navigatorByItem, index) => (
            <Link
              key={navigatorByItem.name}
              href={navigatorByItem.route}
              className="group relative flex items-center gap-4 p-4 text-white text-xl font-medium rounded-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              onClick={onClose}
              prefetch
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10 group-hover:text-custume-orange group-hover:translate-x-2 transition-all duration-300">
                {navigatorByItem.name}

                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
              </span>
            </Link>
          ))}
        </nav>
        {dataUser ? (
          <div className="mt-auto">
            <button
              onClick={() => logout()}
              className="w-full relative px-6 py-3 text-custume-orange text-lg font-medium transition-all duration-300 rounded-xl hover:bg-custume-orange/10 hover:scale-105 group overflow-hidden border border-custume-orange/30 hover:border-custume-orange/60"
            >
              <span className="relative z-10">Log Out</span>
              <div className="absolute inset-0 bg-custume-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        ) : (
          <Link
            href={PATHROUTES.HOME}
            className="block transition-all duration-500 hover:scale-105"
          >
            {" "}
          </Link>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
