"use client";

import Image from "next/image";
import InputBox from "./components/InputBox";
import ToggleBtn from "./components/ToggleBtn";
import TextareaBox from "./components/TextareaBox";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const BookingPage = () => {
  return (
    <div className="w-full min-h-[600px] sm:min-h-[800px] lg:min-h-[1024px] flex justify-center pt-[72px] md:pt-28">
      <main className="w-full px-4 sm:w-[80%] py-14 flex flex-col gap-6 items-center">
        <h1 className="text-4xl font-medium">Create a Shipment</h1>
        <p className="w-1/6 h-0.5 bg-gradient-to-r from-[#FFFFFF] via-[#FFD008] to-[#FFFFFF] mt-4"></p>

        {/* Booking progess bar */}
        <div className="h-14 w-full flex justify-between items-center mt-10 mb-20">
          <div className="relative h-full flex flex-col items-center justify-center">
            <div className="size-[52px] bg-[#6BDC00] rounded-full border-[6px] border-[#99FF3A] flex justify-center items-center">
              <Image
                src="/icons/Check-icon.png"
                alt="Down Arrow icon"
                height={24}
                width={24}
              />
              <p className="absolute top-[60px] text-base font-medium text-center">
                Schedule Trip
              </p>
            </div>
          </div>
          <p className="h-0.5 w-full bg-[#6BDC00]"></p>
          <div className="relative h-full flex flex-col items-center justify-center">
            <div className="size-[52px] text-3xl text-[#DFDFDF] rounded-full border-2 border-[#DFDFDF] flex justify-center items-center">
              2
            </div>
            <p className="absolute top-[60px] text-base font-medium text-center">
              Trip Details
            </p>
          </div>
          <p className="h-0.5 w-full bg-[#DFDFDF]"></p>

          <div className="relative h-full flex flex-col items-center justify-center">
            <div className="size-[52px] text-3xl text-[#DFDFDF] rounded-full border-2 border-[#DFDFDF] flex justify-center items-center">
              3
            </div>
            <p className="absolute top-[60px] text-base font-medium text-center">
              Add Packages
            </p>
          </div>
          <p className="h-0.5 w-full bg-[#DFDFDF]"></p>

          <div className="relative h-full flex flex-col items-center justify-center">
            <div className="size-[52px] text-3xl text-[#DFDFDF] rounded-full border-2 border-[#DFDFDF] flex justify-center items-center">
              4
            </div>
            <p className="absolute top-[60px] text-base font-medium text-center">
              Payment
            </p>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
            Trip Details
          </h2>
          <p className="text-xs mb-4">
            Please provide your details to book your trip.
          </p>
          <div className="w-full h-0.5 bg-[#CACACA]"></div>
        </div>

        {/* Customer Info */}
        <section className="w-full border border-[#C3C3C3] rounded-3xl bg-white shadow-md px-6 sm:px-10 py-8">
          <p className="text-xl sm:text-2xl font-semibold mb-4">
            Customer Information
          </p>
          <InputBox
            label="Full Name"
            isRequired={true}
            placeholder="ex. Apple G"
          />
          <ToggleBtn text="Book for myself!" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputBox
              label="Mobile Number"
              isRequired={true}
              placeholder="ex. +91 6542346834"
            />
            <InputBox
              label="Email Address"
              isRequired={false}
              placeholder="Enter email address"
            />
          </div>
        </section>

        {/* Trip Info */}
        <section className="w-full border border-[#C3C3C3] rounded-3xl bg-white shadow-md px-6 sm:px-10 py-8">
          <p className="text-xl sm:text-2xl font-semibold mb-4">
            Trip Information
          </p>
          <div className="w-full sm:w-1/2">
            <InputBox
              label="Trip Start Date"
              isRequired={true}
              placeholder="mm/dd/yyyy"
              type="date"
            />
          </div>
        </section>

        {/* Pickup Location */}
        <section className="w-full border border-[#C3C3C3] rounded-3xl bg-white shadow-md px-6 sm:px-10 py-8">
          <p className="text-xl sm:text-2xl font-semibold mb-4">
            Pickup Location
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputBox
              label="from Pincode"
              isRequired={true}
              placeholder="PIN"
              type="number"
            />
            <InputBox
              label="City"
              isRequired={true}
              placeholder="Enter your city"
            />
          </div>
          <TextareaBox
            label="Full Address"
            placeholder="Enter street, landmark, and building name... "
            isRequired={true}
          />
        </section>

        <section className="w-full flex justify-between mt-8 px-10">
          <div></div>

          <div className="flex gap-6 ">
            <button className="h-fit px-6 py-2 border-2 text-[#5D5D5D] border-[#707070] text-xl rounded-2xl font-medium flex items-center gap-2">
              <GoArrowLeft size={24} /> Back
            </button>
            <button className="h-fit border-2 border-primary flex items-center gap-2 px-6 py-2 bg-primary text-xl rounded-2xl font-medium">
              Next <GoArrowRight size={24} />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
export default BookingPage;
