"use client";
import React, { useState } from "react";

export const InputPass = ({
  setTransfer,
  placeholder,
}: {
  setTransfer: React.Dispatch<React.SetStateAction<string>>;

  placeholder: string;
}) => {
  const [value, setValue] = useState("");
  const [nowShow, setNowShow] = useState(false);
  return (
    <div className=" relative w-full h-10 bg-gray-100 bg-opacity-50">
      <label
        className={
          " text-[0.8rem] text-gray-500 px-2 h-full absolute flex items-center transition-all origin-top-left " +
          (value && " px-3 scale-[0.7] -translate-y-1")
        }
      >
        {placeholder}
      </label>
      <input
        className={
          " border border-gray-200 px-2 focus:outline focus:outline-gray-500 rounded-sm h-full w-full absolute flex items-center transition-all origin-bottom-left bg-transparent " +
          (value && "pt-3")
        }
        type={nowShow ? "text" : "password"}
        onChange={(e) => {
          setValue(e.target.value);
          setTransfer(e.target.value);
        }}
      />
      {value && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setNowShow((prev) => !prev);
          }}
          className=" h-full flex items-center absolute right-2 hover:text-gray-400 text-[0.9rem] font-semibold"
        >
          {nowShow ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
};
