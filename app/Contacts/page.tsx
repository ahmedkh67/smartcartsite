"use client"

import React from 'react'
import Image from 'next/image'
import Email from '@/public/gmail.svg'
import Location from '@/public/location.svg'
import Phone from '@/public/Whatsapp Icon.svg'
import { useState } from 'react'


const Page = () => {


    
  const [Address , setAddress] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.663785866609!2d46.70025692518167!3d24.600796855599707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05626d420177%3A0xfb6caaab1eac1310!2z2KfZhNmC2LXYsSDZhdmI2YQ!5e0!3m2!1sar!2ssa!4v1744529218364!5m2!1sar!2ssa") ;
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => { setAddress(e.target.value) }

  return (
    <>
    <div className="flex flex-col justify-end items-center w-full h-[300px] bg-white">
        <h1 className='text-3xl text-black font-bold font-sans text-center mb-10'>
            بإمكانك التواصل معنا بأحد الطرق التالية
        </h1>
        
    </div>
    <div className="flex justify-center overflow-hidden">
        <div className="whitetriangle">

        </div>
    </div>

    <div className="flex md:flex-row flex-col-reverse bg-[#f6ac00] w-full py-10 ">
        <div className="flex w-full ">
            <form action="" method="post" className=' flex flex-col justify-start items-end p-4 w-full px-10 md:px-5 md:my-3 md:ml-30'>

                <h1 className='text-md text-white font-bold font-sans text-end'>
                    الإسم الكريم *
                </h1>
                <input type="text" name="name" id="nameinput" className='h-8 w-full bg-white text-black text-md my-3 md:mb-8 ' />

                <h1 className='text-md text-white font-bold font-sans text-end'>
                     رقم الجوال *
                </h1>
                <input type="text" name="name" id="nameinput" className='h-8 w-full bg-white text-black text-md my-3 md:mb-8 ' />

                <h1 className='text-md text-white font-bold font-sans text-end'>
                    البريد الالكتروني *
                </h1>
                <input type="text" name="name" id="nameinput" className='h-8 w-full bg-white text-black text-md my-3 md:mb-8 ' />

                <h1 className='text-md text-white font-bold font-sans text-end'>
                    الرسالة *
                </h1>
                <input type="text" name="name" id="nameinput" className='h-35 w-full bg-white text-black text-md my-3 md:mb-8 ' />

                <button className=' px-6 bg-white py-2 text-center text-cyan-900 md:m-0 mt-10 md:w-28 w-full font-sans  '>
                    ارسال
                </button>   
            </form>
        </div>


        <div className="flex flex-col w-full justify-center items-center">


                <div className="flex flex-row-reverse justify-end items-center p-4 w-full md:w-110 bg-yellow- px-10 md:px-5 md:my-3 ">
                    <div className="flex flex-row-reverse w-1/6 ml-7 ">
                        <Image src={Email} alt={''} width={60} height={50} />
                    </div>
                    <div className="flex w-full flex-col justify-end items-end">
                        <h1 className='text-md text-white font-bold font-sans text-end'>
                            البريد الالكتروني
                        </h1>
                        <h1 className='text-md text-white font-bold font-sans text-end'>
                            ALHARBAI_10@hotmail.com
                        </h1>
                    </div>
                </div>

                <div className="flex flex-row-reverse justify-center items-center p-4 w-full md:w-110 bg-yellow- px-10 md:px-5 md:my-3 ">
                    <div className="flex flex-row-reverse w-1/6 ml-7 ">
                        <Image src={Phone} alt={''} width={70} height={50} />
                    </div>
                    <div className="flex w-full flex-col justify-end items-end">
                        <h1 className='text-md text-white font-bold font-sans text-end'>
                            الهاتف
                        </h1>
                        <h1 className='text-md text-white font-bold font-sans text-end'>
                            054 336 7208
                        </h1>
                    </div>
                </div>

                <div className="flex flex-row-reverse justify-end items-center p-4 w-full md:w-110 bg-yellow- px-10 md:px-5 md:my-3 ">
                    <div className="flex flex-row-reverse w-1/6 ml-7 ">
                        <Image src={Location} alt={''} width={60} height={50} />
                    </div>
                    <div className="flex w-full flex-col justify-end items-end">
                        <h1 className='text-md text-white font-bold font-sans text-end'>
                            الموقع
                        </h1>
                        <h1 className='text-md text-white font-bold font-sans text-end'>
                        عدة فروع في المملكة

                        </h1>
                    </div>
                </div>
               
                <div className="flex h-110 flex-col p-4 w-full justify-end items-end md:w-full bg-yellow- px-10 md:px-15 md:pr-45 my-3 ">
                    <select value={Address} onChange={handleChange} name='Nameeinput' id='Nameeinput'   className=' px-6 bg-white py-2 text-center text-cyan-900 md:mb-3 mb-3 mt-10 md:w-28 w-full font-sans '>
                                <option value={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.663785866609!2d46.70025692518167!3d24.600796855599707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05626d420177%3A0xfb6caaab1eac1310!2z2KfZhNmC2LXYsSDZhdmI2YQ!5e0!3m2!1sar!2ssa!4v1744529218364!5m2!1sar!2ssa"}
                        >  الرياض </option>
                        <option value={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.691190208601!2d39.59818042518501!3d24.496154459739444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbeecafc81d35%3A0x34cbfdba1ea0415e!2sCenomi%20Al%20Noor%20Mall!5e0!3m2!1sar!2ssa!4v1744529034034!5m2!1sar!2ssa"}
                        > المدينة </option>
                        <option value={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.2395148105243!2d39.19831348214042!3d21.5765719189529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d1edb45066d1%3A0xd6aab89999935238!2z2KfZhNi52LHYqNipINin2YTYsNmD2YrYqQ!5e0!3m2!1sar!2ssa!4v1744529960833!5m2!1sar!2ssa"}
                        >  جدة </option>
                        <option value={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233190.75142742155!2d38.29200720339167!3d24.044973212906932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15b9060be2a84147%3A0xc294f09f5a959010!2z2YrZhtio2Lk!5e0!3m2!1sar!2ssa!4v1744529296487!5m2!1sar!2ssa"}
                        >  ينبع </option>
                        
                    </select> 
                    
                    
                    <iframe src={Address}
                    width="100%" height="100%">

                    </iframe>
                </div>


                


        </div>
        
    </div>

    </>
  )
}

export default Page