import React from 'react'
import NavBar from './NavBar'
import MainHero from './MainHero'
const Hero = () => {
  return (
    <div className='bgGradient w-full  h-screen z-0 bg-center bg-cover'>
        <NavBar/>
        <MainHero/>
    </div>
  )
}

export default Hero