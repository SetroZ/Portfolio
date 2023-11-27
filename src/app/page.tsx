import Image from 'next/image'
import Hero from '@/components/Hero'
import StarsCanvas from '@/components/StarCanvas'
import Experience from '@/app/(MainPage)/Experience'
import Stack from '@/app/(MainPage)/Stack'
import Contact from '@/app/(MainPage)/Contact'
export default function Home() {
  return (
    <main className='flex  flex-col items-center justify-between '>
      <StarsCanvas />
      <Hero />
      <Experience />
      <Stack />

      <Contact />
    </main>
  )
}
