import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";

const packagesType = [
  {
    imageSrc: "/XL-Bag.png",
    type: "XL Large bag",
    weight: 25,
    price: 381.35,
  },
  {
    imageSrc: "/XS-Bag.png",
    type: "XS Small bag",
    weight: 5,
    price: 381.35,
  },
  {
    imageSrc: "/S-Bag.png",
    type: "Small bag",
    weight: 10,
    price: 381.35,
  },
  {
    imageSrc: "/M-Bag.png",
    type: "Medium bag",
    weight: 15,
    price: 381.35,
  },
  {
    imageSrc: "/L-Bag.png",
    type: "Large bag",
    weight: 20,
    price: 381.35,
  },
];

const SelectPackage = () => {
  return (
    <section className="w-full max-w-xl rounded-3xl border-2 border-[#DFDFDF] p-4 bg-white">
      <h2 className="text-lg md:text-xl font-semibold border-b-2 border-[#EDEDED] pb-4 px-2">
        Select Package Size
      </h2>

      <div className="h-full w-full sm:px-6 py-4 flex flex-col gap-3">
        {packagesType.map((pack) => (
          <div
            key={pack.type}
            className="h-[62px] w-full rounded-2xl shadow-lg flex justify-evenly gap-2 pl-4 pr-2"
          >
            <div className="w-full flex items-center">
              <div className="sm:h-10 sm:w-14">
                {" "}
                <Image
                  src={pack.imageSrc}
                  alt={pack.type}
                  height={40}
                  width={40}
                />
              </div>
              <div className="w-44 flex items-center">
                <p className="font-semibold">{pack.type}</p>
                <span className="size-1 bg-black rounded-full ml-2">.</span>
                <span className="text-[#999999] ml-2">{pack.weight} kgs</span>
              </div>
              <div className="flex items-center gap-4 ml-4">
                <span className="size-5 border-[0.5px] border-[#BBBBBB] flex justify-center items-center">
                  <FiMinus size={14} />
                </span>
                1
                <span className="size-5 border-[0.5px] border-[#BBBBBB] flex justify-center items-center">
                  <FiPlus size={14} />
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-end">
              <p className="text-xs font-bold text-[#448C00]">
                &#8377;{pack.price}
              </p>
              <span className="text-[#434343] text-[10px] font-medium">
                Qty: 1
              </span>
            </div>
            <p className="size-[12px] mt-2">
              <Image
                src="/icons/comment-info.svg"
                alt="comment info icon"
                height={16}
                width={16}
              />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SelectPackage;
