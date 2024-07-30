import prisma from '@/clients/Singleton'
import { NextRequest, NextResponse } from 'next/server'
import { dummyArticle } from '@/clients/data'
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    let newBlog
    if (params.id == 'new') {
      newBlog = dummyArticle
    } else {
      newBlog = await prisma.article.findUnique({
        where: {
          id: parseInt(params.id),
        },
        include: {
          Comment: true,
        },
      })
    }

    return NextResponse.json(newBlog)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
