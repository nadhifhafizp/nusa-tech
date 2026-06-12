import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
      <About />
      <CTA />

      {/* Footer minimal */}
      <footer className="bg-secondary border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted text-center md:text-left">
            © {new Date().getFullYear()} Mahreen Indonesia. Dibuat dengan{" "}
            <span className="text-primary">❤</span> untuk generasi penerus
            bangsa.
          </p>
          <p className="text-xs text-muted/50">
            #BerkaryaUntukIndonesia · #MahreenIndonesia
          </p>
        </div>
      </footer>
    </main>
  );
}