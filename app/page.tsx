"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
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

  // ─── STAGE 1: GLOBE DUNIA ───
  const globeScale = useTransform(scrollYProgress, [0, 0.4], [1, 4]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.25, 0.4], [0.8, 0.4, 0]);

  // ─── STAGE 2: PETA INDONESIA ───
  const indoOpacity = useTransform(scrollYProgress, [0.25, 0.4, 0.7, 0.8], [0, 1, 1, 0]);
  const indoScale = useTransform(scrollYProgress, [0.25, 0.8], [0.8, 3]);

  // ─── STAGE 3: CORE HUB RADAR IBU KOTA ───
  const capitalOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  const capitalScale = useTransform(scrollYProgress, [0.7, 1], [0.5, 1.2]);

  // Transisi Warna Latar Belakang (Gelap Mulus)
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8],
    ["#030305", "#06060c", "#080202"]
  );

  return (
    <motion.main 
      ref={containerRef}
      className="relative min-h-screen overflow-x-hidden text-white selection:bg-primary/30"
      style={{ backgroundColor: bgColor }}
    >
      {/* ── CENTRAL BACKGROUND CANVAS (CLEAN) ── */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        
        {/* TITIK-TITIK SUDAH DIHAPUS DARI SINI */}

        {/* LAYER 1: PETA DUNIA */}
        <motion.div
          className="absolute flex items-center justify-center w-full h-full"
          style={{ scale: globeScale, opacity: globeOpacity }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            alt="World Map"
            className="w-[150vw] max-w-none opacity-50 md:w-[100vw]"
            style={{ filter: "invert(1) brightness(2) drop-shadow(0px 0px 15px rgba(255,255,255,0.2))" }}
          />
        </motion.div>

        {/* LAYER 2: PETA INDONESIA */}
        <motion.div
          className="absolute flex items-center justify-center w-full h-full"
          style={{ scale: indoScale, opacity: indoOpacity }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Indonesia_blank_map.svg" 
            alt="Indonesia Map"
            className="w-[120vw] max-w-none opacity-80 md:w-[80vw]"
            style={{ filter: "invert(1) brightness(2.5) drop-shadow(0px 0px 25px rgba(230,57,70,0.6))" }}
          />
        </motion.div>

        {/* LAYER 3: RADAR DIGITAL CORE CENTER */}
        <motion.div
          className="absolute flex items-center justify-center"
          style={{ scale: capitalScale, opacity: capitalOpacity }}
        >
          <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] flex items-center justify-center">
            <div className="absolute w-[100%] h-[100%] rounded-full border border-primary/30 shadow-[0_0_30px_rgba(230,57,70,0.2)] animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[70%] h-[70%] rounded-full border border-dashed border-accent/30 animate-[spin_30s_linear_infinite_reverse]" />
            <div className="absolute w-[40%] h-[40%] rounded-full border border-primary/50 flex items-center justify-center shadow-[inset_0_0_40px_rgba(230,57,70,0.3)]">
              <div className="w-6 h-6 bg-accent rounded-full shadow-[0_0_40px_#FFD60A] animate-ping" />
              <div className="absolute w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_#E63946]" />
            </div>
            {/* Garis radar silang (bukan titik) */}
            <svg className="absolute inset-0 w-full h-full opacity-50">
              <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="#E63946" strokeWidth="1" strokeDasharray="5 5" />
              <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#FFD60A" strokeWidth="1" strokeDasharray="5 5" />
            </svg>
          </div>
        </motion.div>

        {/* Global Ambient Glow (Cahaya Merah Halus) */}
        <div className="absolute w-[800px] h-[800px] rounded-full bg-radial from-primary/10 via-transparent to-transparent blur-3xl mix-blend-screen pointer-events-none opacity-60" />
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
    </motion.main>
  );
}