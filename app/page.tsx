import CustomSelect from "@/components/CustomSelect";
import Header from "@/components/Header";
import Image from "next/image";
import { GoPlus } from "react-icons/go";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="w-full">
        {/* Hero Section */}
        <div className="min-h-[600px] sm:min-h-[800px] lg:min-h-[1024px] w-full bg-[url('/Couple.png')] bg-center bg-cover bg-no-repeat pt-28">
          <div className="px-6 sm:px-12 lg:px-24 py-10 md:py-20 lg:py-32 text-center sm:text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-white font-bold italic leading-tight max-w-[90%] mx-auto sm:mx-0">
              "We Handle,
              <br /> Your Travel"
            </h1>
            <p className="text-white mt-6 sm:mt-8 text-sm sm:text-base max-w-[90%] mx-auto sm:mx-0">
              From your doorstep to your destination, we handle <br /> every bag
              with care.
            </p>

            <div className="w-full mt-6 flex flex-col sm:flex-row sm:flex-wrap items-center gap-4 justify-center sm:justify-start">
              <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
                <div className="size-14 bg-[url('/Pic1.jpg')] bg-cover bg-no-repeat rounded-full border-2 border-white"></div>
                <div className="size-14 bg-[url('/Pic2.jpg')] bg-cover bg-no-repeat -ml-4 sm:-ml-10 rounded-full border-2 border-white"></div>
                <div className="size-14 bg-[url('/Pic3.jpg')] bg-cover bg-no-repeat -ml-4 sm:-ml-10 rounded-full border-2 border-white"></div>
                <div className="size-14 bg-primary rounded-full border-2 border-white -ml-4 sm:-ml-10 flex items-center justify-center">
                  <GoPlus className="size-10 text-[#374957]" />
                </div>
                <div className="flex flex-col justify-center ml-2 text-center sm:text-left">
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
        <div className="w-full pt-40 px-6 sm:px-12 lg:px-24 flex flex-col items-center text-center">
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

        <p className="w-96 mx-auto border-b-2 border-primary mt-20"></p>
        {/* Why Choose Us */}
        <div className="w-full py-28 px-6 sm:px-12 lg:px-60 text-center sm:text-left">
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

        <p className="w-96 mx-auto border-b-2 border-primary -mt-4"></p>

        {/* Footer */}
        <div className="h-40 w-full bg-white text-center flex items-center justify-center text-white font-semibold px-4">
          Radhe Radhe
        </div>
      </main>
    </div>
  );
}
