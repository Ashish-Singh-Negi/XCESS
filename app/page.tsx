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
import { useEffect, useState } from "react";

const defaultSlides = ["Cover1.png", "Cover2.jpg", "SmallCover3.png"];

const mobileSlides = ["SmallCover1.png", "SmallCover2.png", "SmallCover3.png"];

export default function Home() {
  const [selectPackage, setSelectPackage] = useState(false);

  const [slides, setSlides] = useState(defaultSlides);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(slides.length);
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(id);
  }, [slides]);

  useEffect(() => {
    const handleResize = () => {
      const viewport = window.innerWidth;
      console.log("🚀 ~ Home ~ viewport:", viewport);

      if (viewport < 640) setSlides(mobileSlides);
      else setSlides(defaultSlides);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="w-full flex flex-col items-center">
      {/* Hero Section */}

      <section
        style={{ backgroundImage: `url('${slides[slideIndex]}')` }}
        className="absolute -z-10 top-0 transition-all min-h-[740px] sm:min-h-[800px] lg:min-h-[1024px] w-full rounded-b-3xl sm:rounded-none bg-center bg-cover bg-no-repeat pt-[72px] md:pt-28"
      />

      <section
        className={`min-h-[740px] sm:min-h-[800px] lg:min-h-[1024px] w-full rounded-b-3xl sm:rounded-none bg-center bg-cover bg-no-repeat pt-[72px] md:pt-28`}
      >
        <div className="px-6 sm:px-12 lg:px-24 py-20 md:py-20 lg:py-32 sm:text-left flex flex-col items-center sm:block">
          <h1 className="text-[40px] sm:text-6xl lg:text-7xl text-white font-bold italic leading-tight max-w-[90%]">
            &quot;We Handle,
            <br /> Your Travel&quot;
          </h1>
          <p className="text-white mt-4 sm:mt-8 text-xs sm:text-base text-center sm:text-left max-w-[90%]">
            From your doorstep to your destination, we handle <br /> every bag
            with care.
          </p>

          <div className="w-full mt-4 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 justify-center sm:justify-start">
            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
              <div className="size-6 sm:size-14 bg-[url('/Pic1.jpg')] bg-cover bg-no-repeat rounded-full border-[1px] sm:border-2 border-white"></div>
              <div className="size-6 sm:size-14 bg-[url('/Pic2.jpg')] bg-cover bg-no-repeat -ml-6 sm:-ml-10 rounded-full border-[1px] sm:border-2 border-white"></div>
              <div className="size-6 sm:size-14 bg-[url('/Pic3.jpg')] bg-cover bg-no-repeat -ml-6 sm:-ml-10 rounded-full border-[1px] sm:border-2 border-white"></div>
              <div className="size-6 sm:size-14 bg-primary rounded-full border-[1px] sm:border-2 border-white -ml-6 sm:-ml-10 flex items-center justify-center">
                <GoPlus className="size-10 text-[#374957]" />
              </div>
              <div className="flex flex-col justify-center -ml-2 sm:ml-2 sm:text-left">
                <h3 className="text-xs sm:text-lg text-white font-bold">
                  4.9 Ratings+
                </h3>
                <p className="text-[8px] sm:text-xs text-[#B6B6B6]">
                  Trusted by 10k+ customers
                </p>
              </div>
            </div>
            <Link
              href={"/book"}
              className="rounded-3xl bg-primary py-2 px-8 sm:px-10 font-bold text-lg sm:text-base cursor-pointer hover:scale-105 active:scale-100 transition-all flex justify-center mt-10 mx-auto sm:m-0"
            >
              Book Now!
            </Link>
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <div className="w-[90%] sm:w-[80%] lg:max-w-6xl mx-auto rounded-4xl bg-white py-8 px-10 md:px-16 lg:px-20 -mt-32 sm:-mt-20 flex flex-col gap-8 shadow-xl">
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
              <div className="absolute w-full sm:w-fit z-10 top-full left-0 cursor-default">
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
      <section className="sm:w-[90%] pt-20 md:pt-40 px-6 sm:px-12 flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold">
          Our Service Categories
        </h2>
        <p className="text-lg sm:text-xl text-[#515151] mt-2">
          Our Service Categories
        </p>
        <div className="mt-10 w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Service-Card1", "Service-Card2", "Service-Card3"].map(
            (card, i) => (
              <Image
                key={i}
                src={`/${card}.png`}
                alt={`Service card ${i + 1}`}
                height={364}
                width={268}
              />
            )
          )}

          <Image
            className="-mt-4"
            src={`/Service-Card4.png`}
            alt={`Service card 4 png`}
            height={364}
            width={268}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <p className="h-0.5 w-3/4 sm:w-96 bg-primary mt-20 mx-auto rounded-b-full"></p>
      <section className="sm:w-[80%] py-14 md:py-28 sm:text-left px-8">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Why <span className="text-primary">should</span> <br />
          <span className="text-primary">you</span> choose US?
        </h1>
        <p className="text-base sm:text-lg text-[#4E4E4E] font-semibold mt-4">
          Because Travel Should Be About Memories, Not Heavy Bags
        </p>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 sm:gap-6">
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
            <div
              key={feature.text}
              className="flex flex-col gap-6 items-center"
            >
              <Image
                className="size-36"
                src={`/${feature.img}.png`}
                alt={`feature${i + 1} `}
                height={100}
                width={100}
              />
              <p className="text-3xl font-semibold text-center">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      <p className="h-0.5 w-3/4 sm:w-96 bg-primary -mt-4 mx-auto rounded-b-full"></p>

      <section className="relative w-full py-20 flex flex-col items-center overflow-hidden">
        <p className="text-[24px] font-medium text-primary">Just follow some</p>
        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-center">
          Simple Steps
        </span>

        <div className="absolute -z-10 -top-40 -right-[460px] size-[800px] bg-[#FFF56926] rounded-full"></div>
        <div className="absolute -z-10 -bottom-[620px] -left-[560px] size-[1060px] bg-[#FEFFEF] rounded-full"></div>

        <main className="w-[80%] flex flex-col lg:flex-row lg:justify-center items-center mt-24 mb-20">
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-2 lg:justify-between justify-center h-80 w-64">
            <div className="size-[52px] bg-primary rounded-full text-3xl flex justify-center items-center">
              1
            </div>
            <Image
              src="/Book-Online.png"
              alt="Book Online Icon"
              height={122}
              width={122}
            />
            <p className="text-xl sm:text-2xl font-medium text-center">
              Book <br /> Online
            </p>
          </div>

          <IoIosArrowForward className="size-10 text-primary hidden lg:block" />

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-2 lg:justify-between justify-center h-80 w-64">
            <div className="size-[52px] bg-primary rounded-full text-3xl flex justify-center items-center">
              2
            </div>
            <Image src="/Bag.png" alt="Bag Icon" height={122} width={122} />
            <p className="text-xl sm:text-2xl font-medium text-center">
              We Collect <br /> Your Bag
            </p>
          </div>

          <IoIosArrowForward className="size-10 text-primary hidden lg:block" />

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-2 lg:justify-between justify-center h-80 w-64">
            <div className="size-[52px] bg-primary rounded-full text-3xl flex justify-center items-center">
              3
            </div>
            <Image
              src="/Security.png"
              alt="Security Icon"
              height={122}
              width={122}
            />
            <p className="text-xl sm:text-2xl font-medium text-center">
              Secure Delivery <br /> to Destination
            </p>
          </div>

          <IoIosArrowForward className="size-10 text-primary hidden lg:block" />

          {/* Step 4 */}
          <div className="flex flex-col items-center gap-2 lg:justify-between justify-center h-80 w-64">
            <div className="size-[52px] bg-primary rounded-full text-3xl flex justify-center items-center">
              4
            </div>
            <Image src="/Van.png" alt="Van Icon" height={122} width={122} />
            <p className="text-xl sm:text-2xl font-medium text-center">
              Track Your <br /> Shipment
            </p>
          </div>
        </main>
      </section>

      <section className="w-full py-20 flex flex-col items-center bg-[url('/Bg-About-us.png')] bg-no-repeat bg-contain">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center px-4">
          About US
        </h2>

        <p className="sm:w-[80%] text-base sm:text-lg md:text-xl lg:text-2xl mt-10 text-center font-medium max-w-[90%] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1280px] px-4">
          Xcess Luggage makes travel simpler, lighter, and stress-free. We
          specialize in door-to-door baggage delivery, helping you skip queues
          and heavy lifting. Our service covers major Indian cities, ensuring
          your bags arrive safely and on time. With secure handling, and
          real-time tracking, we’re redefining convenience for travelers.
          Whether it’s weddings, business trips, family vacations, or student
          relocations, Xcess Luggage ensures your journey stays hassle-free from
          start to finish.
        </p>
      </section>

      <section className="w-full my-20 py-10 flex flex-col items-center">
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
              className="relative shrink-0 overflow-y-visible h-auto w-64 sm:w-72 px-2 flex flex-col justify-around bg-white rounded-lg"
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
      <p className="h-0.5 w-3/4 sm:w-96 bg-gradient-to-r from-white via-primary to-white mb-10 -mt-10 mx-auto rounded-b-full"></p>

      <section className="w-[80%] mx-auto flex flex-col items-center gap-10 py-20 px-4">
        <p className="text-3xl sm:text-4xl md:text-5xl font-medium text-center">
          Ready to Travel Light <br /> without worrying about that extra
          luggage?
        </p>
        <Link
          href={"/book"}
          className="border-2 border-[#FFF235] text-xl sm:text-2xl md:text-4xl font-semibold py-4 px-10 sm:px-20 md:px-60 rounded-3xl bg-[#FFD008] cursor-pointer active:scale-x-100 hover:scale-x-105 transition-transform"
        >
          Book now !
        </Link>
      </section>
    </main>
  );
}
