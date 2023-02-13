import { Stats, OrbitControls, Circle } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Musulik from "../../assets/imgs/veerv/111.glb";

export default function App({ position, color, onPointerOver, rotation }) {
  const gltf = useLoader(GLTFLoader, Musulik);
  console.log(gltf);

  return (
    <>
      {/* <directionalLight position={[1, 1.0, 4.4]} castShadow /> */}

      <primitive
        object={gltf.scene}
        position={position}
        children-0-castShadow
        onPointerOver={onPointerOver}
      />
    </>
  );
}
