'use client'
import { Canvas } from '@react-three/fiber'

const Page = () => {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color='red' position={[0, 0, 5]} />
        <mesh>
          <icosahedronGeometry></icosahedronGeometry>
          <meshStandardMaterial />
        </mesh>

      </Canvas>
    </div>
  )
}
export default Page
