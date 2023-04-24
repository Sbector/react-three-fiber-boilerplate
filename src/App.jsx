import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Perf } from 'r3f-perf'

function Model() {
  const url = require('./models/paricutin.glb')
  const gltf = useGLTF(url)
  console.log(gltf)
  return (
    <Suspense>
      <primitive
        object={gltf.scene}
        position={[0, 0, 0]}
        scale={[10, 10, 10]}
      />
    </Suspense>
  )
}
export default function App() {
  return (
    <Canvas camera={{ position: [1, 0, 1] }} shadows>
      <ambientLight intensity={40} />
      <Model />
      <OrbitControls target={[0, 0.3, 0]} minDistance={1.5} maxDistance={3}/>
      <Perf position="top-left" />
    </Canvas>
  )
}
