"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { PATHROUTES } from "../helpers/navItems";
import Sidebar from "./Sidebar";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => setIsOpen(true);
  const handleLogoClick = () => setIsOpen(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10 shadow-2xl">
        <div className="flex justify-between items-center px-6 py-4">
          <section
            className="cursor-pointer group transition-all duration-300 hover:scale-110 p-2 rounded-xl hover:bg-white/10"
            onClick={handleMenuClick}
          >
            <Image
              src="/assets/MenuIcon.png"
              alt="MenuIcon"
              width={30}
              height={30}
              className="transition-all duration-300 group-hover:brightness-125"
            />
          </section>

          <section className="cursor-pointer group">
            <Link
              href={PATHROUTES.HOME}
              className="block transition-all duration-500 hover:scale-105"
              onClick={handleLogoClick}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-custume-orange/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <Image
                  src="/assets/LargeLogo.png"
                  alt="LargeLogo"
                  width={200}
                  height={13}
                  className="relative z-10 transition-all duration-500 group-hover:brightness-110"
                />
              </div>
            </Link>
          </section>

          {/* Auth Links con efectos modernos */}
          <span className="flex items-center space-x-2">
            {/* LOGIN */}
            <section className="hidden md:block">
              <Link
                href={PATHROUTES.LOGIN}
                className="relative px-6 py-3 text-white text-lg font-medium transition-all duration-300 rounded-xl hover:bg-white/10 hover:scale-105 group overflow-hidden"
                onClick={handleLogoClick}
              >
                <span className="relative z-10">LOGIN</span>
              </Link>
            </section>

            <section className="hidden md:block">
              <Link
                href={PATHROUTES.REGISTER}
                className="relative px-6 py-3 text-custume-orange text-lg font-medium transition-all duration-300 rounded-xl hover:bg-custume-orange/10 hover:scale-105 group overflow-hidden border border-custume-orange/30 hover:border-custume-orange/60"
                onClick={handleLogoClick}
              >
                <span className="relative z-10 group-hover:text-custume-orange brightness-110 transition-all duration-300">
                  REGISTER
                </span>
              </Link>
            </section>
          </span>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-custume-orange/50 to-transparent"></div>
      </div>
      <div className="h-24"></div>

      <Sidebar isOpen={isOpen} onClose={handleLogoClick} />
    </>
  );
};

export default NavBar;
