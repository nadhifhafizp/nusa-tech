"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, HeartPulse, Anchor, ShieldCheck, Terminal, Layers, Radio, Infinity as InfIcon } from "lucide-react";

const projects = [
  {
    icon: Globe,
    title: "DIGITALISASI DESA",
    tagline: "Desa Sukalaksana, Bekasi",
    desc: "Membangun sistem interkoneksi profil desa berbasis cloud untuk integrasi distribusi produk UMKM regional langsung ke gerbang internet.",
    tech: "Next.js / Supabase / Vercel",
    color: "border-primary/20 text-primary bg-primary/5",
  },
  {
    icon: Cpu,
    title: "AGRITECH IOT SYSTEM",
    tagline: "Smart Farming Nusantara",
    desc: "Otomatisasi sistem irigasi hemat energi dan deteksi pH tanah realtime menggunakan mikrokontroler ESP32 via enkripsi protokol MQTT.",
    tech: "ESP32 / Golang / MQTT",
    color: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5",
  },
  {
    icon: HeartPulse,
    title: "HEALTHTECH WEB AR",
    tagline: "Rekomendasi Terapi Pegal",
    desc: "Aplikasi Augmented Reality interaktif berbasis web menggunakan React-Three-Fiber untuk pemetaan akupresur mahasiswa mandiri.",
    tech: "Three.js / React-Three-Fiber",
    color: "border-accent/20 text-accent bg-accent/5",
  },
  {
    icon: Anchor,
    title: "MARINETECH GRID",
    tagline: "Sistem Proteksi Maritim",
    desc: "Alat tracking jangkauan sinyal aman nelayan lokal berbasis jaringan LoRaWAN untuk mitigasi anomali cuaca ekstrem laut.",
    tech: "LoRaWAN / Node.js / Python",
    color: "border-blue-500/20 text-blue-400 bg-blue-500/5",
  },
  {
    icon: ShieldCheck,
    title: "CYBER SECURITY AUDIT",
    tagline: "Forensik Infrastruktur Kampus",
    desc: "Analisis penetrasi data dan audit kerentanan enkripsi jaringan universitas untuk memitigasi serangan ransomware luar.",
    tech: "Wireshark / Linux Sec",
    color: "border-purple-500/20 text-purple-400 bg-purple-500/5",
  }
];

const ecosystem = [
  { icon: Terminal, label: "Core Execution", desc: "Arsitektur kode modern berskala industri menggunakan framework mutakhir." },
  { icon: Layers, label: "Distributed Mesh", desc: "Penyimpanan data aman multi-region dengan latensi minimal untuk publik." },
  { icon: Radio, label: "IoT Edge Telemetry", desc: "Integrasi perangkat keras pintar di pelosok nusantara tanpa batas kuota." },
  { icon: InfIcon, label: "Infinite Scaling", desc: "Sistem otomatisasi performa tinggi untuk menampung jutaan traffic desa." }
];

// typed as any to satisfy framer-motion Variant function typing in TS projects
const cardVariants: any = {
  hidden: { opacity: 0, y: 120, rotate: -4, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotate: index % 2 === 0 ? index * 1.2 : index * -1.2,
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 15, delay: index * 0.12 }
  })
};

