"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Stars, Float, PerspectiveCamera, Environment } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

// Komponen pengontrol Kamera dengan GSAP
function CameraController() {
  const { camera } = useThree();
  
  useGSAP(() => {
    // Pastikan posisi awal kamera
    camera.position.set(0, 0, 5);
    camera.rotation.set(0, 0, 0);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main-scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Smooth easing untuk realisme
      },
    });

    // Scene 1: Hero -> About (Kamera menukik ke bawah menembus partikel)
    tl.to(camera.position, { y: -10, z: 2, ease: "power2.inOut" }, 0)
      .to(camera.rotation, { x: Math.PI / 8, ease: "power2.inOut" }, 0);

    // Scene 2: About -> CTA (Kamera mundur dan melihat ke atas untuk kesan megah)
    tl.to(camera.position, { y: -25, z: 8, ease: "power2.inOut" }, ">")
      .to(camera.rotation, { x: Math.PI / 16, ease: "power2.inOut" }, "<");
  });

  return null;
}

// Elemen 3D yang memberikan ilusi Depth & Parallax
function SceneElements() {
  return (
    <>
      {/* Pencahayaan Sinematik & Realistis */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#FFD60A" castShadow />
      <spotLight position={[-10, 0, 10]} intensity={3} color="#E63946" penumbra={1} />
      <Environment preset="city" />

      {/* Layer Belakang: Kosmos / Bintang */}
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />

      {/* Hero Section Element (Y: 0) */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, 0, -2]} castShadow receiveShadow>
          <torusGeometry args={[3, 0.05, 16, 100]} />
          <meshStandardMaterial color="#E63946" emissive="#E63946" emissiveIntensity={2} wireframe />
        </mesh>
      </Float>

      {/* About Section Element (Y: -10) - Ilusi Layering Parallax */}
      <group position={[0, -10, -5]}>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={2}>
          {/* Di produksi nyata, ganti dengan <Image url="/layer-peta.png" transparent /> dari drei */}
          <mesh position={[-3, 0, 0]} castShadow>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#FFD60A" wireframe />
          </mesh>
          <mesh position={[3, 1, -2]} castShadow>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial color="#E63946" roughness={0.2} metalness={0.8} />
          </mesh>
        </Float>
      </group>

      {/* CTA Section Element (Y: -25) - Core Energi */}
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[0, -25, -10]}>
          <sphereGeometry args={[5, 64, 64]} />
          <meshStandardMaterial color="#E63946" emissive="#E63946" emissiveIntensity={1.5} wireframe />
        </mesh>
      </Float>
    </>
  );
}

export default function CinematicScene() {
  return (
    <Canvas shadows className="w-full h-full bg-secondary">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      <CameraController />
      <SceneElements />
    </Canvas>
  );
}