'use client'
import { Typewriter } from "react-simple-typewriter"


const MainHero = ()=>{
    return(
        <div className="flex flex-row m-12 gap-3">
            <div className="flex flex-col items-center  ">
                <div className='w-4 h-4  rounded-full bg-purple-500 z-10'></div>
                <div  className={`m-[-2px] w-1 h-[400px]  rounded-full bg-purple-500`}></div>
            </div>
            <div className="flex flex-col gap-2 ">
                <h2 className="font-extrabold text-white text-6xl ">Hi, I am Vetro</h2>
                <h2 className="font-extrabold text-white text-6xl ">I am a 
                <span className='text-purple-500 '>
                <Typewriter words={[' UI Designer',' FullStack Developer', ' CS student']} loop={false} cursor={true} />
                </span>
                
                 </h2>
            </div>
        </div>
    )
}

export default MainHero