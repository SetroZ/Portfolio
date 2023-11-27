import Image from 'next/image'
import Link from 'next/link'
import { CommentType } from './CommentCard'
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export interface blogType {
  id: number
  title: string
  body: string
  image: string
  date: Date
  subtitle: string
  Comment: CommentType[]
}
const formatDate = (date: Date) => {
  const month = months[date.getMonth()]
  if (date.getFullYear() == new Date().getFullYear()) {
    return month
  } else {
    return month + ' ' + (date.getFullYear() % 100)
  }
}
const BlogCard = ({
  id,
  title,
  body,
  image,
  date,
  subtitle,
}: Omit<blogType, 'Comment'>) => {
  return (
    <Link
      href={'/blogs/' + id}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center center',
        backgroundColor: 'black',
      }}
      className='  group relative object-cover bg-blog w-full flex bg-zinc-800 border-2 rounded-md  p-4 gap-4 '
    >
      <div className='absolute inset-0 bg-black opacity-80 group-hover:opacity-50 transition-all'></div>
      <div className='  flex flex-col gap-2 z-10'>
        <div className='flex items-center gap-3'>
          <h2 className='font-extrabold text-3xl  '>{title}</h2>
          <p className='text-gray-400 text-xl  '>{formatDate(date)}</p>
        </div>
        <p className='mt-[-0.5rem] text-slate-300 font-bold text-lg'>
          {subtitle}
        </p>

        <div className=' gap-0'>
          <p className=' italic'>
            {body.split(' ').slice(0, 30).join(' ') + '...'}
          </p>
        </div>

        <div></div>
      </div>
    </Link>
  )
}

export default BlogCard
