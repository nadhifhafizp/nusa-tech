"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="bergabung"
      className="relative w-full h-screen flex flex-col items-center justify-center px-6"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="px-4 py-1.5 rounded-full border border-primary/40 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase backdrop-blur-xs">
            // JOIN THE MOVEMENT
          </span>
        </motion.div>

        {/* Teks Klimaks Brutalis */}
        <motion.h2
          className="font-sans font-black text-4xl md:text-8xl text-white uppercase leading-[0.95] tracking-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          INDONESIA TIDAK<br />
          BUTUH PENONTON.<br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-primary to-primary">
            BUTUH KAMU.
          </span>
        </motion.h2>

        <motion.p
          className="font-body text-base md:text-lg text-white/60 max-w-2xl font-light leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Setiap generasi mendapat momentum emasnya. Momentum kita bergulir detik ini juga—era di mana baris kode dan satu gagasan solutifmu mampu mengubah nasib komunitas, desa, hingga peradaban bangsa.
        </motion.p>

        {/* Tombol CTA Raksasa Super Clean */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#050508] font-black text-base uppercase tracking-wider rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-primary/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open("mailto:bergabung@mahreenindonesia.id", "_blank")}
          >
            <span>Mulai Inovasimu Sekarang</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Mini Footer / Identity Note */}
        <motion.p
          className="mt-8 text-white/30 text-xs font-mono tracking-wide flex items-center gap-1.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <MapPin size={12} className="text-accent" />
          DARI SABANG SAMPAI MERAUKE, SEGERA AMBIL PERANMU.
        </motion.p>
      </div>
    </section>
  );
}