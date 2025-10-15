"use client";

const InputBox = ({
  label,
  type = "text",
  isRequired,
  placeholder,
}: {
  label: string;
  isRequired: boolean;
  placeholder: string;
  type?: string;
}) => {
  return (
    <div className="w-full">
      <div className="mt-4 md:mt-6">
        <label className="text-base md:text-xl font-semibold">
          {label}{" "}
          {isRequired ? (
            <span className="text-[#FF0000]">*</span>
          ) : (
            <span>(Optional)</span>
          )}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="block caret-primary h-10 md:h-14 w-full rounded-lg md:rounded-2xl outline-none border-2 border-[#B5B5B5]  px-3 sm:px-5 py-2 focus-within:border-primary text-base md:text-lg mt-1 md:mt-2"
        />
      </div>
    </div>
  );
};
export default InputBox;
