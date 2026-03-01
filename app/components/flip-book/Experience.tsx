'use client';

// Node modules
import { Environment, OrbitControls, Preload } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { useAtom } from 'jotai';

// Components
import { Book } from './Book';
import { isHoveringBookAtom, isTouchDeviceAtom, zoomActionAtom } from './UI';

export const Experience = () => {
  const [isHoveringBook] = useAtom(isHoveringBookAtom);
  const [isTouchDevice] = useAtom(isTouchDeviceAtom);
  const [zoomAction] = useAtom(zoomActionAtom);
  const { camera } = useThree();

  useFrame(() => {
    if (zoomAction !== 0) {
      const step = 0.08 * zoomAction;
      camera.position.z = Math.max(2, Math.min(8, camera.position.z - step));
    }
  });

  return (
    <>
      <Book />
      <OrbitControls
        enableRotate={false}
        enablePan={false}
        enableZoom={isTouchDevice ? false : isHoveringBook}
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
