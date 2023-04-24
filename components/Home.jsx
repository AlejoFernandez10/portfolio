'use client'

import React,{useState} from 'react'

import Image from 'next/image'

import '../app/globals.css'

import myPic from '../app/assets/myPic.png'


import Loader from './Loader'
import '../app/globals.css'

import { motion } from 'framer-motion'


const Home = () => {
  const [loader, setLoader] = useState(true)

  setTimeout(()=>{
    setLoader(false)

  }, 1800)


  if(loader){
    return(
      <Loader />
    )
  }else{

    return (
      <div className='gradient h-full  flex flex-col items-center justify-center'>
        
      
  
  <section className="w-full max-w-[1000px] h-[100vh]  flex justify-between items-center z-40">
  
    <div className=''>
      <span className='text-[16px] text-[#9333EA] font-medium leading-none '>Hi! My name is</span>
       <h1 className='text-[65px] mt-0.5  text-[#eee] font-semibold leading-none '>Alejo Fernandez</h1>
      <p className='mt-5 text-[#bbb]  leading-tight  w-[65%] text-lg'>Im a Front-end Web Developer looking for his first work experience.</p>
  
      <div className='pt-8'>
        <a href='#' className=" text-base border-[1px] font-regular border-[#9333EA] bg-[#9333EA] py-[9px] px-9 mr-3 rounded-[5px] text-white transition-all duration-200 hover:opacity-80">Projects</a>
        <a href='#' className=" text-base border-[1px] font-regular border-[#9333EA] py-[9px] px-6 rounded-[5px] text-white transition-all duration-200 hover:bg-[#9333EA] ">Lets connect</a>
      </div>
  
    </div>
  
    <motion.div initial={{y:30}} animate={{y:-30}} transition={{duration:4, repeat:Infinity}}   className='relative flex justify-center items-center transition-all'>
      
        <Image width={200} height={100} alt='Image from my LinkedIn profile' src={myPic} className='h-auto w-auto  relative  rounded-full z-50  lg:mr-20 ml-20 mb-4' />
    </motion.div>
  </section>
  
  
      </div>
    )
  }
}

export default Home