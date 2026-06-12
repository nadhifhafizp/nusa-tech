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

        {/* SEKSI REKAYASA TEKNOLOGI */}
        <section className="py-32 flex flex-col items-center justify-center text-center px-6 border-t border-white/5 relative">
          {/* Efek Glow Latar */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <span className="text-white/40 font-mono text-xs tracking-widest uppercase mb-4 block">
              // VISI_TEKNOLOGI
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight text-white drop-shadow-lg">
              Rekayasa Teknologi
            </h2>
            <p className="text-lg md:text-2xl text-white/70 font-light leading-relaxed">
              Teknologi adalah alat untuk mempercepat perubahan. Di sini, setiap baris kode dirakit untuk mendobrak batasan, memecahkan masalah akar rumput, dan memberikan dampak eksponensial bagi Indonesia.
            </p>
          </motion.div>
        </section>

        {/* SEKSI DAMPAK SOSIAL (SUDAH DIBERI ID "dampak") */}
        <section id="dampak" className="min-h-screen flex items-center py-24 relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div 
              className="mb-16 text-center md:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-mono text-xs tracking-widest uppercase mb-2 block">
                // REAL_WORLD_IMPACT
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight">
                Dampak Sosial
              </h2>
              <p className="text-white/60 mt-4 max-w-2xl font-body text-lg">
                Dari pelosok desa hingga lingkungan kampus, implementasi inovasi ini dirancang untuk menyelesaikan tantangan nyata dan membangun kemandirian digital berkelanjutan.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-b from-primary to-primary/20 mb-6 drop-shadow-md group-hover:scale-110 origin-left transition-transform">01</div>
                <h4 className="text-xl font-bold text-white uppercase mb-3 tracking-wide">Pemberdayaan Desa</h4>
                <p className="text-white/60 text-sm leading-relaxed font-body">
                  Transformasi digital pada wilayah seperti Desa Sukalaksana membuka gerbang interkoneksi, memungkinkan komunitas lokal membangun identitas dan menjangkau ranah publik melalui web yang terintegrasi.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-b from-emerald-400 to-emerald-400/20 mb-6 drop-shadow-md group-hover:scale-110 origin-left transition-transform">02</div>
                <h4 className="text-xl font-bold text-white uppercase mb-3 tracking-wide">Efisiensi Ekosistem</h4>
                <p className="text-white/60 text-sm leading-relaxed font-body">
                  Otomatisasi perangkat berbasis mikrokontroler di titik-titik krusial memastikan pemrosesan telemetri lingkungan yang akurat, hemat daya, dan termonitor secara real-time.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-b from-accent to-accent/20 mb-6 drop-shadow-md group-hover:scale-110 origin-left transition-transform">03</div>
                <h4 className="text-xl font-bold text-white uppercase mb-3 tracking-wide">Kemandirian Kesehatan</h4>
                <p className="text-white/60 text-sm leading-relaxed font-body">
                  Mengubah cara mahasiswa merawat diri dengan pemetaan titik terapi pegal secara visual dan interaktif, mengandalkan teknologi Augmented Reality langsung dari layar perangkat mereka.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="min-h-screen">
          <CTA />
        </section>
      </div>
    </motion.main>
  );
}