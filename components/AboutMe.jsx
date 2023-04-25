
import React from 'react'

import '../app/globals.css'
import darkBox from '../app/assets/darkBoxDesign.png'
import Image from 'next/image'

import {FaReact} from 'react-icons/fa'
import {SiNextdotjs} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {FaSass} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
import {FaGitAlt} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {SiFirebase} from 'react-icons/si'

import {AiFillHtml5} from 'react-icons/ai'
import triangle from '../app/assets/triangle.png'
import {BsDot} from 'react-icons/bs'

const AboutMe = () => {


  return (
    <section className='about-me min-h-[90vh] relative w-full flex justify-center z-50 bg-[#262737] pt-14' id='aboutme' >

      <div className='w-full max-w-[500px] md:max-w-[700px] z-40 p-4 pt-20 lg:max-w-[1000px]  '>
        <h4 className='text-white text-3xl lg:text-4xl mb-5 font-semibold flex relative '> About Me <Image width={30} height={15} alt='triangleDesign' src={triangle} className=' max-h-[30px] relative bottom-[-6px] left-[10px]' /></h4>

          <p className='text-gray-400 text-sm font-semibold lg:w-[75%] lg:text-[15px]'>
          My name is Alejo Fernandez, I am a 20 year old <span className='text-[#9333EA]'>Front-end Developer</span>  based in Buenos Aires, Argentina. 
          I have been studying frontend development for a year now, and my objective is to become the best possible version of myself, so there is still a long road to walk.

          I am a very <span className='text-[#9333EA]'>disciplined</span> person with a strong personality who loves to put <span className='text-[#9333EA]'>difficult challenges</span> to himself, that is why I improve so fast and why you will never see any calculator app or to-do lists here.
          </p>

            <h5 className='text-gray-100 text-2xl mb-12 mt-20 flex items-end relative '>My Stack <Image width={25} height={10} alt='triangleDesign' src={triangle} className=' relative  bottom-[5px] left-[10px]' /> </h5>

            {/* MY STACK */}
          <div className=' flex gap-7 flex-wrap lg:w-[75%]'>


            <div className='flex flex-col justify-center '>
              <FaReact className='text-[35px] text-cyan-500 ml-1 mb-1.5 lg:text-[45px]'/>
              <span className='text-gray-400 text-sm'>React Js</span>
            </div>

            <div className='flex flex-col justify-center '>
              <SiNextdotjs className='text-[35px]  ml-1 mb-1.5 lg:text-[45px]'/>
              <span className='text-gray-400 text-sm'>Next Js</span>
            </div>

            <div className='flex flex-col justify-center '>
              <SiJavascript className='text-[35px] text-yellow-400  ml-2 mb-1.5 lg:text-[45px]'/>
              <span className='text-gray-400 text-sm'>Javascript</span>
            </div>

            <div className='flex flex-col justify-center '>
              <FaSass className='text-[35px] text-pink-400   mb-1.5 lg:text-[45px]'/>
              <span className='text-gray-400 text-sm ml-1'>Scss</span>
            </div>  

            <div className='flex flex-col justify-center '>
              <SiFirebase className='text-[35px] text-orange-500  ml-1 mb-1.5 lg:text-[45px]'/>
              <span className='text-gray-400 text-sm'>Firebase</span>
            </div> 
            <div className='flex flex-col justify-center '>
              <SiTailwindcss className='text-[35px] text-cyan-400  ml-1 mb-1.5 lg:text-[45px]'/>
              <span className='text-gray-400 text-sm'>Tailwind</span>
            </div> 

            <div className='flex flex-col justify-center '>
              <FaBootstrap className='text-[35px] text-purple-600  ml-2 mb-1.5 lg:text-[45px]'/>
              <span className='text-gray-400 text-sm'>Bootstrap</span>
            </div> 

            <div className='flex flex-col justify-center '>
              <FaGitAlt className='text-[35px] text-orange-600  mb-1.5 lg:text-[45px]'/>
              <span className='text-gray-400 text-sm ml-3'>Git</span>
            </div> 

            <div className='flex flex-col justify-center '>
              <AiOutlineGithub className='text-[35px] text-white   mb-1.5 lg:text-[45px]'/>
              <span className='text-gray-400 text-sm '>Github</span>
            </div>

            <div className='flex flex-col justify-center '>
              <IoLogoCss3 className='text-[35px] text-blue-700  mb-1 lg:text-[45px]'/>
              <span className='text-gray-400 ml-2.5'>Css</span>
            </div>  

            <div className='flex flex-col justify-center '>
              <AiFillHtml5 className='text-[35px] text-orange-600  ml-1 mb-1 lg:text-[45px]'/>
              <span className='text-gray-400 text-sm ml-2.5'>Html</span>
            </div> 


          </div>

          {/* MY STUDIES */}
          <div className='w-full'>
            <h6 className='text-gray-100 text-2xl mb-12 mt-20 flex items-end relative '>My Studies <Image width={25} height={10} alt='triangleDesign' src={triangle} className=' relative  bottom-[5px] left-[10px]' /></h6>

            <div className='w-full max-w-[1000px] flex flex-col gap-10 sm:flex-row md:gap-20 lg:gap-[120px]'>

              <div>
                  <span className='text-gray-200 font-semibold text-lg ml-2 border-b-[2px] border-gray-400'>
                    CoderHouse
                  </span>

                  <ul className='border-l-[2px] border-[#9333EA] mt-5 pl-1.5 flex flex-col gap-2  md:mt-10'>
                    <li className='flex whitespace-nowrap items-center text-gray-300 text-sm  md:text-[15px]'><BsDot className='text-lg' />  Front end Web Developer with React</li>
                    <li className='flex items-center text-gray-300 text-sm md:text-[15px]'><BsDot  className='text-lg'/>  React Js</li>
                    <li className='flex items-center text-gray-300 text-sm md:text-[15px]'><BsDot  className='text-lg'/> Javascript </li>
                    <li className='flex items-center text-gray-300 text-sm md:text-[15px]'><BsDot  className='text-lg'/> Web development </li>
                    
                  </ul>          
              </div>

              <div>
                  <span className='text-gray-200 font-semibold text-lg ml-2 border-b-[2px] border-gray-400'>
                    Educacion IT
                  </span>
                  <ul className='border-l-[2px] border-[#9333EA] mt-5 pl-1.5 flex flex-col gap-2 md:mt-10' >
                    <li className='flex whitespace-nowrap items-center text-gray-300 text-sm md:text-[15px]'><BsDot className='text-lg' /> Javascript Advanced Developer</li>
                    <li className='flex items-center text-gray-300 text-sm md:text-[15px]'><BsDot  className='text-lg'/> Bootstrap </li>
                    <li className='flex items-center text-gray-300 text-sm md:text-[15px]'><BsDot  className='text-lg'/>  Sass & Less</li>
                    <li className='flex items-center text-gray-300 text-sm md:text-[15px]'><BsDot  className='text-lg'/> Object Paradigm introduction </li>
                    <li className='flex items-center text-gray-300 text-sm md:text-[15px]'><BsDot  className='text-lg'/> Javascript from Scratch</li>
                    <li className='flex items-center text-gray-300 text-sm md:text-[15px]'><BsDot  className='text-lg'/> Web layout with html & css </li>
                    <li className='flex items-center text-gray-300 text-sm md:text-[15px]'><BsDot  className='text-lg'/> Introduction to UX </li>
                    <li className='flex items-center text-gray-300 text-sm md:text-[15px]'><BsDot  className='text-lg'/> Web development with html </li>
                  </ul>   
              </div>

            </div>
          </div>

            {/* MY STUDIES */}

          <div className='mt-20 text-gray-200 text-lg mb-10'>
            <p className=' font-medium'>Download my cv  <a href="#" className='text-[#9333EA] font-semibold'>here!</a> </p>
          </div>

      </div>


      <Image width={1920} height={1080} src={darkBox} priority={true} alt="boxDesign" className="w-auto min-h-[500px]  bottom-20 right-0 z-0 object-cover  absolute" />
    </section>
  )
}

export default AboutMe