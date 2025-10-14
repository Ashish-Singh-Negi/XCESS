"use client";

import InputBox from "./InputBox";
import TextareaBox from "./TextareaBox";
import ToggleBtn from "./ToggleBtn";

const ScheduleTrip = () => {
  return (
    <>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 md:gap-4">
          <InputBox
            label="Mobile Number"
            type="number"
            isRequired={true}
            placeholder="ex. +91 6542346834"
          />
          <InputBox
            label="Email Address"
            isRequired={false}
            placeholder="Enter email address"
            type="email"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 md:gap-4">
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
    </>
  );
};
export default ScheduleTrip;
