'use client'

import Title from '@/components/Title'
import { blogSubmitType } from '@/types'
import Image from 'next/image'
import { useState } from 'react'
import supabase from '../../clients/supabase'

export default function Login() {
  const [formData, setFormData] = useState<blogSubmitType>({
    title: '',
    body: '',
    image: '',
    subtitle: '',
  })
  console.log('image')
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(formData)
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]:
          e.target.name == 'image' ? e.target.files[0] : e.target.value,
      }
    })
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify({ ...formData, image: formData.image!.name }),
    })
    const data = await result.json()
    console.log(data)

    const { error } = await supabase.storage.from('Images').uploadToSignedUrl(
      data.link.path,
      data.link.token,
      new File([formData.image], data.name, {
        type: formData.image.type,
      })
    )
    console.log(error)
  }
  return (
    <main className='flex flex-col justify-center items-center   w-full h-full'>
      <Title title='Write Blogs' />
      <form
        onSubmit={handleSubmit}
        className=' relative mt-12 p-8 w-[75%]   rounded-lg bg-zinc-900 flex flex-col gap-8 overflow'
      >
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Title</span>
          <input
            onChange={(e) => handleChange(e)}
            type='text'
            name='title'
            placeholder='Title'
            className={`bg-gray-200 py-4 px-6 text-gray-800 border-opacity-0 border-2    rounded-lg outline-none  font-medium`}
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Subtitle</span>
          <input
            onChange={(e) => handleChange(e)}
            name='subtitle'
            placeholder='subtitle'
            className={`bg-gray-200   py-4 px-6 placeholder:text-secondary border-opacity-0 border-2     text-gray-800 rounded-lg outline-none 
            `}
          />
        </label>
        <label className='flex flex-col '>
          <span className='text-white font-medium mb-4'>Image</span>
          <input
            onChange={(e) => handleChange(e)}
            name='image'
            type='file'
            accept='image/*'
            className={`  bg-zinc-800 border-[1px] border-gray-600 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none 
           font-medium`}
          />
          <Image
            className={`mt-3 m-auto ${
              formData.image?.name == null ? 'hidden' : ''
            }`}
            src={
              formData.image?.name != null
                ? URL.createObjectURL(formData.image)
                : ''
            }
            width={200}
            height={200}
            alt='test'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Body</span>

          <textarea
            onChange={(e) => handleChange(e)}
            rows={7}
            name='body'
            placeholder='Body'
            className={`bg-zinc-800 py-4  border-[1px] border-gray-600 
             outline-none px-6  text-white rounded-lg  font-medium`}
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Password</span>
        </label>

        <button
          type='submit'
          className='button w-40 p-2 rounded-md  text-xl bg-purple-500  cursor-pointer select-none
          active:translate-y-2  active:[box-shadow:0_0px_0_0_#9333ea,0_0px_0_0_#9333ea]
          active:border-b-[0px]
          transition-all duration-150 [box-shadow:0_8px_0_0_#9333ea,0_13px_0_0_#9333ea]
          border-[1px] border-purple-500 font-bold'
        >
          Upload
        </button>
      </form>
    </main>
  )
}
