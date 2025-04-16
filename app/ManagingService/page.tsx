import { Numsec, Paragraph } from '@/components'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="flex justify-center items-center w-full md:h-[550px] h-[450px] HeroBackground">
        
       
    </div>
        <div className="flex justify-center items-center flex-col w-full h-[550px] absolute top-0 left-0">
            <h1 className='md:text-lg text-lg font-sans font-bold text-center text-white md:my-12 my-8  w-1/2'>
            ادارة و تشغيل المراكز الترفيهية
            </h1>
            
        </div>


        <div className="flex bg-[#005053] pt-10 px-5 md:px-10  flex-col items-center justify-center">
            <div className="flex justify-center items-center ">
                <Paragraph title='' dis=' نقدم خدمات متكاملة في تصميم و ادارة و تشغيل المراكز الترفيهية , بما يشمل مناطق الالعاب , و انشطة الترفيه لضمان تجربة متميزة و امنة للزوار ' />

            </div>

        </div>
        <div className="flex justify-center overflow-hidden">
            <div className="greentriangle">

            </div>
        </div>

        <div className="flex md:flex-row flex-col bg-white justify-center items-center px-4 pt-10 flex-wrap">       
           
        </div>

        <Numsec />
    </>
  )
}

export default page