"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, HeartPulse, Anchor, ShieldCheck } from "lucide-react";

// Dummy & Real Projects bertema Indonesia
const projects = [
  {
    icon: Globe,
    title: "DIGITALISASI DESA",
    tagline: "Desa Sukalaksana, Bekasi",
    desc: "Membangun web profil terintegrasi untuk mendongkrak ekonomi UMKM lokal dan transparansi data kependudukan berbasis cloud.",
    tech: "Next.js / Supabase",
    color: "border-primary/30 text-primary bg-primary/5",
  },
  {
    icon: Cpu,
    title: "AGRITECH IOT SYSTEM",
    tagline: "Smart Farming Nusantara",
    desc: "Prototipe monitoring kelembapan tanah dan otomatisasi irigasi murah menggunakan ESP32 dan protokol komunikasi MQTT.",
    tech: "ESP32 / MQTT / Go",
    color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5",
  },
  {
    icon: HeartPulse,
    title: "HEALTHTECH WEB AR",
    tagline: "Metode AHP Terapi Pegal",
    desc: "Aplikasi Web Augmented Reality menggunakan React-Three-Fiber untuk rekomendasi titik terapi pegal ringan mahasiswa.",
    tech: "Three.js / React / AR.js",
    color: "border-accent/30 text-accent bg-accent/5",
  },
  {
    icon: Anchor,
    title: "MARINETECH RADAR",
    tagline: "Proteksi Nelayan Lokal",
    desc: "Sistem tracking koordinat melaut nelayan tradisional berbasis IoT untuk memantau radar cuaca buruk dan daerah rawan batas laut.",
    tech: "LoRaWAN / Next.js",
    color: "border-blue-500/30 text-blue-400 bg-blue-500/5",
  },
  {
    icon: ShieldCheck,
    title: "CYBER SECURITY AUDIT",
    tagline: "Analisis Jaringan Kampus",
    desc: "Audit forensik keamanan jaringan institusi lokal menggunakan Wireshark untuk menambal celah ancaman penetrasi malware luar.",
    tech: "Wireshark / Network Sec",
    color: "border-purple-500/30 text-purple-400 bg-purple-500/5",
  }
];

// ─── ANIMASI KARTU REMI (Staggered Fan-Out Layout) ───
const cardVariants: any = {
  hidden: { 
    opacity: 0, 
    y: 160, 
    rotate: -6,
    scale: 0.9 
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    // Bikin efek susunan kartu remi sedikit melengkung/miring estetik berdasarkan index
    rotate: index % 2 === 0 ? index * 1.5 : index * -1.5,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 14,
      delay: index * 0.15 // Stagger efek bermunculan satu per satu
    }
  })
};

export default function About() {
  return (
    <section id="program" className="relative w-full py-32 px-6 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="w-full text-center mb-24">
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-mono tracking-widest uppercase">
            // TIGA PILAR UTAMA
          </span>
          <h2 className="mt-4 font-sans font-black text-4xl md:text-7xl uppercase text-white tracking-tight">
            EKOSISTEM SOLUSI<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              NYATA DI SEKITAR KITA
            </span>
          </h2>
        </div>

        {/* Container Kartu Remi Layout (Flex Wrap/Grid Tumpang Tindih Halus) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch w-full">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ 
                  y: -20, 
                  rotate: 0,
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(230,57,70,0.25)",
                  zIndex: 40 
                }}
                className={`relative p-8 rounded-2xl border backdrop-blur-md transition-shadow duration-300 flex flex-col justify-between ${project.color}`}
                style={{ transformOrigin: "bottom center" }}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-xs text-white/30">#0{index + 1}</span>
                    <Icon size={24} className="opacity-80" />
                  </div>
                  
                  <h3 className="font-sans font-extrabold text-2xl text-white uppercase tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-bold text-accent/90 uppercase tracking-wide mb-4">
                    {project.tagline}
                  </p>
                  
                  <p className="font-body text-sm text-white/60 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-white/40">STACK:</span>
                  <span className="text-white/80 font-bold tracking-wide">{project.tech}</span>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}