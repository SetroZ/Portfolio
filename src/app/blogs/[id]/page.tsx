import { blogType } from '../(components)/BlogCard'
import Link from 'next/link'
import { dummyData } from '@/data'
import Image from 'next/image'
const blogId = ({ params }: { params: { id: string } }) => {
  const data = dummyData[0]
  return (
    <main className='mt-32  flex justify-center items-center flex-col gap-4'>
      <Image
        width={0}
        height={0}
        sizes='100vw'
        className=' object-cover w-full h-auto'
        src={data.image}
        alt='blog image'
      />

      <div className=' px-4 flex  w-full flex-col gap-1 '>
        <h1 className='text-2xl font-extrabold'>{data.title}</h1>
        <h2 className='text-lg text-slate-300'>{data.subtitle}</h2>
        <Link href='#comment' className='flex flex-row gap-2 w-auto h-auto'>
          <Image
            className='invert'
            src='/comment.svg'
            width={30}
            height={30}
            alt='comment'
          />
          <p className='text-2xl'>{data.comments.length}</p>
        </Link>
      </div>
      <div className='w-[90%] lg:w-[60%]  text-xl tracking-wide leading-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolore quasi pariatur nam reiciendis, dolorum maiores quae. Explicabo voluptates quia officia! Aliquam corporis excepturi velit quam beatae soluta nemo perferendis incidunt suscipit, necessitatibus modi facere sint numquam neque officiis. Ratione est voluptas minus cumque laborum ullam sit nam! Recusandae doloribus odit labore. Expedita modi recusandae nisi, dicta delectus ab nemo numquam molestiae repudiandae consequuntur ipsum, enim ipsam porro ex. Ea molestias amet culpa laborum inventore dolor a praesentium. Enim harum placeat magni inventore odio corrupti officia velit, tenetur debitis accusantium tempore iste mollitia laudantium. Mollitia sed laudantium cumque voluptate earum magnam voluptas consectetur suscipit maiores, quam odit repellendus tempora temporibus consequatur officia iusto adipisci dolor, nobis, error delectus? Non et maiores accusamus ipsa quibusdam facilis vero sed suscipit fugiat, quae corrupti harum dolore delectus excepturi, necessitatibus, nobis consequuntur consectetur nam saepe officia. Nihil quam minus porro reiciendis numquam, accusantium dolorem eius eveniet nesciunt? Vero rem dolorum ex beatae nulla maiores dolor, qui, consequuntur aliquam error quas illo distinctio porro fugiat unde optio? Non repudiandae fugit iure laudantium expedita veritatis dolores delectus officiis velit neque saepe temporibus aliquam perferendis dolorum qui vel assumenda, cupiditate tempore ab. Quidem dolore eum ad perferendis. Odio sed assumenda aspernatur repellendus doloribus, ullam laboriosam architecto odit consectetur cumque nihil excepturi praesentium. Repellat nesciunt optio obcaecati, atque quas debitis pariatur sint laboriosam voluptas officia omnis ab iusto ea magni minus possimus a eaque beatae culpa quam repudiandae illo sed nisi esse! Quidem aperiam ab fugiat quod earum, aliquam voluptates quae illum qui quos eaque odio optio distinctio velit sapiente explicabo perspiciatis, vero ut porro facilis eveniet aliquid corporis. Officiis vitae ratione cumque corrupti, totam eaque perferendis tenetur sequi ullam quia excepturi quas officia doloribus possimus voluptatum dolorem quam commodi at sunt aut? Laudantium similique reiciendis doloribus nisi dignissimos quisquam ex veritatis hic. Modi, in. Dolorem, doloribus, omnis quibusdam fugit ut aspernatur itaque odit natus, ratione nulla quasi ab voluptas perferendis iste eligendi necessitatibus officia! Maxime, consequuntur similique pariatur est placeat laborum distinctio, ratione quo nam, blanditiis voluptatum obcaecati. Placeat accusantium inventore, dolore, architecto unde ipsum dolor asperiores eligendi quas, in saepe omnis. Incidunt dicta illo placeat expedita! Recusandae iusto alias atque quisquam cupiditate expedita doloremque eius sunt cum quis doloribus itaque obcaecati vitae voluptatibus quos perferendis exercitationem dolore a sapiente, quo esse totam! Laborum autem eum, laboriosam vero ad molestias natus amet in ipsum minus libero aliquam voluptate excepturi inventore vel ea optio repudiandae aspernatur rem repellat? Harum incidunt perspiciatis, sit totam reiciendis quasi, et adipisci accusantium ex hic qui. Nostrum dignissimos culpa ullam optio nisi id eaque voluptas aliquid odit, asperiores iusto nam harum repellendus earum, adipisci illum aperiam, deleniti praesentium sapiente alias reprehenderit. Officia consectetur minima molestiae voluptate esse nisi commodi vel atque eos aliquid reprehenderit consequuntur voluptatum eveniet ipsa, dignissimos animi minus nemo? Repellendus, ex velit dignissimos earum, perspiciatis vero eum facere aliquid pariatur cumque nobis sunt magnam ipsum? Ipsum ut doloremque iure! Nesciunt ad quisquam cum expedita natus quis adipisci excepturi est, voluptas id, corrupti maiores unde dolorem itaque quas, facilis quia perferendis velit quidem? Incidunt, quo ipsam illo modi itaque quaerat, hic error, officia eaque dolorum temporibus autem vel nesciunt quod officiis velit recusandae asperiores adipisci doloribus sapiente. Nisi rem saepe blanditiis natus adipisci exercitationem quibusdam ipsum, aliquam minus pariatur quisquam! Reiciendis dolorum adipisci, enim, illum rem expedita modi odio repellat, nisi dolore fuga eius? Soluta rerum ipsam nam blanditiis nisi, iusto harum error quas dolore nihil repudiandae autem esse excepturi doloribus laborum labore natus quasi repellat dolores unde commodi sint omnis. Eaque veritatis fugiat, fuga nam ducimus voluptatum quod natus blanditiis.
      </div>
    </main>
  )
}

export default blogId
