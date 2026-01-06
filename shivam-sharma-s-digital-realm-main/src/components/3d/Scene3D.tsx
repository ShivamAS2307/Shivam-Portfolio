import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { ParticleField } from './ParticleField';
import { FloatingObjects } from './FloatingObjects';

export const Scene3D = () => {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d4ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            color="#3b82f6"
          />
          
          <ParticleField count={400} />
          <FloatingObjects />
          
          <fog attach="fog" args={['#0a0a1a', 10, 50]} />
        </Suspense>
      </Canvas>
    </div>
  );
};
