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
  const [selectedOption, setSelectedOpen] = useState(title);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="relative h-[60px] sm:h-[72px] cursor-pointer w-full sm:w-72 border-2 border-[#BFBFBF] outline-none focus-within:border-primary  rounded-xl px-6 py-[22px] text-base sm:text-xl flex items-center justify-between"
      >
        {selectedOption}
        {open ? (
          <Image
            className="rotate-180 transition-transform size-4 sm:size-6"
            src="/icons/Angle-down.png"
            alt="Down Arrow icon"
            height={24}
            width={24}
          />
        ) : (
          <Image
            className="transition-transform size-4 sm:size-6"
            src="/icons/Angle-down.png"
            alt="Down Arrow icon"
            height={24}
            width={24}
          />
        )}
        {open && (
          <div
            className="absolute z-10 top-full left-0 h-fit cursor-pointer w-full sm:w-72 border-2 bg-white border-[#BFBFBF] outline-none focus-within:border-primary
          rounded-lg px-1 py-2 text-base md:text-xl flex flex-col"
          >
            {options.map((option) => (
              <p
                key={option}
                onClick={() => setSelectedOpen(option)}
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
