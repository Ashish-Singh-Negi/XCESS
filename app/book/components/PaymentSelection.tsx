import Image from "next/image";
import CreditDebitCard from "./CreditDebitCard";
import { useState } from "react";

type PaymentType =
  | "Credit/Debit card"
  | "UPI"
  | "Digital Wallet"
  | "Net Banking";

const paymentOptions = [
  {
    Icon: (
      <Image
        src={"/icons/Card-icon.svg"}
        alt="card icon"
        height={30}
        width={30}
      />
    ),
    type: "Credit/Debit card",
    Component: <CreditDebitCard />,
    text: "",
    OtherIcons: (
      <>
        <Image
          src={"/card.png"}
          alt="master-card image"
          height={30}
          width={38}
        />
        <Image src={"/visa.png"} alt="visa image" height={30} width={30} />
      </>
    ),
  },
  {
    Icon: (
      <Image
        src={"/icons/UPI-icon.png"}
        alt="UPI icon"
        height={30}
        width={30}
      />
    ),
    type: "UPI",
    Component: <CreditDebitCard />,
    text: "(Pay using UPI ID or QR code)",
    OtherIcons: (
      <>
        <Image src={"/BHIM.png"} alt="BHIM image" height={30} width={30} />
        <Image src={"/UPI.png"} alt="UPI image" height={30} width={30} />
      </>
    ),
  },
  {
    Icon: (
      <Image
        src={"/icons/Digital-wallet-icon.png"}
        alt="Digital-wallet-icon icon"
        height={30}
        width={30}
      />
    ),
    type: "Digital Wallet",
    Component: <CreditDebitCard />,
    text: "(Paytm, PhonePe, Google Pay)",
    OtherIcons: (
      <>
        <Image src={"/Paypal.png"} alt="Paypal image" height={30} width={30} />
        <Image src={"/GPay.png"} alt="GPay image" height={30} width={30} />
      </>
    ),
  },
  {
    Icon: (
      <Image
        src={"/icons/NetBanking-icon.png"}
        alt="Net banking icon"
        height={30}
        width={30}
      />
    ),
    type: "Net Banking",
    Component: <CreditDebitCard />,
    text: "(All major banks supported)",
    OtherIcons: null,
  },
];

const PaymentSelection = () => {
  const [selectedPaymentType, setSelectedPaymentType] =
    useState<PaymentType>("Credit/Debit card");

  return (
    <div className="h-fit sm:w-[563px] border-2 border-[#DFDFDF] bg-[#FFFDF3] flex flex-col items-center rounded-2xl px-4 sm:px-8 pt-6 pb-10">
      <h2 className="w-full text-base md:text-2xl font-semibold border-b-2 border-[#A8A8A8] pb-4">
        Select your Payment method
      </h2>

      <main className="h-full w-fit flex flex-col gap-4 mt-4 sm:mt-6">
        {paymentOptions.map((option) => (
          <div
            key={option.type}
            className="h-fit sm:w-[490px] bg-white border-2 border-[#E1E1E1] rounded-2xl px-4 sm:px-6 py-5"
            onClick={() => setSelectedPaymentType(option.type as PaymentType)}
          >
            <div
              className={`${
                selectedPaymentType === option.type &&
                "border-b-2 border-[#EFEFEF] pb-4"
              } w-full flex items-center justify-between`}
            >
              <div className="flex items-center gap-4 sm:gap-6">
                {selectedPaymentType === option.type ? (
                  <div className="size-4 sm:size-6 border-[1px] border-[#FFD008] rounded-full flex justify-center items-center">
                    <div className="size-3 bg-[#FFD008] rounded-full"></div>
                  </div>
                ) : (
                  <div className="cursor-pointer size-4 sm:size-6 border-[1px] border-[#2B2A29] rounded-full flex justify-center items-center"></div>
                )}
                <div className="size-5">{option.Icon}</div>
                <p className="text-[10px] sm:text-base font-semibold">
                  {option.type}
                </p>
              </div>
              <div className="flex items-center gap-3">{option.OtherIcons}</div>
            </div>

            {selectedPaymentType === option.type && option.Component}
          </div>
        ))}
      </main>
    </div>
  );
};
export default PaymentSelection;
