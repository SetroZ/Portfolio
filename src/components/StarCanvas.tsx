'use client'

import ParticleAnimation from 'react-particle-animation'

const StarsCanvas = () => {
  return (
    <div className='w-full h-full absolute -z-[1]'>
      <ParticleAnimation
        background={{ r: 0, g: 0, b: 0, a: 0 }}
        interactive={true}
        color={{ r: 225, g: 225, b: 225, a: 5 }}
        numParticle={300}
        particleSpeed={1}
        particleRadius={3}
        lineWidth={1}
        width={'100%'}
        height={'100%'}
      />
    </div>
  )
}

export default StarsCanvas
