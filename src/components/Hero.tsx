import React from 'react'
import NavBar from './NavBar'
import Introduction from '../app/(MainPage)/Introduction'
import Experience from '../app/(MainPage)/Experience'
import Stack from '../app/(MainPage)/Stack'
import AboutMe from '../app/(MainPage)/AboutMe'
import Contact from '../app/(MainPage)/Contact'
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
