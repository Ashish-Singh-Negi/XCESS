const CreditDebitCard = () => {
  return (
    <div className="flex flex-col gap-3 px-4 py-6">
      <div>
        <label className="text-xs sm:text-sm ">Card Number</label>
        <input
          type="number"
          className="h-7 w-full rounded-lg text-xs sm:text-sm border-[#CBCBCB] border-[1px] outline-none px-2 py-1.5 mt-1"
          placeholder="1234 5678 1234 5678"
        />
      </div>
      <div className="flex gap-4">
        <div>
          <label className="text-xs sm:text-sm ">Expiry Date</label>
          <input
            type="text"
            className="h-7 w-full rounded-lg text-xs sm:text-sm border-[#CBCBCB] border-[1px] outline-none px-2 py-1.5 mt-1"
            placeholder="MM/YY"
          />
        </div>
        <div>
          <label className="text-xs sm:text-sm ">CVV</label>
          <input
            type="text"
            className="h-7 w-full rounded-lg text-xs sm:text-sm border-[#CBCBCB] border-[1px] outline-none px-2 py-1.5 mt-1"
            placeholder="123"
          />
        </div>
      </div>
      <div>
        <label className="text-xs sm:text-sm ">CardHolders Name</label>
        <input
          type="number"
          className="h-7 w-full rounded-lg text-xs sm:text-sm border-[#CBCBCB] border-[1px] outline-none px-2 py-1.5 mt-1"
          placeholder="Apple G"
        />
      </div>
    </div>
  );
};
export default CreditDebitCard;
