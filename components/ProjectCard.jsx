'use client'
import React,{useState} from 'react'
import Image from 'next/image'

import { motion} from 'framer-motion'
import {RxRocket} from 'react-icons/rx'
import {AiOutlineGithub} from 'react-icons/ai'

import {FaReact} from 'react-icons/fa'

import {SiJavascript} from 'react-icons/si'
import {FaSass} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'

const ProjectCard = ({title, img, description, video}) => {
  
  


  
  return (
    <div  className='flex w-[100%] max-w-[350px] md:max-w-[750px] lg:max-w-[850px] md:gap-x-16 flex-col md:flex-row m-auto  justify-center items-center z-50'>

    <div  className='m-auto pb-5 w-full' >
      <Image width={1920} height={1080} alt={description} src={img} className='w-full min-w-[300px] lg:min-w-[370px]  hover:scale-105 transition-all duration-200 hover:shadow-2xl' />
    </div>

    <div className='w-full sm:self-end sm:ml-10 mb-5'>
    <div className='flex w-full justify-between items-start  mt-5 md:w-[90%]'>
      <h3 className='text-white ml-1   text-lg font-medium z-50 lg:text-xl'>{title} </h3>

      <div className=' pb-10 self-start ml-1 flex gap-4 '>
        <a href="" className='flex flex-col text-xs text-[#9333EA]'><AiOutlineGithub  className='text-[24px] cursor-pointer  hover:opacity-80'/></a>
        <a href="" > <RxRocket className='text-[24px]  text-[#9333EA] cursor-pointer  hover:opacity-80 ' /></a>
      </div>
    </div> 

      <p className='text-gray-300 text-[14px] self-center   z-50 w-[100%] md:w-[100%] lg:w-[95%] '>{description} </p>

      <div className='flex w-full justify-between items-start  mt-5 md:w-[90%]'>
       <h4 className='text-gray-100 self-start ml-1 font-semibold'>Techs used:</h4>

        <div className='flex gap-3'>

        {title === 'TwentyDev' &&
        <>          
          <FaReact className='text-[27px] text-cyan-400'/>
          <SiTailwindcss className='text-[27px] text-cyan-400' />
        </>

        }

        {title === 'E-commerce' &&
        <>
          <FaReact className='text-[27px] text-cyan-400'/>
          <SiTailwindcss className='text-[27px] text-cyan-400' />
          
          <FaBootstrap className='text-[27px] text-purple-600' />
        </>

        }

        {title === 'Coffee-shop' &&
        <>
          <SiJavascript className='text-[27px] text-yellow-400' />
          <FaSass className='text-[27px] text-pink-600'/>
          <FaBootstrap className='text-[27px] text-purple-600' />
        </>

        }       
        </div>

      </div>


    </div>

    

  </div>
  )
}

export default ProjectCard