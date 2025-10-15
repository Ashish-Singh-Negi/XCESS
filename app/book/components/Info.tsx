import Image from "next/image";

const Info = ({
  imgSrc,
  quantity,
  price,
  type,
  weight,
}: {
  imgSrc: string;
  type: string;
  weight: number;
  price: number;
  quantity: number;
}) => {
  return (
    <div className="absolute z-10 hidden group-hover:flex flex-col items-center justify-between h-48 w-52 p-2 bg-white border-[1px] border-black rounded-b-2xl rounded-tr-2xl">
      <div className="h-20 w-20">
        <Image src={imgSrc} alt={imgSrc} height={80} width={80} />
      </div>

      <p className="text-xs text-[#999999] text-center">
        <span className="text-sm text-black font-semibold">{type}</span> <br />
        <span className="font-medium"> Max: {weight} kgs </span>
      </p>

      <div className="h-10 w-full flex justify-between items-center px-2">
        <p className="text-xs font-semibold text-[#448C00] flex flex-col leading-3">
          <span className="text-[#9A9A9A] line-through font-medium">
            &#8377;{parseFloat((quantity * price).toFixed(2))}
          </span>
          &#8377;{parseFloat((quantity * price).toFixed(2))}
        </p>
        <p className="text-sm">
          Qty: <span className="font-semibold">{quantity}</span>
        </p>
      </div>
    </div>
  );
};
export default Info;
