"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import { TiStarFullOutline } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";

import CustomSelect from "@/components/CustomSelect";
import Link from "next/link";
import SelectPackage from "./book/components/SelectPackage";
import { useEffect, useRef, useState } from "react";
import HeroSection from "./components/HeroSection";

const serviceCarouselSlides = [
  "Service-Card1",
  "Service-Card2",
  "Service-Card3",
  "Service-Card4",
];

export default function Home() {
  const [selectPackage, setSelectPackage] = useState(false);

  const [delay, setDelay] = useState(100);

  const serviceCarouselRef = useRef<HTMLDivElement>(null);
  const serviceCarouselIndexRef = useRef(0);
  const [serviceCarouselIndex, setServiceCarouselIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      serviceCarouselIndexRef.current =
        (serviceCarouselIndexRef.current + 1) % serviceCarouselSlides.length;

      setServiceCarouselIndex(serviceCarouselIndexRef.current);
      delay === 100 && setDelay(3000);

      const container = serviceCarouselRef.current;
      if (container) {
        const child = container.children[
          serviceCarouselIndexRef.current
        ] as HTMLElement;
        if (child) {
          container.scrollTo({
            left:
              child.offsetLeft -
              container.clientWidth / 2 +
              child.clientWidth / 2,
            behavior: "smooth",
          });
        }
      }
    }, delay);

    return () => clearInterval(id);
  }, [delay]);

  return (
    <main className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <HeroSection />

      {/* Price Calculator */}
      <div className="z-10 w-[90%] sm:w-[80%] lg:max-w-6xl mx-auto rounded-4xl bg-white py-8 px-10 md:px-16 lg:px-20 -mt-10 sm:-mt-20 flex flex-col gap-8 shadow-xl">
        <h2 className="text-xl sm:text-3xl font-semibold text-left sm:text-left">
          Price Calculator
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full">
          {[
            {
              name: "Select Origin",
              options: ["Option 1", "Option 2"],
            },
            {
              name: "Select Destination",
              options: ["Dest 1", "Dest 2", "Dest 3"],
            },
          ].map((selection) => (
            <CustomSelect
              key={selection.name}
              title={selection.name}
              options={selection.options}
            />
          ))}
          <div
            onClick={() => setSelectPackage(!selectPackage)}
            className="relative h-[60px] sm:h-[72px] cursor-pointer w-full border-2 border-[#BFBFBF] outline-none focus-within:border-primary  rounded-xl px-6 py-[22px] text-base sm:text-xl flex items-center justify-between"
          >
            Choose Luggage
            <Image
              className="size-4 sm:size-6"
              src="/icons/Angle-down.png"
              alt="Down Arrow icon"
              height={24}
              width={24}
            />
            {selectPackage && (
              <div className="hidden md:block absolute w-full sm:w-fit z-10 top-full left-0 cursor-default">
                <SelectPackage />
              </div>
            )}
          </div>
        </div>
        <button className="font-semibold text-lg bg-primary px-10 sm:px-20 lg:px-40 py-2 mx-auto rounded-3xl hover:scale-x-105 active:scale-100 transition-all">
          Calculate
        </button>
      </div>

      {/* Service Categories */}
      <section className="sm:w-[80%] pt-20 md:pt-40 px-0 sm:px-12 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold">
          Our Service Categories
        </h2>
        <p className="text-base sm:text-xl text-[#515151] mt-2">
          Our Service Categories
        </p>

        <div className="relative sm:hidden h-full w-full">
          <div
            ref={serviceCarouselRef}
            className=" flex gap-10 px-18 w-full mt-10 overflow-x-hidden"
          >
            {serviceCarouselSlides.map((card, i) => (
              <div key={i} className="shrink-0 flex justify-center">
                <Image
                  src={`/${card}.png`}
                  alt={`Service card ${i + 1}`}
                  height={364}
                  width={268}
                />{" "}
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-white to-white/90 blur-lg"></div>
          <div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-l from-white to-white/90 blur-lg"></div>
          <div className="h-2 w-full mt-6 flex justify-center items-center gap-2">
            {serviceCarouselSlides.map((_, i) => (
              <button
                key={"Service Card nav btn" + i}
                className={`${
                  i === serviceCarouselIndex
                    ? "size-2.5 bg-primary"
                    : "size-2 bg-[#FFF1CB]"
                } rounded-full transition-transform`}
              ></button>
            ))}
          </div>
        </div>
        <div className="hidden sm:grid mt-10 sm:w-[90%] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Service-Card1",
            "Service-Card2",
            "Service-Card3",
            "Service-Card4",
          ].map((card, i) => (
            <div key={i} className="flex justify-center">
              <Image
                src={`/${card}.png`}
                alt={`Service card ${i + 1}`}
                height={364}
                width={268}
              />{" "}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <p className="hidden sm:block h-0.5 w-3/4 sm:w-96 bg-primary mt-20 mx-auto rounded-b-full"></p>
      <section className="sm:w-[80%] py-18 md:py-28 sm:text-left px-8">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Why <span className="text-primary">should</span> <br />
          <span className="text-primary">you</span> choose US?
        </h1>
        <p className="text-base sm:text-lg text-[#4E4E4E] font-semibold mt-4">
          Because Travel Should Be About Memories, Not Heavy Bags
        </p>
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10 lg:gap-6">
          {[
            {
              img: "Feature1",
              text: "Fast & Reliable Delivery",
            },
            {
              img: "Feature2",
              text: "Door-to-Door Service",
            },
            {
              img: "Feature3",
              text: "Affordable Pricing",
            },
            {
              img: "Feature4",
              text: "24/7  Customer Support",
            },
          ].map((feature, i) => (
            <div key={feature.text} className="flex justify-center">
              <div className="flex flex-col gap-6 items-center">
                <Image
                  className="size-20 sm:size-36"
                  src={`/${feature.img}.png`}
                  alt={`feature${i + 1} `}
                  height={100}
                  width={100}
                />
                <p className="sm:w-52 text-base md:text-3xl font-semibold text-center leading-tight">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <p className="bg-gradient-to-r from-white via-primary to-white sm:bg-primary h-0.5 w-3/4 sm:w-96 -mt-4 mx-auto rounded-b-full"></p>

      <section className="relative w-full py-4 sm:py-20 flex flex-col items-center overflow-hidden">
        <p className="text-sm sm:text-[24px] font-medium text-primary">
          Just follow some
        </p>
        <span className="text-[40px] sm:text-6xl md:text-7xl lg:text-8xl font-medium text-center">
          Simple Steps
        </span>

        <div className="absolute -z-10 sm:-top-40 -right-[460px] size-[600px] md:size-[800px] bg-[#FFF56926] rounded-full"></div>
        <div className="absolute -z-10 bottom-0 sm:-bottom-[620px] -left-[750px] sm:-left-[560px] size-[912px] md:size-[1060px] bg-[#FEFFEF] rounded-full"></div>

        <main className="w-[80%] flex flex-col lg:flex-row lg:justify-center items-center my-4 sm:mt-24 sm:mb-20">
          {[
            {
              img: "Book-Online",
              text: "Book Online",
            },
            {
              img: "Bag",
              text: "We Collect Your Bag",
            },
            {
              img: "Security",
              text: "Secure Delivery to Destination",
            },
            {
              img: "Van",
              text: "Track Your Shipment",
            },
          ].map((step, i) => (
            <div
              className="flex flex-col lg:flex-row items-center"
              key={step.text + i}
            >
              <div className="flex flex-col items-center gap-2 justify-center lg:justify-between h-80 w-64">
                <div className="size-[52px] bg-primary rounded-full text-3xl flex justify-center items-center">
                  {i + 1}
                </div>
                <Image
                  src={`/${step.img}.png`}
                  alt="Book Online Icon"
                  height={122}
                  width={122}
                />
                <p className="lg:h-20 lg:w-48 text-xl sm:text-2xl font-medium text-center">
                  {step.text}
                </p>
              </div>
              {i < 3 && (
                <IoIosArrowForward className="size-10 text-primary rotate-90 lg:rotate-0" />
              )}
            </div>
          ))}
        </main>
      </section>

      <section className="w-full mb-6 py-0 sm:py-20 flex flex-col items-center bg-[url('/Bg-About-us.png')] bg-no-repeat bg-center lg:bg-cover">
        <h2 className="text-[40px] sm:text-4xl md:text-5xl font-semibold text-center px-4">
          About US
        </h2>

        <p className="hidden md:block md:w-[80%] text-base sm:text-lg md:text-xl lg:text-2xl mt-10 text-center font-medium max-w-[90%] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1280px] px-4">
          Xcess Luggage makes travel simpler, lighter, and stress-free. We
          specialize in door-to-door baggage delivery, helping you skip queues
          and heavy lifting. Our service covers major Indian cities, ensuring
          your bags arrive safely and on time. With secure handling, and
          real-time tracking, we’re redefining convenience for travelers.
          Whether it’s weddings, business trips, family vacations, or student
          relocations, Xcess Luggage ensures your journey stays hassle-free from
          start to finish.
        </p>

        <p className="block w-80 md:hidden text-base sm:text-lg md:text-xl lg:text-2xl mt-4 text-center font-medium max-w-[90%] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1280px] px-4">
          Xcess Luggage makes travel simpler, lighter, and stress-free. We
          specialize in door-to-door baggage delivery, helping you skip queues
          and heavy lifting. Our service covers major Indian cities, ensuring
          your bags arrive safely and on time.
          <Link
            href={"/about"}
            className="w-fit block mx-auto mt-4 text-base font-semibold active:scale-95 transition-transform bg-[#FFF3A2] px-8 py-2 rounded-3xl"
          >
            Learn more...
          </Link>
        </p>

        <section className="w-full my-10 sm:my-20 py-10 flex flex-col items-center">
          <h2 className="w-full sm:w-[80%] text-4xl mb-14 px-6 sm:px-8 leading-0">
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              What <span className="text-primary">People Say ?</span>
            </p>
            <span className="text-base sm:text-lg md:text-xl text-gray-600">
              who trusted us with their luggage
            </span>
          </h2>

          <Marquee className="h-36 w-full flex gap-4 overflow-y-visible">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
              <div
                key={num}
                className="relative shrink-0 overflow-y-visible h-auto w-64 sm:w-72 px-2 flex flex-col justify-around rounded-lg"
              >
                <BiSolidQuoteAltLeft
                  size={16}
                  className="absolute -top-1 -left-1 text-primary"
                />
                <p className="py-1 text-[#697981] text-sm sm:text-base">
                  I&apos;ve been a member for 2 years and can&apos;t be more
                  satisfied. I&apos;ve learned so much!
                </p>
                <div className="h-11 flex items-center">
                  <div className="size-11 rounded-full bg-red-200 bg-[url('/Pic3.jpg')] bg-no-repeat bg-cover"></div>
                  <div className="ml-2">
                    <p className="font-medium text-sm sm:text-base">Apple G</p>
                    <div className="h-5 -mt-0.5 flex">
                      {[...Array(5)].map((_, i) => (
                        <TiStarFullOutline
                          key={i}
                          className="text-primary"
                          size={20}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </section>
      </section>
      <p className="h-0.5 w-3/4 sm:w-96 bg-gradient-to-r from-white via-primary to-white mb-10 -mt-10 mx-auto rounded-b-full"></p>

      <section className="w-[80%] mx-auto flex flex-col items-center gap-4 sm:gap-10 pb-10 sm:py-20 px-4">
        <p className="text-lg sm:text-2xl md:text-3xl font-medium text-center">
          Ready to Travel Light <br /> without worrying about that extra
          luggage?
        </p>
        <Link
          href={"/book"}
          className="border-2 border-[#FFF235] text-sm sm:text-2xl md:text-3xl font-semibold py-1 sm:py-3 md:py-4 px-10 sm:px-20 md:px-20 lg:px-40 rounded-3xl bg-[#FFD008] cursor-pointer active:scale-x-100 hover:scale-x-105 transition-transform"
        >
          Book now !
        </Link>
      </section>
    </main>
  );
}
