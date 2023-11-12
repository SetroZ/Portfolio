'use client'
import { useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'

const MainHero = () => {
  return (
    <div className='flex flex-row  p-6 gap-3 mt-32 '>
      <div className='flex flex-col items-center  '>
        <div className='w-4 h-4  rounded-full bg-purple-500 '></div>
        <div
          className={`m-[-2px] w-1 h-[300px]  rounded-full bg-purple-500 fade`}
        ></div>
      </div>
      <div className='flex flex-col gap-2    '>
        <h2 className='font-extrabold  sm:text-7xl text-5xl '>
          Hi, I am Vetro
        </h2>
        <h2 className='font-extrabold sm:text-7xl   text-5xl  '>
          I am a
          <span className='text-purple-500  ml-3'>
            {/* <Typewriter
              words={[' UI Designer', ' FullStack Developer', ' CS student']}
              loop={false}
              cursor={true}
            /> */}
          </span>
        </h2>
      </div>
    </div>
  )
}

export default MainHero
