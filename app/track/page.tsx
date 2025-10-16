"use client";

import Image from "next/image";
import { useState } from "react";

const trackStages = [
  {
    name: "Booked",
    isComplete: true,
  },
  {
    name: "Pending Pickup",
    isComplete: false,
  },
  {
    name: "In Transit",
    isComplete: false,
  },
  {
    name: "Delivered",
    isComplete: false,
  },
];

const TrackingDashboardPage = () => {
  const [currentTacking, setCurrentTecking] = useState(0);

  return (
    <main className="min-h-screen w-full lg:w-[80%] pt-18 sm:pt-28 px-4 sm:px-18 mx-auto flex flex-col gap-6 lg:gap-14">
      <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold text-center mt-8 sm:mt-14">
        Tracking Dashboard
      </h1>
      <section className="h-fit sm:h-[168px] w-full border-[1px] border-[#CCCCCC] rounded-3xl p-4 sm:p-10 flex flex-col gap-4 sm:flex-row sm:justify-between shadow-md">
        <div className="flex flex-col gap-2">
          <p className="text-xs sm:text-sm md:text-lg font-medium text-[#505050]">
            Current Status
          </p>
          <span className="w-fit text-sm sm:text-base md:text-lg font-semibold py-1 sm:py-2 px-4 sm:px-6 md:px-10 rounded-xl md:rounded-2xl lg:rounded-3xl bg-[#FFF6BC]">
            Pending Pickup
          </span>
        </div>
        <div className="flex flex-col gap-2 sm:text-right">
          <p className="text-xs sm:text-sm md:text-lg text-[#505050] font-medium flex flex-col">
            Expected Delivery
            <span className="text-lg sm:text-2xl md:text-3xl text-black">
              {" "}
              Mon, Sep 30, 2025
            </span>
          </p>
        </div>
      </section>

      <section className="sm:px-20">
        <div className="h-7 sm:h-14 w-full flex justify-between items-center mt-2 sm:mt-10 mb-10 sm:mb-20 px-6 sm:px-0">
          <div className="relative h-full flex flex-col items-center justify-center">
            {trackStages[0].isComplete ? (
              <div className="size-7 sm:size-10 lg:size-[52px] rounded-full flex justify-center items-center border-[3px] sm:border-[6px]  bg-[#FFBB00] border-[#FFF3A2]">
                <div className="size-2 md:size-4 lg:size-[52px] flex items-center justify-center">
                  <Image
                    src="/icons/Check-icon.png"
                    alt="Down Arrow icon"
                    height={24}
                    width={24}
                  />
                </div>
              </div>
            ) : (
              <div className="size-7 sm:size-10 lg:size-[52px] text-base sm:text-lg lg:text-2xl text-[#DFDFDF] rounded-full border-2 border-[#DFDFDF] flex justify-center items-center">
                1
              </div>
            )}
            <p className="absolute top-full text-[8px] md:text-xs lg:text-sm font-medium text-center">
              {trackStages[0].name}
            </p>
          </div>
          {currentTacking >= 1 ? (
            <p className="h-0.5 w-full bg-[#E1E1E1]"></p>
          ) : (
            <p className="h-0.5 w-full bg-[#DFDFDF]"></p>
          )}
          <div className="relative h-full flex flex-col items-center justify-center">
            {trackStages[1].isComplete ? (
              <div className="size-7 sm:size-10 lg:size-[52px] rounded-full flex justify-center items-center border-[3px] sm:border-[6px]  bg-[#FFBB00] border-[#FFF3A2]">
                <div className="size-2 md:size-4 lg:size-[52px] flex items-center justify-center">
                  <Image
                    src="/icons/Check-icon.png"
                    alt="Down Arrow icon"
                    height={24}
                    width={24}
                  />
                </div>
              </div>
            ) : (
              <div className="size-7 sm:size-10 lg:size-[52px] text-base sm:text-lg lg:text-2xl text-[#DFDFDF] rounded-full border-2 border-[#DFDFDF] flex justify-center items-center">
                2
              </div>
            )}
            <p className="absolute top-full text-[8px] md:text-xs lg:text-base font-medium text-center">
              {trackStages[1].name}
            </p>
          </div>
          {currentTacking >= 2 ? (
            <p className="h-0.5 w-full bg-[#E1E1E1]"></p>
          ) : (
            <p className="h-0.5 w-full bg-[#DFDFDF]"></p>
          )}

          <div className="relative h-full flex flex-col items-center justify-center">
            {trackStages[2].isComplete ? (
              <div className="size-7 sm:size-10 lg:size-[52px] rounded-full flex justify-center items-center border-[3px] sm:border-[6px]  bg-[#FFBB00] border-[#FFF3A2]">
                <div className="size-2 md:size-4 lg:size-[52px] flex items-center justify-center">
                  <Image
                    src="/icons/Check-icon.png"
                    alt="Down Arrow icon"
                    height={24}
                    width={24}
                  />
                </div>
              </div>
            ) : (
              <div className="size-7 sm:size-10 lg:size-[52px] text-base sm:text-lg lg:text-2xl text-[#DFDFDF] rounded-full border-2 border-[#DFDFDF] flex justify-center items-center">
                3
              </div>
            )}
            <p className="absolute top-full text-[8px] md:text-xs lg:text-base font-medium text-center">
              {trackStages[2].name}
            </p>
          </div>
          {currentTacking >= 3 ? (
            <p className="h-0.5 w-full bg-[#E1E1E1]"></p>
          ) : (
            <p className="h-0.5 w-full bg-[#DFDFDF]"></p>
          )}

          <div className="relative h-full flex flex-col items-center justify-center">
            {trackStages[3].isComplete ? (
              <div className="size-7 sm:size-10 lg:size-[52px] rounded-full flex justify-center items-center border-[3px] sm:border-[6px]  bg-[#FFBB00] border-[#FFF3A2]">
                <div className="size-2 md:size-4 lg:size-[52px] flex items-center justify-center">
                  <Image
                    src="/icons/Check-icon.png"
                    alt="Down Arrow icon"
                    height={24}
                    width={24}
                  />
                </div>
              </div>
            ) : (
              <div className="size-7 sm:size-10 lg:size-[52px] text-base sm:text-lg lg:text-2xl text-[#DFDFDF] rounded-full border-2 border-[#DFDFDF] flex justify-center items-center">
                4
              </div>
            )}
            <p className="absolute top-full text-[8px] md:text-xs lg:text-base font-medium text-center">
              {trackStages[3].name}
            </p>
          </div>
        </div>
      </section>

      <div className="text-sm sm:text-base md:text-2xl text-[#A7A7A7]">
        <div className="flex justify-center gap-4 items-center">
          Mumbai(43000023)
          <div className="size-4 sm:size-5 md:size-8">
            {" "}
            <Image
              className="pt-1"
              src={"/icons/Arrow-Right.svg"}
              alt="Right Arrow icon"
              height={24}
              width={32}
            />
          </div>
          Bangalore(53000012)
        </div>
      </div>

      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
        <div className="md:h-[267px] w-full rounded-3xl border-[1px] border-[#CCCCCC] px-4 md:px-8 py-4 md:py-6 shadow-md">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold pb-2 mb:pb-4 border-b-2 border-[#E8E8E8]">
            Package Details
          </h2>
          <div className="py-4 md:py-6 grid grid-cols-2">
            <p className="text-xs sm:text-sm md:text-base flex flex-col">
              Weight{" "}
              <span className="text-sm sm:text-base md:text-xl font-medium">
                10.0 kg
              </span>
            </p>
            <p className="text-xs sm:text-sm md:text-base flex flex-col">
              No. of Packages
              <span className="text-sm sm:text-base md:text-xl font-medium">
                10.0 kg
              </span>
            </p>
          </div>
        </div>
        <div className="md:h-[267px] w-full rounded-3xl border-[1px] border-[#CCCCCC] px-4 md:px-8 py-4 md:py-6 shadow-md">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold pb-2 mb:pb-4 border-b-2 border-[#E8E8E8]">
            Shipment Details
          </h2>
          <div className="py-4 md:py-6 grid grid-cols-2 gap-y-4">
            <p className="text-xs sm:text-sm md:text-base flex flex-col">
              Reference No{" "}
              <span className="text-sm sm:text-base md:text-xl font-medium">
                N/A
              </span>
            </p>
            <p className="text-xs sm:text-sm md:text-base flex flex-col">
              Customer Mobile
              <span className="text-sm sm:text-base md:text-xl font-medium">
                9737562982
              </span>
            </p>
            <p className="text-xs sm:text-sm md:text-base flex flex-col">
              Booking Date
              <span className="text-sm sm:text-base md:text-xl font-medium">
                03-10-2025 03:59 PM
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-[600px] w-full flex flex-col">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-10">
          Tracking History
        </h2>

        <div className="relative h-32 w-full flex gap-6 px-14">
          <div className="h-full flex flex-col items-center justify-center">
            <div className=" size-[52px] rounded-full flex justify-center items-center border-[6px] bg-[#FFBB00] border-[#FFF3A2]">
              <Image
                src="/icons/Check-icon.png"
                alt="Down Arrow icon"
                height={24}
                width={24}
              />
            </div>
            <p className="absolute w-40 rotate-90 -z-10 h-0.5 bg-[#E1E1E1]"></p>
          </div>
          <p className="flex flex-col text-sm sm:text-base md:text-lg lg:text-xl font-medium justify-center">
            Booking Confirmed{" "}
            <span className="text-[10px] sm:text-xs lg:text-sm text-[#8A8A8A]">
              03-10-2025 03:59 PM - MUMBAI
            </span>
          </p>
        </div>
      </section>
    </main>
  );
};
export default TrackingDashboardPage;
