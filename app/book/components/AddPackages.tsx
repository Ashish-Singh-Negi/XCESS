"use client";

import Image from "next/image";
import { useState } from "react";
import PriceSummary from "./PriceSummary";
import SelectPackage from "./SelectPackage";

const AddPackages = () => {
  const [route, setRoute] = useState<"Road" | "Air">("Road");

  return (
    <>
      {/* Route Selection */}
      <div className="w-full max-w-md py-1 rounded-3xl mt-4 border-2 border-[#F2F2F2] shadow-md flex px-1">
        {["Road", "Air"].map((mode) => (
          <button
            key={mode}
            onClick={() => setRoute(mode as "Road" | "Air")}
            className={`text-[#2B2A29] ${
              route === mode && "bg-primary text-black"
            } flex items-center justify-center gap-2 h-10 w-1/2 cursor-pointer rounded-3xl text-xs md:text-lg font-medium transition-all`}
          >
            <span className="w-6 h-6">
              <Image
                src={`/icons/${
                  mode === "Road" ? "Truck" : "Aeroplane"
                }-icon.png`}
                alt={`${mode} icon`}
                height={24}
                width={24}
              />
            </span>
            By {mode}
          </button>
        ))}
      </div>

      {/* Main Layout */}
      <main className="w-full flex flex-col lg:flex-row justify-center gap-6 lg:gap-10 mt-6 sm:px-4">
        {/* Package Selection */}
        <SelectPackage />

        {/* Price Summary */}
        <PriceSummary />
      </main>
    </>
  );
};

export default AddPackages;
