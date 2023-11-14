const Title = ({
  id,
  title,
  subTitle,
}: {
  id?: string
  title: String
  subTitle: string
}) => {
  return (
    <div className='flex flex-col items-center' id={id}>
      <p className='text-gray-400 text-center'>{subTitle}</p>
      <h2 className='font-extrabold  xsm:text-6xl text-4xl tracking-wider text-center '>
        {title}
      </h2>
    </div>
  )
}

export default Title
