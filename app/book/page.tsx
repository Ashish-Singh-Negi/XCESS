"use client";

import Image from "next/image";
import ScheduleTrip from "./components/ScheduleTrip";
import { useRef, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import TripDetails from "./components/TripDetails";
import AddPackages from "./components/AddPackages";
import BookingDetails from "./components/BookingDetails";

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
    Component: <BookingDetails />,
    isComplete: false,
  },
];

const BookingPage = () => {
  const [currentBookingStage, setCurrentBookingStage] = useState(0);
  const bookingProgressBarRef = useRef<HTMLDivElement>(null);

  const prevBookingStageHandler = () => {
    if (currentBookingStage >= 1) {
      setCurrentBookingStage((prev) => prev - 1);

      bookingStages.map((stage) => {
        if (stage.name === bookingStages[currentBookingStage - 1].name) {
          stage.isComplete = false;
        }
      });
    }
  };

  const nextBookingStageHandler = () => {
    if (currentBookingStage < bookingStages.length - 1) {
      setCurrentBookingStage((prev) => prev + 1);

      bookingStages.map((stage) => {
        if (stage.name === bookingStages[currentBookingStage].name) {
          stage.isComplete = true;
        }
      });

      bookingProgressBarRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <div className="w-full min-h-[600px] sm:min-h-[800px] lg:min-h-[1024px] flex justify-center pt-[72px] md:pt-28">
        <main className="w-full px-4 sm:w-[80%] py-14 flex flex-col items-center gap-6">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-medium">
            Create a Shipment
          </h1>
          <p className="w-24 sm:w-1/6 h-0.5 bg-gradient-to-r from-[#FFFFFF] via-[#FFD008] to-[#FFFFFF]"></p>

          {/* Booking progess bar */}
          <section
            ref={bookingProgressBarRef}
            className="h-7 sm:h-14 w-full flex justify-between items-center mt-2 sm:mt-10 mb-10 sm:mb-20 px-6 sm:px-0"
          >
            <div className="relative h-full flex flex-col items-center justify-center">
              {bookingStages[0].isComplete ? (
                <div className="size-7 sm:size-10 lg:size-[52px] rounded-full flex justify-center items-center border-[3px] sm:border-[6px] bg-[#6BDC00] border-[#99FF3A]">
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
              <p className="absolute top-full text-[8px] md:text-xs lg:text-base font-medium text-center">
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
                <div className="size-7 sm:size-10 lg:size-[52px] rounded-full flex justify-center items-center border-[3px] sm:border-[6px] bg-[#6BDC00] border-[#99FF3A]">
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
                <div className="size-7 sm:size-10 lg:size-[52px] rounded-full flex justify-center items-center border-[3px] sm:border-[6px] bg-[#6BDC00] border-[#99FF3A]">
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
                <div className="size-7 sm:size-10 lg:size-[52px] rounded-full flex justify-center items-center border-[3px] sm:border-[6px] bg-[#6BDC00] border-[#99FF3A]">
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
                {bookingStages[3].name}
              </p>
            </div>
          </section>

          {bookingStages[currentBookingStage].Component}

          <section className="w-full flex sm:justify-end md:mt-8 md:px-10 ">
            <div
              className={`${
                currentBookingStage === 0 && "justify-end"
              } w-full flex justify-between gap-6`}
            >
              {currentBookingStage >= 1 && (
                <button
                  onClick={() => prevBookingStageHandler()}
                  className="h-fit cursor-pointer px-4 md:px-6 py-2 border-2 text-[#5D5D5D] border-[#707070] text-base md:text-xl rounded-2xl font-medium flex items-center gap-2 active:scale-95 transition-transform"
                >
                  <GoArrowLeft size={24} /> Back
                </button>
              )}
              {currentBookingStage < 3 && (
                <button
                  onClick={() => nextBookingStageHandler()}
                  className="h-fit cursor-pointer border-2 border-primary flex items-center gap-2 px-4 md:px-6 py-2 bg-primary text-base md:text-xl rounded-2xl font-medium active:scale-95 transition-transform"
                >
                  Next <GoArrowRight size={24} />
                </button>
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default BookingPage;
