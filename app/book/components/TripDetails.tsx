"use client";

import InputBox from "./InputBox";
import TextareaBox from "./TextareaBox";
import ToggleBtn from "./ToggleBtn";

const TripDetails = () => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          />
        </div>
      </section>

      {/* Trip Info */}
      <section className="w-full border border-[#C3C3C3] rounded-3xl bg-white shadow-md px-6 sm:px-10 py-8">
        <p className="text-xl sm:text-2xl font-semibold mb-4">
          Trip Information
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputBox
            label="Luggage Pickup Date & Time"
            isRequired={true}
            placeholder="mm/dd/yyyy"
            type="date"
          />
          <InputBox
            label="Expected Delivery Date"
            isRequired={true}
            placeholder="mm/dd/yyyy"
            type="date"
          />
        </div>
      </section>

      {/* Drop off Location */}
      <section className="w-full border border-[#C3C3C3] rounded-3xl bg-white shadow-md px-6 sm:px-10 py-8">
        <p className="text-xl sm:text-2xl font-semibold mb-4">
          Drop-off Location
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputBox
            label="Drop Pincode"
            isRequired={true}
            placeholder="PIN"
            type="number"
          />
          <InputBox
            label="Drop City"
            isRequired={true}
            placeholder="Enter your city"
          />
        </div>
        <TextareaBox
          label="Drop Address"
          isRequired={true}
          placeholder="Enter street, landmark, and building name..."
        />
        <p className="h-0.5 w-full bg-[#EEEEEE] my-12"></p>
        <p className="text-xl sm:text-2xl font-semibold mb-10">
          Additional Information
        </p>
        <TextareaBox
          label="Additional Remarks"
          isRequired={false}
          placeholder="e.g., special instructions for pickup or delivery..."
        />
      </section>
    </>
  );
};
export default TripDetails;
