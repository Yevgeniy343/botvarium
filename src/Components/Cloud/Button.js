import React from "react";

const Button = ({ position }) => {
  return (
    <mesh position={position}>
      <icosahedronGeometry />
      <meshPhysicalMaterial
        roughness={0}
        metalness={0}
        thickness={3.12}
        ior={1.74}
        transmission={1.0}
      ></meshPhysicalMaterial>
    </mesh>
  );
};

export default Button;
