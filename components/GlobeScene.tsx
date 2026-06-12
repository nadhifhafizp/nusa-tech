"use client";

import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import ThreeGlobe from "three-globe";
import * as THREE from "three";

export default function GlobeScene() {
  const globeRef = useRef<ThreeGlobe | null>(null);

  const { scene } = useThree();

  useEffect(() => {
    const globe = new ThreeGlobe()
      .globeImageUrl(
        "//unpkg.com/three-globe/example/img/earth-night.jpg"
      )
      .bumpImageUrl(
        "//unpkg.com/three-globe/example/img/earth-topology.png"
      );

    globeRef.current = globe;

    scene.add(globe);

    return () => {
      scene.remove(globe);
    };
  }, [scene]);

  useFrame(() => {
    if (!globeRef.current) return;

    globeRef.current.rotation.y += 0.0008;
  });

  return null;
}