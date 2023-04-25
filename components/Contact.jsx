import React from 'react'
import Image from 'next/image'
import triangle from '../app/assets/triangle.png'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

import avatar from '../app/assets/fullbodyAvatar.png'

const Contact = () => {




  return (
    <section className='min-h-[100vh] z-50 flex justify-center  w-full bg-[#1F1D2B]  pt-20' id='contact' >


      <div className='w-full max-w-[850px] relative flex flex-col items-center justify-between sm:flex-row'>

            <div className='w-full max-w-[400px] flex flex-col justify-center  '>

            <h6 className='text-white text-3xl lg:text-4xl font-semibold flex relative ml-5 mr-5'>  <Image width={30} height={15} alt='triangleDesign' src={triangle} className=' max-h-[30px] relative bottom-[-6px] left-[-10px]' />Contact</h6>


              <form action="" className='flex flex-col w-[90%] max-w-[400px] gap-2 mt-14 self-center'>

                 <label htmlFor="name" className='text-gray-200 font-medium '>Name:</label>
                <input name='name' type="text" className='bg-[#262737] min-h-[40px] rounded-md p-1 pl-2 text-gray-200'/>

                <label htmlFor="mail" className='text-gray-200 font-medium '>Mail:</label>
                <input name='mail' type="mail" className='bg-[#262737] min-h-[40px] rounded-md p-1 pl-2 text-gray-200'/>

                 <label htmlFor="message" className='text-gray-200 font-medium '>Message:</label> 
                <textarea name="message" id="" cols="30" rows="10" className='bg-[#262737] rounded-md text-gray-200 p-1 pl-2'></textarea>

                <button className=" text-base border-[1px] font-regular border-[#9333EA] bg-[#8222b9] py-[6px] px-9 mt-3 rounded-[5px] text-white transition-all duration-200 hover:opacity-80  lg:text-lg">Send</button>
              </form>

              <h6 className='text-gray-300 text-xl font-medium text-left self-left mt-10 self-center'>Social media: </h6>
              <div className='flex gap-5 mt-5 mb-10 self-center'>
                <a href="https://www.linkedin.com/in/alejo-fernandez-23821b243/" target='_blank'>
                <AiFillLinkedin  className='text-[30px] text-gray-100 scale-100 hover:scale-110 hover:text-[#9333EA] transition-all duration-200 cursor-pointer'/>

                </a>

                <a href="https://www.instagram.com/twentydev/" target='_blank'>
                <AiOutlineInstagram  className='text-[30px] text-gray-100 scale-100 hover:scale-110 hover:text-[#9333EA] transition-all duration-200 cursor-pointer'/>

                </a>

                <a href="https://github.com/AlejoFernandez10" target='_blank'>
                <AiFillGithub  className='text-[30px] text-gray-100 scale-100 hover:scale-110 hover:text-[#9333EA] transition-all duration-200 cursor-pointer'/>

                </a>
              </div>
            </div>

            <div className='self-center mb-20'>
              <Image width={1900} height={1500} src={avatar} className='h-auto w-auto min-h-[380px] max-w-[250px] md:min-h-[500px] md:mr-10 object-cover' alt='Full body avatar' /> 
          </div>
      </div>



    </section>
  )
}

export default Contact