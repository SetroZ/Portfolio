'use client'
import { useSearchParams, usePathname } from 'next/navigation'
import { BlogPage } from '@/components/BlogPage'
import { useEffect, useState } from 'react'
import { blogType } from '@/types'
import { blogSubmitType } from '@/types'
import supabase from '@/clients/supabase'
import BlogModify from '@/components/BlogModify'
const Modify = () => {
  const pathName = usePathname()
  const blogId = pathName.split('/')[2]
  const [formData, setFormData] = useState<blogType>()
  const [modify, setModify] = useState<boolean>(true)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/blogs/${blogId}`)
      const data: blogType = await res.json()
      setFormData(data)
    }
    fetchData()
  }, [blogId])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]:
          e.target.name == 'image' ? e.target.files[0] : e.target.value,
      }
    })
  }
  const handleModify = () => {
    setModify(prevState=>!prevState)
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify({ ...formData, image: formData.image!.name }),
    })
    const data = await result.json()

    const { error } = await supabase.storage.from('Images').uploadToSignedUrl(
      data.link.path,
      data.link.token,
      new File([formData.image], data.name, {
        type: formData.image.type,
      })
    )
  }
  return (
    <BlogPage
      data={{ ...formData }}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      modify={modify}
      handleModify={()=>setModify(prevState=>!prevState)}
    />
  )
}

export default Modify
