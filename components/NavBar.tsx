"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navs = [
  { name: "Home", href: "/" },
  { name: "Travel", href: "/travel" },
  { name: "Track", href: "/track" },
  { name: "About", href: "/about" },
];

const NavBar = () => {
  const pathname = usePathname();
  return (
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
  );
};
export default NavBar;
