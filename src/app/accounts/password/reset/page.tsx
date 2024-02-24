"use client";

import Footer from "@/app/Footer";
import { InputText } from "@/app/InputText";
import Or from "@/app/Or";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Reset({}: Props) {
  const [inputText, setInputText] = useState("");
  return (
    <div className=" absolute h-full w-full">
      <title>Reset Password</title>
      <br />
      <p className=" bg-white font-[instagram-logo] text-[2rem] px-5 py-2 border-b border-gray-300 sticky top-0">
        instagram
      </p>
      <div className=" flex flex-col w-full items-center mt-10">
        <section className=" w-full max-w-[23rem] flex flex-col items-center border border-gray-300 px-10 pt-7">
          <form
            action=""
            method="post"
            className=" flex flex-col w-full items-center text-center "
          >
            <Image
              className=" m-3"
              src={"/svgs/lock-circle.svg"}
              height={100}
              width={100}
              alt=""
            />
            <b>{"Trouble logging in?"}</b>
            <p className=" text-[0.9rem] text-gray-500 my-2">
              {`Enter your email, phone, or username and we'll send you a link to
              get back into your account.`}
            </p>
            <InputText
              setTransfer={setInputText}
              placeholder={"Email, Phone, or Username"}
            />
            <input
              type="submit"
              value={"Send login link"}
              className={
                (inputText
                  ? " bg-[#4CB5F9] hover:cursor-pointer hover:bg-[#439dda]"
                  : " bg-[#4CB5F988] opacity-[0.8]") +
                " w-full p-2 rounded-lg my-4 text-[0.85rem] text-white"
              }
              disabled={!Boolean(inputText)}
            />
            <Link
              className=" text-[0.75rem] text-gray-600 w-full"
              href={
                "https://www.instagram.com/accounts/account_recovery/?username="
              }
            >
              {`Can't reset your password?`}
            </Link>
            <br />
            <Or />
            <Link
              className=" text-[0.85rem] font-semibold hover:text-gray-400 w-full"
              href={"/accounts/emailsignup/"}
            >
              Create new account
            </Link>
          </form>
          <br />
          <br />
          <br />
        </section>
        <Link
          className="hover:text-gray-400 font-semibold max-w-[23rem] bg-gray-100 w-full p-3 text-center text-[0.8rem] border border-gray-300"
          href={"/"}
        >
          Back to login
        </Link>
      </div>
      <br />
      <br />
      <br />
      <div className=" px-10 max-sm:p-5 ">
        <Footer />
      </div>
    </div>
  );
}
