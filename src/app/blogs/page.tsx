import React from 'react'
import { dummyData } from '@/data'
import BlogCard from './(components)/BlogCard'
import Title from '@/components/Title'
const page = async () => {
  return (
    <main className='flex flex-col justify-center items-center gap-20'>
      <Title
        title='Blogs'
        subTitle='Tech Tales Unleashed
'
      />
      <div className='flex justify-center items-center  flex-col gap-14 w-[75%]'>
        {dummyData.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </main>
  )
}

export default page
