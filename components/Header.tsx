"use client";

import Image from "next/image";
import NavBar from "./NavBar";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  return (
    <header className="fixed z-20 w-full bg-white border-b-2 border-[#E2E2E2]">
      <div className="w-[90%] py-4 sm:py-3 flex sm:flex-wrap md:flex-nowrap justify-between items-center mx-auto gap-4">
        <Link
          href={"/"}
          className="h-12 w-28 sm:h-[62px] sm:w-[152px] cursor-pointer"
        >
          <Image src="/Logo.png" alt="Logo png" height={62} width={152} />
        </Link>

        <div className="flex items-center gap-4 md:w-auto">
          <NavBar />
          <div className="hidden sm:flex gap-4">
            <Link
              href={"/book"}
              className="py-2 px-6 bg-yellow-400 text-black rounded-3xl font-medium hover:scale-105 transition-transform cursor-pointer active:scale-100"
            >
              Book Now
            </Link>
            <div className="w-10 h-10 rounded-full bg-black"></div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
