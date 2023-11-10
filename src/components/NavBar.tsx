'use client'
import Image from 'next/image'
import { useState } from 'react'
const Buttons = ['Home', 'Stack', 'Projects'] as const
type ButtonType = (typeof Buttons)[number] // 'Home' | 'Stack' | 'Projects'

const NavBar = () => {
  const [toggle, setToggle] = useState(true)
  const [selected, setSelected] = useState<ButtonType>('Home')
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    name: ButtonType
  ) => {
    e.preventDefault()
    setSelected(name)
  }
  return (
    <nav
      className='flex
   flex-row justify-between items-center
    px-4 py-4 
   '
    >
      <div className='flex flex-row gap-4 items-center'>
        <Image
          className='animate-pulse '
          src='/logo.jpg'
          width={70}
          height={70}
          alt='logo'
        />
      </div>
      <div className='hidden  md:flex flex-row justify-end gap-6 items-center font-semibold text-lg  '>
        {Buttons.map((name) => (
          <a
            onClick={(e) => handleClick(e, name)}
            href={`#${name}`}
            key={name}
            className={`${
              selected == name ? 'text-2xl' : 'text-gray-400'
            } hover:text-3xl transition-all duration-200 `}
          >
            {name}
          </a>
        ))}
      </div>
      <div className='flex flex-row gap-3'>
        <a
          href='https://github.com/SetroZ'
          target='_blank'
          rel='noopener noreferrer'
          className='border-[1px] border-white rounded-full p-2'
        >
          <Image
            className='hover:w-[px] '
            src='/logos/linkedIn.svg'
            width={20}
            height={20}
            alt='linkedIn'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/youseph-elsayed-353462295/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            className='hover:w-[40px]'
            src='/logos/gitHub.png'
            width={35}
            height={35}
            alt='linkedIn'
          />
        </a>
      </div>
      <div className='md:hidden '>
        <Image
          onClick={() => setToggle(!toggle)}
          className={`invert ${
            toggle ? 'rotate-[270deg]' : 'f'
          } rotate-[189deg] transition-all  duration-300  `}
          src='./sidebar.svg'
          width={40}
          height={40}
          alt='toggle'
        />
        <div
          className={`${
            toggle ? 'opacity-100' : ' opacity-0'
          }   flex flex-col gap-3 absolute  top-[80px] bg-zinc-900 rounded-lg p-3 right-3 transition-all  duration-500 `}
        >
          {Buttons.map((name) => (
            <a
              onClick={(e) => {
                handleClick(e, name)
                setToggle(!toggle)
              }}
              href={`#${name}`}
              key={name}
              className={`${
                selected == name ? 'text-xl' : 'text-gray-400'
              } hover:text-2xl transition-all duration-200 `}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
export default NavBar
