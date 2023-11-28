import { blogType } from '@/types'
import prisma from '@/app/clients/Singleton'
import { BlogPage } from '@/components/BlogPage'

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
  return <BlogPage data={data} />
}

export default blogId
