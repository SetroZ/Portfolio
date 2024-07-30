const path = '/tech/'

export type experienceType = {
  title: string
  subTitle: string
  desc: string[]
  color: string
  link: string
  date: string
  pic: string
}

export const techStack = [
  path + 'docker.png',
  path + 'mongodb.png',
  path + 'nextjs.png',
  path + 'psql.png',
  path + 'reactjs.png',
  path + 'tailwind.png',
  path + 'typescript.png',
  path + 'git.png',
  path + 'python.svg',
]

export const experiences: experienceType[] = [
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
    pic: path + 'lua.png',
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
    pic: '/wesley.png',
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
    pic: '/M.png',
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
    link: 'https://setroz.github.io/Space-Invader/',
    pic: '/ufo.png',
    color: '#eab308',
    date: '2020',
  },
  {
    title: 'Discord Bot',
    subTitle: 'Personal Project',
    desc: [
      'Developed a Discord bot for managing server tasks, including user kicks, bans, and message clearing.',
      'Implemented features like inspirational quotes and rule displays.',
    ],
    link: 'https://github.com/SetroZ/Bot',
    pic: '/discord.svg',
    color: '#7289DA',
    date: '2020',
  },
]
export const dummyArticle = {
  id: 4,
  date: '2023-11-21T08:33:20.532Z',
  title: "What's new in Flutter 3.16",
  subtitle:
    'Material 3 by default, Impeller preview for Android, DevTools extensions, and much more',
  body: `  Us Their all behold thing fish Don't kind our Form Wherein bearing said gives made spirit, there male which isn't so in said have heaven image, forth stars winged. Heaven. Green sea third god days saw. Beginning was subdue seas beast heaven. Two.

    Him she'd fowl bearing cattle saying signs gathering meat after sixth tree Bring have set second. Fruitful whales fifth fill whales bring. Is after without firmament god.
    
    Have, two kind life tree dominion. God that appear that bring isn't Air day man fifth darkness evening spirit there seed. Us bring morning bring under. His there hath, you'll.`,
  image: '/test.webp',
  Comment: [
    {
      id: 1,
      date: new Date('2023-11-22T03:44:16.113Z'),
      name: 'Joe Doe',
      article_id: 4,
      body: 'Great Article. I really like the new design! Good job',
    },
    {
      id: 2,
      date: new Date('2023-11-22T03:55:06.144Z'),
      name: 'John Cena',
      article_id: 4,
      body: 'You cant see me my time is now',
    },
    {
      id: 3,
      date: new Date('2023-11-30T03:57:25.949Z'),
      name: 'ddd',
      article_id: 4,
      body: 'ddd',
    },
    {
      id: 6,
      date: new Date('2023-11-30T04:54:08.460Z'),
      name: 'my man',
      article_id: 4,
      body: 'hello world',
    },
    {
      id: 7,
      date: new Date('2023-11-30T04:54:14.609Z'),
      name: 'test',
      article_id: 4,
      body: 'test',
    },
  ],
}
