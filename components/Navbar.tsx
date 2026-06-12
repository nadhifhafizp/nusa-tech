"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/40 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo Spylt Style */}
        <div className="flex items-center">
          <span className="font-sans font-black text-xl tracking-tighter text-white uppercase">
            MAHREEN<span className="text-primary ml-0.5">INDONESIA</span>
          </span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-10">
          {["Program", "Dampak", "Bergabung"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-black uppercase text-slate-400 hover:text-white tracking-widest transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#bergabung"
          className="text-xs font-black uppercase px-6 py-2.5 rounded-full bg-primary text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider"
        >
          JOIN CLUB
        </a>
      </div>
    </header>
  );
}