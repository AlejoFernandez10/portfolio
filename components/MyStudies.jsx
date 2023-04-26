'use client'
import React from 'react'
import {BsDot} from 'react-icons/bs'
import Image from 'next/image'
import triangle from '../app/assets/triangle.webp'
import Context from '@/app/context/Context'

import { useContext } from 'react'

const MyStudies = () => {

  const [theme, setTheme] = useContext(Context)


  return (
    <>
    <div className={'w-full'}>
            <h6 className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} text-2xl mb-12 mt-20 flex items-end relative `}>My Studies <Image width={25} height={10} alt='triangleDesign' src={triangle} className={' relative  bottom-[5px] left-[10px]'} /></h6>

            <div className={'w-full max-w-[1000px] flex flex-col gap-10 sm:flex-row md:gap-20 lg:gap-[120px]'}>

              <div>
                  <span className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} font-semibold text-lg ml-2 `}>
                    CoderHouse
                  </span>

                  <ul className={'border-l-[2px] border-[#9333EA] mt-5 pl-1.5 flex flex-col gap-2  '}>
                    <li className={`flex whitespace-nowrap items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm  md:text-[15px]`}><BsDot className={'text-lg'} />  Front end Web Developer with React</li>
                    <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[15px]`}><BsDot  className={'text-lg'}/>  React Js</li>
                    <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[15px]`}><BsDot  className={'text-lg'}/> Javascript </li>
                    <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[15px]`}><BsDot  className={'text-lg'}/> Web development </li>
                    
                  </ul>          
              </div>

              <div>
                  <span className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} font-semibold text-lg ml-2 `}>
                    Educacion IT
                  </span>
                  <ul className={'border-l-[2px] border-[#9333EA] mt-5 pl-1.5 flex flex-col gap-2 '} >
                    <li className={`flex whitespace-nowrap items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm  md:text-[15px]`}><BsDot className={'text-lg'} /> Javascript Advanced Developer</li>
                    <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[15px]`}><BsDot  className={'text-lg'}/> Bootstrap </li>
                    <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[15px]`}><BsDot  className={'text-lg'}/>  Sass & Less</li>
                    <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[15px]`}><BsDot  className={'text-lg'}/> Object Paradigm introduction </li>
                    <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[15px]`}><BsDot  className={'text-lg'}/> Javascript from Scratch</li>
                    <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[15px]`}><BsDot  className={'text-lg'}/> Web layout with html & css </li>
                    <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[15px]`}><BsDot  className={'text-lg'}/> Introduction to UX </li>
                    <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-[15px]`}><BsDot  className={'text-lg'}/> Web development with html </li>
                  </ul>   
              </div>

            </div>
          </div>
    </>
  )
}

export default MyStudies