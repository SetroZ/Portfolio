'use client'

import Link from 'next/link'
import Title from '@/components/Title'

import { blogType } from '../blogs/(components)/BlogCard'
import Image from 'next/image'
type newBlogType = Omit<blogType, 'Comment'>
export default function Login() {
  const handleSubmit = (e: React.FormEvent) => {}
  return (
    <main className='flex flex-col justify-center   w-full h-full'>
      <Title title='Write Blogs' />
      <form
        onSubmit={handleSubmit}
        className=' relative mt-12 p-8   rounded-lg bg-zinc-900 flex flex-col gap-8 overflow'
      >
      
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Title</span>
          <input
            type='text'
            name='Title'
            placeholder='Title'
            className={`bg-gray-200 py-4 px-6 text-gray-800 border-opacity-0 border-2    rounded-lg outline-none  font-medium`}
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Subtitle</span>
          <input
            name='subtitle'
            placeholder='subtitle'
            className={`bg-gray-200   py-4 px-6 placeholder:text-secondary border-opacity-0 border-2     text-gray-800 rounded-lg outline-none 
            `}
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Title</span>
          <input
            name='title'
            type='file'
            placeholder='Title?'
            className={`bg-zinc-800 border-[1px] border-gray-600 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none 
           font-medium`}
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Message</span>

          <textarea
            rows={7}
            name='message'
            placeholder='Message'
            className={`bg-zinc-800 py-4  border-[1px] border-gray-600 
             outline-none px-6  text-white rounded-lg  font-medium`}
          />
        </label>

        <button
          type='submit'
          className='button w-40 p-2 rounded-md  text-xl bg-purple-500  cursor-pointer select-none
          active:translate-y-2  active:[box-shadow:0_0px_0_0_#9333ea,0_0px_0_0_#9333ea]
          active:border-b-[0px]
          transition-all duration-150 [box-shadow:0_8px_0_0_#9333ea,0_13px_0_0_#9333ea]
          border-[1px] border-purple-500'
        ></button>
      </form>
    </main>
  )
}
