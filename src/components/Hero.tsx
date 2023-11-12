import React from 'react'
import NavBar from './NavBar'
import Introduction from './Introduction'
import Experience from './Experience'
import Stack from './Stack'
const Hero = () => {
  return (
    <div className='bgGradient w-full   h-screen z-0 bg-center bg-cover   '>
      <NavBar />
      <div className='lg:mx-80 md:mx-26 mx-3  relative'>
        
        <Introduction />

      </div>
      <Experience/>
      <Stack/>

    </div>
  )
}

export default Hero
