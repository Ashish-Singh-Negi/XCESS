import PackageCard from "./PackageCard";

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
      <h2 className="text-base md:text-xl text-left font-semibold border-b-2 border-[#EDEDED] pb-4 px-2">
        Select Package Size
      </h2>

      <div className="h-full w-full sm:px-6 py-4 flex flex-col items-start gap-3">
        {packagesType.map((pack, i) => (
          <PackageCard
            key={pack.type + i}
            imageSrc={pack.imageSrc}
            type={pack.type}
            price={pack.price}
            weight={pack.weight}
          />
        ))}
      </div>
    </section>
  );
};
export default SelectPackage;
