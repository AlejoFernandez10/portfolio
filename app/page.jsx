''
import React from "react"

import Home from "@/components/Home"
import Projects from "@/components/Projects"

import AboutMe from "@/components/AboutMe"
import Contact from "@/components/Contact"





export default function Page() {



  return (

   <main className="main-container min-h-[100vh]  w-full flex flex-col items-center justify-center ">
    

     <Home />

     <Projects  />

     <AboutMe  />

     <Contact  /> 
    
    </main>
  )
}
