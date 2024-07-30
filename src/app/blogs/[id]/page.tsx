import { blogType } from '@/types'
import prisma from '@/clients/Singleton'
import { BlogPage } from '@/components/BlogPage'
import IsAdmin from '@/IsAdmin'
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
  })

  return <BlogPage data={data} modify={false} />
}

export default blogId
