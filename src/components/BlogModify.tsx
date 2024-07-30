'use client'
import Link from 'next/link'
import CommentCard from '@/components/CommentCard'
import Image from 'next/image'
import { blogType } from '@/types'
import CustomButton from './CustomButton'
import { MDXRemote } from 'next-mdx-remote/rsc'
import CommentInput from './CommentInput'
function BlogModify({
  data,
  modify = false,
  handleChange,
}: {
  data: blogType
  modify: boolean

  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}) {
  return (
    <main className='mt-32  flex justify-center items-center flex-col gap-4'>
      <Image
        width={0}
        height={0}
        sizes='100vw'
        className=' object-cover w-full h-auto lg:w-[75%] rounded-md'
        src={data.image}
        alt='blog image'
      />

      <div className=' px-4 flex  w-full flex-col gap-1 lg:w-[75%] '>
        <input
          value={data.title}
          className='text-2xl font-extrabold bg-transparent'
          onChange={(e) => handleChange(e)}
        />
        <input
          value={data.subtitle}
          className='text-lg text-slate-300 bg-transparent'
        />

        <Link href='#comment' className=' flex self-start flex-row gap-2 '>
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
        <article className='  w-full prose prose-invert max-w-none  text-lg  tracking-wide leading-8'>
          {modify ? (
            <MDXRemote
              source={`        
              Us Their all behold thing fish Don't kind our Form Wherein bearing said gives made spirit, there male which isn't so in said have heaven image, forth stars winged. Heaven. Green sea third god days saw. Beginning was subdue seas beast heaven. Two.

              Him she'd fowl bearing cattle saying signs gathering meat after sixth tree Bring have set second. Fruitful whales fifth fill whales bring. Is after without firmament god.
              
              Have, two kind life tree dominion. God that appear that bring isn't Air day man fifth darkness evening spirit there seed. Us bring morning bring under. His there hath, you'll.
            `}
            />
          ) : (
            <p className=''>{data.body}</p>
          )}
        </article>
        <hr className=' border-2 border-slate-300'></hr>
        <div className='flex flex-col w-full ' id='comment'>
          <h2 className='text-3xl font-extrabold'>Comments</h2>
          <div className=' flex flex-col gap-4 mt-2 pb-3'>
            <CommentInput blogId={data.id} />
            {data.Comment.map((comment) => (
              <CommentCard key={comment.id} {...comment} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
export default BlogModify
