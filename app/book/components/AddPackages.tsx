"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const AddPackages = () => {
  const [route, setRoute] = useState<"Road" | "Air">("Road");

  return (
    <>
      <div className="w-[50%] py-1 rounded-4xl mt-4 border-2 border-[#F2F2F2] shadow-md flex items-center px-1">
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

      <main className="h-full w-full flex justify-center gap-10">
        <section className="h-[592px] w-[562px] rounded-3xl border-2 border-[#DFDFDF] p-2">
          <h2 className="text-xl font-semibold px-6 py-2">
            Select Package Size
          </h2>
          <p className="h-0.5 w-full bg-[#EDEDED] my-2"></p>
          <div className="h-full w-full px-6 py-4 flex flex-col gap-3">
            <div className="h-[62px] w-full rounded-2xl shadow-lg flex justify-evenly gap-2 pl-4 pr-2">
              <div className="w-full flex items-center">
                <div className="h-10 w-14">
                  <Image
                    src={"/XLBag.png"}
                    alt="XL Bag image"
                    height={40}
                    width={52}
                  />
                </div>
                <div className="w-44 flex items-center">
                  <p className="font-semibold -ml-2">XL Large bag</p>
                  <span className="size-1 bg-black rounded-full ml-2">.</span>
                  <span className="text-[#999999] ml-2">25 kgs</span>
                </div>
                <div className="flex items-center gap-4 ml-4">
                  <span className="size-5 border-[0.5px] border-[#BBBBBB] flex justify-center items-center">
                    <FiMinus size={14} />
                  </span>
                  1
                  <span className="size-5 border-[0.5px] border-[#BBBBBB] flex justify-center items-center">
                    <FiPlus size={14} />
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-end">
                <p className="text-xs font-bold text-[#448C00]">
                  &#8377;381.35
                </p>
                <span className="text-[#434343] text-[10px] font-medium">
                  Qty: 1
                </span>
              </div>
              <p className="size-[12px] mt-2">
                <Image
                  src="/icons/comment-info.svg"
                  alt="comment info icon"
                  height={16}
                  width={16}
                />
              </p>
            </div>
            <div className="h-[62px] w-full rounded-2xl shadow-lg flex justify-evenly gap-2 pl-4 pr-2">
              <div className="w-full flex items-center">
                <div className="h-10 w-14">
                  <Image
                    src={"/SmallBag.png"}
                    alt="Small Bag image"
                    height={40}
                    width={52}
                  />
                </div>
                <div className="w-44 flex items-center">
                  <p className="font-semibold -ml-2">Small bag</p>
                  <span className="size-1 bg-black rounded-full ml-2">.</span>
                  <span className="text-[#999999] ml-2">5 kgs</span>
                </div>
                <div className="flex items-center gap-4 ml-4">
                  <span className="size-5 border-[0.5px] border-[#BBBBBB] flex justify-center items-center">
                    <FiMinus size={14} />
                  </span>
                  4
                  <span className="size-5 border-[0.5px] border-[#BBBBBB] flex justify-center items-center">
                    <FiPlus size={14} />
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-end">
                <p className="text-xs font-bold text-[#448C00]">
                  &#8377;381.35
                </p>
                <span className="text-[#434343] text-[10px] font-medium">
                  Qty: 4
                </span>
              </div>
              <p className="size-[12px] mt-2">
                <Image
                  src="/icons/Comment-info.svg"
                  alt="comment info icon"
                  height={16}
                  width={16}
                />
              </p>
            </div>
            <div className="h-[62px] w-full rounded-2xl shadow-lg flex justify-evenly gap-2 pl-4 pr-2">
              <div className="w-full flex items-center">
                <div className="h-10 w-14">
                  <Image
                    src={"/LargeBag.png"}
                    alt="Small Bag image"
                    height={40}
                    width={52}
                  />
                </div>
                <div className="w-44 flex items-center">
                  <p className="font-semibold -ml-2">Large bag</p>
                  <span className="size-1 bg-black rounded-full ml-2">.</span>
                  <span className="text-[#999999] ml-2">10 kgs</span>
                </div>
                <div className="flex items-center gap-4 ml-4">
                  <span className="size-5 border-[0.5px] border-[#BBBBBB] flex justify-center items-center">
                    <FiMinus size={14} />
                  </span>
                  4
                  <span className="size-5 border-[0.5px] border-[#BBBBBB] flex justify-center items-center">
                    <FiPlus size={14} />
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-end">
                <p className="text-xs font-bold text-[#448C00]">
                  &#8377;381.35
                </p>
                <span className="text-[#434343] text-[10px] font-medium">
                  Qty: 4
                </span>
              </div>
              <p className="size-[12px] mt-2">
                <Image
                  src="/icons/Comment-info.svg"
                  alt="comment info icon"
                  height={16}
                  width={16}
                />
              </p>
            </div>
          </div>
        </section>
        <section className="h-[370px] w-[348px] border-2 border-[#DFDFDF] rounded-3xl px-8 py-6 flex flex-col justify-between">
          <>
            <h2 className="text-xl font-semibold border-b-2 border-[#FFF0AF] pb-2">
              Price Summary
            </h2>

            <div className="py-4 flex flex-col gap-4">
              <p className="text-sm font-normal flex justify-between">
                Freight Charge <span>&#8377;381.35</span>
              </p>
              <p className="text-sm font-normal flex justify-between">
                ODA Charges <span>&#8377;850.00</span>
              </p>
              <p className="text-sm font-normal flex justify-between">
                GST @18% <span>&#8377;221.64</span>
              </p>
              <p className="text-sm font-normal flex justify-between text-[#8B8B8B]">
                Coupon discount <span> -&#8377;100.00</span>
              </p>
            </div>
          </>

          <p className="border-t-2 pt-2 border-[#EAEAEA] text-2xl font-semibold text-end">
            &#8377; 1453.00
          </p>
        </section>
      </main>
    </>
  );
};
export default AddPackages;
