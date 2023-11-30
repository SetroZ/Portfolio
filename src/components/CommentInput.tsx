'use client'

import { useState } from 'react'

const CommentInput = ({ blogId }: { blogId: number }) => {
  const [formData, setFormData] = useState<{
    name: string
    body: string
  }>({
    name: '',
    body: '',
  })
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
  }
  const handleSubmit = () => {
    const res = fetch(`/api/comments/${blogId}`, {
      method: 'POST',
      body: JSON.stringify(formData),
    })
  }
  return (
    <form className='bg-zinc-800 rounded-lg flex flex-col justify-start items-start gap-3 p-3'>
      <input
        onChange={(e) => handleChange(e)}
        value={formData.name}
        type='text'
        name='name'
        placeholder='name'
        className={`bg-zinc-700 w-[50%]  p-1 text-white     rounded-sm outline-none  `}
      />
      <textarea
        onChange={(e) => handleChange(e)}
        value={formData.body}
        rows={2}
        name='body'
        placeholder='Body'
        className={`bg-zinc-800 p-1 w-[50%]  border-[1px] border-gray-600 
             outline-none   text-white rounded-lg  font-medium`}
      />
      <button onClick={handleSubmit} className='bg-zinc-900 p-2 rounded-lg'>
        Comment
      </button>
    </form>
  )
}

export default CommentInput
