import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Ball(props: any) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/bomb.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Sphere as THREE.Mesh).geometry}
        material={materials["Material"]}
      />
    </group>
  );
}

useGLTF.preload("/ball.gltf");

export default Ball;
