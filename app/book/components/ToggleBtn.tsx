"use client";

import { useState } from "react";

const ToggleBtn = ({ text }: { text: string }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center gap-2 px-2 my-2">
      <button
        onClick={() => setToggle(!toggle)}
        className={`h-6 w-12 px-1 rounded-xl flex items-center transition-transform cursor-pointer ${
          toggle ? "bg-primary" : "bg-gray-400"
        }`}
      >
        <div
          className={`h-4 w-4 rounded-full bg-white ${
            toggle
              ? "transition-transform translate-x-6"
              : "transition-transform translate-x-0"
          }`}
        ></div>
      </button>
      <span>{text}</span>
    </div>
  );
};
export default ToggleBtn;
