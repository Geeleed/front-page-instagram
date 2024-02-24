"use client";
import Link from "next/link";
import React, { useState } from "react";
import { InputText } from "./InputText";
import { InputPass } from "./InputPass";
import Image from "next/image";
import Footer from "./Footer";
import Or from "./Or";
import Instagramlogo from "./Instagramlogo";
import { GetTheApp } from "./GetTheApp";

type Props = {};

export default function Root({}: Props) {
  const [inputText, setInputText] = useState("");
  const [inputPass, setInputPass] = useState("");
  return (
    <div className=" absolute top-0 left-0 w-full h-full flex flex-col items-center gap-[0.6rem] p-10 max-sm:p-5 ">
      <br />
      <main className=" border border-gray-200 px-10 flex flex-col justify-center items-center w-full max-w-[23rem] ">
        <Instagramlogo />
        <form
          action=""
          method="post"
          className=" flex flex-col gap-2 w-full relative"
        >
          <InputText
            setTransfer={setInputText}
            placeholder={"Phone number, username, or email"}
          />
          <InputPass setTransfer={setInputPass} placeholder={"Password"} />
          <input
            className=" bg-[#4CB5F9] text-white p-1 rounded-lg my-2"
            type="submit"
            value={"Log in"}
          />
        </form>
        <Or />
        <Link
          className=" flex items-center text-[0.9rem] gap-1 font-semibold text-[#385185] my-3"
          href={"#"}
        >
          <Image
            className=" scale-[0.8]"
            src={"/svgs/social-facebook.svg"}
            width={25}
            height={10}
            alt=""
          />
          <p>Log in with Facebook</p>
        </Link>
        <Link href={"/accounts/password/reset"} className=" text-[0.7rem] mb-5">
          Forgot password?
        </Link>
      </main>
      <div className=" border border-gray-200 w-full max-w-[23rem] flex justify-center gap-2 text-[0.9rem] py-5">
        <p>{`Don't have an account?`}</p>
        <Link
          href={"/accounts/emailsignup"}
          className=" text-[#4CB5F9] font-bold"
        >
          Sign up
        </Link>
      </div>
      <GetTheApp />
      <br />
      <br />
      <Footer />
    </div>
  );
}
