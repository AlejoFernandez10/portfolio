import React from 'react'
import lightBoxDesign from '../app/assets/lightBoxDesign.png'
import Image from 'next/image'


import twentydevBanner from '../app/assets/projects/twentydev.png'

import yourRestoBanner from '../app/assets/projects/yourResto.png'

import ecommerceBanner from '../app/assets/projects/e-commerce.png'

import gymSiteBanner from '../app/assets/projects/gymSite.png'

import coffeeShopBanner from '../app/assets/projects/coffee-shop.png'

import ProjectCardReverse from './ProjectCardReverse'
import ProjectCard from './ProjectCard'


const Projects = () => {

  const data = [
    {
      title:"TwentyDev",
      img:twentydevBanner,
      description:"TwentyDev is my personal brand. It has the objective of selling web templates and websites developed by me.    I like to think about it as a win-win, because if i don’t sell any website or template, i would still be gaining experience by creating solid projects.  ",
      techs:[
  
        {url:""},
        {url:""},
        {url:""}
      ]    
    },
    {
      title:"YourResto",
      img:yourRestoBanner,
      description:"This is a restaurant app. I developed it with the objective of learning Next JS. Users can filter and navigate  through a variety of products, see their details ,add them to cart, and see the status once they buy it. It will soonly have in-app notifications.",
      techs:[
  
        {url:""},
        {url:""},
        {url:""}
      ],
      reverse:true    
    },
    {
      title:"E-commerce",
      img:ecommerceBanner,
      description:"This is an E-commerce store. Users can navigate through the different products in the store and have the option to add them to their cart. It is also possible to create an account and log in. If the user is logged in, they can access a section that will detail their purchase history in the store. ",
      techs:[
  
        {url:""},
        {url:""},
        {url:""}
      ]    
    },
    {
      title:"Gym Site",
      img:gymSiteBanner,
      description:"This is a gym Website. The gym's available activities are displayed along with the dates of the classes for those activities. It has a section for Plans or Memberships which the user can add to their cart. ",
      techs:[
  
        {url:""},
        {url:""},
        {url:""}
      ],
      reverse:true       
    },
    {
      title:"Coffee-shop",
      img:coffeeShopBanner,
      description:`This is a coffe-shop application . The user can create their custom order and add it to the cart. Different 'Precreated' kits can also be viewed and added to the cart. Form functional using php`,
      techs:[
        
        {url:""},
        {url:""},
        {url:""}
      ]    
    }
  ]


  return (

    <section className='min-h-[100vh] flex flex-col items-center   w-full bg-[#1F1D2B] relative z-100' id='projects' >


      <Image width={500} height={250} alt='rectangle design' src={lightBoxDesign} className=' w-[30%] opacity-40  absolute left-[-200px] top-20   z-0   ' />

      <div className='bg-[#9333EA] left-[-100px] top-[50%] blur-[80px] h-[120px] w-[120px] md:h-[150px] md:w-[150px] md:blur-[100px] lg:h-[200px] lg:w-[200px] lg:blur-[130px] absolute xl:h-[300px] xl:w-[250px] xl:blur-[200px]'></div>
      
      
      <div className='w-full max-w-[1200px] flex flex-col justify-center items-center'>

        <div className='w-[90%] max-w-[850px] m-auto '>

        <h2 className='text-gray-50 text-3xl text-start m-auto mt-[100px] mb-[60px] ml-5 lg:text-[40px]'>Projects</h2>
        </div>

        <div className='w-[90%] max-w-[1000px] flex flex-col  gap-20 items-center justify-center '>

        {data.map((project)=>(

        (project.reverse ?

         <ProjectCardReverse key={project.title} title={project.title} description={project.description} img={project.img} />
          :
          <ProjectCard key={project.title} title={project.title} description={project.description} img={project.img} />
        )
          

        ))}

        <Image width={500} height={250} alt='rectangle design' src={lightBoxDesign} className=' w-[30%] opacity-40  absolute right-[0px] top-[40%]   z-0   ' />
        <Image width={500} height={250} alt='rectangle design' src={lightBoxDesign} className=' w-[30%] opacity-40  absolute left-[-150px] bottom-0   z-0   ' />
        </div>

      </div>
          <a href="" className="mb-20 mt-20 text-base border-[1px] font-regular border-[#9333EA] py-[8px] px-7 rounded-[5px] text-white transition-all duration-200 hover:bg-[#9333EA] ">Contact me!</a>
    </section>
  )
}

export default Projects