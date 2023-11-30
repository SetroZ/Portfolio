import { NextRequest, NextResponse } from 'next/server'
import { commentInputType } from '@/types'
import prisma from '@/clients/Singleton'
export async function POST(
  req: NextRequest,
  { params }: { params: { blogId: string } }
) {
  const data: commentInputType = await req.json()
  try {
    const newComment = await prisma.comment.create({
      data: {
        body: data.body,
        name: data.name,
        article_id: parseInt(params.blogId),
      },
    })
  } catch (error) {
    console.log(error)
  }
}
