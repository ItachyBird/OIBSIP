import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Red = (props) => {
  const { nodes, materials } = useGLTF('/classic_thermometer_red.glb');
  const group = useRef();

  useEffect(() => {
    // Update Material.004 to have emissive properties
    if (materials['Material.004']) {
      materials['Material.004'].emissive = new THREE.Color(0xff0000); // Red color
      materials['Material.004'].emissiveIntensity = 1; // Adjust intensity if needed
    }

    const animate = () => {
      if (group.current) {
        group.current.rotation.y += 0.006; // Adjust the rotation speed
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, [materials]);

  return (
    <group ref={group} position={[4, -0.8, 0]} scale={[2, 2, 2]} {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        {/* First tube, closer to the center and larger */}
        <group position={[-0.5, 0, 0]} scale={[0.1, 0.55, 0.1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials['BagaPie_Glass.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials['Material.012']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials['Material.004']}
          />
        </group>
        {/* Second tube, larger */}
        <group position={[0, 0, 0]} scale={[0.1, 0.55, 0.1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials['BagaPie_Glass.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials['Material.012']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials['Material.004']}
          />
        </group>
        {/* Third tube, closer to the center and larger */}
        <group position={[0.5, 0, 0]} scale={[0.1, 0.55, 0.1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials['BagaPie_Glass.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials['Material.012']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials['Material.004']}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/classic_thermometer_red.glb');
export default Red;
