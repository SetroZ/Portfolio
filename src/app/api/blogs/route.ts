import { NextRequest, NextResponse } from 'next/server'
import supabase from '@/app/clients/supabase'
import prisma from '@/app/clients/Singleton'
import { blogSubmitType } from '@/types'
import { customAlphabet } from 'nanoid'
import { cookies } from 'next/headers'
const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz')
const key = process.env.POST_BLOG_SECRET
export async function POST(req: NextRequest) {
  try {
    const formData: blogSubmitType = await req.json()
    const name = `Blogs/${nanoid()}.webp`
    console.log(name)
    const { data, error } = await supabase.storage
      .from('Images')
      .createSignedUploadUrl(name)

    const res = supabase.storage.from('public-bucket').getPublicUrl(data.path)
    const newBlog = await prisma.article.create({
      data: {
        title: formData.title,
        subtitle: formData.subtitle,
        image: res.data.publicUrl,
        body: formData.body,
      },
    })
    return NextResponse.json({ link: data, name: name.split('/')[1] })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
