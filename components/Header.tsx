import Image from "next/image";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="fixed z-20 w-full bg-white">
      <div className="w-[90%] max-w-7xl py-4 sm:py-6 flex sm:flex-wrap md:flex-nowrap justify-between items-center mx-auto gap-4">
        <Image
          src="/Logo.png"
          alt="Logo png"
          height={62}
          width={152}
          className="h-10 w-20 sm:h-[62px] sm:w-[152px]"
        />

        <div className="flex flex-col md:flex-row items-center gap-4 md:w-auto">
          <NavBar />
          <div className="flex gap-4">
            <button className="py-2 px-6 bg-yellow-400 text-black rounded-3xl font-medium hover:scale-105 transition-transform cursor-pointer active:scale-100">
              Book Now
            </button>
            <div className="w-10 h-10 rounded-full bg-black"></div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
