import Image from "next/image";
import Link from "next/link";
import CouponCard from "./CouponCard";

const BookingDetails = () => {
  return (
    <>
      <section className="h-[530px] w-[952px] border-2 border-[#C3C3C3] rounded-3xl shadow-lg px-10 py-8">
        <h2 className="text-3xl font-semibold">Booking Details</h2>
        <h3 className="text-2xl font-semibold mt-6">Nainesh Ramani</h3>
        <p className="text-[#505050]">
          123, mainroad, Bangalore, Karnataka - 560001 <br /> 380024 (Ahmedabad)
          → 560001 (Bangalore) <br /> naineshcygnux@gmail.com <br /> 9780295193
        </p>
        <p className="my-4 border-dashed border-b-2 border-[#818181]"></p>

        <div className="w-full flex justify-between">
          <p className="text-lg text-[#505050] flex flex-col">
            Pickup Date
            <span className="text-xl text-[#282828] font-semibold -mt-0.5">
              27-09-2025 at 04:55 PM
            </span>
          </p>
          <p className="text-lg text-[#505050] flex flex-col">
            Drop Date
            <span className="text-xl text-[#282828] font-semibold -mt-0.5">
              24-10-2025 at 12:00 AM
            </span>
          </p>
          <p className="text-lg text-[#505050] flex flex-col">
            No. of Pkgs
            <span className="text-xl text-[#282828] font-semibold -mt-0.5">
              3
            </span>
          </p>
          <p className="text-lg text-[#505050] flex flex-col">
            Total Weight
            <span className="text-xl text-[#282828] font-semibold -mt-0.5">
              50 KGs
            </span>
          </p>
        </div>

        <div className="w-full flex justify-between mt-12">
          <p className="w-[258px] text-lg text-[#505050] flex flex-col">
            Remarks*
            <span className="text-lg text-[#282828] font-semibold -mt-0.5">
              keep it safe parcel contains glass work...
            </span>
          </p>
          <div className="flex gap-2 my-6">
            <div className="size-[27px] block rounded-md border-[1px] border-[#868686]"></div>{" "}
            <p className="text-lg text-[#505050]">
              Add Secure Packaging (₹50 per package)
            </p>
          </div>
        </div>
      </section>

      <div className="w-full my-4 flex items-center justify-center">
        <button className="flex gap-2 text-2xl font-medium text-[#448C00]">
          <Image
            src={"/icons/Add-icon.svg"}
            alt="Add icon svg"
            height={34}
            width={34}
          />
          Add New Drop Point
        </button>
      </div>

      <div className="w-[952px] mt-4">
        <p className="text-xl text-[#003983]">Terms and Conditons</p>
        <div className="flex gap-2 mt-5">
          <div className="size-[27px] block rounded-md border-[1px] border-[#868686]"></div>{" "}
          <p className="text-lg">
            I agree to the{" "}
            <Link
              href={"terms-and-conditions"}
              className="text-[#003983] underline"
            >
              Terms and Conditions
            </Link>
          </p>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="size-[27px] block rounded-md border-[1px] border-[#868686]"></div>{" "}
          <p className="text-lg">
            I agree to the{" "}
            <Link href={"policy"} className="text-[#003983] underline">
              Privacy policy
            </Link>
          </p>
        </div>
      </div>

      <section className="h-28 w-[80%] flex justify-between mt-16">
        <CouponCard />
        <div className="h-28 border-[1px] border-[#C3C3C3] py-4 rounded-2xl shadow-md">
          <div className="h-full flex items-center">
            <p className="text-lg flex flex-col border-r-[1px] border-[#A6A6A6] px-12">
              Freight Charge
              <span className="text-2xl font-semibold">₹10738.00</span>
            </p>
            <p className="text-lg flex flex-col border-r-[1px] border-[#A6A6A6] px-12">
              GST @18%
              <span className="text-2xl font-semibold">₹1932.84</span>
            </p>
            <p className="text-lg flex flex-col px-12">
              Total Amount
              <span className="text-2xl font-semibold text-[#56AB06]">
                ₹12670.84
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="w-[80%] border-[1px] border-[#CACACA] rounded-3xl px-10 py-6 flex justify-between items-center">
        <p className="flex flex-col text-lg">
          <span className="text-3xl text-[#56AB06] font-semibold">
            ₹12670.84
          </span>
          Total Payable
        </p>
        <div className="bg-gradient-to-r from-primary via-primary to-white rounded-2xl px-0.5 py-0.5 text-2xl font-medium ">
          <button className="bg-primary rounded-2xl px-6 py-2 text-2xl font-medium active:scale-95 transition-transform">
            Pay and Confirm
          </button>
        </div>
      </section>
    </>
  );
};
export default BookingDetails;
