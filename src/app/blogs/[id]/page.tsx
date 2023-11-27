import { blogType } from '../(components)/BlogCard'
import prisma from '@/app/clients/Singleton'
import Link from 'next/link'
import CommentCard, { CommentType } from '../(components)/CommentCard'
import Image from 'next/image'
const blogId = async ({ params }: { params: { id: string } }) => {
  const data: blogType = await prisma.article.findFirst({
    include: {
      Comment: true,
    },
    where: {
      id: {
        equals: parseInt(params.id),
      },
    },
    cacheStrategy: {
      ttl: 21600,
    },
  })
  return (
    <main className='mt-32  flex justify-center items-center flex-col gap-4'>
      <Image
        width={0}
        height={0}
        sizes='100vw'
        className=' object-cover w-full h-auto'
        src={data.image}
        alt='blog image'
      />

      <div className=' px-4 flex  w-full flex-col gap-1 '>
        <h1 className='text-2xl font-extrabold'>{data.title}</h1>
        <h2 className='text-lg text-slate-300'>{data.subtitle}</h2>
        <Link href='#comment' className='flex flex-row gap-2 w-auto h-auto'>
          <Image
            className='invert'
            src='/comment.svg'
            width={30}
            height={30}
            alt='comment'
          />
          <p className='text-2xl'>{data.Comment.length}</p>
        </Link>
      </div>
      <div className=' flex flex-col gap-6 w-[90%] lg:w-[60%]  '>
        <p className=' text-xl tracking-wide leading-8'>{data.body}</p>
        <hr className=' border-2 border-slate-300'></hr>
        <div className='flex flex-col w-full ' id='comment'>
          <h2 className='text-3xl font-extrabold'>Comments</h2>
          <div className=' flex flex-col gap-4 mt-2 pb-3'>
            {data.Comment.map((comment) => (
              <CommentCard key={comment.id} {...comment} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default blogId
