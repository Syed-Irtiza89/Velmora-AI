import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Animated glowing sphere
const NeuralOrb: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        <Sphere args={[1.4, 128, 128]}>
          <MeshDistortMaterial
            color="#3b82f6"
            emissive="#1d4ed8"
            emissiveIntensity={0.4}
            roughness={0.1}
            metalness={0.8}
            distort={0.5}
            speed={2.5}
          />
        </Sphere>
      </mesh>
    </Float>
  );
};

// Orbiting ring
const OrbitRing: React.FC<{ radius: number; color: string; speed: number; tilt: number }> = ({ radius, color, speed, tilt }) => {
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.015, 16, 120]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
    </mesh>
  );
};

// Floating data nodes
const DataNode: React.FC<{ position: [number, number, number]; color: string; delay: number }> = ({ position, color, delay }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + delay) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.12]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.9} />
    </mesh>
  );
};

// Particle field
const Particles: React.FC = () => {
  const points = useRef<THREE.Points>(null!);
  const particleCount = 300;

  const positions = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#60a5fa" size={0.04} transparent opacity={0.6} />
    </points>
  );
};

const Scene3D: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 55 }} dpr={[1, 2]}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#3b82f6" />
      <pointLight position={[-5, -5, 5]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[0, 5, -5]} intensity={1} color="#8b5cf6" />

      <Stars radius={80} depth={50} count={2000} factor={2.5} saturation={0.5} fade speed={1} />

      <NeuralOrb />
      <OrbitRing radius={2.2} color="#3b82f6" speed={0.4} tilt={Math.PI / 4} />
      <OrbitRing radius={2.8} color="#06b6d4" speed={-0.25} tilt={-Math.PI / 6} />
      <OrbitRing radius={3.4} color="#8b5cf6" speed={0.15} tilt={Math.PI / 3} />

      <DataNode position={[2.5, 0.5, 0.5]} color="#22d3ee" delay={0} />
      <DataNode position={[-2.5, -0.5, 0.5]} color="#60a5fa" delay={1.5} />
      <DataNode position={[1.5, -2.2, 0]} color="#a78bfa" delay={0.8} />
      <DataNode position={[-1.8, 2.0, 0.3]} color="#34d399" delay={2.1} />
      <DataNode position={[2.8, -1.5, -0.5]} color="#f472b6" delay={1.2} />

      <Particles />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
    </Canvas>
  );
};

export default Scene3D;
