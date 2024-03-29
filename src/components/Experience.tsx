'use client'
import { experiences, experienceType } from '@/data'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import Title from './Title'
import 'react-vertical-timeline-component/style.min.css'
import Image from 'next/image'

const ExperienceCard = ({ experience }: { experience: experienceType }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: '#18181b',
        color: experience.color,

      }}
      contentArrowStyle={{ borderRight: '15px solid ' + experience.color }}
      date={experience.date}
      iconStyle={{ background: '#d4d4d4' }}
      icon={
        <div className='flex justify-center items-center w-full h-full '>
          <Image
            height={50}
            width={50}
            src={experience.pic}
            alt={experience.title}
            className='object-contain -z-10'
          />
        </div>
      }
    >
      <div>
        <div className='flex flex-row   items-center gap-2'>
          <Image
            className='invert m-0 p-0 '
            src='/link.svg'
            width={22}
            height={22}
            alt='link'
          />
          <a
            href={experience.link}
            target='_blank'
            className={`  underline text-3xl items-center font-bold`}
            style={{ color: experience.color }}
          >
            {experience.title}
          </a>
          
        </div>
        <p
          className={`  text-secondary font-semibold text-zinc-400`}
          style={{ margin: 0 }}
        >
          {experience.subTitle}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.desc.map((point: string) => (
          <li
            key={`${point}`}
            className='text-white-100 text-xl pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <div className='w-full ' >
      <Title id='Projects' subTitle='A brief overview of my work' title='Past Experience' />
      <div className='mt-20 '>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.color} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience
