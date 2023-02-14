import React from "react";
import Wrapper from "./wr-Cloud";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Element from "./Element";
// import El from "./El";
import * as THREE from "three";
import { Stats, OrbitControls, TrackballControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { useControls } from "leva";
import { useMemo } from "react";

import Button from "./Button";
import { Vector3 } from "three";

import { useDispatch } from "react-redux";
import { closeSubmenu } from "../../features/userSlice";

const Cloud = () => {
  const dispatch = useDispatch();

  const ref = useRef();
  // console.log(ref);
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ];

  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      color: { value: "lime" },
    };
  }, []);

  //   const pA = useControls("Polyhedron A", options);
  const Rig = () => {
    // const { camera, mouse } = useThree();
    // const state = useThree();
    // console.log(state);
    const vec = new Vector3();
    useFrame(({ camera, mouse }) => {
      //   camera.position.x = mouse.x;
      //   camera.position.y = mouse.y;
      vec.set(mouse.x * 2, mouse.y * 2, camera.position.z);
      camera.position.lerp(vec, 0.025);
      camera.lookAt(0, 0, 0);
    });
  };
  return (
    <Wrapper
      onMouseOver={() => {
        dispatch(closeSubmenu());
      }}
    >
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Environment preset="park" background />
        <directionalLight position={[5, 10, 5]} castShadow />
        {/* <Element
          position={[-1, 0, 0]}
          onPointerOver={(e) => console.log("onHoverIn")}
        />
        <Element
          position={[1, 1, 0]}
          onPointerOver={(e) => console.log("onHoverIn")}
        /> */}
        <Center>
          <Button position={(1, 1, 1)} />
          {/* <Button position={(1, 1, -2)} /> */}
        </Center>
        <Rig />
        {/* <El
          position={[-2, 2, 0]}
          onPointerOver={(e) => console.log("onHoverIn")}
        /> */}

        {/* <Text
          font="/Inter-Bold.woff"
          scale={[1, 1, 1]}
          color="black" // default
          anchorX="center" // default
          anchorY="middle" // default
        >
          Тютя
        </Text> */}

        {/* <OrbitControls zoomSpeed={0.2} /> */}
        {/* <TrackballControls /> */}
        {/* <axesHelper ref={ref} args={[5]} /> */}
        {/* <gridHelper args={[100, 100, 0xff0000, "teal"]} /> */}
        {/* <Stats /> */}
      </Canvas>
    </Wrapper>
  );
};

export default Cloud;
