'use client'

import React from 'react'
import Image from 'next/image'

import {RxRocket} from 'react-icons/rx'
import {AiOutlineGithub} from 'react-icons/ai'
import {FaReact} from 'react-icons/fa'
import {SiNextdotjs} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {FaSass} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
import Context from '@/app/context/Context'
import { motion } from 'framer-motion'
import { useContext } from 'react'

const ProjectCardReverse = ({title, img,  description}) => {

  const [theme, setTheme] = useContext(Context)

  return (
    <motion.div initial={{y:150}} whileInView={{y:0}} transition={{ duration: 0.5}} viewport={{once:true}}  className={'flex w-[100%] max-w-[350px] md:max-w-[750px] lg:max-w-[850px] md:gap-x-5 flex-col md:flex-row-reverse m-auto  justify-center items-center'}>

    <div  className={'m-auto pb-5 w-full'} >
      <Image width={1920} height={1080} alt={description} src={img} className={'w-full min-w-[300px] lg:min-w-[370px]  hover:scale-105 transition-all duration-200 hover:shadow-2xl'} />
    </div>

    <div>
    <div className={'flex w-full justify-between mt-5 md:w-[80%]'}>
      <h3 className={`${theme !== 'dark' ? 'text-gray-800' : 'text-white'} ml-1   text-lg font-medium z-50 lg:text-xl`}>{title} </h3>

      <div className={' pb-10 self-start ml-1 flex gap-4 '}>
        <a href="" className={'flex flex-col text-xs text-[#9333EA]'}><AiOutlineGithub  className={'text-[24px]'}/></a>
        <a href="" > <RxRocket className={'text-[24px]  text-[#9333EA] cursor-pointer  hover:opacity-80 '} /></a>
      </div>
    </div> 

      <p className={`${theme !== 'dark' ? 'text-gray-600' : 'text-gray-300'} text-[14px] self-center  z-50 w-[100%] md:w-[80%]`}>{description} </p>

      <div className={'flex w-full justify-between items-start  mt-5 md:w-[80%]'}>
       <h4 className={`${theme !== 'dark' ? 'text-gray-800' : 'text-gray-100'} self-start ml-1 font-semibold`}>Techs used:</h4>

        <div className={'flex gap-3'}>

        {title === 'YourResto' &&
        <>
          <SiNextdotjs className={'text-[27px]'} />
          <FaReact className={'text-[27px] text-cyan-400'}/>
          <SiTailwindcss className={'text-[27px] text-cyan-400'} />
        </>

        }

        {title === 'Gym Site' &&
        <>
          <SiJavascript className={'text-[27px] text-yellow-400'} />
          <FaSass className={'text-[27px] text-pink-600'}/>
          <FaBootstrap className={'text-[27px] text-purple-600'} />
        </>

        }    
        </div>

      </div>

    </div>

    

  </motion.div>
  )
}

export default ProjectCardReverse