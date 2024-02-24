import React from "react";

type Props = {};

export default function Or({}: Props) {
  return (
    <div className=" border-b border-gray-300 w-full relative my-4">
      <label className=" absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 flex justify-center items-center bg-white rounded-full text-[0.8rem] ">
        OR
      </label>
    </div>
  );
}
