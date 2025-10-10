import Image from "next/image";
import PaymentSelection from "./PaymentSelection";
import PriceSummary from "./PriceSummary";

const Payment = () => {
  return (
    <section className="w-full flex flex-col md:flex-row justify-center gap-6">
      <PaymentSelection />
      <div>
        <PriceSummary />
        <div className="w-fit mt-2 flex justify-between gap-2">
          <p className="w-28 text-sm font-semibold flex flex-col items-center text-center gap-2">
            <Image
              src={"/icons/Sheild-icon.svg"}
              alt="Sheild icon"
              height={24}
              width={24}
            />
            256-bit SSL <br /> encryption
          </p>
          <p className="w-28 text-sm font-semibold flex flex-col items-center text-center gap-2">
            <Image
              src={"/icons/Sheild-icon.svg"}
              alt="Sheild icon"
              height={24}
              width={24}
            />
            PCI DSS <br /> compliant
          </p>
          <p className="w-28 text-sm font-semibold flex flex-col items-center text-center gap-2">
            <Image
              src={"/icons/Sheild-icon.svg"}
              alt="Sheild icon"
              height={24}
              width={24}
            />
            Secure payment gateway
          </p>
        </div>
      </div>
    </section>
  );
};
export default Payment;
