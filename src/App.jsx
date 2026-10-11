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
  Phone, 
  ArrowUpRight, 
  Eye, 
  Award,
  Tv,
  CheckCircle2
} from 'lucide-react';

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
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:pibley2@gmail.com"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#e11d48] to-[#6366f1] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#e11d48]/30 hover:opacity-95 transition-opacity inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  pibley2@gmail.com
                </a>
                <a
                  href="https://wa.me/56978940474"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-full glass-pill text-white font-semibold text-sm hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#6366f1]" />
                  WhatsApp Directo
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
