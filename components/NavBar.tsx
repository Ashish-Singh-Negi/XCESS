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
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 h-screen w-full bg-white flex flex-col"
          >
            {navs.map((nav) => (
              <Link
                onClick={() => setActive(!active)}
                key={nav.name}
                href={nav.href}
                className={`${
                  nav.href === pathname && "bg-primary/50"
                } px-6 py-4 text-xl font-medium cursor-pointer transition-all`}
              >
                {nav.name}
              </Link>
            ))}
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
