'use client'
import React, { useEffect, useState } from 'react'
import Title from './Title'
const rEmail =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

interface formType {
  name: string
  email: string
  title: string
  message: string
}
interface formStates {
  [key: string] : boolean
  name: boolean
  email: boolean
  title: boolean
  message: boolean
}
const Error = ({ message, state }: { message: string; state: boolean }) => {
  return (
    <p
      className={`text-red-500  font-semibold text-md  ${
        state ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {message}
    </p>
  )
}

const Contact = () => {
  const [form, setForm] = useState<formType>({
    name: '',
    email: '',
    title: '',
    message: '',
  })
  const [currentForm, setCurrentForm] = useState<formStates>({
    name: true,
    email: true,
    title: true,
    message: true,
  })
  const validate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    if (name == 'email') {
      setCurrentForm((prevState) => {
        return {
          ...prevState,
          [name]: rEmail.test(e.target.value),
        }
      })
    } else {
      setCurrentForm((prevState) => {
        return {
          ...prevState,
          [name]: e.target.value.length < 2 ? false : true,
        }
      })
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validate(e)
    setForm((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value,
      }
    })
  }
  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()
    let checked = 0
    for (let key in currentForm) {
      currentForm[key] ? checked++ : ''
    }
    if (checked == 4) {
      const response = await fetch('http://localhost:3000/api/email', {
        method: 'POST',
        body: JSON.stringify(form),
      })
    }
  }

  return (
    <div id='Contact' className='mt-20  lg:w-[50%]  w-[75%]'>
      <Title title='Contact me' subTitle="Let's Connect" />
      <form
        onSubmit={handleSubmit}
        className='mt-12 p-8 rounded-lg bg-zinc-900 flex flex-col gap-8'
      >
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input
            type='text'
            name='name'
            onChange={handleChange}
            value={form.name}
            placeholder='First Name'
            className={`bg-gray-200 py-4 px-6 text-gray-800 border-opacity-0 border-2    rounded-lg outline-none ${
              currentForm.name ? '' : ' border-red-500 border-opacity-100'
            } font-medium`}
          />

          <Error
            message="Your name can't be that short right?"
            state={currentForm.name}
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your email</span>
          <input
            type='email'
            name='email'
            onChange={handleChange}
            value={form.email}
            placeholder='Email'
            className={`bg-gray-200  py-4 px-6 placeholder:text-secondary border-opacity-0 border-2     text-gray-800 rounded-lg outline-none ${
              currentForm.email ? '' : 'border-opacity-100 border-red-500'
            }  `}
          />
          <Error message='Are you sure?' state={currentForm.email} />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Title</span>
          <input
            name='title'
            value={form.title}
            onChange={handleChange}
            placeholder='Title?'
            className={`bg-zinc-800 border-[1px] border-gray-600 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none ${
              currentForm.title ? '' : 'border-2 border-red-500'
            }   font-medium`}
          />
          <Error message='perhaps a little more?' state={currentForm.title} />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Message</span>

          <textarea
            rows={7}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='Message'
            className={`bg-zinc-800 py-4  border-[1px] border-gray-600 ${
              currentForm.message ? '' : 'border-red-500'
            } outline-none px-6  text-white rounded-lg  font-medium`}
          />

          <Error message='perhaps a little more?' state={currentForm.message} />
        </label>

        <button
          type='submit'
  
          className='bg-purple-800 hover:bg-purple-900 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