export default function About() {
  return (
    <section id="program" className="relative w-full py-24 px-6 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* ── SEC 1: DIGITAL STATS OVERLAY (Dummy) ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32 border-y border-white/5 py-12 bg-black/20 backdrop-blur-xs">
          {[
            { num: "4.8M+", label: "BARIS KODE DIEKSEKUSI" },
            { num: "34+", label: "PROVINSI TERKONEKSI" },
            { num: "150+", label: "PROTOTIPE EDGE DEPLOYED" },
            { num: "12K+", label: "TALENTA MUDA AKTIF" }
          ].map((stat, i) => (
            <motion.div 
              key={i} className="text-center font-mono"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            >
              <h4 className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-white to-white/40 tracking-tighter">{stat.num}</h4>
              <p className="text-[10px] text-white/40 tracking-widest mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* ── SEC 2: MAIN CARD DECK LAYOUT ── */}
        <div className="w-full text-center mb-20">
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/40 text-xs font-mono tracking-widest uppercase">
            // LIVE_ECOSYSTEM_DASHBOARD
          </span>
          <h2 className="mt-4 font-sans font-black text-4xl md:text-7xl uppercase text-white tracking-tight leading-none">
            REKAYASA TEKNOLOGI<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              UNTUK MASYARAKAT
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full mb-40">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title} custom={index} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -16, rotate: 0, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(230,57,70,0.15)", zIndex: 30 }}
                className={`relative p-8 rounded-2xl border backdrop-blur-md flex flex-col justify-between ${project.color}`}
                style={{ transformOrigin: "bottom center" }}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-xs text-white/30">ID_REF // 0{index + 1}</span>
                    <Icon size={22} className="opacity-70" />
                  </div>
                  <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tight mb-1">{project.title}</h3>
                  <p className="text-xs font-bold text-accent/80 uppercase tracking-wide mb-4">// {project.tagline}</p>
                  <p className="font-body text-sm text-white/60 leading-relaxed">{project.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px]">
                  <span className="text-white/30">CORE_STACK:</span>
                  <span className="text-white/70 font-bold tracking-wide">{project.tech}</span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ── SEC 3: ECOSYSTEM TECH INFRASTRUCTURE (New Extra Content) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center border-t border-white/5 pt-32 mb-32">
          <div className="lg:col-span-1">
            <span className="text-xs font-mono text-primary tracking-widest uppercase">// ARCHITECTURE_PILLARS</span>
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-2 leading-none">Pilar Fondasi Sistem</h3>
            <p className="text-sm text-white/50 font-body mt-4 leading-relaxed">
              Infrastruktur teknologi yang dirancang secara modular untuk menjamin performa distribusi informasi tetap stabil di seluruh kondisi area jaringan Indonesia.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ecosystem.map((item, i) => {
              const SubIcon = item.icon;
              return (
                <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/1 backdrop-blur-xs hover:border-white/10 transition-colors">
                  <SubIcon size={20} className="text-accent mb-4" />
                  <h4 className="text-lg font-bold text-white font-sans uppercase tracking-tight">{item.label}</h4>
                  <p className="text-xs text-white/50 font-body mt-2 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── SEC 4: VANGUARD MILESTONES TIMELINE (New Extra Content) ── */}
        <div className="w-full flex flex-col items-center">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-white/40 tracking-widest uppercase">// ROADMAP_CHRONOLOGY</span>
            <h3 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tight mt-1">Fase Gerakan Akselerasi</h3>
          </div>
          <div className="w-full max-w-3xl relative border-l border-white/10 pl-6 ml-4 space-y-12">
            {[
              { phase: "FASE 01", title: "Inisiasi & R&D Komunitas", detail: "Riset mendalam pengembangan prototipe sistem mikrokontroler hemat daya dan perancangan awal arsitektur Web AR." },
              { phase: "FASE 02", title: "Implementasi & Edge Deployment", detail: "Penerapan sistem digitalisasi desa di wilayah satelit penunjang dan sinkronisasi data telemetri pertanian." },
              { phase: "FASE 03", title: "Scale-Up & Sovereign Network", detail: "Ekspansi integrasi skala nasional, penyediaan dasbor analitik terbuka untuk jutaan talenta pengembang muda." }
            ].map((node, i) => (
              <div key={i} className="relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-7.75 top-1.5 shadow-[0_0_10px_#E63946]" />
                <span className="font-mono text-[10px] text-accent font-bold tracking-widest">{node.phase}</span>
                <h4 className="text-lg font-black text-white uppercase tracking-tight mt-1">{node.title}</h4>
                <p className="text-xs text-white/50 font-body mt-1 leading-relaxed">{node.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}