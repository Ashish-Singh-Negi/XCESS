"use client";

import Image from "next/image";
import { useState } from "react";

const CustomSelect = ({
  title,
  options,
}: {
  title: string;
  options: string[];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="relative h-[72px] cursor-pointer w-full sm:w-72 border-2 border-[#BFBFBF] outline-none focus-within:border-primary  rounded-xl px-6 py-[22px] text-xl flex items-center justify-between"
      >
        {title}
        {open ? (
          <Image
            className="rotate-180 transition-transform"
            src="/icons/Angle-down.png"
            alt="Down Arrow icon"
            height={24}
            width={24}
          />
        ) : (
          <Image
            className="transition-transform"
            src="/icons/Angle-down.png"
            alt="Down Arrow icon"
            height={24}
            width={24}
          />
        )}
        {open && (
          <div
            className="absolute z-10 top-[74px] left-0 h-fit cursor-pointer w-full sm:w-72 border-2 bg-white border-[#BFBFBF] outline-none focus-within:border-primary
          rounded-lg px-1 py-2 text-xl flex flex-col"
          >
            {options.map((option) => (
              <p
                key={option}
                className="w-full px-4 py-2 hover:bg-primary/20 rounded-lg text-start"
              >
                {option}
              </p>
            ))}
          </div>
        )}
      </button>
    </>
  );
};
export default CustomSelect;
