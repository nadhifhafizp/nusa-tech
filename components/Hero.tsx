"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useState, useCallback, useMemo, useEffect } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

// ─── Animasi Variants ───────────────────────────────────────────────────
const floatVariant: Variants = {
  float: {
    y: [0, -18, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  bounce: {
    scale: [1, 1.25, 0.9, 1.15, 0.95, 1.05, 1],
    rotate: [0, -8, 8, -4, 4, 0],
    transition: { duration: 0.7, ease: "easeOut" },
  },
  spin: {
    rotate: [0, 360],
    scale: [1, 1.1, 1],
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// ─── Component ──────────────────────────────────────────────────────────
export default function Hero() {
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAvatarInteraction = useCallback(async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    await controls.start("bounce");
    controls.start("float");
    setIsAnimating(false);
  }, [controls, isAnimating]);

  const handleHover = useCallback(() => {
    if (!isAnimating) {
      controls.start("spin");
    }
  }, [controls, isAnimating]);

    // Letakkan ini SEBELUM return, di dalam function Hero()
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    // Data bintang dibuat sekali, stabil, deterministik — tidak pakai Math.random() saat render
    const stars = useMemo(() => {
    // Pseudo-random seeded — nilai tetap sama antara server & client
    const seed = (n: number) => {
        const x = Math.sin(n + 1) * 10000;
        return x - Math.floor(x);
    };
    return Array.from({ length: 60 }, (_, i) => ({
        width:   seed(i * 3)     * 2.5 + 0.5,
        height:  seed(i * 3 + 1) * 2.5 + 0.5,
        left:    `${seed(i * 3 + 2) * 100}%`,
        top:     `${seed(i * 7)     * 100}%`,
        opacity: seed(i * 5)     * 0.4 + 0.1,
        duration:seed(i * 11)    * 4   + 2,
        delay:   seed(i * 13)    * 3,
    }));
    }, []); // [] = dihitung sekali, nilai sama di mana saja

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-secondary px-6 pt-24 pb-16"
    >
      {/* ── Background: Partikel bintang statis ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && stars.map((star, i) => (
            <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
                width:   star.width,
                height:  star.height,
                left:    star.left,
                top:     star.top,
                opacity: star.opacity,
            }}
            animate={{ opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3] }}
            transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
            }}
            />
        ))}
        </div>

      {/* ── Background: Gradient radial merah ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* ── Konten Utama ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-10"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariant}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold tracking-widest uppercase">
            <Sparkles size={12} />
            Program Mahreen Indonesia
          </span>
        </motion.div>

        {/* ── Avatar Interaktif + Cincin Batik ── */}
        <motion.div variants={itemVariant} className="relative">
          {/* Cincin rotasi luar (signature element) */}
          <motion.div
            className="absolute inset-0 -m-6 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #E63946, #FFD60A, #E63946, transparent, #E63946)",
              opacity: 0.6,
              filter: "blur(2px)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          {/* Cincin rotasi dalam (berlawanan) */}
          <motion.div
            className="absolute inset-0 -m-3 rounded-full border border-dashed border-white/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Avatar */}
          <motion.div
            className="relative cursor-pointer select-none"
            animate={controls}
            initial="float"
            variants={floatVariant}
            onClick={handleAvatarInteraction}
            onHoverStart={handleHover}
            whileHover={{ scale: 1.05 }}
          >
            {/* Lingkaran latar avatar */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-navy-700 to-navy-800 border-2 border-white/10 overflow-hidden flex items-center justify-center shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=PemudaNusantara&backgroundColor=transparent"
                alt="Pemuda Nusantara - Ikon Kampanye Berkarya Untuk Indonesia"
                width={200}
                height={200}
                className="w-full h-full object-contain p-3"
              />
            </div>

            {/* Label interaktif */}
            <motion.div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👆 Klik Aku!
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Headline ── */}
        <motion.div variants={itemVariant} className="mt-4">
          <h1 className="font-sans font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
            <span className="text-surface">Ide Besarmu</span>
            <br />
            <span className="text-gradient-red-gold">Adalah Masa Depan</span>
            <br />
            <span className="text-surface">Indonesia.</span>
          </h1>
        </motion.div>

        {/* ── Sub-headline ── */}
        <motion.p
          variants={itemVariant}
          className="font-body text-base md:text-xl text-muted max-w-2xl leading-relaxed"
        >
          Bergabunglah bersama ribuan pemuda pemberani yang membuktikan bahwa
          kreativitas dan teknologi bukan sekadar alat — melainkan{" "}
          <span className="text-surface font-medium">
            senjata perubahan nyata
          </span>{" "}
          untuk negeri ini.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          variants={itemVariant}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href="#bergabung"
            whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(230,57,70,0.6)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold text-base rounded-full glow-red transition-all duration-200"
          >
            Mulai Inovasimu Sekarang
            <Sparkles size={16} />
          </motion.a>
          <motion.a
            href="#program"
            whileHover={{ scale: 1.04, borderColor: "rgba(255,214,10,0.8)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-surface font-semibold text-base rounded-full hover:bg-white/5 transition-all duration-200"
          >
            Lihat Program
          </motion.a>
        </motion.div>

        {/* ── Statistik Cepat ── */}
        <motion.div
          variants={itemVariant}
          className="flex flex-wrap justify-center gap-8 pt-4 border-t border-white/10 w-full"
        >
          {[
            { value: "500+", label: "Inovator Aktif" },
            { value: "34", label: "Provinsi Terjangkau" },
            { value: "12", label: "Proyek Berdampak" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-extrabold text-2xl md:text-3xl text-gradient-red-gold">
                {stat.value}
              </p>
              <p className="text-xs text-muted mt-1 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest uppercase opacity-50">
          Scroll
        </span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}