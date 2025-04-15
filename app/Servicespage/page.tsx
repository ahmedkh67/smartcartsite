import { Numsec, ServiceCard, Value } from '@/components'
import React from 'react'
import Logo from '@/public/smartcartlogo.svg'



const page = () => {
  return (
    <>
    <div className="flex flex-col justify-end items-center w-full h-[300px] bg-[#005053]">
            <h1 className='text-3xl text-white font-bold font-sans text-center mb-10'>
                تعرف على خدماتنا
            </h1>
            
        </div>
        <div className="flex justify-center overflow-hidden">
            <div className="greentriangle">

            </div>
        </div>



    <div className="flex md:flex-row flex-col bg-white justify-center items-center px-4 pt-10 ">       
    <ServiceCard title={' قطارات الاطفال الترفيهية '} dis={'قطارات ترفيهية مصممة للاطفال'} linko={"/Trainservice"} />
    <ServiceCard title={' عربات الدفع اليدوي'} dis={' عربات دفع مريحة و عملية '} linko={"/CartService"} />
    <ServiceCard title={' العربات الكهربائية '} dis={' عربات كهربائية امنة تحاكي الواقع '} linko={"/ElectriccartService"} />
    </div>

    <div className="flex md:flex-row flex-col bg-white justify-center items-center px-4 ">       
    
        <ServiceCard title={' ادارة و تشغيل المراكز الترفيهية '} dis={' خدمات متكاملة في تصميم و ادارة المراكز '} linko={"/ManagingService"} />
        <ServiceCard title={' مبيعات البالون '} dis={'قطارات ترفيهية مصممة للاطفال'} linko={"/BallonService"} />
        
    </div>


    <Numsec />

    </>
  )
}

export default page