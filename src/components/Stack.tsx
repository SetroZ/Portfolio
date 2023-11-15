import Title from './Title'
import { techStack } from '@/data'
import BallCanvas from './BallCanvas'
const Stack = () => {
  return (
    <div className=' flex  flex-col'>
      <a></a>
      <Title id='Stack' subTitle='Code, Connect, Conquer' title='The Stack' />
      <div className='flex justify-center'>
        <div
          className='flex flex-row gap-1 mt-4 w-[75%] flex-wrap 
      justify-center bg-zinc-900 rounded-lg shadow-xl shadow-zinc-600 py-4 border-zinc-800 border-solid border-4'
        >
          {techStack.map((ball) => (
            <BallCanvas key={ball} imgUrl={ball} color='#FFFFFF' />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stack
