"use client"

import { motion } from 'motion/react';
import { title } from 'process';
import React from 'react'

type paragraphparams = {
    title : string , 
    dis : string  
}

function Paragraph({title, dis} : paragraphparams){
  return (
    <>
    <motion.div initial={{scaleX: 0}} whileInView={{scaleX: 1}} transition={{duration: 0.5}} className=' md:w-1/2 px-0 md:px-5 '>
        <h1 className='text-md text-white font-bold font-sans text-center my-2'>
            {title}
        </h1>
        <p className='text-md text-white font-bold font-sans text-center mb-10'>
            {dis}
        </p>
    </motion.div>
    
    </>
  )
}

export default Paragraph ;