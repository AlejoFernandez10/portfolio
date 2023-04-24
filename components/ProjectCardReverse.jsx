import React from 'react'
import Image from 'next/image'

const ProjectCardReverse = ({title, img,  description}) => {
  return (
    <div  className='flex w-full flex-row-reverse justify-start  items-center'>

    <div className='w-full'>
      <Image width={1920} height={1080} alt={description} src={img} className='w-auto h-auto max-w-[470px] max-h-[250px] scale-100 hover:scale-105 transition-all duration-200 hover:shadow-2xl' />
    </div>

    <div className='flex flex-col justify-self-start relative left-0'>
      <h3 className='text-white text-center pb-7 pr-16 text-2xl font-medium z-50'>{title} </h3>
      <p className='text-gray-300 text-sm pr-20 self-center pb-10  z-50'>{description} </p>
    </div> 

  </div>
  )
}

export default ProjectCardReverse