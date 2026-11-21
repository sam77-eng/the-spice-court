import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Procedural cusped Indian Palace Arch Shape for ExtrudeGeometry
 */
function createPalaceArchShape() {
  const shape = new THREE.Shape();
  const w = 4.2;
  const h = 5.8;

  // Outer boundary
  shape.moveTo(-w, -h);
  shape.lineTo(w, -h);
  shape.lineTo(w, h * 0.4);

  // Cusped Mughal/Rajasthani pointed archway curve
  // We trace a series of gentle arcs meeting at the apex pointed tip
  const apex = [0, h * 1.05];
  
  // Right side cusps
  shape.bezierCurveTo(w, h * 0.65, w * 0.7, h * 0.8, w * 0.5, h * 0.85);
  shape.bezierCurveTo(w * 0.35, h * 0.9, w * 0.15, h * 0.98, apex[0], apex[1]);

  // Left side cusps (mirror)
  shape.bezierCurveTo(-w * 0.15, h * 0.98, -w * 0.35, h * 0.9, -w * 0.5, h * 0.85);
  shape.bezierCurveTo(-w * 0.7, h * 0.8, -w, h * 0.65, -w, h * 0.4);
  shape.lineTo(-w, -h);

  // Hollow inner arch portal
  const hole = new THREE.Path();
  const iw = 2.4;
  const ih = 4.6;
  hole.moveTo(-iw, -h);
  hole.lineTo(-iw, ih * 0.4);
  hole.bezierCurveTo(-iw, ih * 0.65, -iw * 0.6, ih * 0.82, -iw * 0.4, ih * 0.88);
  hole.bezierCurveTo(-iw * 0.2, ih * 0.95, -0.05, ih * 1.02, 0, ih * 1.06);
  hole.bezierCurveTo(0.05, ih * 1.02, iw * 0.2, ih * 0.95, iw * 0.4, ih * 0.88);
  hole.bezierCurveTo(iw * 0.6, ih * 0.82, iw, ih * 0.65, iw, ih * 0.4);
  hole.lineTo(iw, -h);
  hole.lineTo(-iw, -h);

  shape.holes.push(hole);
  return shape;
}

/**
 * 3D Palace Architectural Arch with layered carvings & brass trims
 */
function PalaceArchMesh() {
  const archShape = useMemo(() => createPalaceArchShape(), []);
  
  const extrudeSettings = useMemo(() => ({
    steps: 2,
    depth: 0.6,
    bevelEnabled: true,
    bevelThickness: 0.15,
    bevelSize: 0.1,
    bevelOffset: 0,
    bevelSegments: 4
  }), []);

  const stoneMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#261A17',
    roughness: 0.85,
    metalness: 0.15,
  }), []);

  const goldTrimMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#B58A52',
    roughness: 0.35,
    metalness: 0.85,
  }), []);

  const burgundyTrimMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#722D35',
    roughness: 0.65,
    metalness: 0.35,
  }), []);

  return (
    <group position={[0, -0.2, 0]}>
      {/* Main Extruded Arch Stone Structure */}
      <mesh position={[0, 0, -0.3]}>
        <extrudeGeometry args={[archShape, extrudeSettings]} />
        <primitive object={stoneMaterial} attach="material" />
      </mesh>

      {/* Gold Arch Bevel Relief Trim (Second Layer for depth) */}
      <mesh position={[0, 0, 0.32]} scale={[0.96, 0.96, 0.2]}>
        <extrudeGeometry args={[archShape, { depth: 0.1, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 3 }]} />
        <primitive object={goldTrimMaterial} attach="material" />
      </mesh>

      {/* Left Fluted Column */}
      <group position={[-2.9, -1, 0.1]}>
        {/* Column Shaft */}
        <mesh position={[0, 1.2, 0]}>
          <cylinderGeometry args={[0.32, 0.36, 4.8, 16]} />
          <primitive object={stoneMaterial} attach="material" />
        </mesh>
        {/* Brass Rings */}
        <mesh position={[0, 3.4, 0]}>
          <torusGeometry args={[0.38, 0.06, 12, 24]} />
          <primitive object={goldTrimMaterial} attach="material" />
        </mesh>
        <mesh position={[0, -0.8, 0]}>
          <torusGeometry args={[0.42, 0.08, 12, 24]} />
          <primitive object={goldTrimMaterial} attach="material" />
        </mesh>
        {/* Column Capital / Pedestal */}
        <mesh position={[0, 3.65, 0]}>
          <boxGeometry args={[0.85, 0.35, 0.85]} />
          <primitive object={burgundyTrimMaterial} attach="material" />
        </mesh>
        <mesh position={[0, -1.2, 0]}>
          <boxGeometry args={[0.95, 0.4, 0.95]} />
          <primitive object={burgundyTrimMaterial} attach="material" />
        </mesh>
      </group>

      {/* Right Fluted Column */}
      <group position={[2.9, -1, 0.1]}>
        {/* Column Shaft */}
        <mesh position={[0, 1.2, 0]}>
          <cylinderGeometry args={[0.32, 0.36, 4.8, 16]} />
          <primitive object={stoneMaterial} attach="material" />
        </mesh>
        {/* Brass Rings */}
        <mesh position={[0, 3.4, 0]}>
          <torusGeometry args={[0.38, 0.06, 12, 24]} />
          <primitive object={goldTrimMaterial} attach="material" />
        </mesh>
        <mesh position={[0, -0.8, 0]}>
          <torusGeometry args={[0.42, 0.08, 12, 24]} />
          <primitive object={goldTrimMaterial} attach="material" />
        </mesh>
        {/* Column Capital / Pedestal */}
        <mesh position={[0, 3.65, 0]}>
          <boxGeometry args={[0.85, 0.35, 0.85]} />
          <primitive object={burgundyTrimMaterial} attach="material" />
        </mesh>
        <mesh position={[0, -1.2, 0]}>
          <boxGeometry args={[0.95, 0.4, 0.95]} />
          <primitive object={burgundyTrimMaterial} attach="material" />
        </mesh>
      </group>

      {/* Entrance Threshold / Palace Marble Steps */}
      <group position={[0, -2.6, 0.4]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[6.8, 0.25, 1.8]} />
          <primitive object={stoneMaterial} attach="material" />
        </mesh>
        <mesh position={[0, -0.25, 0.25]}>
          <boxGeometry args={[7.4, 0.25, 1.8]} />
          <primitive object={burgundyTrimMaterial} attach="material" />
        </mesh>
        <mesh position={[0, 0.13, 0.85]}>
          <boxGeometry args={[6.2, 0.04, 0.08]} />
          <primitive object={goldTrimMaterial} attach="material" />
        </mesh>
      </group>
    </group>
  );
}

/**
 * Warm illuminated inner sanctuary portal with light mist
 */
function IlluminatedSanctuary() {
  const portalRef = useRef();

  useFrame(({ clock }) => {
    if (portalRef.current) {
      const t = clock.getElapsedTime();
      portalRef.current.intensity = 2.4 + Math.sin(t * 1.5) * 0.3;
    }
  });

  return (
    <group position={[0, 0.4, -2.2]}>
      {/* Deep inner portal backdrop glowing with warm candlelight */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[7, 10]} />
        <meshStandardMaterial
          color="#3A1C16"
          emissive="#722D35"
          emissiveIntensity={0.45}
          roughness={0.9}
        />
      </mesh>

      {/* Warm golden light source casting out through arch doorway */}
      <pointLight
        ref={portalRef}
        color="#FFA834"
        intensity={2.5}
        distance={12}
        decay={2}
        position={[0, 0.5, 0.8]}
      />

      {/* Secondary soft amber flood */}
      <pointLight
        color="#F3E9D9"
        intensity={1.2}
        distance={8}
        position={[0, 2.5, 0.2]}
      />
    </group>
  );
}

