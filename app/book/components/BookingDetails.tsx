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
          <p className="text-lg text-[#505050] flex flex-col">
            Remarks*
            <span className="text-lg text-[#282828] font-semibold -mt-0.5">
              keep it safe parcel contains glass work...
            </span>
          </p>
          <div>
            <p className="text-lg text-[#505050]">
              Add Secure Packaging (₹50 per package)
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default BookingDetails;
