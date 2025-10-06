"use client";

import Image from "next/image";
import { useState } from "react";

const AddPackages = () => {
  const [route, setRoute] = useState<"Road" | "Air">("Road");

  return (
    <>
      <div className="h-[54px] w-[60%] rounded-4xl mt-4 border-2 border-[#F2F2F2] shadow-md flex items-center px-1">
        <button
          onClick={() => setRoute("Road")}
          className={`text-[#2B2A29] ${
            route === "Road" && "bg-primary text-black"
          } flex items-center justify-center gap-2 h-[42px] w-[50%] cursor-pointer rounded-3xl text-lg font-medium transition-all`}
        >
          <span className="size-[24px]">
            <Image
              src={"/icons/Truck-icon.png"}
              alt="Truck icon"
              height={24}
              width={24}
            />
          </span>{" "}
          By Road
        </button>
        <button
          onClick={() => setRoute("Air")}
          className={`text-[#2B2A29] ${
            route === "Air" && "bg-primary text-black"
          } flex items-center justify-center gap-2 h-[42px] w-[50%] cursor-pointer rounded-3xl text-lg font-medium transition-all`}
        >
          <span className="size-[24px]">
            <Image
              src={"/icons/Aeroplane-icon.png"}
              alt="Aeroplane icon"
              height={24}
              width={24}
            />
          </span>{" "}
          By Air
        </button>
      </div>
    </>
  );
};
export default AddPackages;
