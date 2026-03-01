'use client';

// Node modules
import { Environment, OrbitControls, Preload } from '@react-three/drei';

import { useAtom } from 'jotai';

// Components
import { Book } from './Book';
import { isHoveringBookAtom } from './UI';

export const Experience = () => {
  const [isHoveringBook] = useAtom(isHoveringBookAtom);

  return (
    <>
      <Book />
      <OrbitControls
        enableRotate={false}
        enablePan={false}
        enableZoom={isHoveringBook}
      />
      <Environment preset="night" />
      <directionalLight
        position={[2, 2, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.15} />
      </mesh>
      <Preload all />
    </>
  );
};
