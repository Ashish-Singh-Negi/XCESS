"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GoPlus } from "react-icons/go";

const defaultSlides = ["Cover1.png", "Cover2.jpg", "SmallCover3.png"];

const mobileSlides = ["SmallCover1.png", "SmallCover2.png", "SmallCover3.png"];

const HeroSection = () => {
  const [slides, setSlides] = useState(defaultSlides);

  const [isMainBannerSwiped, setIsMainBannerSwiped] = useState(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextBannerHandler = () => {
    setSlides((prev) => {
      const temp = prev[0];

      const newSlides: string[] = [];
      prev.forEach((slide, index) => {
        if (index >= 1) newSlides.push(slide);
      });

      newSlides.push(temp);

      return newSlides;
    });
  };

  const prevBannerHandler = () => {
    setSlides((prev) => {
      const temp = prev[prev.length - 1];

      const newSlides: string[] = [];
      prev.forEach((slide, index) => {
        if (index !== prev.length - 1) newSlides.push(slide);
      });

      newSlides.unshift(temp);

      return newSlides;
    });
  };

  useEffect(() => {
    if (isMainBannerSwiped) return;

    const id = setInterval(() => {
      nextBannerHandler();
    }, 5000);

    return () => clearInterval(id);
  }, [slides, isMainBannerSwiped]);

  useEffect(() => {
    const handleResize = () => {
      const viewport = window.innerWidth;

      if (viewport < 640) setSlides(mobileSlides);
      else setSlides(defaultSlides);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const minSwipeDistance = 60; // Minimum distance for a swipe to be registered

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset previous touch
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      console.log("Swiped left");
      !isMainBannerSwiped && setIsMainBannerSwiped(true);
      nextBannerHandler();
    } else if (isRightSwipe) {
      console.log("Swiped right");
      !isMainBannerSwiped && setIsMainBannerSwiped(true);
      prevBannerHandler();
    }
  };
  return (
    <>
      <section className="min-h-[740px] sm:min-h-[800px] lg:min-h-[1024px] w-full flex overflow-x-hidden">
        {slides.map((slide) => (
          <div
            key={slide}
            style={{
              backgroundImage: `url('${slide}')`,
            }}
            className={`transition-all shrink-0 w-full rounded-b-3xl sm:rounded-none bg-center bg-cover bg-no-repeat pt-[72px] md:pt-28`}
          />
        ))}
      </section>

      <section
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={`absolute min-h-[740px] sm:min-h-[800px] lg:min-h-[1024px] w-full rounded-b-3xl sm:rounded-none bg-center bg-cover bg-no-repeat pt-[72px] md:pt-28 flex items-end sm:items-center`}
      >
        <div className="w-full px-4 sm:px-12 lg:px-24 py-14 md:py-20 lg:py-32 sm:text-left flex flex-col bg-gradient-to-t from-black to-transparent sm:bg-gradient-to-t rounded-b-3xl sm:rounded-none sm:from-transparent sm:to-transparent sm:block">
          <h1 className="text-[40px] sm:text-6xl lg:text-7xl text-white font-bold italic leading-tight max-w-[90%]">
            &quot;We Handle,
            <br /> Your Travel&quot;
          </h1>
          <p className="text-white mt-2 sm:mt-8 text-xs sm:text-base sm:text-left max-w-[90%]">
            From your doorstep to your destination, we handle <br /> every bag
            with care.
          </p>

          <div className="w-full mt-4 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 justify-center sm:justify-start">
            <div className="flex items-center gap-4 flex-wrap sm:justify-start">
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
              className="w-full sm:w-fit rounded-3xl bg-primary py-2 px-8 sm:px-10 font-bold text-lg sm:text-base cursor-pointer hover:scale-105 active:scale-100 transition-all flex justify-center mx-auto sm:m-0"
            >
              Book Now!
            </Link>
            <div className="sm:hidden h-2 w-full flex justify-center items-center gap-2 mt-1">
              {mobileSlides.map((slide, i) => (
                <button
                  key={"Service Card nav btn" + i}
                  className={`${
                    slide === slides[0]
                      ? "size-2.5 bg-primary"
                      : "size-2 bg-[#FFF1CB]"
                  } rounded-full transition-transform`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
