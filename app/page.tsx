"use client "
import { Aboutsec, Herosec, Numsec, Valuessec, Whatsicon } from "@/components";
import Image from "next/image";
import saudiamap from '@/public/لقطة شاشة 2025-04-16 052920.png'

export default function Home() {
  return (
    <>
    <Herosec />
    <Aboutsec /> 
    <Valuessec />
    <div className="flex flex-col w-full justify-center items-center bg-white">
    <h1 className='md:text-lg text-lg font-sans font-bold text-center text-black md:my-12 my-8  w-1/2 translate-y-10'>
            فروعنا منتشرة حول المملكة
            </h1>
        <Image src={saudiamap} alt={""} />
    </div>
    <Numsec />


    <Whatsicon />
    </>
  );
}
