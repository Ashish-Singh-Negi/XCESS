"use client";

import Image from "next/image";
import Link from "next/link";
import CouponCard from "./CouponCard";
import { useState } from "react";
import Payment from "./Payment";

const BookingDetails = () => {
  // const [isTermsAndConditionsAgreed, setIsTermsAndConditionsAgreed] =
  //   useState(false);
  // const [isPrivacyPolicyAgreed, setIsPrivacyPolicyAgreed] = useState(false);
  // const [isSecuredPackage, setIsSecuredPackage] = useState(false);

  const [payment, setPayment] = useState(false);

  return (
    <>
      {payment ? (
        <Payment />
      ) : (
        <>
          <section className="lg:h-[530px] w-full lg:w-[952px] border-2 border-[#E4E4E4] rounded-3xl shadow-md px-6 lg:px-10 py-6 sm:py-8">
            <h2 className="text-xl lg:text-3xl font-bold">Booking Details</h2>
            <h3 className="text-base lg:text-2xl font-semibold mt-6">
              Nainesh Ramani
            </h3>
            <p className="text-[#505050] text-xs lg:text-base">
              123, mainroad, Bangalore, Karnataka - 560001 <br /> 380024
              (Ahmedabad) → 560001 (Bangalore) <br /> naineshcygnux@gmail.com{" "}
              <br /> 9780295193
            </p>
            <p className="my-4 border-dashed border-b-[1px] lg:border-b-2 border-[#818181]"></p>

            <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-5">
              <p className="text-[10px] lg:text-lg text-[#505050] flex flex-col">
                Pickup Date
                <span className="text-xs lg:text-xl text-[#282828] font-semibold -mt-0.5">
                  27-09-2025 at 04:55 PM
                </span>
              </p>
              <p className="text-[10px] lg:text-lg text-[#505050] flex flex-col">
                Drop Date
                <span className="text-xs lg:text-xl text-[#282828] font-semibold -mt-0.5">
                  24-10-2025 at 12:00 AM
                </span>
              </p>
              <p className="text-[10px] lg:text-lg text-[#505050] flex flex-col">
                No. of Pkgs
                <span className="text-xs lg:text-xl text-[#282828] font-semibold -mt-0.5">
                  3
                </span>
              </p>
              <p className="text-[10px] lg:text-lg text-[#505050] flex flex-col">
                Total Weight
                <span className="text-xs lg:text-xl text-[#282828] font-semibold -mt-0.5">
                  50 KGs
                </span>
              </p>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-12">
              <p className="lg:w-[258px] text-[10px] lg:text-lg text-[#505050] flex flex-col">
                Remarks*
                <span className="text-xs lg:text-lg text-[#282828] font-semibold -mt-0.5">
                  keep it safe parcel contains glass work...
                </span>
              </p>
              <div className="flex items-center gap-2 my-6">
                <div className="size-5 lg:size-[27px] block rounded-md border-[1px] border-[#868686]"></div>{" "}
                <p className="text-xs lg:text-lg text-[#505050]">
                  Add Secure Packaging (₹50 per package)
                </p>
              </div>
            </div>
          </section>

          <div className="w-full my-1 lg:my-4 flex items-center justify-center">
            <button className="flex gap-2 text-sm lg:text-2xl font-medium text-[#448C00]">
              <span className="size-5 lg:size-[34px]">
                {" "}
                <Image
                  src={"/icons/Add-icon.svg"}
                  alt="Add icon svg"
                  height={34}
                  width={34}
                />
              </span>
              Add New Drop Point
            </button>
          </div>

          <div className="w-full xl:w-[952px] md:mt-4">
            <p className="text-xs md:text-xl text-[#003983]">
              Terms and Conditons
            </p>
            <div className="flex items-center gap-2 mt-2 md:mt-4">
              <div className="size-5 md:size-[27px] block rounded-md border-[1px] border-[#868686]"></div>{" "}
              <p className="text-[10px] md:text-lg">
                I agree to the{" "}
                <Link
                  href={"terms-and-conditions"}
                  className="text-[#003983] underline"
                >
                  Terms and Conditions
                </Link>
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2 md:mt-4">
              <div className="size-5 md:size-[27px] block rounded-md border-[1px] border-[#868686]"></div>{" "}
              <p className="text-[10px] md:text-lg">
                I agree to the{" "}
                <Link href={"policy"} className="text-[#003983] underline">
                  Privacy policy
                </Link>
              </p>
            </div>
          </div>

          <section className="xl:h-28 w-full xl:w-[952px] flex flex-col xl:flex-row sm:justify-between">
            <CouponCard />
            <div className="md:h-28 border-[1px] border-[#C3C3C3] py-4 rounded-2xl shadow-md mt-8 xl:my-0">
              <div className="h-full flex items-center lg:px-10 lg:gap-10">
                <p className="w-full text-xs sm:text-base flex flex-col text-center">
                  Freight Charge
                  <span className="text-sm md:text-2xl font-semibold">
                    ₹10738.00
                  </span>
                </p>
                <p className="h-full w-0.5 bg-[#A6A6A6]"></p>
                <p className="w-full text-xs sm:text-base flex flex-col text-center">
                  GST @18%
                  <span className="text-sm md:text-2xl font-semibold">
                    ₹1932.84
                  </span>
                </p>
                <p className="h-full w-0.5 bg-[#A6A6A6]"></p>
                <p className="w-full text-xs sm:text-base flex flex-col text-center">
                  Total Amount
                  <span className="text-sm md:text-2xl font-semibold text-[#56AB06]">
                    ₹12670.84
                  </span>
                </p>
              </div>
            </div>
          </section>

          <section className="w-full xl:w-[952px] border-[1px] border-[#CACACA] rounded-2xl px-4 md:px-10 py-2 md:py-6 flex justify-between items-center">
            <p className="flex flex-col text-[10px] md:text-lg leading-tight">
              Total Payable
              <span className="text-base md:text-3xl text-[#56AB06] font-semibold">
                ₹12670.84
              </span>
            </p>
            <div className="bg-gradient-to-r from-primary via-primary via-70% to-white flex items-center rounded-xl md:rounded-2xl px-0.5 py-0.5 text-2xl font-medium">
              <button
                onClick={() => setPayment(true)}
                className="bg-primary cursor-pointer rounded-xl md:rounded-2xl px-6 py-2 text-xs md:text-2xl font-medium active:scale-95 transition-transform"
              >
                Pay and Confirm
              </button>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default BookingDetails;
