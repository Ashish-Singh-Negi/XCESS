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
      <div className="mt-6">
        <label htmlFor="" className="text-xl font-semibold">
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
          className="block h-14 w-full rounded-2xl outline-none border-2 border-[#B5B5B5] px-5 py-2 focus-within:border-primary text-lg mt-2"
        />
      </div>
    </div>
  );
};
export default InputBox;
