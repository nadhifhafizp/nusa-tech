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

  // ─── ANIMASI PETA DUNIA (Hero -> About) ───
  // Scale membesar drastis seolah kamera melesat turun ke bumi
  const worldScale = useTransform(scrollYProgress, [0, 0.4], [1, 7]);
  // Dunia memudar saat sudah terlalu dekat
  const worldOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0.3, 0]);

  // ─── ANIMASI PETA INDONESIA (About -> CTA) ───
  // Muncul perlahan menggantikan peta dunia
  const indoOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 0.8]);
  // Terus nge-zoom halus sampai halaman bawah
  const indoScale = useTransform(scrollYProgress, [0.3, 1], [0.5, 1.8]);
  // Bergeser ke atas dikit pas di CTA biar dinamis
  const indoY = useTransform(scrollYProgress, [0.5, 1], ["0%", "-20%"]);

  // Transisi Warna Background Global
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#050508", "#0a0505", "#0f0505"] // Hitam ke Merah Gelap
  );

  return (
    <motion.main 
      ref={containerRef}
      className="relative min-h-screen overflow-x-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* ── PARALLAX BACKGROUND CANVAS ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        
        {/* Latar Belakang Bintang/Grid Tipis */}
        <div 
          className="absolute inset-0 opacity-[0.08] w-[100%] h-[100%]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1.5px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }} 
        />

        {/* 1. LAYER PETA DUNIA (Abstraksi) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          // transformOrigin diarahkan ke koordinat Asia Tenggara/Indonesia di map
          style={{ scale: worldScale, opacity: worldOpacity, transformOrigin: "73% 60%" }}
        >
          {/* Menggunakan SVG Peta Dunia Titik-Titik (Dotted World Map Style) */}
          <svg viewBox="0 0 1000 500" className="w-[120vw] max-w-none opacity-50" fill="rgba(255,255,255,0.4)">
            {/* Amerika Utara */}
            <circle cx="200" cy="150" r="15" /> <circle cx="250" cy="180" r="20" /> <circle cx="180" cy="220" r="12" />
            {/* Amerika Selatan */}
            <circle cx="280" cy="300" r="18" /> <circle cx="320" cy="360" r="10" />
            {/* Eropa & Afrika */}
            <circle cx="500" cy="140" r="15" /> <circle cx="520" cy="250" r="25" /> <circle cx="480" cy="320" r="15" />
            {/* Asia (Pusat Zooming) */}
            <circle cx="680" cy="150" r="30" /> <circle cx="750" cy="200" r="20" />
            {/* Area Indonesia (Bakal jadi fokus) */}
            <circle cx="780" cy="280" r="5" fill="#E63946" /> <circle cx="800" cy="290" r="4" fill="#FFD60A" /> <circle cx="830" cy="285" r="5" fill="#E63946" />
            {/* Australia */}
            <circle cx="850" cy="380" r="18" />
          </svg>
        </motion.div>

        {/* 2. LAYER PETA INDONESIA (Detail & Glowing) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ scale: indoScale, opacity: indoOpacity, y: indoY }}
        >
          {/* Peta Indonesia Cyberpunk dengan Garis Koneksi */}
          <svg className="w-full h-full max-w-5xl" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className="animate-pulse">
              {/* Garis Khatulistiwa */}
              <line x1="0" y1="200" x2="1000" y2="200" stroke="rgba(255,214,10,0.15)" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* Node Utama Indonesia */}
              <circle cx="250" cy="180" r="8" fill="#E63946" className="shadow-lg" /> {/* Sumatera */}
              <circle cx="380" cy="260" r="10" fill="#FFD60A" /> {/* Jakarta/Jawa */}
              <circle cx="480" cy="160" r="8" fill="#ffffff" /> {/* Kalimantan */}
              <circle cx="600" cy="190" r="7" fill="#E63946" /> {/* Sulawesi */}
              <circle cx="750" cy="270" r="6" fill="#FFD60A" /> {/* Bali/Nusa Tenggara */}
              <circle cx="880" cy="210" r="9" fill="#ffffff" /> {/* Papua */}

              {/* Node-node kecil pendukung */}
              <circle cx="220" cy="150" r="3" fill="#E63946" opacity="0.6"/>
              <circle cx="430" cy="270" r="4" fill="#FFD60A" opacity="0.6"/>
              <circle cx="500" cy="130" r="3" fill="#ffffff" opacity="0.6"/>
              <circle cx="630" cy="160" r="4" fill="#E63946" opacity="0.6"/>

              {/* Garis Sirkuit Menghubungkan Pulau (Digital Network) */}
              <path d="M250 180 L380 260 M380 260 L480 160 M480 160 L600 190 M600 190 L880 210 M380 260 L600 190 M600 190 L750 270" 
                stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="8 4" />
            </g>
          </svg>
        </motion.div>

        {/* Glow Merah & Emas Global */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-linear-to-tr from-[#E63946]/10 to-[#FFD60A]/5 blur-[200px] mix-blend-screen" />
      </div>

      {/* ── FOREGROUND CONTENT ── */}
      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <About />
        <CTA />

        {/* Footer Minimalis */}
        <footer className="relative bg-[#050508]/80 border-t border-white/5 py-10 px-6 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/50 font-mono tracking-wide">
              © {new Date().getFullYear()} MAHREEN INDONESIA. DIBUAT DENGAN EMOSI & KODE UNTUK NEGERI.
            </p>
            <p className="text-xs text-white/30 font-mono">
              #BerkaryaUntukIndonesia · #NusaTech
            </p>
          </div>
        </footer>
      </div>
    </motion.main>
  );
}