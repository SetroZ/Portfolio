'use client'
import { experiences } from '@/data'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import Title from './Title'

import 'react-vertical-timeline-component/style.min.css'
import Image from 'next/image'
import X from '@/assets/github.png'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: '#18181b',
        color: '#ffff',
      }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: '#383E56' }}
      icon={
        <div className='flex justify-center items-center w-full h-full '>
          <Image
            width={50}
            height={50}
            src={'/logos/github.png'}
            alt={experience.company_name}
            className=' object-contain -z-10'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.desc.map((point) => (
          <li
            key={`${point}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
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
    <div>
      <Title
        subTitle='A brief overview of my work'
        title='Past Expereince'
        id='Projects'
      />

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard key={`experience-s`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience
