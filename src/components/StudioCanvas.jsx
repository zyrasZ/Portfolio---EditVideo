import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Glass Box representing a video clip on a timeline
function TimelineClip({ position, color, speed, scale, text }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * speed;
      meshRef.current.rotation.y += 0.008 * speed;
      // Parallax effect on mouse move
      const targetX = state.pointer.x * 0.5;
      const targetY = state.pointer.y * 0.5;
      meshRef.current.position.x += (position[0] + targetX - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (position[1] + targetY - meshRef.current.position.y) * 0.05;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1.5, 0.8, 0.2]} />
      <meshPhysicalMaterial
        color={hovered ? '#96ff1a' : color}
        roughness={0.1}
        metalness={0.1}
        transmission={0.9} // Glassy effect
        thickness={0.5}
        ior={1.5}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

// 3D Ring representing a camera aperture or progress indicator
function LensRing({ position, scale, rotationSpeed }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01 * rotationSpeed;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.cos(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1.2, 0.08, 16, 100]} />
      <meshPhysicalMaterial
        color="#0c0a09"
        roughness={0.2}
        metalness={0.9}
        clearcoat={1.0}
      />
    </mesh>
  );
}

// 3D Glass Sphere in the center representing core creative focus
function LensCenter({ position }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      // Floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 1.5) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={0.95}>
      <sphereGeometry args={[0.8, 64, 64]} />
      <meshPhysicalMaterial
        color="#96ff1a"
        roughness={0.05}
        metalness={0.1}
        transmission={0.9}
        thickness={0.8}
        ior={1.6}
        clearcoat={1.0}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

// Sparkle particles drifting in background
function Sparkles({ count = 40 }) {
  const pointsRef = useRef();
  const [positions] = useState(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  });

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime();
      const pos = pointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        // Slowly float up
        pos[i * 3 + 1] += Math.sin(time + i) * 0.002;
        // Keep within bounds
        if (pos[i * 3 + 1] > 6) pos[i * 3 + 1] = -6;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#96ff1a"
        size={0.06}
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
}

// Scene setup with camera and lights
function Scene({ scrollOffset }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // Rotate the whole scene based on scroll offset
      groupRef.current.rotation.y = scrollOffset * 0.8;
      groupRef.current.position.y = -scrollOffset * 2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Dynamic Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" castShadow />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#e6ffc8" />
      <pointLight position={[0, -2, 3]} intensity={2.0} color="#96ff1a" />

      {/* Floating 3D Elements */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Core aperture/lens group */}
        <group position={[2.5, 0.5, 0]}>
          <LensRing position={[0, 0, 0]} scale={[1, 1, 1]} rotationSpeed={0.5} />
          <LensRing position={[0, 0, 0.15]} scale={[0.85, 0.85, 1]} rotationSpeed={-0.8} />
          <LensCenter position={[0, 0, 0]} />
        </group>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
        <TimelineClip position={[-2.8, 1.2, 0.5]} color="#ffffff" speed={0.8} scale={[0.8, 0.8, 0.8]} />
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1}>
        <TimelineClip position={[-2, -1.0, 1]} color="#f2f1f0" speed={1.2} scale={[1, 1, 1]} />
      </Float>

      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.2}>
        {/* Secondary Green Accent Clip */}
        <TimelineClip position={[1.5, -2, 0.5]} color="#d6ffa6" speed={0.6} scale={[0.7, 0.7, 0.7]} />
      </Float>

      {/* Background Sparkles */}
      <Sparkles count={50} />
    </group>
  );
}

export default function StudioCanvas() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollOffset(window.scrollY / scrollHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.8,
        transition: 'opacity 0.5s ease',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene scrollOffset={scrollOffset} />
      </Canvas>
    </div>
  );
}
