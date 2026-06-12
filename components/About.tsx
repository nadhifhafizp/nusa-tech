"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Globe, Cpu, HeartPulse } from "lucide-react";

// ─── Data Program ────────────────────────────────────────────────────────
const programs = [
  {
    icon: Globe,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    badge: "Studi Kasus Nyata",
    badgeColor: "text-accent",
    title: "Digitalisasi Desa",
    tagline: "Dari Sawah ke Server: Kisah Desa Sukalaksana",
    description:
      "Di Desa Sukalaksana, Bekasi, warga desa kini punya wajah digital. Sebuah website profil desa yang dibangun oleh mahasiswa bersama warga setempat berhasil mengangkat potensi lokal — dari produk UMKM, agenda kegiatan, hingga data kependudukan — ke panggung internet. Hasilnya? Investor luar daerah mulai melirik, wisatawan mulai datang, dan warga desa kini bangga memiliki identitas digital mereka sendiri.",
    highlight: "Satu website, ratusan cerita desa yang mulai didengar dunia.",
    stat: { value: "1 Desa", label: "Website Aktif Beroperasi" },
  },
  {
    icon: Cpu,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    badge: "Internet of Things",
    badgeColor: "text-emerald-400",
    title: "Inovasi Ekosistem Pintar",
    tagline: "Teknologi Murah, Dampak Luar Biasa",
    description:
      "Bayangkan sensor suhu terpasang di kandang ternak yang langsung mengirim notifikasi ke ponsel peternak. Atau alat pengukur kualitas air sederhana yang terhubung ke dashboard web milik kelompok tani. Program ini membuktikan bahwa IoT tidak harus mahal: dengan komponen seharga kurang dari Rp 150 ribu, mahasiswa teknik bisa membangun solusi yang mengubah cara masyarakat bekerja setiap harinya.",
    highlight:
      "Teknologi bukan hak istimewa. Dengan kreativitas, semua orang bisa merasakannya.",
    stat: { value: "Rp 150rb", label: "Biaya Prototipe Pertama" },
  },
  {
    icon: HeartPulse,
    iconColor: "text-rose-400",
    iconBg: "bg-rose-400/10",
    badge: "HealthTech Lokal",
    badgeColor: "text-rose-400",
    title: "Solusi Teknologi Kesehatan",
    tagline: "Doktermu Ada di Ujung Jari",
    description:
      "Mahasiswa sering mengabaikan kesehatan karena sibuk, biaya, atau sekadar tidak tahu harus mulai dari mana. Sebuah web app inovatif lahir dari keresahan ini: platform rekomendasi kesehatan berbasis AI sederhana yang menganalisis gejala, pola makan, dan kebiasaan tidur mahasiswa untuk memberikan saran kesehatan personal yang mudah dipahami. Tidak menggantikan dokter, tapi menjadi jembatan pertama yang paling mudah dijangkau.",
    highlight:
      "Kesehatan bukan kemewahan. Teknologi hadir untuk memastikan semua orang bisa akses.",
    stat: { value: "24/7", label: "Akses Rekomendasi Kesehatan" },
  },
];

// ─── Animation Variants ──────────────────────────────────────────────────
const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Component ───────────────────────────────────────────────────────────
export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="program"
      className="relative bg-navy-800 py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Dekorasi latar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl -translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
            Tentang Program
          </span>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-surface leading-tight">
            Tiga Pilar Perubahan
            <br />
            <span className="text-gradient-red-gold">yang Kami Percayai</span>
          </h2>
          <p className="mt-4 text-muted font-body max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Setiap proyek lahir dari satu keyakinan: bahwa pemuda Indonesia
            mampu menciptakan solusi nyata untuk masalah nyata di sekitar mereka.
          </p>
        </motion.div>

        {/* ── Grid Kartu: 1 col mobile, 3 col desktop ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <motion.article
                key={program.title}
                variants={cardVariant}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                }}
                className="group relative bg-navy-700 rounded-2xl p-6 lg:p-8 border border-white/5 hover:border-white/15 transition-colors duration-300 cursor-default overflow-hidden"
              >
                {/* Efek cahaya hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/[0.03] to-transparent" />

                {/* Badge */}
                <span
                  className={`inline-block text-xs font-bold tracking-wider uppercase mb-4 ${program.badgeColor}`}
                >
                  {program.badge}
                </span>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${program.iconBg} flex items-center justify-center mb-5`}
                >
                  <Icon size={24} className={program.iconColor} />
                </div>

                {/* Judul & Tagline */}
                <h3 className="font-sans font-bold text-xl text-surface mb-1">
                  {program.title}
                </h3>
                <p className="text-xs font-medium text-muted mb-4 italic">
                  "{program.tagline}"
                </p>

                {/* Deskripsi */}
                <p className="font-body text-sm text-slate-400 leading-relaxed mb-5">
                  {program.description}
                </p>

                {/* Highlight */}
                <blockquote className="border-l-2 border-primary pl-3 mb-6">
                  <p className="text-sm font-medium text-slate-300 italic leading-snug">
                    {program.highlight}
                  </p>
                </blockquote>

                {/* Stat */}
                <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                  <span className="font-extrabold text-lg text-gradient-red-gold">
                    {program.stat.value}
                  </span>
                  <span className="text-xs text-muted">{program.stat.label}</span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}