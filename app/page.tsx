"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CTA from "@/components/CTA";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  // ==========================
  // WORLD MAP
  // ==========================
  const globeScale = useTransform(
    smoothProgress,
    [0, 0.3],
    [1, 3]
  );

  const globeOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.35],
    [1, 1, 0]
  );

  // ==========================
  // INDONESIA MAP
  // ==========================
  const indoOpacity = useTransform(
    smoothProgress,
    [0.2, 0.35, 1],
    [0, 1, 1]
  );

  const indoScale = useTransform(
    smoothProgress,
    [0.2, 0.5, 0.75, 1],
    [1, 2.5, 5, 10]
  );

  // ==========================
  // BACKGROUND
  // ==========================
  const bgColor = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["#030305", "#05050A", "#010101"]
  );

  return (
    <motion.main
      ref={containerRef}
      className="relative min-h-[600vh] overflow-x-hidden text-white"
      style={{ backgroundColor: bgColor }}
    >
      {/* BACKGROUND MAP */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1200px] h-[1200px] rounded-full bg-white/5 blur-[250px]" />
        </div>

        {/* WORLD MAP */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            scale: globeScale,
            opacity: globeOpacity,
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg"
            alt="World Map"
            className="
              w-[180vw]
              invert
              brightness-[5]
              contrast-[2]
              opacity-90
              select-none
            "
            draggable={false}
          />
        </motion.div>

        {/* INDONESIA MAP */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            scale: indoScale,
            opacity: indoOpacity,
          }}
        >
          {/* Glow Layer */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Indonesia_blank_map.svg"
            alt="Indonesia Glow"
            className="
              absolute
              w-[220vw]
              invert
              opacity-40
              blur-md
            "
            draggable={false}
          />

          {/* Main Layer */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Indonesia_blank_map.svg"
            alt="Indonesia Map"
            className="
              w-[220vw]
              invert
              brightness-[6]
              contrast-[2.5]
              opacity-100
              drop-shadow-[0_0_80px_rgba(255,255,255,0.5)]
              select-none
            "
            draggable={false}
          />
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <section className="min-h-screen">
          <Hero />
        </section>

        <section className="min-h-screen">
          <About />
        </section>

        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <h2 className="text-6xl font-bold mb-6">
              Rekayasa Teknologi
            </h2>
            <p className="max-w-3xl text-xl text-white/80">
              Teknologi adalah alat untuk mempercepat perubahan
              dan memberikan dampak nyata bagi Indonesia.
            </p>
          </div>
        </section>

        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <h2 className="text-6xl font-bold">
              Dampak Sosial
            </h2>
          </div>
        </section>

        <section className="min-h-screen">
          <CTA />
        </section>
      </div>
    </motion.main>
  );
}