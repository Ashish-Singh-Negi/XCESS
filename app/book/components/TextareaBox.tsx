"use client";

const TextareaBox = ({
  label,
  isRequired,
  placeholder,
}: {
  label: string;
  isRequired: boolean;
  placeholder: string;
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
        <textarea
          placeholder={placeholder}
          className="block h-28 md:h-32 w-full rounded-lg md:rounded-2xl outline-none border-2 border-[#B5B5B5] px-3 py-2 focus-within:border-primary text-base  md:text-lg mt-2 md:mt-4 resize-none"
        />
      </div>
    </div>
  );
};
export default TextareaBox;
