'use client'
import React, {useState} from 'react'
import '../app/globals.css'


const TruckAnimation = () => {


  const [truckDisplay, setTruckDisplay] = useState(true)
  const [scrollDisplay, setScrollDisplay] = useState(false)


  setTimeout(()=>{
    setTruckDisplay(false)
  }, 5700)

  setTimeout(()=>{
    setScrollDisplay(true)
  }, 4000)

  return (
    <>
      <span className={`truckAnimation bottom-5 left-0 w-full  z-50 ${truckDisplay ? 'inline' : 'hidden'} `}></span>

      {scrollDisplay && 
      <>
        <span class="scrollDown absolute bottom-14 z-40"></span>
        <span className='absolute bottom-7 text-gray-100 font-medium z-40 text-sm'>Scroll</span>
      </>
      }
    </>
  )
}

export default TruckAnimation