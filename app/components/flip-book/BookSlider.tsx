'use client';

// Node modules
import * as THREE from 'three';
import { Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

// Components
import { Experience } from './Experience';
import { UI } from './UI';

export default function BookSlider() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-[80vh] bg-elysion-forest">
      <UI />
      <Loader />
      <Canvas
        shadows={'basic'}
        camera={{
          position: [0, 0.25, 3],
          fov: 40,
        }}
      >
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </div>
  );
}
