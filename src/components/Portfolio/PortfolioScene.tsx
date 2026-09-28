import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshDistortMaterial,
  Preload,
} from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function Orb() {
  const group = useRef<Group>(null);
  const { pointer } = useThree();

  useFrame(({ clock }) => {
    if (!group.current) return;
    const scroll =
      window.scrollY /
      Math.max(document.body.scrollHeight - window.innerHeight, 1);
    group.current.rotation.x += 0.002;
    group.current.rotation.y += 0.004;
    group.current.rotation.z =
      scroll * 1.4 + Math.sin(clock.elapsedTime * 0.45) * 0.08;
    group.current.position.x +=
      (pointer.x * 0.45 - group.current.position.x) * 0.025;
    group.current.position.y +=
      (pointer.y * 0.35 - group.current.position.y) * 0.025;
    group.current.scale.setScalar(1 + scroll * 0.16);
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.45}>
        <mesh>
          <icosahedronGeometry args={[1.65, 5]} />
          <MeshDistortMaterial
            color="#df765d"
            roughness={0.2}
            metalness={0.55}
            distort={0.34}
            speed={1.5}
          />
        </mesh>
        <mesh scale={1.12}>
          <icosahedronGeometry args={[1.65, 2]} />
          <meshBasicMaterial
            color="#f6b7a5"
            wireframe
            transparent
            opacity={0.28}
          />
        </mesh>
      </Float>
    </group>
  );
}

export function PortfolioScene() {
  return (
    <Canvas
      className="webgl-canvas"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 4, 5]} intensity={3} color="#fff1e7" />
      <pointLight
        position={[-4, -2, 3]}
        intensity={10}
        distance={8}
        color="#9eb8a8"
      />
      <Orb />
      <Environment preset="city" environmentIntensity={0.35} />
      <Preload all />
    </Canvas>
  );
}
