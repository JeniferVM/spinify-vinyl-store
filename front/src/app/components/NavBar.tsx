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
      <div className="flex justify-between mb-0 pt-0 p-5 items-center">
        <section className="cursor-pointer" onClick={handleMenuClick}>
          <Image
            src="/assets/MenuIcon.png"
            alt="MenuIcon"
            width={30}
            height={30}
          />
        </section>

        <section className="cursor-pointer">
          <Link
            href={PATHROUTES.HOME}
            className="m-4"
            onClick={handleLogoClick}
          >
            <Image
              src="/assets/LargeLogo.png"
              alt="LargeLogo"
              width={200}
              height={13}
            />
          </Link>
        </section>

        <section className="text-2xl hidden md:flex flex-wrap justify-between text-white ">
          <Link
            href={PATHROUTES.REGISTER}
            className="m-4"
            onClick={handleLogoClick}
          >
            REGISTER
          </Link>
        </section>
      </div>

      <Sidebar isOpen={isOpen} onClose={handleLogoClick} />
    </>
  );
};

export default NavBar;
