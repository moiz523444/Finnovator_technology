'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial, OrbitControls, Points, PointMaterial } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function ParticleField({ count = 550 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const data = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 3.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      data[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      data[i * 3 + 1] = r * Math.cos(phi)
      data[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    }
    return data
  }, [count])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.025
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.05
    }
  })

  return <Points ref={ref} positions={positions} stride={3}><PointMaterial transparent color="#67e8f9" size={0.018} sizeAttenuation depthWrite={false} /></Points>
}

function CoreObject() {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.12
      ref.current.rotation.y = state.clock.elapsedTime * 0.2
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.08
    }
  })
  return <group ref={ref}>
    <mesh>
      <icosahedronGeometry args={[1.18, 1]} />
      <MeshTransmissionMaterial backside thickness={0.5} roughness={0.12} transmission={1} ior={1.45} chromaticAberration={0.18} anisotropy={0.3} color="#b7f7ff" />
    </mesh>
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[1.55, 0.012, 12, 96]} />
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.8} />
    </mesh>
    <mesh rotation={[0, Math.PI / 3, Math.PI / 4]}>
      <torusGeometry args={[1.78, 0.008, 12, 96]} />
      <meshBasicMaterial color="#818cf8" transparent opacity={0.5} />
    </mesh>
  </group>
}

export function HeroCanvas() {
  return <div className="canvas-shell" aria-hidden="true"><Canvas camera={{ position: [0, 0, 5.8], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}><ambientLight intensity={1.4} /><pointLight position={[3, 2, 4]} intensity={14} color="#22d3ee" /><pointLight position={[-3, -2, 2]} intensity={9} color="#6366f1" /><Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.2}><CoreObject /></Float><ParticleField /><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.18} /></Canvas></div>
}

export function GlobeCanvas() {
  return <div className="globe-shell" aria-hidden="true"><Canvas camera={{ position: [0, 0, 4.4], fov: 45 }} dpr={[1, 1.5]}><ambientLight intensity={1.1} /><mesh rotation={[0.2, -0.5, 0]}><sphereGeometry args={[1.35, 32, 20]} /><meshBasicMaterial color="#1e293b" wireframe transparent opacity={0.28} /><mesh rotation={[0.1, 0.2, 0]}><sphereGeometry args={[1.38, 16, 12]} /><meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.32} /></mesh></mesh><ParticleField count={180} /><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} /></Canvas></div>
}
