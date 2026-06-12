"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, MouseEvent } from "react";

export default function TiltCard({ children, className }: { children: ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Menggunakan spring agar animasi kembalinya halus
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Mengubah rentang nilai kursor menjadi derajat rotasi (maksimal 15 derajat)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Reset posisi kartu ke tengah saat mouse keluar
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d", // Penting untuk efek 3D
      }}
      className={`relative w-full h-full rounded-2xl bg-navy-800 border border-white/10 shadow-2xl transition-colors hover:border-primary/50 cursor-pointer ${className}`}
    >
      {/* Efek inner shadow/lighting */}
      <div 
        className="absolute inset-0 z-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
            background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 60%)"
        }}
      />
      
      {/* Konten dengan efek pop-out 3D */}
      <div 
        style={{ transform: "translateZ(50px)" }} // Membuat konten terlihat melayang
        className="relative z-10 w-full h-full p-6"
      >
        {children}
      </div>
    </motion.div>
  );
}