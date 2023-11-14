import React from 'react'
import NavBar from './NavBar'
import Introduction from './Introduction'
import Experience from './Experience'
import Stack from './Stack'
import AboutMe from './AboutMe'
import Contact from './Contact'
import StarsCanvas from './StarCanvas'
const Hero = () => {
  return (
    <div className='bgGradient w-full     bg-center bg-cover    ' id='Home'>
      {/* <NavBar /> */}
      <div className='lg:mx-80 md:mx-26 mx-3  '>
        <Introduction />
      </div>
      <AboutMe />

    </div>
  )
}

export default Hero
