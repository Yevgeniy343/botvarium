import { Stats, OrbitControls, Circle, meshBounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Musulik from "../../assets/imgs/veerv/111.glb";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function App({ position, color, onPointerOver, rotation }) {
  const gltf = useLoader(GLTFLoader, Musulik);
  //   console.log(gltf);
  const ref = useRef();

  useFrame((_, delta) => {
    // ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
    // ref.current.rotation.z += 0.01;
    // ref.current.rotation.y += 0.5 * delta;
  });
  return (
    <mesh ref={ref} position={position}>
      <primitive
        object={gltf.scene}
        children-0-castShadow
        // onPointerOver={onPointerOver}
      />
    </mesh>
  );
}
