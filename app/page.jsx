import React from "react"

import Home from "@/components/Home"
import Projects from "@/components/Projects"
import bg from './assets/bg.svg'
import Image from "next/image"
import AboutMe from "@/components/AboutMe"
import Contact from "@/components/Contact"





export default function Page() {

  return (

   <main className="main-container min-h-[100vh]  w-full flex flex-col items-center justify-center ">
    <Image width={1920} height={1080} src={bg} priority={true} alt="background" className="w-[100%] min-h-[120vh] top-[-50px]  object-cover   fixed" />

     <Home />

     <Projects />

     <AboutMe />

     <Contact />
    
    </main>
  )
}