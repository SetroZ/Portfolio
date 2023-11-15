'use client'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei'

import CanvasLoader from './CanvasLoader'
const Ball = ({ imgUrl, color }: { imgUrl: string; color: string }) => {
  const [decal] = useTexture([imgUrl])

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={4}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({
  imgUrl,
  color = '#dddddd',
}: {
  imgUrl: string
  color?: string
}) => {
  return (
    <div className=' w-40'>
      <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
        <OrbitControls enableZoom={false} />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={imgUrl} color={color} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default BallCanvas
