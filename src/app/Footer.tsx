import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className=" flex flex-col items-center gap-y-5 text-gray-600 text-[0.75rem] ">
      <div className=" flex justify-center gap-x-5 gap-y-2 flex-wrap">
        <Link href={"#"}>{"Meta"}</Link>
        <Link href={"#"}>{"About"}</Link>
        <Link href={"#"}>{"Blog"}</Link>
        <Link href={"#"}>{"Jobs"}</Link>
        <Link href={"#"}>{"Help"}</Link>
        <Link href={"#"}>{"API"}</Link>
        <Link href={"#"}>{"Privacy"}</Link>
        <Link href={"#"}>{"Cookie Settings"}</Link>
        <Link href={"#"}>{"Terms"}</Link>
        <Link href={"#"}>{"Locations"}</Link>
        <Link href={"#"}>{"Instagram Lite"}</Link>
        <Link href={"#"}>{"Threads"}</Link>
        <Link href={"#"}>{"Contact Uploading & Non-Users"}</Link>
        <Link href={"#"}>{"Meta Verified"}</Link>
      </div>
      <div className=" flex gap-3 mb-14">
        <select className=" outline-none">
          <option>English</option>
          <option>ไทย</option>
        </select>
        <label>{"© 2024 Instagram from Meta"}</label>
      </div>
    </footer>
  );
}
