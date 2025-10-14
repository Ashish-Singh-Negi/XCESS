import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full py-16 sm:py-20 md:py-24 bg-[#2B2A29]">
      <div className="mx-4 sm:mx-8 md:mx-[60px] lg:mx-[120px] flex flex-col lg:flex-row justify-between lg:pb-20 gap-12 lg:border-b-2 border-[#606060] ">
        <div className=" lg:w-[268px]">
          <Image
            src={"/Logo-White.png"}
            alt="logo png"
            height={104}
            width={268}
            className="h-[72px] w-[140px] sm:h-[140px] sm:w-[268px] lg:mx-auto"
          />
          <div className="h-[52px] w-full flex gap-4 sm:gap-6 lg:gap-8 pl-4 sm:pl-6 lg:pl-8 -ml-1 mt-1 lg:justify-start">
            <div className="size-7 sm:size-[52px] bg-primary text-black rounded-full flex justify-center items-center">
              <FaInstagram size={32} className="size-4 sm:size-8" />
            </div>
            <div className="size-7 sm:size-[52px] bg-primary text-black rounded-full flex justify-center items-center">
              <FaYoutube size={32} className="size-4 sm:size-8" />
            </div>
            <div className="size-7 sm:size-[52px] bg-primary text-black rounded-full flex justify-center items-center">
              <RiTwitterXLine size={32} className="size-4 sm:size-8" />
            </div>
          </div>
        </div>

        <div className="px-4 w-full lg:w-[268px] flex flex-col sm:pt-6 text-lg gap-2 sm:text-lg text-[#ABABAB]">
          <h2 className="text-2xl font-semibold text-white">CONTACT US</h2>
          <p>xyz@gmail.com</p>
          <p>
            24 Mumbai, Maharashtra,
            <br /> 403 503
          </p>
          <p>+ 3827493470</p>
        </div>

        <p className=" lg:hidden h-0.5 w-2/3 bg-[#606060] mx-auto"></p>

        <div className="px-4 w-full lg:w-80 flex flex-col gap-4 sm:pt-6 text-sm sm:text-lg text-[#ABABAB]">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            SUBSCRIBE
          </h2>
          <p>
            Enter your email to get notified about <br /> our new solutions
          </p>
          <div className="relative flex w-full">
            <input
              type="text"
              placeholder="Email"
              className="rounded-2xl h-[52px] w-full text-[#9A9A9A] bg-[#616161] caret-primary outline-none pl-5 pr-8"
            />
            <CiMail
              size={24}
              className="absolute right-2.5 top-3.5 text-primary"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
