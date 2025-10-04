import CustomSelect from "@/components/CustomSelect";
import Header from "@/components/Header";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="w-full flex flex-col items-center">
        {/* Hero Section */}
        <div className="min-h-[600px] sm:min-h-[800px] lg:min-h-[1024px] w-full bg-[url('/Couple.png')] bg-center bg-cover bg-no-repeat pt-28">
          <div className="px-6 sm:px-12 lg:px-24 py-10 md:py-20 lg:py-32 sm:text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-white font-bold italic leading-tight max-w-[90%] mx-auto sm:mx-0">
              &quot;We Handle,
              <br /> Your Travel&quot;
            </h1>
            <p className="text-white mt-6 sm:mt-8 text-sm sm:text-base max-w-[90%] mx-auto sm:mx-0">
              From your doorstep to your destination, we handle <br /> every bag
              with care.
            </p>

            <div className="w-full mt-6 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 justify-center sm:justify-start">
              <div className="flex items-center gap-4 flex-wrap sm:justify-start">
                <div className="size-14 bg-[url('/Pic1.jpg')] bg-cover bg-no-repeat rounded-full border-2 border-white"></div>
                <div className="size-14 bg-[url('/Pic2.jpg')] bg-cover bg-no-repeat -ml-10 rounded-full border-2 border-white"></div>
                <div className="size-14 bg-[url('/Pic3.jpg')] bg-cover bg-no-repeat -ml-10 rounded-full border-2 border-white"></div>
                <div className="size-14 bg-primary rounded-full border-2 border-white -ml-10 flex items-center justify-center">
                  <GoPlus className="size-10 text-[#374957]" />
                </div>
                <div className="flex flex-col justify-center ml-2 sm:text-left">
                  <h3 className="text-base sm:text-lg text-white font-bold">
                    4.9 Ratings+
                  </h3>
                  <p className="text-xs text-[#B6B6B6]">
                    Trusted by 10k+ customers
                  </p>
                </div>
              </div>
              <button className="h-10 rounded-3xl bg-primary px-6 sm:px-10 font-semibold text-sm sm:text-base cursor-pointer hover:scale-105 active:scale-100 transition-all">
                Book Now!
              </button>
            </div>
          </div>
        </div>

        {/* Price Calculator */}
        <div className="w-full max-w-6xl mx-auto rounded-4xl bg-white py-8 px-6 sm:px-10 md:px-16 lg:px-20 -mt-20 flex flex-col gap-8 shadow-xl">
          <h2 className="text-3xl font-semibold text-center sm:text-left">
            Price Calculator
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 w-full">
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
            <button className="h-[72px] w-full lg:w-96 border-2 border-[#BFBFBF] cursor-pointer focus-within:border-primary rounded-xl px-6 py-[22px] text-xl flex items-center justify-between">
              Choose Luggage
              <div className="size-6 mt-2">
                <Image
                  src="/icons/Angle-down.png"
                  alt="Down Arrow icon"
                  height={24}
                  width={24}
                />
              </div>
            </button>
          </div>
          <button className="font-semibold text-lg bg-primary px-10 sm:px-20 lg:px-40 py-2 mx-auto rounded-3xl hover:scale-x-105 active:scale-100 transition-all">
            Calculate
          </button>
        </div>

        {/* Service Categories */}
        <div className="w-[80%] pt-40 px-6 sm:px-12 lg:px-24 flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold">
            Our Service Categories
          </h2>
          <p className="text-lg sm:text-xl text-[#515151] mt-2">
            Our Service Categories
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>

        {/* Why Choose Us */}
        <p className="h-0.5 w-3/4 sm:w-96 bg-primary mt-20 mx-auto rounded-b-full"></p>
        <div className="w-[80%] py-28 px-6 sm:px-12 lg:px-40 sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Why <span className="text-primary">should</span> <br />
            <span className="text-primary">you</span> choose US?
          </h1>
          <p className="text-lg text-[#4E4E4E] font-semibold mt-6">
            Because Travel Should Be About Memories, Not Heavy Bags
          </p>
          <div className="mt-16 flex flex-col lg:flex-row gap-10 items-center justify-center">
            {["Feature1", "Feature2", "Feature3", "Feature4"].map(
              (feature, i) => (
                <Image
                  key={i}
                  src={`/${feature}.png`}
                  alt={`feature${i + 1}`}
                  height={246}
                  width={264}
                />
              )
            )}
          </div>
        </div>
        <p className="h-0.5 w-3/4 sm:w-96 bg-primary -mt-4 mx-auto rounded-b-full"></p>

        <div className="w-[80%] py-20 flex flex-col items-center">
          <p className="text-[24px] font-medium text-primary">
            Just follow some
          </p>
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-center">
            Simple Steps
          </span>

          <main className="flex flex-col lg:flex-row items-center gap-4 mt-24 mb-20">
            {/* Step 1 */}
            <div className="flex flex-col items-center justify-between h-80 w-64">
              <div className="size-[52px] bg-primary rounded-full text-3xl flex justify-center items-center">
                1
              </div>
              <Image
                src="/Book-Online.png"
                alt="Book Online Icon"
                height={122}
                width={122}
              />
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-center">
                Book <br /> Online
              </p>
            </div>

            <IoIosArrowForward className="size-10 text-primary hidden lg:block" />

            {/* Step 2 */}
            <div className="flex flex-col items-center justify-between h-80 w-64">
              <div className="size-[52px] bg-primary rounded-full text-3xl flex justify-center items-center">
                2
              </div>
              <Image src="/Bag.png" alt="Bag Icon" height={122} width={122} />
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-center">
                We Collect <br /> Your Bag
              </p>
            </div>

            <IoIosArrowForward className="size-10 text-primary hidden lg:block" />

            {/* Step 3 */}
            <div className="flex flex-col items-center justify-between h-80 w-64">
              <div className="size-[52px] bg-primary rounded-full text-3xl flex justify-center items-center">
                3
              </div>
              <Image
                src="/Security.png"
                alt="Security Icon"
                height={122}
                width={122}
              />
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-center">
                Secure Delivery <br /> to Destination
              </p>
            </div>

            <IoIosArrowForward className="size-10 text-primary hidden lg:block" />

            {/* Step 4 */}
            <div className="flex flex-col items-center justify-between h-80 w-64">
              <div className="size-[52px] bg-primary rounded-full text-3xl flex justify-center items-center">
                4
              </div>
              <Image src="/Van.png" alt="Van Icon" height={122} width={122} />
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-center">
                Track Your <br /> Shipment
              </p>
            </div>
          </main>
        </div>

        <div className="w-full py-20 flex flex-col items-center bg-[url('/Bg-About-us.png')] bg-no-repeat bg-contain">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center px-4">
            About US
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-10 text-center font-medium max-w-[90%] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1280px] px-4">
            Xcess Luggage makes travel simpler, lighter, and stress-free. We
            specialize in door-to-door baggage delivery, helping you skip queues
            and heavy lifting. Our service covers major Indian cities, ensuring
            your bags arrive safely and on time. With secure handling, and
            real-time tracking, we’re redefining convenience for travelers.
            Whether it’s weddings, business trips, family vacations, or student
            relocations, Xcess Luggage ensures your journey stays hassle-free
            from start to finish.
          </p>
        </div>

        <div className="w-full my-20 py-10 flex flex-col items-center">
          <h2 className="w-[80%] text-4xl mb-20 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-40">
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
        </div>
        <p className="h-0.5 w-3/4 sm:w-96 bg-primary mb-10 -mt-10 mx-auto rounded-b-full"></p>

        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-10 py-20 px-4 sm:px-8">
          <p className="text-3xl sm:text-4xl md:text-5xl font-medium text-center leading-snug">
            Ready to Travel Light <br /> without worrying about that extra
            luggage?
          </p>
          <button className="border-2 border-[#FFF235] text-xl sm:text-2xl md:text-4xl font-semibold py-4 px-10 sm:px-20 md:px-60 rounded-3xl bg-[#FFD008] cursor-pointer active:scale-x-100 hover:scale-x-105 transition-transform">
            Book now !
          </button>
        </div>

        <footer className="w-full py-16 sm:py-20 md:py-24 bg-[#2B2A29]">
          <div className="mx-4 sm:mx-8 md:mx-[60px] lg:mx-[120px] flex flex-col lg:flex-row justify-between py-16 sm:py-20 md:py-24 gap-12 border-b-2 border-[#606060] pb-20 ">
            <div className="w-full lg:w-[268px]">
              <Image
                src={"/Logo-White.png"}
                alt="logo png"
                height={104}
                width={268}
                className="mx-auto lg:mx-0"
              />
              <div className="h-[52px] w-full flex gap-4 sm:gap-6 lg:gap-8 pl-4 sm:pl-6 lg:pl-8 mt-5 justify-center lg:justify-start">
                <div className="size-[52px] bg-primary rounded-full flex justify-center items-center">
                  <FaInstagram size={32} />
                </div>
                <div className="size-[52px] bg-primary rounded-full flex justify-center items-center">
                  <FaYoutube size={32} />
                </div>
                <div className="size-[52px] bg-primary rounded-full flex justify-center items-center">
                  <FaX size={32} />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[268px] flex flex-col sm:pt-6 text-base gap-2 sm:text-lg text-[#ABABAB]">
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                CONTACT US
              </h2>
              <p>xyz@gmail.com</p>
              <p>
                24 Mumbai, Maharashtra,
                <br /> 403 503
              </p>
              <p>+ 3827493470</p>
            </div>

            <div className="w-full lg:w-80 flex flex-col gap-4 sm:pt-6 text-base sm:text-lg text-[#ABABAB]">
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                SUBSCRIBE
              </h2>
              <p>Enter your email to get notified about our new solutions</p>
              <div className="relative flex w-full">
                <input
                  type="text"
                  placeholder="Email"
                  className="rounded-2xl h-[52px] w-full text-[#9A9A9A] bg-[#616161] outline-none pl-4 pr-8"
                />
                <CiMail
                  size={24}
                  className="absolute right-2 top-3.5 text-primary"
                />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
