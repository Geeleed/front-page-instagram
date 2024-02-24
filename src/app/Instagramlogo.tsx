import Link from "next/link";
import React from "react";

type Props = {};

export default function Instagramlogo({}: Props) {
  return (
    <Link href={"/"} className=" font-[instagram-logo] text-[3rem] my-10">
      Instagram
    </Link>
  );
}
