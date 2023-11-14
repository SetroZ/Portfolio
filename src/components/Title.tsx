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
    <div className='flex flex-col items-center'>
      <a id={id}></a>

      <p className='text-gray-400 text-center mt-28'>{subTitle}</p>
      <h2 className='font-extrabold  xsm:text-6xl text-4xl tracking-wider text-center '>
        {title}
      </h2>
    </div>
  )
}

export default Title
