const CouponCard = () => {
  return (
    <>
      <div className="hidden xl:flex h-[106px] w-[440px] items-center overflow-y-hidden">
        <div className="border-l-[1px] border-y-[1px] border-[#CECECE] p-[24px] rounded-l-lg -mr-[1px]">
          <p className="text-sm font-semibold">Do you have coupon ?</p>
          <div className="w-full flex mt-1">
            <input
              className="h-8 w-[204px] rounded-md outline-none bg-[#E3E3E3] py-0.5 px-2 text-sm"
              placeholder="Xcess123"
            />
            <button className="px-4 py-1 cursor-pointer rounded-lg text-xs bg-[#FFE163] ml-2 active:scale-95 transition-transform">
              Apply
            </button>
          </div>
        </div>
        <div className="relative h-full w-7 flex flex-col justify-between overflow-y-hidden">
          <div className="absolute -top-3.5 size-[27px] rounded-full border-[1px] border-[#CECECE] bg-white"></div>
          <p className="h-full border-l-[1px] border-[#CECECE] border-dashed ml-3"></p>
          <div className="absolute -bottom-3.5 size-[27px] rounded-full border-[1px] border-[#CECECE] bg-white"></div>
        </div>
        <div className=" border-r-[1px] border-y-[1px] border-[#CECECE] rounded-r-lg -ml-0.5">
          <div className="h-[50px] w-8 bg-primary rounded-lg m-[27px]"></div>
        </div>
      </div>

      <div className="xl:hidden w-full sm:w-96">
        <label className="block text-[10px] sm:text-xs">
          Do you have a coupon?
        </label>
        <div className="relative h-8 w-full flex">
          <input
            type="text"
            placeholder="AppleG2025"
            className="h-full w-full border-[1px] focus-within:border-primary border-[#DCDCDC] rounded-xl text-xs px-3 pr-[84px] py-2 outline-none caret-primary"
          />
          <button className="h-full absolute bottom-0 right-0 px-5 py-2 text-xs font-medium bg-primary rounded-xl">
            Apply
          </button>
        </div>
      </div>
    </>
  );
};
export default CouponCard;
