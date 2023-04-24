import React from "react"

import Home from "@/components/Home"
import Projects from "@/components/Projects"
import bg from './assets/bg.svg'
import Image from "next/image"
export default function Page() {


  return (

   <main className="main-container min-h-[100vh]  w-full flex flex-col items-center justify-center ">
    <Image width={1020} height={1080} src={bg} priority={true} alt=" background" className="w-auto h-auto top-[-50px]  fixed" />

     <Home />

     <Projects />
    
    </main>
  )
}
