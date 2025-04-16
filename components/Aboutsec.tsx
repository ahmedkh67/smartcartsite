"use client "

import React from 'react'
import { Paragraph } from '.'

const Aboutsec = () => {
  return (
    <>
    <div className="flex bg-[#f6ac00] pt-10 px-5 md:px-10  flex-col items-center justify-center">
        <div className="flex justify-center items-center ">
            
            <Paragraph title=' من نحن؟ ' dis=' مؤسسة العربة الذكية للترفيه انطلقت في عام 2017 متخصصة في تقديم حلول ترفيهية مبتكرة تجمع بين الامان والمتعة للاطفال و العائلات , تأسست المؤسسة لتكون علامة فارقة في صناعة الترفيه , حيث تقدم باقة متنوعة من الخدمات تشمل قطارات الاطفال الترفيهية , عربات الدفع اليدوي للاطفال , العربات الكهربائية و بالاضافة الى المراكز الترفيهية ' />

        </div>
        <div className="flex md:flex-row flex-col justify-center items-center  ">
            <Paragraph title=' رسالتنا' dis=' توفير حلول ترفيهية امنة و مبتكرة تعزز من تجربة الاطفال و العائلات بخدمات ذات جودة عالية و تصاميم عصرية متجددة ' />
            <Paragraph title=' رؤيتنا' dis=' ان نكون المؤسسة الرائدة في مجال الترفيه في المملكة العربية السعودية , بتقديم منتجات و خدمات مبتكرة تلبي احتياجات جميع افراد الاسرة , ونثري تجربة الزوار في المراكز التجارية و المناطق الترفيهية ' />
        </div>
     
    </div>
    <div className="flex justify-center overflow-hidden">
        <div className="greentriangle">

        </div>
    </div>
    </>
  )
}

export default Aboutsec