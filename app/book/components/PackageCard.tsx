"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const PackageCard = ({
  imageSrc,
  type,
  price,
  weight,
}: {
  imageSrc: string;
  type: string;
  weight: number;
  price: number;
}) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div
      key={type}
      className="h-[62px] w-full rounded-2xl shadow-sm md:shadow-lg flex justify-evenly gap-4 px-2 pr-2"
    >
      <div className="w-full flex items-center gap-2">
        <div className="h-6 w-6 sm:h-10 sm:w-14">
          {" "}
          <Image src={imageSrc} alt={type} height={40} width={40} />
        </div>
        <div className="w-[136px] sm:w-44 flex items-center">
          <p className="text-xs sm:text-sm font-semibold">{type}</p>
          <span className="size-1 bg-black rounded-full ml-2">.</span>
          <span className="text-[#999999] text-xs sm:text-sm ml-2">
            {weight} kgs
          </span>
        </div>
        <div className="flex text-sm items-center justify-between gap-1 sm:gap-4 sm:ml-4">
          <button
            onClick={() => quantity > 0 && setQuantity((prev) => prev - 1)}
            className="size-5 border-[0.5px] border-[#BBBBBB] flex justify-center items-center cursor-pointer"
          >
            <FiMinus size={14} />
          </button>
          {quantity}
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="size-5 border-[0.5px] border-[#BBBBBB] flex justify-center items-center cursor-pointer"
          >
            <FiPlus size={14} />
          </button>
        </div>
      </div>
      <div className="min-w-8 flex flex-col justify-center items-end">
        <p className="text-xs font-bold text-[#448C00]">
          &#8377;{parseFloat((quantity * price).toFixed(2))}
        </p>
        <span className="text-[#434343] text-[10px] font-medium">
          Qty: {quantity}
        </span>
      </div>
      <p className="hidden sm:block sm:size-[12px] mt-2">
        <Image
          src="/icons/Comment-info.svg"
          alt="comment info icon"
          height={16}
          width={16}
        />
      </p>
    </div>
  );
};
export default PackageCard;
