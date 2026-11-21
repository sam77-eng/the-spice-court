import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { IndianArchEmblem } from './IndianMotif';

/**
 * 3D Rotating Royal Brass Ornamental Emblem
 * Fulfills Section 16 requirement: "at least one additional interactive 3D visual element
 * outside the hero, such as a rotating brass ornamental emblem or a subtle spice-inspired 3D object."
 */
function Emblem3DModel() {
  const meshGroup = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (meshGroup.current) {
      const t = clock.getElapsedTime();
      // Continuous slow majestic rotation, accelerates smoothly when hovered
      const rotSpeed = hovered ? 0.9 : 0.45;
      meshGroup.current.rotation.y += 0.01 * rotSpeed;
      meshGroup.current.rotation.x = Math.sin(t * 0.8) * 0.12;
      meshGroup.current.rotation.z = Math.cos(t * 0.6) * 0.08;
    }
  });

  return (
    <group
      ref={meshGroup}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.08 : 1}
    >
      {/* Outer Filigree Ring */}
      <mesh>
        <torusGeometry args={[1.5, 0.07, 16, 64]} />
        <meshStandardMaterial
          color="#B58A52"
          metalness={0.9}
          roughness={0.25}
        />
      </mesh>

      {/* Secondary Inner Ring */}
      <mesh>
        <torusGeometry args={[1.15, 0.04, 16, 48]} />
        <meshStandardMaterial
          color="#E5C07B"
          metalness={0.92}
          roughness={0.2}
        />
      </mesh>

      {/* Central 8-Pointed Star Anise / Lotus Spice Petals */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * Math.PI) / 4;
        return (
          <group key={i} rotation={[0, 0, angle]}>
            <mesh position={[0, 0.65, 0]}>
              <coneGeometry args={[0.16, 0.75, 4]} />
              <meshStandardMaterial
                color="#B58A52"
                metalness={0.88}
                roughness={0.3}
              />
            </mesh>
            <mesh position={[0, 0.95, 0]}>
              <sphereGeometry args={[0.05, 12, 12]} />
              <meshStandardMaterial
                color="#FFF9F0"
                metalness={0.95}
                roughness={0.15}
              />
            </mesh>
          </group>
        );
      })}

      {/* Central Golden Medallion */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 0.12, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial
          color="#722D35"
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>

      {/* Jewel Core */}
      <mesh position={[0, 0, 0.08]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial
          color="#B58A52"
          emissive="#521D24"
          emissiveIntensity={0.3}
          metalness={0.95}
          roughness={0.15}
        />
      </mesh>
    </group>
  );
}

export default function OrnamentalEmblem3D({ className = "w-48 h-48 sm:w-64 sm:h-64" }) {
  const [hasWebGL, setHasWebGL] = useState(true);

  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      {hasWebGL ? (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <IndianArchEmblem className="w-24 h-24 text-gold animate-spin" />
            </div>
          }
        >
          <Canvas
            camera={{ position: [0, 0, 4.2], fov: 45 }}
            dpr={[1, 1.5]}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            <ambientLight intensity={0.7} color="#FFF9F0" />
            <pointLight position={[3, 3, 4]} intensity={2.2} color="#FFAE42" />
            <pointLight position={[-3, -3, 2]} intensity={1.2} color="#722D35" />
            <Emblem3DModel />
          </Canvas>
        </Suspense>
      ) : (
        <IndianArchEmblem className="w-32 h-32 text-gold animate-pulse" />
      )}
    </div>
  );
}
