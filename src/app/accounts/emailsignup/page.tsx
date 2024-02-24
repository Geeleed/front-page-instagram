"use client";
import Footer from "@/app/Footer";
import { GetTheApp } from "@/app/GetTheApp";
import { InputPass } from "@/app/InputPass";
import { InputText } from "@/app/InputText";
import Instagramlogo from "@/app/Instagramlogo";
import Or from "@/app/Or";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Emailsignup({}: Props) {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className=" h-full w-full flex flex-col items-center">
        <section className=" mt-10 w-full max-w-[23rem]">
          <div className=" flex flex-col items-center text-center">
            <form
              action=""
              method="post"
              className=" w-full flex flex-col gap-2 border border-gray-300 px-10 pb-7 "
            >
              <Instagramlogo />
              <p>Sign up to see photos and videos from your friends.</p>
              <Link
                href={"#"}
                className=" flex justify-center items-center bg-[#4CB5F9] w-full p-1 rounded-lg gap-2 text-white text-[0.9rem] my-3"
              >
                <Image
                  src={"/svgs/social-facebook-2.svg"}
                  height={20}
                  width={25}
                  alt=""
                  className=" scale-90"
                />
                <p>Login with Facebook</p>
              </Link>
              <Or />
              <InputText
                setTransfer={setEmail}
                placeholder="Mobile Number or Email"
              />
              <InputText setTransfer={setFullname} placeholder="Full name" />
              <InputText setTransfer={setUsername} placeholder="Username" />
              <InputPass setTransfer={setPassword} placeholder="Password" />
              <p className=" text-[0.75rem] my-1 text-gray-500">
                People who use our service may have uploaded your contact
                information to Instagram.{" "}
                <Link
                  className=" text-gray-700"
                  href={
                    "https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fhelp%2Finstagram%2F261704639352628&e=AT3WcyWOiKkOnRSAuPXP7Ety9hUlFGKT5QTXRMbq_Dbd8wI2jOMqtvDR_yW4rbSDqkyHndkolIB60dgqSyc7zcsB6MuBZA7FMIzguwOKF2-5CKydX_dW6R-1rXb3aYHmZ6bsNxV7KYlfnRtybq_UCbI2zaGI_5cQzHCa6A"
                  }
                >
                  Learn More
                </Link>
              </p>
              <p className=" text-[0.75rem] my-1 text-gray-500">
                By signing up, you agree to our{" "}
                <Link
                  className=" text-gray-700"
                  href={
                    "https://help.instagram.com/581066165581870/?locale=en_US"
                  }
                >
                  Terms
                </Link>{" "}
                ,{" "}
                <Link
                  className=" text-gray-700"
                  href={
                    "https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fprivacy%2Fpolicy&e=AT3WcyWOiKkOnRSAuPXP7Ety9hUlFGKT5QTXRMbq_Dbd8wI2jOMqtvDR_yW4rbSDqkyHndkolIB60dgqSyc7zcsB6MuBZA7FMIzguwOKF2-5CKydX_dW6R-1rXb3aYHmZ6bsNxV7KYlfnRtybq_UCbI2zaGI_5cQzHCa6A"
                  }
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  className=" text-gray-700"
                  href={"https://www.instagram.com/legal/cookies/"}
                >
                  Cookies Policy .
                </Link>
              </p>
              <input
                className=" flex justify-center items-center bg-[#4CB5F9] w-full p-1 rounded-lg gap-2 text-white text-[0.9rem] my-3"
                type="submit"
                value={"Sign up"}
              ></input>
            </form>
            <div className=" text-[0.9rem] p-5 border border-gray-300 w-full my-2">
              Have an account?{" "}
              <Link className=" text-[#4CB5F9] font-semibold" href={"/"}>
                Log in
              </Link>
            </div>
            <GetTheApp />
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
      <div className=" px-10 max-sm:px-5">
        <Footer />
      </div>
    </div>
  );
}
