"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navs = [
  { name: "Home", href: "/" },
  { name: "Travel", href: "/travel" },
  { name: "Track", href: "/track" },
  { name: "About", href: "/about" },
];

const NavBar = () => {
  const pathname = usePathname();

  const [active, setActive] = useState(false);

  return (
    <>
      <button
        onClick={() => setActive(!active)}
        className="flex lg:hidden flex-col gap-1.5 overflow-hidden"
      >
        <span
          className={`${
            active && "translate-y-2.5 rotate-45"
          } h-1 w-8 bg-black rounded-lg transition-transform`}
        ></span>
        <span
          className={`${
            active && "-translate-x-7"
          } h-1 w-7 bg-black rounded-lg transition-transform`}
        ></span>
        <span
          className={`${
            active && "-translate-y-2.5 -rotate-45"
          } h-1 w-8 bg-black rounded-lg transition-transform`}
        ></span>
      </button>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute shadow-lg top-full left-0 h-screen w-full bg-white flex flex-col"
          >
            {navs.map((nav) => (
              <Link
                onClick={() => setActive(!active)}
                key={nav.name}
                href={nav.href}
                className={`${
                  nav.href === pathname && "bg-primary/30"
                } px-6 py-4 text-xl text-black font-medium cursor-pointer transition-all`}
              >
                {nav.name}
              </Link>
            ))}
            {/* <div className="h-full w-full flex flex-col gap-4 px-4 py-4">
              <Link
                href={"/book"}
                className="w-fit py-2 px-6 text-black rounded-3xl font-medium hover:scale-105 transition-transform cursor-pointer active:scale-100"
              >
                Book Now
              </Link>
              <div className="w-full flex items-center gap-2 text-xl">
                <div className="w-10 h-10 rounded-full bg-gray-700"></div>{" "}
                Apple G
              </div>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden lg:flex flex-wrap justify-center md:justify-start gap-2 text-black">
        {navs.map((nav) => (
          <Link
            key={nav.name}
            href={nav.href}
            className={`${
              nav.href === pathname && "bg-primary"
            } px-6 py-2 rounded-3xl font-medium cursor-pointer `}
          >
            {nav.name}
          </Link>
        ))}
      </div>
    </>
  );
};
export default NavBar;
