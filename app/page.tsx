import CustomSelect from "@/components/CustomSelect";
import Header from "@/components/Header";
import Image from "next/image";
import { GoPlus } from "react-icons/go";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-yellow-500">
      <Header />
      <main className="w-full">
        {/* Hero Section */}
        <div className="min-h-[600px] sm:min-h-[800px] lg:min-h-[1024px] w-full bg-[url('/Couple.png')] bg-center bg-cover bg-no-repeat pt-28">
          <div className="px-6 sm:px-12 lg:px-40 py-10 md:py-20 lg:py-40">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-white font-bold italic leading-tight">
              "We Handle,
              <br /> Your Travel"
            </h1>

            <p className="text-white mt-6 sm:mt-8 text-sm sm:text-base">
              From your doorstep to your destination, we handle <br /> every bag
              with care.
            </p>

            <div className="w-full mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="size-14 bg-[url('/Pic1.jpg')] bg-cover bg-no-repeat rounded-full border-2 border-white"></div>
                <div className="size-14 bg-[url('/Pic2.jpg')] bg-cover bg-no-repeat -ml-6 rounded-full border-2 border-white"></div>
                <div className="size-14 bg-[url('/Pic3.jpg')] bg-cover bg-no-repeat -ml-6 rounded-full border-2 border-white"></div>
                <div className="size-14 -ml-6 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                  <GoPlus className="size-10 text-[#374957]" />
                </div>
                <div className="flex flex-col justify-center ml-2">
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
          <h2 className="text-3xl font-semibold ">Price Calculator</h2>

          <div className="flex flex-col lg:flex-row gap-6">
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

            <div className="h-[72px] w-full sm:w-96 border-2 border-[#BFBFBF] outline-primary rounded-xl px-6 py-[22px] text-xl flex items-center justify-between">
              Choose Luggage
              <div className="size-6 mt-2">
                <Image
                  src="/icons/Angle-down.png"
                  alt="Down Arrow icon"
                  height={24}
                  width={24}
                />
              </div>
            </div>
          </div>
          <button className="font-semibold text-lg bg-primary px-10 sm:px-20 lg:px-40 py-2 mx-auto rounded-3xl hover:scale-x-105 active:scale-100 transition-all">
            Calculate
          </button>
        </div>

        {/* Footer Placeholder */}
        <div className="h-40 w-full text-center flex items-center justify-center text-white font-semibold">
          Radhe Radhe
        </div>
      </main>
    </div>
  );
}
