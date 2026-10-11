import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Clapperboard, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onOpenShowreel }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12 pt-4 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3 px-5 sm:px-7 shadow-2xl shadow-black/80'
            : 'bg-[#0a0a0a]/40 backdrop-blur-md border border-white/5 py-4 px-5 sm:px-8'
        } flex items-center justify-between`}
      >
        {/* Logo / Nombre Personal */}
        <a
          href="#"
          id="brand-logo"
          className="group flex items-center gap-3 text-white transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#e11d48] to-[#6366f1] p-[1.5px] shadow-lg shadow-[#e11d48]/25 group-hover:shadow-[#e11d48]/50 transition-shadow overflow-hidden">
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`} 
              alt="Pibley Logo" 
              className="w-full h-full object-cover rounded-[10px] bg-[#0d0d11]" 
            />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e11d48] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e11d48]"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-base sm:text-lg leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-rose-200 group-hover:to-[#e11d48] transition-all">
              Pibley
            </span>
            <span className="text-[10px] tracking-widest text-[#94a3b8] uppercase font-mono">
              FILMMAKER & EDITOR
            </span>
          </div>
        </a>

        {/* Enlaces de escritorio */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-3.5 py-1.5 text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors group"
            >
              <span>{link.name}</span>
              <span className="absolute inset-x-3 bottom-0 h-[2px] bg-gradient-to-r from-[#e11d48] to-[#6366f1] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
            </a>
          ))}
        </div>

        {/* Acciones de escritorio: Showreel Mini + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenShowreel}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#f8fafc] bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:border-[#e11d48]/40 hover:text-rose-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#e11d48]" />
            <span>Showreel '26</span>
          </button>

          <a
            href="#contacto"
            id="nav-cta-button"
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#e11d48]/50"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#e11d48] via-[#6366f1] to-[#e11d48] bg-[length:200%_auto] animate-pulse-slow rounded-full" />
            <span className="relative flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#0a0a0a] text-xs uppercase tracking-wider font-bold text-white transition-all duration-300 group-hover:bg-transparent">
              Hablemos
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>

        {/* Botón de Menú Móvil */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Abrir menú"
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#e11d48]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Menú Móvil Desplegable con Glassmorphism */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden mt-2 mx-auto max-w-7xl glass-nav rounded-2xl p-6 border border-white/10 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold text-[#f8fafc] hover:text-[#e11d48] transition-colors py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#94a3b8] font-mono">0{navLinks.indexOf(link) + 1}</span>
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenShowreel();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#e11d48]" />
                  Ver Showreel 2026
                </button>

                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#e11d48] to-[#6366f1] text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-[#e11d48]/25"
                >
                  Contrátame / Hablemos
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
