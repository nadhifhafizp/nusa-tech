"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CTA from "@/components/CTA";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // ─── STAGE 1: 3D CYBER GRID (Hero) ───
  const gridScale = useTransform(smoothProgress, [0, 0.4], [1, 3]);
  const gridOpacity = useTransform(smoothProgress, [0, 0.25, 0.4], [0.8, 0.3, 0]);

  // ─── STAGE 2: HOLOGRAM KEPULAUAN INDONESIA (About) ───
  const nodeOpacity = useTransform(smoothProgress, [0.25, 0.4, 0.7, 0.85], [0, 1, 1, 0]);
  const nodeScale = useTransform(smoothProgress, [0.25, 0.85], [0.6, 1.8]);

  // ─── STAGE 3: RADAR CORE IBU KOTA (CTA) ───
  const radarOpacity = useTransform(smoothProgress, [0.75, 0.9], [0, 1]);
  const radarScale = useTransform(smoothProgress, [0.75, 1], [0.5, 1.2]);

  const bgColor = useTransform(
    smoothProgress,
    [0, 0.4, 0.8],
    ["#030305", "#06060c", "#080202"]
  );

  return (
    <motion.main 
      ref={containerRef}
      className="relative min-h-screen overflow-x-hidden text-white selection:bg-primary/30"
      style={{ backgroundColor: bgColor }}
    >
      {/* ── CENTRAL BACKGROUND CANVAS (100% PURE CODE, NO IMAGES NEEDED) ── */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden will-change-transform">

        {/* LAYER 1: 3D PERSPECTIVE GRID */}
        <motion.div
          className="absolute flex items-center justify-center w-[200vw] h-[200vw]"
          style={{ 
            scale: gridScale, 
            opacity: gridOpacity,
            rotateX: "60deg", // Bikin efek 3D rebah kayak lantai cyber
            transformPerspective: "1000px"
          }}
        >
          <div className="w-full h-full bg-[linear-gradient(rgba(230,57,70,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(230,57,70,0.2)_1px,transparent_1px)] bg-[size:60px_60px] shadow-[inset_0_0_200px_#030305]" />
        </motion.div>

        {/* LAYER 2: ABSTRACT INDONESIA NETWORK MAP (PURE SVG CODE) */}
        <motion.div
          className="absolute flex items-center justify-center w-full max-w-6xl aspect-[2/1]"
          style={{ scale: nodeScale, opacity: nodeOpacity }}
        >
          <svg viewBox="0 0 1000 500" className="w-full h-full drop-shadow-[0_0_20px_rgba(255,214,10,0.4)]">
            {/* Garis Jaringan Utama (Sirkuit) */}
            <path 
              d="M200,220 L350,340 L450,180 L600,240 L850,260 M350,340 L520,380 L600,240 M450,180 L650,120 L850,260" 
              stroke="rgba(255,255,255,0.15)" 
              strokeWidth="2" 
              fill="none" 
              strokeDasharray="10 10"
              className="animate-[spin_20s_linear_infinite]"
              style={{ animationName: 'dash', animationDuration: '40s', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}
            />

            {/* NODE SUMATERA */}
            <g className="animate-pulse">
              <circle cx="150" cy="160" r="4" fill="#E63946" />
              <circle cx="200" cy="220" r="12" fill="#E63946" className="shadow-[0_0_20px_#E63946]" />
              <circle cx="250" cy="270" r="6" fill="white" opacity="0.5" />
              <line x1="150" y1="160" x2="200" y2="220" stroke="#E63946" strokeWidth="2" />
              <line x1="200" y1="220" x2="250" y2="270" stroke="#E63946" strokeWidth="2" />
            </g>

            {/* NODE JAWA (Pusat) */}
            <g>
              <circle cx="300" cy="320" r="5" fill="white" opacity="0.6" />
              <circle cx="350" cy="340" r="16" fill="#FFD60A" />
              <circle cx="420" cy="330" r="6" fill="white" opacity="0.6" />
              <line x1="300" y1="320" x2="350" y2="340" stroke="#FFD60A" strokeWidth="2" />
              <line x1="350" y1="340" x2="420" y2="330" stroke="#FFD60A" strokeWidth="2" />
              {/* Ping effect untuk Jakarta/Jabar */}
              <circle cx="350" cy="340" r="25" fill="none" stroke="#FFD60A" strokeWidth="1" className="animate-ping" />
            </g>

            {/* NODE KALIMANTAN */}
            <g className="animate-pulse" style={{ animationDelay: "0.5s" }}>
              <circle cx="400" cy="150" r="8" fill="white" />
              <circle cx="450" cy="180" r="14" fill="#E63946" />
              <circle cx="500" cy="140" r="6" fill="white" />
              <line x1="400" y1="150" x2="450" y2="180" stroke="white" strokeWidth="1.5" opacity="0.4" />
              <line x1="450" y1="180" x2="500" y2="140" stroke="white" strokeWidth="1.5" opacity="0.4" />
            </g>

            {/* NODE BALI & NUSA TENGGARA */}
            <g>
              <circle cx="480" cy="360" r="4" fill="#FFD60A" />
              <circle cx="520" cy="380" r="8" fill="#E63946" />
              <circle cx="580" cy="370" r="5" fill="#FFD60A" />
              <line x1="420" y1="330" x2="480" y2="360" stroke="#FFD60A" strokeWidth="1.5" opacity="0.5" />
              <line x1="480" y1="360" x2="520" y2="380" stroke="#E63946" strokeWidth="2" />
              <line x1="520" y1="380" x2="580" y2="370" stroke="#E63946" strokeWidth="2" />
            </g>

            {/* NODE SULAWESI */}
            <g className="animate-pulse" style={{ animationDelay: "1s" }}>
              <circle cx="580" cy="180" r="5" fill="white" />
              <circle cx="600" cy="240" r="12" fill="#FFD60A" />
              <circle cx="650" cy="260" r="7" fill="white" />
              <circle cx="660" cy="200" r="4" fill="#E63946" />
              <line x1="580" y1="180" x2="600" y2="240" stroke="#FFD60A" strokeWidth="1.5" />
              <line x1="600" y1="240" x2="650" y2="260" stroke="#FFD60A" strokeWidth="1.5" />
              <line x1="600" y1="240" x2="660" y2="200" stroke="#FFD60A" strokeWidth="1.5" />
            </g>

            {/* NODE MALUKU & PAPUA */}
            <g>
              <circle cx="750" cy="220" r="5" fill="#E63946" opacity="0.6" />
              <circle cx="850" cy="260" r="15" fill="#E63946" />
              <circle cx="920" cy="280" r="6" fill="white" opacity="0.8" />
              <line x1="650" y1="260" x2="750" y2="220" stroke="white" strokeWidth="1" opacity="0.3" />
              <line x1="750" y1="220" x2="850" y2="260" stroke="#E63946" strokeWidth="2" />
              <line x1="850" y1="260" x2="920" y2="280" stroke="#E63946" strokeWidth="2" />
              <circle cx="850" cy="260" r="22" fill="none" stroke="#E63946" strokeWidth="1" className="animate-ping" style={{ animationDuration: '3s' }} />
            </g>
          </svg>
        </motion.div>

        {/* LAYER 3: RADAR DIGITAL CORE CENTER (CTA) */}
        <motion.div
          className="absolute flex items-center justify-center"
          style={{ scale: radarScale, opacity: radarOpacity }}
        >
          <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] flex items-center justify-center">
            <div className="absolute w-[100%] h-[100%] rounded-full border border-primary/30 shadow-[0_0_30px_rgba(230,57,70,0.2)] animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[70%] h-[70%] rounded-full border border-dashed border-accent/30 animate-[spin_30s_linear_infinite_reverse]" />
            <div className="absolute w-[40%] h-[40%] rounded-full border border-primary/50 flex items-center justify-center shadow-[inset_0_0_40px_rgba(230,57,70,0.3)]">
              <div className="w-6 h-6 bg-accent rounded-full shadow-[0_0_40px_#FFD60A] animate-ping" />
              <div className="absolute w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_#E63946]" />
            </div>
            <svg className="absolute inset-0 w-full h-full opacity-50">
              <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="#E63946" strokeWidth="1" strokeDasharray="5 5" />
              <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#FFD60A" strokeWidth="1" strokeDasharray="5 5" />
            </svg>
          </div>
        </motion.div>

        {/* Global Ambient Glow */}
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(230,57,70,0.12)_0%,transparent_70%)] blur-3xl mix-blend-screen pointer-events-none opacity-80" />
      </div>

      {/* ── FOREGROUND INTERACTIVE CONTENT ── */}
      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <About />
        <CTA />

        {/* Footer */}
        <footer className="relative bg-black/60 border-t border-white/5 py-12 px-6 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-white/40 font-mono tracking-wide">
              © {new Date().getFullYear()} MAHREEN INDONESIA. ARCHITECTED FOR NEXT-GEN TRANSFORMATION.
            </p>
            <div className="flex gap-6 font-mono text-[10px] text-white/30 tracking-widest uppercase">
              <span>[ SECURE_ACCESS ]</span>
              <span>[ V4_ENGINE ]</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Animasi untuk sirkuit putus-putus */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
      `}} />
    </motion.main>
  );
}