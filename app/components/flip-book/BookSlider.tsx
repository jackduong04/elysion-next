'use client';

// Node modules
import { Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { useAtomValue } from 'jotai';

// Components
import { Experience } from './Experience';
import { UI, isHoveringBookAtom } from './UI';

export default function BookSlider() {
  const [windowWidth, setWindowWidth] = useState(0);
  const isHoveringBook = useAtomValue(isHoveringBookAtom);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-[75vh] bg-elysion-forest">
      <UI />
      <Loader />
      <Canvas
        style={{ touchAction: isHoveringBook ? 'none' : 'pan-y' }}
        shadows={'basic'}
        camera={{
          position: [0, 0.25, windowWidth > 1024 ? 4 : 5],
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
