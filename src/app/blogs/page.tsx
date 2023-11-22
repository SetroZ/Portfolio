import React from 'react'
import { dummyData } from '@/data'
import BlogCard, { blogType } from './(components)/BlogCard'
import Title from '@/components/Title'
import prisma from '@/Singleton'
const page = async () => {
  const data: blogType[] = await prisma.article.findMany({
    cacheStrategy: {
      ttl: 21600,
    },
  })
  return (
    <main className='flex flex-col justify-center items-center gap-20'>
      <Title
        title='Blogs'
        subTitle='Tech Tales Unleashed
'
      />
      <div className='flex justify-center items-center  flex-col gap-14 w-[75%]'>
        {data.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </main>
  )
}

export default page
