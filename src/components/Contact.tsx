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
  [key: string]: boolean
  name: boolean
  email: boolean
  title: boolean
  message: boolean
}
const ErrorComp = ({ message, state }: { message: string; state: boolean }) => {
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
let first = 0
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
  const [send, setSend] = useState<'Sent' | 'Sending...' | 'Send' | 'Error'>(
    'Send'
  )

  const validate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    first = 1
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
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

    // Assuming first and form are state variables
    let checked = 0
    for (let key in currentForm) {
      if (currentForm[key] === true && first !== 0) {
        checked++
      } else {
        // Use a functional update to ensure the correct prevState
        setCurrentForm((prevState) => {
          return {
            ...prevState,
            [key]: false,
          }
        })
      }
    }

    console.log(checked)

    if (checked === 4) {
      setSend('Sending...')

      try {
        const response = await fetch('http://localhost:3000/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        })

        if (!response.ok) {
          throw new Error('Failed to send data')
        }

        const data = await response.json()

        // Use setTimeout instead of setInterval for a single delay
        setTimeout(() => setSend('Sent'), 1000)
      } catch (error) {
        setSend('Error')
        console.error('Error sending data:', error) // Reset the button text if there's an error
      }
      setTimeout(() => setSend('Send'), 5000)
    }
  }

  return (
    <div
      id='Contact'
      className=' flex flex-col justify-center   lg:w-[50%]  w-[75%]'
    >
      <Title title='' subTitle="Let's Connect" />
      <a
        className='text-center text-xl font-bold mt-5'
        href='mailto:joemosabry@gmail.com'
      >
        <button
          type='submit'
          className='button w-60 p-2 rounded-md  text-3xl bg-purple-500  cursor-pointer select-none
          active:translate-y-2  active:[box-shadow:0_0px_0_0_#9333ea,0_0px_0_0_#9333ea]
          active:border-b-[0px]
          transition-all duration-150 [box-shadow:0_8px_0_0_#9333ea,0_13px_0_0_#9333ea]
          border-[1px] border-purple-500'
        >
          Email Me
        </button>
      </a>
      <form
        onSubmit={handleSubmit}
        className=' relative mt-12 p-8   rounded-lg bg-zinc-900 flex flex-col gap-8 overflow'
      >
        <div className=' w-[100%] h-[100%] flex justify-center items-center  bg-gray-900 m-[-30px]  absolute opacity-70 '>
          <p className='text-4xl tracking-wide leading-loose uppercase font-bold text-red-500 text-center'>
            Currently off Until I get a domain
          </p>
        </div>
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

          <ErrorComp
            message="Your name can't be that short right?"
            state={currentForm.name}
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your email</span>
          <input
            name='email'
            onChange={handleChange}
            value={form.email}
            placeholder='Email'
            className={`bg-gray-200   py-4 px-6 placeholder:text-secondary border-opacity-0 border-2     text-gray-800 rounded-lg outline-none ${
              currentForm.email ? '' : 'border-opacity-100 border-red-500'
            }  `}
          />
          <ErrorComp message='Are you sure?' state={currentForm.email} />
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
          <ErrorComp
            message='perhaps a little more?'
            state={currentForm.title}
          />
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

          <ErrorComp
            message='perhaps a little more?'
            state={currentForm.message}
          />
        </label>

        <button
          type='submit'
          className='button w-40 p-2 rounded-md  text-xl bg-purple-500  cursor-pointer select-none
          active:translate-y-2  active:[box-shadow:0_0px_0_0_#9333ea,0_0px_0_0_#9333ea]
          active:border-b-[0px]
          transition-all duration-150 [box-shadow:0_8px_0_0_#9333ea,0_13px_0_0_#9333ea]
          border-[1px] border-purple-500'
        >
          {send}
        </button>
      </form>
    </div>
  )
}

export default Contact