/**
 * Hanging Royal Brass Lanterns flanking the arch
 */
function BrassLantern({ position = [0, 0, 0] }) {
  const lightRef = useRef();

  useFrame(({ clock }) => {
    if (lightRef.current) {
      const t = clock.getElapsedTime() + (position[0] > 0 ? 1 : 0);
      lightRef.current.intensity = 1.4 + Math.sin(t * 3.5) * 0.2;
    }
  });

  return (
    <group position={position}>
      {/* Brass Chain */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 1.6, 8]} />
        <meshStandardMaterial color="#B58A52" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Octagonal Lantern Housing */}
      <mesh position={[0, -0.2, 0]}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial
          color="#B58A52"
          metalness={0.9}
          roughness={0.25}
          wireframe={false}
        />
      </mesh>
      {/* Inner Glowing Diya Flame */}
      <mesh position={[0, -0.2, 0]}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshBasicMaterial color="#FFD166" />
      </mesh>
      {/* Lantern Warm Pointlight */}
      <pointLight
        ref={lightRef}
        color="#FFB347"
        intensity={1.5}
        distance={4.5}
        decay={2}
        position={[0, -0.2, 0.2]}
      />
    </group>
  );
}

/**
 * Softly animated royal silk elements on the flanks
 */
function RoyalSilkBanner({ position = [-3.8, 0, 0.2], flip = false }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      const geom = meshRef.current.geometry;
      const pos = geom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const y = pos.getY(i);
        const x = pos.getX(i);
        // Soft billowing breeze
        const wave = Math.sin(t * 1.8 + y * 1.5) * 0.08 * (1 - y / 5);
        pos.setZ(i, wave);
      }
      pos.needsUpdate = true;
    }
  });

  return (
    <group position={position} scale={[flip ? -1 : 1, 1, 1]}>
      <mesh ref={meshRef} position={[0, 0.5, 0]}>
        <planeGeometry args={[1.2, 4.8, 12, 12]} />
        <meshStandardMaterial
          color="#722D35"
          roughness={0.5}
          metalness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Gold Embroidered Border on Silk */}
      <mesh position={[0.55, 0.5, 0.02]}>
        <planeGeometry args={[0.08, 4.8]} />
        <meshStandardMaterial color="#B58A52" metalness={0.8} roughness={0.3} />
      </mesh>
    </group>
  );
}

/**
 * Floating Gold Stardust Particles
 */
function FloatingGoldParticles({ count = 90 }) {
  const pointsRef = useRef();

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 9;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5 + 0.5;
      spd[i] = 0.2 + Math.random() * 0.4;
    }
    return [pos, spd];
  }, [count]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const t = clock.getElapsedTime();
      const pos = pointsRef.current.geometry.attributes.position;
      for (let i = 0; i < count; i++) {
        let y = pos.getY(i);
        y += speeds[i] * 0.015;
        if (y > 4.5) y = -4.5;
        pos.setY(i, y);

        // Subtle horizontal drift
        const x = pos.getX(i) + Math.sin(t * 0.5 + i) * 0.002;
        pos.setX(i, x);
      }
      pos.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color="#E5C07B"
        transparent
        opacity={0.75}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/**
 * Interactive Parallax Controller
 */
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Gentle camera breathing drift + subtle mouse parallax
    const targetX = mouse.current.x * 0.6 + Math.sin(t * 0.4) * 0.2;
    const targetY = mouse.current.y * 0.4 + Math.cos(t * 0.3) * 0.15;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.04);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/**
 * Complete 3D Scene Composition
 */
