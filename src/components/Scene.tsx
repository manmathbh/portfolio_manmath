import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, Stars, OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';
import { useScroll } from '@react-three/drei';

const Scene: React.FC = () => {
  const meshRef = useRef<Mesh>(null);
  const scroll = useScroll();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      
      const offset = scroll.offset;
      meshRef.current.position.y = Math.sin(offset * Math.PI * 2) * 2;
      meshRef.current.scale.setScalar(1 + Math.sin(offset * Math.PI * 4) * 0.2);
    }

    state.camera.position.x = Math.sin(scroll.offset * Math.PI * 2) * 3;
    state.camera.position.z = 5 + Math.sin(scroll.offset * Math.PI) * 2;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#667eea" />

      {/* Background Stars */}
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />

      {/*3D Object */}
      <Icosahedron
        ref={meshRef}
        args={[1, 0]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#667eea"
          wireframe={true}
          transparent={true}
          opacity={0.8}
        />
      </Icosahedron>

      {/*geometric elements */}
      <Icosahedron args={[0.5, 0]} position={[3, 2, -2]}>
        <meshStandardMaterial
          color="#764ba2"
          wireframe={true}
          transparent={true}
          opacity={0.6}
        />
      </Icosahedron>

      <Icosahedron args={[0.3, 0]} position={[-3, -2, 1]}>
        <meshStandardMaterial
          color="#a855f7"
          wireframe={true}
          transparent={true}
          opacity={0.7}
        />
      </Icosahedron>

      {/* Orbit ctrl for manual intrn*/}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  );
};

export default Scene;

