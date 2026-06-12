"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="bergabung"
      className="relative bg-secondary py-28 md:py-40 px-6 overflow-hidden"
    >
      {/* ── Latar artistik: gradien besar merah + emas ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/20 via-accent/5 to-transparent blur-3xl" />
        {/* Garis dekoratif horizontal */}
        <motion.div
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{ scaleX: [0, 1], opacity: [0, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        />
      </div>

      <motion.div
        ref={ref}
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Eye-catcher */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-8 shadow-lg glow-gold"
        >
          <Sparkles size={28} className="text-secondary" />
        </motion.div>

        {/* Headline CTA */}
        <motion.h2
          className="font-sans font-extrabold text-4xl md:text-6xl text-surface leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Indonesia Tidak Butuh
          <br />
          <span className="text-gradient-red-gold">Penonton.</span>
          <br />
          Indonesia Butuh
          <span className="text-gradient-red-gold"> Kamu.</span>
        </motion.h2>

        {/* Body CTA */}
        <motion.p
          className="font-body text-base md:text-lg text-muted leading-relaxed mb-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          Setiap generasi mendapat momennya. Momen kita adalah sekarang — di era
          di mana satu baris kode, satu desain, satu ide bisa mengubah nasib
          satu desa, satu kota, atau satu bangsa.
        </motion.p>

        <motion.p
          className="font-body text-sm text-slate-500 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Jangan biarkan sejarah mencatat bahwa kamu hanya diam dan menonton
          saat Indonesia membutuhkanmu. Jadilah bagian dari gerakan ini.
        </motion.p>

        {/* ── Tombol CTA Utama ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 150, delay: 0.7 }}
          className="inline-block"
        >
          <motion.button
            className="relative group inline-flex items-center gap-3 px-10 py-5 rounded-full font-extrabold text-lg text-secondary overflow-hidden"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
           style={{
            backgroundImage: hovered
                ? "linear-gradient(135deg, #FFD60A 0%, #E63946 60%, #FFD60A 100%)"
                : "linear-gradient(135deg, #E63946 0%, #FFD60A 100%)",
            backgroundColor: "transparent",   // pisahkan dari shorthand
            transition: "background-image 0.4s ease",
            }}
            onClick={() =>
              window.open("mailto:bergabung@mahreenindonesia.id", "_blank")
            }
          >
            {/* Efek glow animasi */}
            <motion.span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255,255,255,0.3), transparent)",
              }}
              animate={hovered ? { scale: [1, 1.5], opacity: [0.4, 0] } : {}}
              transition={{ duration: 0.6, repeat: hovered ? Infinity : 0 }}
            />

            <span>Mulai Inovasimu Sekarang</span>
            <motion.span
              animate={hovered ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 0.5, repeat: hovered ? Infinity : 0 }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Social proof mini */}
        <motion.p
          className="mt-6 text-xs text-muted/60 flex items-center justify-center gap-1"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
        >
          <MapPin size={11} />
          Untuk seluruh pemuda Indonesia, dari Sabang sampai Merauke.
        </motion.p>
      </motion.div>
    </section>
  );
}