const path = '/tech/'

export const techStack = [
  path + 'css.png',
  path + 'docker.png',
  path + 'figma.png',
  path + 'html.png',
  path + 'mongodb.png',
  path + 'nextjs.png',
  path + 'nodejs.png',
  path + 'psql.png',
  path + 'reactjs.png',
  path + 'tailwind.png',
  path + 'typescript.png',
  path + 'lua.png',
  path + 'git.png',
]

export const experiences = [
  {
    title: 'FreeLance Programmer',
    subTitle: 'Roblox (Lua)',
    desc: [
      'Served over 15 customers to enhance games surpassing 1 million visits.',
      'Delivered multiple projects within the deadlines, demonstrating time and project management skills.',
      'Worked closely with customers to understand their needs and deliver satisfactory results.',
      'Redesigned User Interface and implemented various features.',
      'provided ongoing customer support and service to address any issues, bugs, or updates needed.',
    ],
    color: '#3b82f6',
    link: 'https://devforum.roblox.com/t/open-advanced-scripter-ui-designer-usd-only-3-years-experience',
    date: '2021-2023',
  },
  {
    title: 'Wesley ChatBot',
    subTitle: 'Hackathon Project',
    desc: [
      'Collaboratively developed an AI customer support chatbot during a Microsoft-sponsored hackathon',
      'Led a team of developers in developing and delivering the project on time',
      'Worked closely with the mentor to understand their needs and deliver a satisfactory product',
      'Learnt new and trending Technologies.',
    ],
    color: '#a855f7',
    link: 'https://wesley-chatbot.vercel.app',
    date: '9/2023',
  },
  {
    title: 'Massimo',
    subTitle: 'Personal Project',
    desc: [
      'Developed a full restaurant website using up to date technologies.',
      'Developed problem-solving skills, attention to detail, and the ability to learn new technologies quickly.',
      'Implemented user authentication and data saving allowing for customer personalized experiences.',
      'integrated third-party payment processing capabilities.',
    ],
    pic: '',
    link: 'https://github.com/SetroZ/resturant',
    color: '#dc2626',
    date: '8/2023',
  },
  {
    title: 'Space Invader',
    subTitle: 'Personal Project',
    desc: [
      'Created a 2D Python game using Pygame',
      'Developed essential mechanics like collision detection, scoring, and player movement.',
    ],
    link: 'https://github.com/SetroZ/Space-Invader',
    pic: '',
    color: '#eab308',
    date: '2020',
  },
]

export type experiencesType = typeof experiences
