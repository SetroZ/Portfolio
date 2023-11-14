import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import StarsCanvas from '@/components/StarCanvas'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vetro',
  description: 'Websites programmer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth  '>
      <body className={`${inter.className} w-full h-full relative  `}>
        <NavBar />

        <StarsCanvas />
        {children}
      </body>
    </html>
  )
}
