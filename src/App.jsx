import { TrackballControls, TrackballControlsControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Perf } from 'r3f-perf'
import { ACESFilmicToneMapping, LinearToneMapping } from 'three';

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
    <Canvas camera={{ position: [1, 0, 1] }} gl={{ toneMapping: LinearToneMapping, toneMappingExposure: 1.5 }}>
      <ambientLight intensity={40} />
      <Model />
      <TrackballControls target={[0, 0.3, 0]} minDistance={1} maxDistance={3}/>
      <Perf position="top-left" />
    </Canvas>
  )
}
