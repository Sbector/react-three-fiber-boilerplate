import { Canvas } from '@react-three/fiber'
import Polyhedron from './Polyhedron'
import * as THREE from 'three'
import { useMemo } from 'react'
import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'

export default function App() {
  const polyhedron = useMemo(
    () => [
      new THREE.BoxGeometry(),
      new THREE.SphereGeometry(0.785398),
      new THREE.DodecahedronGeometry(0.785398)
    ],
    []
  )

  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      wireframe: true,
      color: { value: 'lime' }
    }
  }, [])

  const pA = useControls('Polyhedron A', options)
  const pB = useControls('Polyhedron B', options)

  return (
    <Canvas camera={{ position: [1, 2, 3] }}>
      <Polyhedron
        position={[-1, 1, 0]}
        rotation={[pA.x, pA.y, pA.z]}
        visible={pA.visible}
        color={pA.color}
        polyhedron={polyhedron}
        wireframe={pA.wireframe}
      />
      <Polyhedron
        position={[1, 1, 0]}
        rotation={[pB.x, pB.y, pB.z]}
        visible={pB.visible}
        color={pB.color}
        polyhedron={polyhedron}
        wireframe={pB.wireframe}
      />
      <OrbitControls target-y={1} />
      <axesHelper args={[5]} />
      <gridHelper />
      <Perf position="bottom-left" minimal={true}/>
    </Canvas>
  )
}
