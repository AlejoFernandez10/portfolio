'use client'

import React,{useState} from 'react'

import Image from 'next/image'

import '../app/globals.css'

import myPic from '../app/assets/myPic.png'


import Loader from './Loader'
import '../app/globals.css'

import { motion } from 'framer-motion'
import TruckAnimation from './TruckAnimation'
import bg from '../app/assets/bg.svg'

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
      <div className='gradient h-full flex flex-col items-center justify-center '>
        
      
  
  <section className="w-full max-w-[1100px] h-[100vh]  flex flex-col-reverse sm:flex-row-reverse place-content-center justify-center items-center z-40  p-4 ">
  <Image width={1920} height={1080} src={bg} priority alt="background" className="w-[100%] min-h-[120vh] top-[-50px]  object-cover z-0  fixed" />
  
    <motion.div initial={{y:30}} animate={{y:-30}} transition={{duration:4, repeat:Infinity}}   className='relative flex justify-center items-center transition-all sm:pl-5'>
      
        <Image width={190} height={180} priority alt='Image from my LinkedIn profile' src={myPic} className=' w-auto  relative  rounded-full z-50  h-[150px] sm:mr-10  mb-4 bottom-3 sm:h-[180px] sm:w-[200px] md:h-[230px] md:w-[250px]' />
    </motion.div>

    <div className='ml-8 mb-16 w-[100%] z-10 max-w-[300px] sm:max-w-[100%] sm:ml-10  lg:pr-20'>      

      <span className='text-[13px] text-[#9333EA] font-medium leading-none sm:text-[15px] md:text-[17px]'>Hi! My name is</span>
       <h1 className='text-[35px] mt-0.5  text-[#eee] font-semibold leading-none sm:text-[45px] md:text-[50px] lg:text-[60px] '>Alejo Fernandez</h1>
      <p className='mt-5 text-[#bbb]    w-[89%] text-sm sm:w-[65%] sm:text-[16px] md:text-[18px]'>Im a Front-end Web Developer looking for his first work experience.</p>
  
      <div className='pt-8'>
        <a href='#projects' className=" text-sm border-[1px] font-regular border-[#9333EA] bg-[#9333EA] py-[9px] px-9 mr-3 rounded-[5px] text-white transition-all duration-200 hover:opacity-80 sm:text-base lg:text-lg">Projects</a>
        <a href='#contact' className=" text-sm border-[1px] font-regular border-[#9333EA] py-[9px] px-6 rounded-[5px] text-white transition-all duration-200 hover:bg-[#9333EA]  sm:text-base lg:text-lg">Lets connect</a>
      </div>
    </div>
  
  
  <TruckAnimation />
  </section>
  
  
      </div>
    )
  }
}

export default Home