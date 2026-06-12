"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Teks naik ke atas lebih cepat dan memudar perlahan pas di-scroll
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "150px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center px-6"
    >
      <motion.div
        className="flex flex-col items-center text-center max-w-5xl mx-auto"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Badge Futuristik */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-xs">
            <Sparkles size={12} className="text-accent animate-pulse" />
            PROGRAM MAHREEN INDONESIA
          </span>
        </motion.div>

        {/* Headline Sleek Premium */}
        <motion.h1
          className="font-sans font-black text-5xl md:text-8xl tracking-tight leading-[0.95] text-white uppercase"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          IDE BESARMU<br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-primary to-primary">
            ADALAH MASA DEPAN
          </span><br />
          INDONESIA.
        </motion.h1>

        {/* Sub-Headline Bersih */}
        <motion.p
          className="mt-8 font-body text-base md:text-xl text-white/60 max-w-2xl font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bergabunglah bersama ribuan inovator muda yang membuktikan bahwa baris kodemu, kreativitasmu, dan teknologi yang kita racik adalah senjata utama perubahan bangsa.
        </motion.p>

        {/* Action Button */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="#bergabung"
            className="px-8 py-4 bg-primary text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-[0_0_30px_rgba(230,57,70,0.3)] hover:scale-105 transition-transform duration-200"
          >
            Mulai Inovasimu Sekarang
          </a>
          <a
            href="#program"
            className="px-8 py-4 border border-white/10 text-white/80 font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-white/5 backdrop-blur-xs transition-colors"
          >
            Lihat Program
          </a>
        </motion.div>
      </motion.div>

      {/* Indikator Scroll */}
      <motion.div 
        className="absolute bottom-8 flex flex-col items-center gap-1 text-white/30 font-mono text-[10px] tracking-widest uppercase"
        style={{ opacity: textOpacity }}
      >
        <span>Scroll Down</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}