import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingObjects = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Main glowing sphere - represents cloud */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1.5, 64, 64]} position={[4, 2, -5]}>
          <MeshDistortMaterial
            color="#00d4ff"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.6}
          />
        </Sphere>
      </Float>

      {/* Purple icosahedron - represents data nodes */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.8}>
        <Icosahedron args={[0.8]} position={[-5, -1, -8]}>
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.7}
          />
        </Icosahedron>
      </Float>

      {/* Blue torus - represents connectivity */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.6}>
        <Torus args={[1, 0.3, 16, 32]} position={[-4, 3, -6]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={0.2}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.5}
          />
        </Torus>
      </Float>

      {/* Smaller accent spheres */}
      {[...Array(8)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.3} floatIntensity={0.5}>
          <Sphere
            args={[0.15 + Math.random() * 0.2]}
            position={[
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 10,
              -5 - Math.random() * 10
            ]}
          >
            <meshStandardMaterial
              color={['#00d4ff', '#8b5cf6', '#3b82f6', '#06b6d4'][i % 4]}
              emissive={['#00d4ff', '#8b5cf6', '#3b82f6', '#06b6d4'][i % 4]}
              emissiveIntensity={0.5}
              metalness={0.9}
              roughness={0.1}
            />
          </Sphere>
        </Float>
      ))}

      {/* Data cubes */}
      {[...Array(5)].map((_, i) => (
        <Float key={`cube-${i}`} speed={0.8 + i * 0.1} rotationIntensity={1} floatIntensity={0.4}>
          <Box
            args={[0.4, 0.4, 0.4]}
            position={[
              (Math.random() - 0.5) * 12,
              (Math.random() - 0.5) * 8,
              -8 - Math.random() * 5
            ]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            <meshStandardMaterial
              color="#00d4ff"
              emissive="#00d4ff"
              emissiveIntensity={0.3}
              metalness={0.8}
              roughness={0.2}
              transparent
              opacity={0.4}
              wireframe
            />
          </Box>
        </Float>
      ))}
    </group>
  );
};
