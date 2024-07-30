'use client'
import Image from 'next/image'
import { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
type handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void
export const TitleInputs = ({
  title,
  subtitle,
  handleChange,
}: {
  title: string
  subtitle: string
  handleChange: handleChange
}) => {
  return (
    <>
      <input
        name='title'
        value={title}
        className='text-2xl font-extrabold bg-transparent outline-none '
        onChange={(e) => handleChange(e)}
      />
      <TextareaAutosize
        name='subtitle'
        value={subtitle}
        className=' overflow-ellipsis w-full resize-none text-lg text-slate-300 bg-transparent outline-none'
        onChange={(e) => handleChange(e)}
      />
    </>
  )
}

export const BodyInput = ({
  body,
  handleChange,
}: {
  body: string
  handleChange: handleChange
}) => {
  return (
    <TextareaAutosize
      name='body'
      value={body}
      className='  h-auto overflow-hidden  resize-none   w-full text-lg text-slate-300 bg-transparent outline-none'
      onChange={(e) => handleChange(e)}
    />
  )
}

export const ButtonModify = ({
  modify,
  handleModify,
}: {
  handleModify: any
  modify: boolean
}) => {
  const [d,setD] = useState(true)
  return (
    
    <button onClick={()=>handleModify()}  className='bg-black border-2 border-white '>
      {modify ? ' View' : 'Edit'}
    </button>
  )
}

export const ButtonSubmit = ({
  handleSubmit,
}: {
  handleSubmit: (e: React.FormEvent) => Promise<void>
}) => {
  const [d,setD] = useState('s')
  return (
    <button onClick={(()=>console.log('s'))} className='bg-black border-2 border-white'>
      Submit
    </button>
  )
}
export const ShowImage = ({ image }) => {
  return (
    <Image
      className={`mt-3 m-auto ${image?.name == null ? 'hidden' : ''}`}
      src={image?.name != null ? URL.createObjectURL(image) : ''}
      width={200}
      height={200}
      alt='test'
    />
  )
}

export const ImageInput = ({
  handleChange,
}: {
  handleChange: handleChange
}) => {
  return (
    <input
      onChange={(e) => handleChange(e)}
      name='image'
      type='file'
      accept='image/*'
      className={`  bg-zinc-800 border-[1px] border-gray-600 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none 
       font-medium`}
    />
  )
}
