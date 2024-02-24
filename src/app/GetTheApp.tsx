"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const GetTheApp = () => {
  return (
    <div className=" grid grid-cols-2 gap-3 ">
      <p className=" col-span-2 text-center text-[0.9rem] mt-1">Get the app.</p>
      <Link href={"#"}>
        <Image
          src={"/pngs/play-store.png"}
          height={100}
          width={130}
          alt=""
          className="h-full"
        />
      </Link>
      <Link href={"#"}>
        <Image
          src={"/pngs/ms.png"}
          height={100}
          width={105}
          alt=""
          className="h-full"
        />
      </Link>
    </div>
  );
};
