"use client "

import React from 'react'
import Value from './Value'
import global from '@/public/plant.svg' 
import quality from '@/public/QualityIcon.svg'
import test from '@/public/TestIcon.svg'
import person from '@/public/Person.svg'
import world from '@/public/globe.svg'

function Valuessec () {
  return (
    <>
    <div className="flex bg-white md:pb-20 pb-10 pt-5 justify-center ">
        <h1  className='text-lg font-bold font-sans test-black text-center'>
            قيمنا
        </h1>
    </div>
    <div className="flex md:flex-row flex-col bg-white justify-center items-center px-4 ">       
        <Value title={' السلامة '} dis={' الأولوية القصوى في جميع انشطتنا لضمان بيئة امنة للاطفال والعائلات '} src={test} />   
        <Value title={' الابتكار '} dis={' حلول ترفيهية متجددة تواكب التطورات العالمية '} src={world} />
        <Value title={' الجودة '} dis={' تقديم منتجات و خدمات عالية الجودة تتجاوز توقعات العملاء '} src={quality} />
    </div>
    <div className="flex md:flex-row flex-col bg-white justify-center items-center px-4 ">       
     
        <Value title={' الاستدامة '} dis={'الالتزام باستخدام تقنيات و اساليب صديقة للبيئة'} src={global} />
        <Value title={' رضى العملاء '} dis={' تجقيق اعلى مستويات الرضى من خلال خدمات متكاملة '} src={person} />
        {/*    <Value title={'الاستدامة '} dis={'الالتزام باستخدام تقنيات صديقة للبيئة'} src={global} />    */}
    </div>

    </>
  )
}

export default Valuessec