'use client'
import React,{useState} from 'react'
import Image from 'next/image'

import { motion, AnimatePresence } from 'framer-motion'


const ProjectCard = ({title, img, description}) => {
  
  const [selectedTitle, setSelectedTitle] = useState(null)


  
  return (
    <div  className='flex w-full  justify-center items-center'>

    <motion.div layoutId={title} className='w-full' onClick={() => setSelectedTitle(title)}>
      <Image width={1920} height={1080} alt={description} src={img} className='w-auto h-auto  max-w-[470px] max-h-[250px] scale-100 hover:scale-105 transition-all duration-200 hover:shadow-2xl' />
    </motion.div>

    <div className='flex flex-col'>
      <h3 className='text-white text-center pb-7 pl-16 text-2xl font-medium z-50'>{title} </h3>
      <p className='text-gray-300 text-sm pl-20  self-center pb-10  z-50'>{description} </p>
    </div> 

  </div>
  )
}

export default ProjectCard