import { Canvas } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import helvetikerFont from "./../../../public/fonts/helvetiker_regular.typeface.json";
export const Section = () => {
  return <App2 />;
};

export default function App2() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#111" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 2]} intensity={2} />

        <Center>
          <Text3D
            font={helvetikerFont as never}
            size={0.6}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            Hello World
            <meshStandardMaterial
              color="hotpink"
              roughness={0.3}
              metalness={0.1}
            />
          </Text3D>
        </Center>
      </Canvas>
    </div>
  );
}
