import Image from 'next/image'
export interface CommentType {
  name: string
  body: string
  date: Date
  id: number
}
const formatDate = (date: Date) => {
  return (
    date.getDate() +
    '/' +
    (date.getMonth() + 1) +
    '/' +
    (date.getFullYear() % 100)
  )
}
const CommentCard = ({ name, body, date }: CommentType) => {
  return (
    <div className='  flex flex-col gap-1 bg-zinc-900 p-3 rounded-lg '>
      <div className='flex items-center gap-3'>
        <h2 className='font-semibold text-xl text-gray-200  '>{name}</h2>
        <p className='text-gray-400   '>{formatDate(date)}</p>
      </div>
      <p className=' '>{body}</p>
    </div>
  )
}

export default CommentCard
