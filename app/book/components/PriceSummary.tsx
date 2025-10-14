const PriceSummary = () => {
  return (
    <section className="w-full sm:h-[370px] sm:w-[348px] border-2 border-[#DFDFDF] rounded-xl px-8 py-6 flex flex-col gap-10 sm:gap-0 justify-between">
      <div>
        <h2 className="text-xl font-semibold border-b-2 border-[#FFF0AF] pb-2">
          Price Summary
        </h2>

        <div className="py-4 flex flex-col gap-2 md:gap-4">
          <p className="text-sm font-normal flex justify-between">
            Freight Charge <span>&#8377;381.35</span>
          </p>
          <p className="text-sm font-normal flex justify-between">
            ODA Charges <span>&#8377;850.00</span>
          </p>
          <p className="text-sm font-normal flex justify-between">
            GST @18% <span>&#8377;221.64</span>
          </p>
          <p className="text-sm font-normal flex justify-between text-[#8B8B8B]">
            Coupon discount <span> -&#8377;100.00</span>
          </p>
        </div>
      </div>

      <p className="border-t-2 pt-2 border-[#EAEAEA] text-xl md:text-2xl font-semibold text-end">
        &#8377; 1453.00
      </p>
    </section>
  );
};
export default PriceSummary;
