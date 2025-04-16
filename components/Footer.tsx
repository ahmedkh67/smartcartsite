import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import insta from '@/public/insta copy.svg'
import Email from '@/public/gmail copy.svg'

const Footer = () => {
  return (<>
    <div className="flex bg-white w-full md:px-45 px-5 md:flex-row flex-col-reverse pt-10">
        <div className="flex w-full Logobackground h-70 mt-5">

        </div>



        <div className="flex flex-col w-full bg-white md:pt-0 pt-10">
            <h1 className='text-2xl text-end font-bold font-sans text-[#d48600]'>
                تابعنا
            </h1>
            <div className="flex justify-end items-center mt-3">
                <div className="flex w-8 h-8 m-0.5 rounded-full border-1 border-[#005053] border-solid justify-center items-center ">
                    <Link href={ "https://www.instagram.com/smartcart2020?igsh=bnZ3NnF2MTF0eTcx" } >
                        <Image src={insta} width={24} height={20} alt={'social icon media'} />
                    </Link>
                </div>
                <div className="flex w-8 h-8 m-0.5 rounded-full border-1 border-[#005053] border-solid justify-center items-center ">
                    <Link href={"mailto:ALHARBAI_10@hotmail.com"} >
                        <Image src={Email} width={24} height={20} alt={'social icon media'} />
                    </Link>
                </div>
            </div>
        </div>


        <div className="flex flex-col justify-start items-end w-full bg-white md:pt-0 pt-10">
            <h1 className='text-2xl text-end font-bold font-sans text-[#d48600]'>
                روابط سريعة
            </h1>
            <ul className='flex justify-end items-center'>
                <Link href="./">

                    <li className='text-md text-end font-bold font-sans mt-3'>
                        الصفحة الرئيسية
                    </li>
                    <li className='text-md text-end font-bold font-sans mt-3'>
                        خدماتنا
                    </li>
                    <li className='text-md text-end font-bold font-sans mt-3'>
                        تواصل معنا
                    </li>

                </Link>
            </ul>
        </div>


        <div className="flex flex-col w-full bg-white justify-start items-end  md:pt-0 py-10">
            <h1 className='text-md text-end font-sans w-3/4 text-[#d48600]'>
            Prince Muqrin Ibn Abdulaziz Rd.
            Madinah,
            Saudi Arabia
            </h1>
            <h1 className='text-md text-start font-sans mt-6'>
                053 031 0044
            </h1>
        </div>
    </div>
    <div className="flex w-full bg-[#d48600] p-4 justify-center items-center">
        <h1 className='text-md text-center font-sans text-white'>
            . جميع الحقوق محفوظة لمؤسسة العربة الذكية للترفيه 
        </h1>
    </div>
    </>
  )
}

export default Footer