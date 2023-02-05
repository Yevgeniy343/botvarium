import Wrapper from "./wr-Knowlrdge";
import Navbar from "../../Components/Navigation/Navbar";
import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, TrackballControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

// import randomWord from "random-words";

function Word({ children, ...props }) {
  const navigate = useNavigate();

  const test = () => {
    console.log(ref.current.uuid);
    navigate("/");
  };
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter-Bold.woff",
    fontSize: 1,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : "white"),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={test}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count = 4, radius }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 0); // count+2
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          // randomWord(),
          "Botvarium",
          "Cases",
        ]);
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

const Knowledge = () => {
  const refWindow = useRef();
  // let windowWidth;
  // let currentRadius;
  // useEffect(() => {
  //   const windowWidth = refWindow.current.getBoundingClientRect().width;
  //   console.log("windowWidth", windowWidth);
  //   console.log("currentRadius", currentRadius);
  //   currentRadius = windowWidth / 70;
  // }, [windowWidth]);
  console.log("cwef", window.innerWidth);
  const wW = window.innerWidth;
  return (
    <Wrapper ref={refWindow}>
      <Navbar />
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={["#202025", 0, 90]} />
        <Cloud count={8} radius={wW / 60} />
        <TrackballControls />
        {/* <OrbitControls /> */}
      </Canvas>
    </Wrapper>
  );
};

export default Knowledge;
