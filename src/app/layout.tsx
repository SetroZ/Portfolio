import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import StarsCanvas from '@/components/StarCanvas'
const poppins = Poppins({
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: ['normal'],
})

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
    <html lang='en' className={`${poppins.className} `}>
      <body className=' '>
        <header>
          <NavBar />
        </header>

        {children}
      </body>
    </html>
  )
}
