'use client'
import { useState } from 'react'
import CustomButton from '@/components/CustomButton'
export default function Admin() {
  const [password, setPassword] = useState<string>()
  const handleClick = (e: React.MouseEvent) => {
    const res = fetch('/api/admin', {
      body: JSON.stringify(password),
      method: 'POST',
    })
  }
  return (
    <main className='flex flex-col gap-6 justify-center items-center w-full h-full mt-24 p-8 '>
      <input
        onChange={(e) => setPassword(e.target.value)}
        name='password'
        placeholder='password'
        className={`bg-gray-200   py-4 px-6 placeholder:text-secondary border-opacity-0 border-2     text-gray-800 rounded-lg outline-none 
            `}
      />
      <CustomButton onClick={(e) => handleClick(e)}>Set</CustomButton>
    </main>
  )
}
