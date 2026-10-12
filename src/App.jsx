import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShowreelModal from './components/ShowreelModal';
import { 
  Film, 
  Sparkles, 
  Sliders, 
  Video, 
  Layers, 
  Mail, 
  Instagram,
  ArrowUpRight, 
  Eye, 
  Award,
  Tv,
  CheckCircle2
} from 'lucide-react';

// Icono personalizado para WhatsApp
const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.301-.776.978-.952 1.179-.175.2-.351.226-.652.075s-1.27-.468-2.42-1.493c-.894-.798-1.498-1.783-1.674-2.084-.175-.3-.019-.463.132-.612.136-.134.301-.351.451-.527.151-.175.2-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.234-.244-.588-.493-.508-.676-.517-.175-.009-.376-.011-.577-.011s-.527.075-.802.376c-.276.301-1.053 1.028-1.053 2.508s1.078 2.908 1.229 3.109c.15.2 2.122 3.24 5.14 4.544.718.31 1.279.496 1.716.635.721.23 1.377.197 1.896.12.577-.087 1.78-.727 2.03-1.43.251-.702.251-1.303.176-1.43-.075-.126-.276-.201-.577-.351zM12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.98.58 3.82 1.58 5.37L2 22l4.79-1.55c1.5 1 3.3 1.57 5.25 1.57 5.53 0 10.02-4.49 10.02-10.02C22.06 6.49 17.57 2 12.04 2zm0 18.27c-1.75 0-3.38-.55-4.72-1.5l-.34-.24-2.85.92.94-2.77-.26-.37a8.216 8.216 0 0 1-1.28-4.31c0-4.57 3.72-8.29 8.29-8.29 4.57 0 8.29 3.72 8.29 8.29 0 4.58-3.72 8.27-8.27 8.27z"/>
  </svg>
);

// Icono personalizado para X (Twitter)
const XIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function App() {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  const featuredProjects = [
    {
      title: 'Neon Odyssey',
      category: 'Videoclip Musical',
      year: '2025',
      role: 'Dirección & Color',
      camera: 'ARRI Alexa Mini LF',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      tag: '4K DCI',
    },
    {
      title: 'Echoes of Silence',
      category: 'Cortometraje Ficción',
      year: '2025',
      role: 'Montaje & Corrección Color',
      camera: 'RED V-Raptor 8K',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
      tag: 'Best Cinematography Award',
    },
    {
      title: 'Velocity Prime',
      category: 'Comercial Automotriz',
      year: '2026',
      role: 'Colorista Senior (DaVinci)',
      camera: 'Sony FX9 / Cooke Lenses',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      tag: 'Broadcast HDR',
    },
  ];

  const services = [
    {
      icon: Film,
      title: 'Filmmaker',
      desc: 'Producción visual de alta calidad adaptada a las necesidades de tu proyecto.'
    },
    {
      icon: Video,
      title: 'Edición de videos',
      desc: 'Montaje, ritmo y narrativa visual para marcas y creadores. Doy el impulso visual y estructural que tus proyectos necesitan.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f8fafc] selection:bg-[#e11d48] selection:text-white relative">
      {/* Subtle Grain Overlay for Film Aesthetic */}
      <div className="grain-overlay" />

      {/* Floating Glassmorphic Navbar */}
      <Navbar onOpenShowreel={() => setIsShowreelOpen(true)} />

      {/* Hero Section Audiovisual */}
      <main>
        <Hero onOpenShowreel={() => setIsShowreelOpen(true)} />

        {/* Proyectos Destacados Section Preview */}
        <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-rose-300 uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#e11d48]" />
                Obras Seleccionadas
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                PROYECTOS DESTACADOS
              </h2>
            </div>
            <p className="text-sm text-[#94a3b8] max-w-md">
              Una cuidada selección de piezas comerciales, videoclips y proyectos de autor donde la imagen y el color dialogan con la emoción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-[#e11d48]/50 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-rose-950/20"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-rose-300">
                    {project.tag}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8] mb-2">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-rose-200 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#e11d48]" />
                  </h3>
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                    <span>{project.role}</span>
                    <span className="font-mono text-[11px] text-zinc-500">{project.camera}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Servicios Section Preview */}
        <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-rose-300 uppercase mb-3">
              <Layers className="w-3.5 h-3.5 text-[#e11d48]" />
              Especialidades Técnicas
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              SERVICIOS AUDIOVISUALES
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8]">
              Soluciones integrales de realización y postproducción para productoras, agencias y creadores independientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-8 border border-white/10 hover:border-[#6366f1]/50 transition-all duration-300 hover:-translate-y-1 relative group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e11d48]/20 to-[#6366f1]/20 border border-white/10 flex items-center justify-center text-[#e11d48] group-hover:scale-110 transition-transform mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-200 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contacto Section */}
        <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5 relative z-10">
          <div className="glass-card rounded-3xl p-8 sm:p-14 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#e11d48]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-widest text-rose-400 font-bold block mb-2">
                // Iniciemos una colaboración
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                ¿TIENES UNA HISTORIA QUE CONTAR O UN REEL QUE PULIR?
              </h2>
              <p className="text-base text-[#94a3b8] mb-8">
                Hablemos sobre las necesidades de tu producción o proyecto.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Correo con icono y texto que invita a hacer clic */}
                <a
                  href="mailto:pibley2@gmail.com"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#e11d48] to-[#6366f1] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#e11d48]/30 hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all inline-flex items-center gap-2.5 group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Escríbeme un correo</span>
                </a>

                {/* WhatsApp: solo logo */}
                <a
                  href="https://wa.me/56940421175"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="p-3.5 rounded-full glass-pill text-white hover:text-[#25D366] hover:bg-white/10 hover:border-[#25D366]/40 hover:scale-110 active:scale-95 transition-all inline-flex items-center justify-center border border-white/10 shadow-lg group"
                >
                  <WhatsAppIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>

                {/* Instagram: solo logo */}
                <a
                  href="https://instagram.com/pibley07"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="p-3.5 rounded-full glass-pill text-white hover:text-[#e1306c] hover:bg-white/10 hover:border-[#e1306c]/40 hover:scale-110 active:scale-95 transition-all inline-flex items-center justify-center border border-white/10 shadow-lg group"
                >
                  <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>

                {/* Twitter / X: solo logo */}
                <a
                  href="https://x.com/Pibley1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  title="X (Twitter)"
                  className="p-3.5 rounded-full glass-pill text-white hover:text-white hover:bg-white/10 hover:border-white/40 hover:scale-110 active:scale-95 transition-all inline-flex items-center justify-center border border-white/10 shadow-lg group"
                >
                  <XIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-12 border-t border-white/5 text-center text-xs text-[#94a3b8] font-mono relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 PIBLEY • CINEMA & POST-PRODUCTION. TODOS LOS DERECHOS RESERVADOS.</p>
          <p className="text-zinc-500">DISEÑADO CON ESTÉTICA CINEMATOGRÁFICA</p>
        </div>
      </footer>

      {/* Showreel Lightbox Modal */}
      <ShowreelModal 
        isOpen={isShowreelOpen} 
        onClose={() => setIsShowreelOpen(false)} 
      />
    </div>
  );
}