function Scene() {
  return (
    <>
      <CameraRig />

      {/* Ambient Lighting */}
      <ambientLight intensity={0.65} color="#4A342B" />
      <directionalLight
        position={[4, 6, 5]}
        intensity={1.2}
        color="#FFF6E5"
        castShadow
      />
      <directionalLight
        position={[-4, 3, 3]}
        intensity={0.6}
        color="#722D35"
      />

      {/* 3D Visual Geometry */}
      <PalaceArchMesh />
      <IlluminatedSanctuary />
      <BrassLantern position={[-2.3, 0.8, 0.8]} />
      <BrassLantern position={[2.3, 0.8, 0.8]} />
      <RoyalSilkBanner position={[-3.6, -0.4, 0.3]} />
      <RoyalSilkBanner position={[3.6, -0.4, 0.3]} flip />
      <FloatingGoldParticles count={110} />
    </>
  );
}

/**
 * CSS/SVG Graceful Fallback for Mobile, Reduced Motion, or WebGL Failures
 */
function HeroFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-espresso overflow-hidden">
      {/* Deep Burgundy & Espresso Radial Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-burgundy/40 via-espresso to-espresso-deep" />

      {/* Layered Indian Palace Arch Silhouette in SVG */}
      <svg
        viewBox="0 0 800 1000"
        className="w-full max-w-4xl h-full opacity-60 mix-blend-screen transition-opacity duration-1000"
        fill="none"
      >
        <defs>
          <radialGradient id="portalGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFAE42" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#722D35" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#261A17" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="goldArch" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B58A52" />
            <stop offset="50%" stopColor="#E5C07B" />
            <stop offset="100%" stopColor="#8E6735" />
          </linearGradient>
        </defs>

        {/* Inner Glow */}
        <circle cx="400" cy="500" r="320" fill="url(#portalGlow)" />

        {/* Outer Palace Cusped Archway */}
        <path
          d="M 120 1000 L 120 450 Q 120 280 260 210 Q 340 170 400 80 Q 460 170 540 210 Q 680 280 680 450 L 680 1000"
          stroke="url(#goldArch)"
          strokeWidth="6"
          fill="none"
        />

        {/* Inner Cusped Archway */}
        <path
          d="M 220 1000 L 220 500 Q 220 370 310 320 Q 360 290 400 230 Q 440 290 490 320 Q 580 370 580 500 L 580 1000"
          stroke="#722D35"
          strokeWidth="3.5"
          fill="none"
        />

        {/* Decorative Lotus Pinnacle */}
        <circle cx="400" cy="76" r="8" fill="#B58A52" />
        <circle cx="400" cy="56" r="4" fill="#E5C07B" />
      </svg>

      {/* Floating subtle CSS sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1.5 h-1.5 bg-gold-light rounded-full opacity-60 animate-pulse"
            style={{
              top: `${15 + (i * 17) % 70}%`,
              left: `${10 + (i * 23) % 80}%`,
              animationDelay: `${(i * 0.4).toFixed(1)}s`,
              animationDuration: `${2.5 + (i % 3)}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Error Boundary for WebGL stability
 */
class WebGLErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.warn("WebGL scene error caught cleanly:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <HeroFallback />;
    }
    return this.props.children;
  }
}

/**
 * Main Exported Hero3D Canvas Component
 */
export default function Hero3D() {
  const [canRender3D, setCanRender3D] = useState(false);

  useEffect(() => {
    // Detect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Quick WebGL support probe
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl && !prefersReducedMotion) {
        setCanRender3D(true);
      } else {
        setCanRender3D(false);
      }
    } catch (e) {
      setCanRender3D(false);
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
      {canRender3D ? (
        <WebGLErrorBoundary>
          <Suspense fallback={<HeroFallback />}>
            <Canvas
              camera={{ position: [0, 0, 7.5], fov: 45 }}
              dpr={[1, 1.5]} // Optimized pixel ratio for laptop performance
              gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
              className="w-full h-full"
            >
              <Scene />
            </Canvas>
          </Suspense>
        </WebGLErrorBoundary>
      ) : (
        <HeroFallback />
      )}
    </div>
  );
}
