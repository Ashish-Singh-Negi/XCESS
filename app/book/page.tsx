"use client";

import Image from "next/image";
import ScheduleTrip from "./components/ScheduleTrip";
import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import TripDetails from "./components/TripDetails";
import AddPackages from "./components/AddPackages";

const bookingStages = [
  {
    name: "Schedule Trip",
    Component: <ScheduleTrip />,
    isComplete: false,
  },
  {
    name: "Trip Details",
    Component: <TripDetails />,
    isComplete: false,
  },
  {
    name: "Add Packages",
    Component: <AddPackages />,
    isComplete: false,
  },
  {
    name: "Payment",
    Component: <>Payment</>,
    isComplete: false,
  },
];

const BookingPage = () => {
  const [currentBookingStage, setCurrentBookingStage] = useState(0);

  return (
    <>
      <div className="w-full min-h-[600px] sm:min-h-[800px] lg:min-h-[1024px] flex justify-center pt-[72px] md:pt-28">
        <main className="w-full px-4 sm:w-[80%] py-14 flex flex-col gap-6 items-center">
          <h1 className="text-4xl font-medium">Create a Shipment</h1>
          <p className="w-1/6 h-0.5 bg-gradient-to-r from-[#FFFFFF] via-[#FFD008] to-[#FFFFFF] mt-4"></p>

          {/* Booking progess bar */}
          <div className="h-14 w-full flex justify-between items-center mt-10 mb-20">
            <div className="relative h-full flex flex-col items-center justify-center">
              {bookingStages[0].isComplete ? (
                <div className="size-[52px] rounded-full flex justify-center items-center border-[6px] bg-[#6BDC00] border-[#99FF3A]">
                  <Image
                    src="/icons/Check-icon.png"
                    alt="Down Arrow icon"
                    height={24}
                    width={24}
                  />
                </div>
              ) : (
                <div className="size-[52px] text-3xl text-[#DFDFDF] rounded-full border-2 border-[#DFDFDF] flex justify-center items-center">
                  1
                </div>
              )}
              <p className="absolute top-[60px] text-base font-medium text-center">
                {bookingStages[0].name}
              </p>
            </div>
            {currentBookingStage >= 1 ? (
              <p className="h-0.5 w-full bg-[#6BDC00]"></p>
            ) : (
              <p className="h-0.5 w-full bg-[#DFDFDF]"></p>
            )}
            <div className="relative h-full flex flex-col items-center justify-center">
              {bookingStages[1].isComplete ? (
                <div className="size-[52px] rounded-full flex justify-center items-center border-[6px] bg-[#6BDC00] border-[#99FF3A]">
                  <Image
                    src="/icons/Check-icon.png"
                    alt="Down Arrow icon"
                    height={24}
                    width={24}
                  />
                </div>
              ) : (
                <div className="size-[52px] text-3xl text-[#DFDFDF] rounded-full border-2 border-[#DFDFDF] flex justify-center items-center">
                  2
                </div>
              )}
              <p className="absolute top-[60px] text-base font-medium text-center">
                {bookingStages[1].name}
              </p>
            </div>
            {currentBookingStage >= 2 ? (
              <p className="h-0.5 w-full bg-[#6BDC00]"></p>
            ) : (
              <p className="h-0.5 w-full bg-[#DFDFDF]"></p>
            )}

            <div className="relative h-full flex flex-col items-center justify-center">
              {bookingStages[2].isComplete ? (
                <div className="size-[52px] rounded-full flex justify-center items-center border-[6px] bg-[#6BDC00] border-[#99FF3A]">
                  <Image
                    src="/icons/Check-icon.png"
                    alt="Down Arrow icon"
                    height={24}
                    width={24}
                  />
                </div>
              ) : (
                <div className="size-[52px] text-3xl text-[#DFDFDF] rounded-full border-2 border-[#DFDFDF] flex justify-center items-center">
                  3
                </div>
              )}
              <p className="absolute top-[60px] text-base font-medium text-center">
                {bookingStages[2].name}
              </p>
            </div>
            {currentBookingStage >= 3 ? (
              <p className="h-0.5 w-full bg-[#6BDC00]"></p>
            ) : (
              <p className="h-0.5 w-full bg-[#DFDFDF]"></p>
            )}

            <div className="relative h-full flex flex-col items-center justify-center">
              {bookingStages[3].isComplete ? (
                <div className="size-[52px] rounded-full flex justify-center items-center border-[6px] bg-[#6BDC00] border-[#99FF3A]">
                  <Image
                    src="/icons/Check-icon.png"
                    alt="Down Arrow icon"
                    height={24}
                    width={24}
                  />
                </div>
              ) : (
                <div className="size-[52px] text-3xl text-[#DFDFDF] rounded-full border-2 border-[#DFDFDF] flex justify-center items-center">
                  4
                </div>
              )}
              <p className="absolute top-[60px] text-base font-medium text-center">
                {bookingStages[3].name}
              </p>
            </div>
          </div>

          {bookingStages[currentBookingStage].Component}

          <section className="w-full flex justify-between mt-8 px-10">
            <div></div>

            <div className="flex gap-6 ">
              <button
                onClick={() => {
                  if (currentBookingStage >= 1) {
                    setCurrentBookingStage((prev) => prev - 1);

                    bookingStages.map((stage) => {
                      if (
                        stage.name ===
                        bookingStages[currentBookingStage - 1].name
                      ) {
                        stage.isComplete = false;
                      }
                    });
                  }
                }}
                className="h-fit px-6 py-2 border-2 text-[#5D5D5D] border-[#707070] text-xl rounded-2xl font-medium flex items-center gap-2"
              >
                <GoArrowLeft size={24} /> Back
              </button>
              <button
                onClick={() => {
                  if (currentBookingStage < bookingStages.length - 1) {
                    setCurrentBookingStage((prev) => prev + 1);

                    bookingStages.map((stage) => {
                      if (
                        stage.name === bookingStages[currentBookingStage].name
                      ) {
                        stage.isComplete = true;
                      }
                    });
                  }
                }}
                className="h-fit border-2 border-primary flex items-center gap-2 px-6 py-2 bg-primary text-xl rounded-2xl font-medium"
              >
                Next <GoArrowRight size={24} />
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default BookingPage;
