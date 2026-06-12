"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Zap } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `rgba(10, 15, 30, ${bgOpacity.get()})`,
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Re-render on scroll untuk efek transparan → solid */}
      <NavbarInner />
    </motion.header>
  );
}

function NavbarInner() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.95]);

  return (
    <motion.div
      className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between"
      style={{ backgroundColor: `rgba(10, 15, 30, 0)` }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <Zap size={16} className="text-secondary" fill="currentColor" />
        </div>
        <span className="font-bold text-sm tracking-wide text-surface">
          MAHREEN
          <span className="text-gradient-red-gold ml-1">INDONESIA</span>
        </span>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-8">
        {["Program", "Dampak", "Bergabung"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm text-muted hover:text-surface transition-colors duration-200 tracking-wide"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <motion.a
        href="#bergabung"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="hidden md:block text-sm font-semibold px-5 py-2 rounded-full bg-primary text-white glow-red transition-all duration-200"
      >
        Bergabung
      </motion.a>
    </motion.div>
  );
}