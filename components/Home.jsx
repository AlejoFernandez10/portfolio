'use client'

import React,{useState, useContext} from 'react'

import Image from 'next/image'
import Context from '@/app/context/Context'
import '../app/globals.css'

import myPic from '../public/assets/myPic.webp'


import Loader from './Loader'
import '../app/globals.css'

import { motion } from 'framer-motion'
import TruckAnimation from './TruckAnimation'
import bg from '../public/assets/bg.svg'
import bgWhite from '../public/assets/bg-white.svg'

const Home = () => {
  const [loader, setLoader] = useState(true)

  const [theme, setTheme] = useContext(Context)


    
  setTimeout(()=>{
    setLoader(false)

  }, 1800)


  if(loader){
    return(
      <Loader />
    )
  }else{

    return (
      <div className={'gradient relative w-full h-full flex flex-col items-center justify-center z-0'}>
        
      
  
  <div  className={"w-full max-w-[1000px] min-h-[90vh] sm:min-h-[100vh]  flex flex-col-reverse sm:flex-row-reverse place-content-center justify-center items-center z-40  p-4 "}>

    {theme === 'dark' ?
      <Image width={1920} height={1080} src={ bg } priority alt="background" className={"w-[100%] min-h-[120vh] top-[-50px]  object-cover z-0  fixed"} />
    
    :
    <Image width={1920} height={1080} src={ bgWhite } priority alt="background" className={"w-[100%] min-h-[120vh] top-[-50px]  object-cover lg:object-contain z-0  fixed"} />
    }
  
    <motion.div   initial={{y:-40}} animate={{y:0}}  transition={{duration:5 , repeat:Infinity}}    className={'relative flex justify-center items-center transition-all sm:pl-5'}>

    
          <Image width={190} height={180} priority alt='Small avatar of me' src={myPic} className={' w-auto  relative  rounded-full z-50  h-[150px] sm:mr-10 md:mr-20  mb-4 bottom-3 sm:h-[180px] sm:w-[200px] md:h-[230px] md:w-[250px]'} />

        
    </motion.div>

    <motion.div  initial={{opacity:0}} animate={{opacity:1}}  transition={{duration:1}} className={'ml-8 mb-16 w-[100%] z-10 max-w-[300px] sm:max-w-[100%] sm:ml-10  lg:pr-10 lg:ml-5'}>      

      <span className={'text-[13px] text-[#9333EA] font-medium leading-none sm:text-[15px] md:text-[17px]'}>Hi! My name is</span>
       <h1 className={`text-[35px] mt-0.5    ${theme !== 'dark' ? 'text-[#1F1D2B] ': 'text-gray-50'} font-semibold leading-none sm:text-[45px] md:text-[50px] lg:text-[60px] xl:text-[65px]`}>Alejo Fernandez</h1>
      <p className={`mt-5   ${theme !== 'dark' ? 'text-gray-600': 'text-[#bbb]'} font-medium w-[89%] text-sm sm:w-[65%] sm:text-[16px] md:text-[18px] `}>Im a Front-end Web Developer looking for his first work experience.</p>
  
      <motion.div className={'pt-8'} initial={{opacity:0}} animate={{opacity:1}}  transition={{duration:1.5}}>
        <a href='#projects' className={" text-sm border-[1px] font-regular border-[#9333EA] bg-[#9333EA] py-[9px] px-9 mr-3 rounded-[5px]  text-white transition-all duration-200 hover:opacity-80 sm:text-base lg:text-lg"}>Projects</a>
        <a href='#contact' className={` text-sm border-[1px] font-regular border-[#9333EA] py-[9px] px-6 rounded-[5px]  ${theme !== 'dark' ? 'text-gray-800': 'text-[#fff]'} transition-all duration-200 hover:bg-[#9333EA] hover:text-white  sm:text-base lg:text-lg`}>Contact me!</a>
      </motion.div>
    </motion.div>
  
  
  </div>
  <TruckAnimation  />
  
  
      </div>
    )
  }
}

export default Home