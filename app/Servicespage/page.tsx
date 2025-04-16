import { Numsec, ServiceCard } from '@/components'
import React from 'react'
import Image from 'next/image'
import saudiamap from '@/public/لقطة شاشة 2025-04-16 052920.png'

const page = () => {
  return (
    <>
    <div className="flex flex-col justify-end items-center w-full h-[300px] bg-[#f6ac00]">
            <h1 className='text-3xl text-white font-bold font-sans text-center mb-10'>
                تعرف على خدماتنا
            </h1>
            
        </div>
        <div className="flex justify-center overflow-hidden">
            <div className="greentriangle">

            </div>
        </div>



    <div className="flex md:flex-row flex-col bg-white justify-center items-center px-4 pt-10 ">       
    <ServiceCard title={' قطارات الاطفال الترفيهية '} dis={'قطارات ترفيهية مصممة للاطفال'} linko={"/Trainservice"} src={'trainimg2'} />
    <ServiceCard title={' عربات الدفع اليدوي'} dis={' عربات دفع مريحة و عملية '} linko={"/CartService"} src={'carto'} />
    <ServiceCard title={' العربات الكهربائية '} dis={' عربات كهربائية امنة تحاكي الواقع '} linko={"/ElectriccartService"} src={'elctrcar1'} />
    </div>

    <div className="flex md:flex-row flex-col bg-white justify-center items-center px-4 ">       
    
        <ServiceCard title={' ادارة المراكز الترفيهية '} dis={' خدمات متكاملة في تصميم و ادارة المراكز '} linko={"/ManagingService"} src={'manag5'} />
        <ServiceCard title={' مبيعات البالون '} dis={' بلالين هيليوم مميزة بشخصيات محبوبة '} linko={"/BallonService"} src={'ballon2'} />
        
    </div>
      <div className="flex flex-col w-full justify-center items-center bg-white">
      <h1 className='md:text-lg text-lg font-sans font-bold text-center text-black md:my-12 my-8  w-1/2 translate-y-10'>
              فروعنا منتشرة حول المملكة
              </h1>
          <Image src={saudiamap} alt={""} />
      </div>

    <Numsec />

    </>
  )
}

export default page