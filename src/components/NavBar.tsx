'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
const Buttons = ['Home', 'Experience', 'Stack', 'Contact', 'Blogs'] as const
type ButtonType = (typeof Buttons)[number] // 'Home' | 'Stack' | 'Projects'
import BallCanvas from './BallCanvas'
const NavBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [toggle, setToggle] = useState(false)
  const [selected, setSelected] = useState<ButtonType>('Home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (pathname.length>0) {
      router.push(window.location.href)
    }

    // ...
  }, [pathname])

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    name: ButtonType
  ) => {
    setSelected(name)
    e.preventDefault()
    if (name == 'Blogs') {
      router.push('/blogs')
    } else {
      router.replace(`/#${name}`)
    }
  }
  return (
    <nav
      className={`flex 
   flex-row justify-between items-center 
     fixed ${
       scrolled
         ? 'bg-[#070707] border-white border-solid border-b-[1px] '
         : 'bg-transparent'
     } z-10     md:px-8  px-3 pb-2 pt-8  w-[100vw]   `}
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
      <div className='hidden  md:flex flex-row justify-end gap-6 items-center font-semibold text-2xl  '>
        {Buttons.map((name) => (
          <Link
            onClick={(e) => {
              handleClick(e, name)
            }}
            href={''}
            key={name}
            className={`${
              selected == name ? 'text-3xl' : 'text-gray-400'
            } hover:text-3xl transition-all duration-200 `}
          >
            {name}
          </Link>
        ))}
      </div>
      <div className='flex flex-row gap-3'>
        <Link
          title='LinkedIn'
          href='https://www.linkedin.com/in/youseph-elsayed-353462295/'
          target='_blank'
          rel='noopener noreferrer'
          className='border-[1px] border-white rounded-full p-2'
        >
          <Image
            className='hover:w-[25px] transition-all '
            src='/logos/linkedIn.svg'
            width={20}
            height={20}
            alt='linkedIn'
          />
        </Link>
        <Link
          title='GitHub'
          href='https://github.com/SetroZ'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            className='hover:w-[40px] transition-all  '
            src='/logos/gitHub.png'
            width={35}
            height={35}
            alt='linkedIn'
          />
        </Link>
      </div>
      <div className='md:hidden '>
        <Image
          onClick={() => setToggle(!toggle)}
          className={`invert  ${
            toggle ? 'rotate-[270deg]' : 'f'
          } rotate-[189deg] transition-all  duration-300  cursor-pointer hover:w-[45px] `}
          src='./sidebar.svg'
          width={40}
          height={40}
          alt='toggle'
        />
        <div
          className={`${
            toggle ? 'opacity-100' : 'opacity-0 cursor-default'
          }   flex flex-col justify-center items-center gap-3 absolute  top-[70px] right-[30px] bg-zinc-900 rounded-lg p-3  transition-all  duration-500 `}
        >
          {Buttons.map((name) => (
            <Link
              onClick={(e) => {
                handleClick(e, name)
                setToggle(false)
              }}
              href={``}
              key={name}
              className={`${
                selected == name ? 'text-xl' : 'text-gray-400'
              } hover:text-2xl transition-all duration-200 ${
                toggle ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
export default NavBar
