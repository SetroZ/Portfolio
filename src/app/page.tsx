import Image from 'next/image'
import Hero from '@/components/Hero'
import StarsCanvas from '@/components/StarCanvas'
import Experience from '@/components/Experience'
import Stack from '@/components/Stack'
import Contact from '@/components/Contact'
export default function Home() {
  return (
    <main className='flex  flex-col items-center justify-between '>
      <Hero />
      <Experience />
      <Stack />

      <Contact />
    </main>
  )
}
