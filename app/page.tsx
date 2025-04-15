"use client "

import Image from "next/image";
import { Aboutsec, Herosec, Numsec, Valuessec, Whatsicon } from "@/components";

export default function Home() {
  return (
    <>
    <Herosec />
    <Aboutsec /> 
    <Valuessec />
    <Numsec />


    <Whatsicon />
    </>
  );
}
