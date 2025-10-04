import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
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
  );
};
export default Footer;
