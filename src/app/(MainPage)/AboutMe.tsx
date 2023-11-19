import React from 'react'
import Title from '../../components/Title'
import StarsCanvas from '../../components/StarCanvas'

const AboutMe = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Title id='' title='About me' subTitle='Passion, Purpose, Progress.' />
      <div
        className='flex flex-row gap-1 mt-4 lg:w-[50%] w-[75%] flex-wrap 
      justify-center rounded-lg shadow-md shadow-zinc-600  border-zinc-800 border-solid border-2 border-t-0'
      >
        <p className='text-gray-400 text-center p-5 text-xl '>
          I am Vetro—a dedicated Freelance Programmer and experienced FullStack
          web developer. My commitment to continuous learning is reflected in
          the creative projects I create, showcasing my dedication to the
          ever-evolving world of technology. Beyond programming, I am passionate
          about weightlifting and chess, and fluent in both English and Arabic.
          Take a look at my website and let&apos;s talk!
        </p>
      </div>
    </div>
  )
}

export default AboutMe
