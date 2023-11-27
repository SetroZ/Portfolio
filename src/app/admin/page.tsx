'use client'
import { useState } from 'react'
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
      <button
        onClick={(e) => handleClick(e)}
        className='button w-40 p-2 rounded-md  text-xl bg-purple-500  cursor-pointer select-none
          active:translate-y-2  active:[box-shadow:0_0px_0_0_#9333ea,0_0px_0_0_#9333ea]
          active:border-b-[0px]
          transition-all duration-150 [box-shadow:0_8px_0_0_#9333ea,0_13px_0_0_#9333ea]
          border-[1px] border-purple-500 font-bold'
      >
        Set
      </button>
    </main>
  )
}
