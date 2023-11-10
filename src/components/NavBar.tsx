'use client'
import Image from 'next/image'
import { useState } from 'react'
const Buttons = ['Home', 'Stack', 'Projects'] as const
type ButtonType = (typeof Buttons)[number] // 'Home' | 'Stack' | 'Projects'

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
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
    px-4 py-4 md:fle
   '
    >
      <div className='flex flex-row gap-4 items-center'>
        <Image
          className=' '
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
            className={`${selected == name ? 'text-white' : 'text-gray-400'}`}
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
            className=' '
            src='/logos/linkedIn.svg'
            width={20}git
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
            src='/logos/gitHub.png'
            width={35}
            height={35}
            alt='linkedIn'
          />
        </a>
      </div>
      <Image
        onClick={() => setToggle(!toggle)}
        className={`invert rotate-[189deg]`}
        src='./sidebar.svg'
        width={40}
        height={40}
        alt='toggle'
      />
    </nav>
  )
}
export default NavBar
