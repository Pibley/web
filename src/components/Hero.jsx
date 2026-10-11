import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { 
  Play, 
  Sparkles, 
  ArrowDown, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Sliders, 
  Clapperboard, 
  Layers, 
  Volume2, 
  VolumeX 
} from 'lucide-react';

// Custom SVG Icons for Vimeo & Behance to maintain premium brand identity
const VimeoIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.396 7.164c-.093 2.026-1.507 4.799-4.245 8.32C15.323 19.16 12.93 21 10.97 21c-1.214 0-2.24-1.12-3.079-3.359-.623-2.284-1.246-4.569-1.869-6.853-.685-2.522-1.433-3.784-2.243-3.784-.187 0-.825.39-1.916 1.168L0 6.634C1.308 5.483 2.646 4.347 4.015 3.226c1.9-1.558 3.333-2.384 4.301-2.478 2.398-.249 3.877 1.385 4.437 4.903.623 3.754 1.028 6.089 1.215 7.008.56 2.616 1.183 3.924 1.868 3.924.53 0 1.293-.825 2.29-2.478.996-1.65 1.542-2.912 1.635-3.784.187-1.464-.42-2.196-1.822-2.196-.654 0-1.324.156-2.009.468 1.34-4.392 3.893-6.526 7.662-6.402 2.772.094 4.079 1.76 3.923 5.001z"/>
  </svg>
);

const BehanceIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7v2h7V7zm1.726 10c-.442 1.297-1.646 2.16-3.27 2.16-2.203 0-3.666-1.636-3.666-4.148 0-2.535 1.574-4.148 3.778-4.148 2.08 0 3.42 1.488 3.42 3.844v.667h-5.074c.05 1.157.777 1.892 1.842 1.892.83 0 1.428-.418 1.67-1.067h1.3zm-3.23-3.415c-.03-.96-.67-1.583-1.636-1.583-.942 0-1.614.61-1.677 1.583h3.313zM6.92 13.882c1.23 0 2.079-.589 2.079-1.745 0-.84-.52-1.42-1.378-1.554.67-.184 1.15-.724 1.15-1.472 0-1.104-.84-1.671-2.11-1.671H2v8h4.92v-1.558zm-2.85-6.223h2.614c.64 0 1.02.26 1.02.736 0 .478-.38.736-1.02.736H4.07V7.659zm0 4.662v-1.71h2.798c.7 0 1.11.285 1.11.855 0 .57-.41.855-1.11.855H4.07z"/>
  </svg>
);

export default function Hero({ onOpenShowreel }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const roleTextRef = useRef(null);
  const bgVideoRef = useRef(null);
  const [isBgMuted, setIsBgMuted] = useState(true);

  // Specialties to cycle dynamically
  const roles = [
    'DIRECTOR AUDIOVISUAL',
    'EDITOR CINEMATOGRÁFICO',
    'COLORISTA DAVINCI'
  ];

  useEffect(() => {
    // 1. GSAP Hero Elements Stagger Reveal
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim-item', {
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.hero-badge', {
        scale: 0.8,
        opacity: 0,
        duration: 0.9,
        ease: 'back.out(1.7)',
        delay: 0.2
      });

      gsap.from('.hero-reel-card', {
        scale: 0.9,
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.4
      });

      // 2. Dynamic Text typing / reveal cycle with GSAP
      let currentRoleIndex = 0;
      const cycleRole = () => {
        if (!roleTextRef.current) return;

        const nextRole = roles[currentRoleIndex];
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;

        // Animate out current text
        gsap.to(roleTextRef.current, {
          y: -20,
          opacity: 0,
          filter: 'blur(8px)',
          duration: 0.45,
          ease: 'power2.in',
          onComplete: () => {
            if (!roleTextRef.current) return;
            roleTextRef.current.textContent = nextRole;
            // Animate in next text
            gsap.fromTo(
              roleTextRef.current,
              { y: 25, opacity: 0, filter: 'blur(8px)' },
              { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.6, ease: 'power3.out' }
            );
          }
        });
      };

      const interval = setInterval(cycleRole, 3200);
      return () => clearInterval(interval);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const toggleBgSound = () => {
    if (bgVideoRef.current) {
      bgVideoRef.current.muted = !isBgMuted;
      setIsBgMuted(!isBgMuted);
    }
  };

  const socialLinks = [
    { name: 'Vimeo', icon: VimeoIcon, href: 'https://vimeo.com', color: 'hover:text-[#1ab7ea]', label: 'Vimeo Showcase' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', color: 'hover:text-[#ff0000]', label: 'YouTube 4K Channel' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-[#e1306c]', label: '@pibley.film' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-[#0077b5]', label: 'Perfil Profesional' },
    { name: 'Behance', icon: BehanceIcon, href: 'https://behance.net', color: 'hover:text-[#0057ff]', label: 'Portfolio Behance' },
  ];

  return (
    <section 
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Video con Loop y Overlay Oscuro Elegante */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={bgVideoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover scale-105 filter brightness-[0.45] contrast-[1.15] saturate-[0.9]"
        >
          {/* Cinematic high-quality loop stream */}
          <source 
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Ambient Gradient Overlays for Cinematic Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/80" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" 
             style={{ background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(10,10,10,0.85) 90%)' }} />
        
        {/* Subtle Atmospheric Glow Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e11d48]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[#6366f1]/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Botón flotante para activar audio ambiental en background video */}
      <button
        onClick={toggleBgSound}
        aria-label="Control de audio de fondo"
        className="absolute top-24 right-6 sm:right-12 z-20 p-2.5 rounded-full bg-black/40 hover:bg-[#e11d48]/40 border border-white/10 text-white/70 hover:text-white backdrop-blur-md transition-all text-xs flex items-center gap-2 group"
      >
        {isBgMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#e11d48]" />}
        <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-wider">
          {isBgMuted ? 'Muted' : 'Audio On'}
        </span>
      </button>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Cinematic Status Pill */}
            <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e11d48] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e11d48]"></span>
              </span>
              <span className="text-xs font-semibold text-rose-300 tracking-wider uppercase font-mono">
                Disponible para proyectos 2026
              </span>
              <span className="text-white/20">•</span>
              <span className="text-xs text-[#94a3b8] font-mono">
                Worldwide / Remoto & On-Set
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-anim-item text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              CREANDO HISTORIAS QUE PERMANECEN EN{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-[#e11d48]">
                LA MEMORIA
              </span>
            </h1>

            {/* GSAP Dynamic Role Display */}
            <div className="hero-anim-item flex items-center gap-3 py-1 mb-6 text-xl sm:text-2xl md:text-3xl font-bold font-mono tracking-wide">
              <span className="text-[#94a3b8]">//</span>
              <div className="relative overflow-hidden min-h-[40px] flex items-center">
                <span
                  ref={roleTextRef}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#e11d48] via-rose-300 to-[#6366f1] drop-shadow-sm font-extrabold tracking-wider"
                >
                  DIRECTOR AUDIOVISUAL
                </span>
              </div>
              <span className="inline-block w-2.5 h-6 bg-[#e11d48] animate-pulse rounded-sm" />
            </div>

            {/* Value Proposition Subtitle */}
            <p className="hero-anim-item text-base sm:text-lg text-[#94a3b8] max-w-2xl font-normal leading-relaxed mb-8">
              Dirección con visión autoral, montaje con ritmo milimétrico y corrección de color de grado cinematográfico en <span className="text-white font-medium">DaVinci Resolve Studio</span> para comerciales, videoclips, series y cine documental.
            </p>

            {/* Action Buttons */}
            <div className="hero-anim-item flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Play Showreel Primary Button */}
              <button
                onClick={onOpenShowreel}
                id="hero-play-showreel-btn"
                className="relative group overflow-hidden rounded-2xl p-[1px] shadow-2xl shadow-[#e11d48]/30 transition-transform active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#e11d48] via-rose-500 to-[#6366f1] rounded-2xl transition-all duration-300 group-hover:blur-sm" />
                <div className="relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#0e0e13] text-white transition-all duration-300 group-hover:bg-[#0e0e13]/85">
                  <div className="w-9 h-9 rounded-full bg-[#e11d48] flex items-center justify-center text-white shadow-lg shadow-[#e11d48]/50 group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs uppercase tracking-wider text-rose-300 font-mono font-bold">
                      Reel Oficial
                    </span>
                    <span className="block text-sm sm:text-base font-bold text-white tracking-wide">
                      Play Showreel 2026
                    </span>
                  </div>
                </div>
              </button>

              {/* Contact Direct Link */}
              <a
                href="#contacto"
                className="px-6 py-4 rounded-2xl glass-card text-white hover:text-white font-semibold text-sm sm:text-base border border-white/10 hover:border-[#6366f1]/50 hover:bg-white/10 transition-all flex items-center gap-2 group"
              >
                <span>Hablemos de tu Proyecto</span>
                <span className="text-[#6366f1] group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>

            {/* Quick Micro-stats */}
            <div className="hero-anim-item mt-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-6 sm:gap-8 max-w-lg w-full">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">10+</p>
                <p className="text-xs text-[#94a3b8] uppercase tracking-wider mt-0.5">Años de experiencia</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">120+</p>
                <p className="text-xs text-[#94a3b8] uppercase tracking-wider mt-0.5">Proyectos masterizados</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-rose-400 font-mono">4K/8K</p>
                <p className="text-xs text-[#94a3b8] uppercase tracking-wider mt-0.5">Flujo RAW DCI</p>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Showreel Spotlight Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div 
              className="hero-reel-card relative w-full max-w-md rounded-3xl p-3 glass-card border border-white/10 shadow-2xl group cursor-pointer transition-all duration-500 hover:border-[#e11d48]/50 hover:shadow-rose-950/40"
              onClick={onOpenShowreel}
            >
              {/* Card Media Preview */}
              <div className="relative aspect-[4/5] sm:aspect-[4/4.8] w-full rounded-2xl overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
                  alt="Showreel Preview Cinematography"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />

                {/* Film Frame Texture & Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />

                {/* Badge Top Left */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white">
                  <span className="w-2 h-2 rounded-full bg-[#e11d48] animate-pulse" />
                  SHOWREEL 2026
                </div>

                {/* Resolution Pill Top Right */}
                <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                  4K DCI • 10-BIT
                </div>

                {/* Central Pulsing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Glowing radar rings */}
                    <div className="absolute -inset-4 rounded-full bg-[#e11d48]/30 animate-ping opacity-75" />
                    <div className="absolute -inset-8 rounded-full bg-[#6366f1]/20 animate-pulse-slow" />
                    
                    {/* Play Circle */}
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#e11d48] to-[#6366f1] p-[2px] shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full rounded-full bg-[#0a0a0a]/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#e11d48] transition-colors">
                        <Play className="w-8 h-8 text-white fill-white ml-1 transition-transform group-hover:scale-110" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="flex items-center justify-between text-xs text-[#94a3b8] font-mono mb-1">
                    <span>SELECCIÓN CINE & PUBLICIDAD</span>
                    <span>02:14 MIN</span>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-rose-200 transition-colors">
                    The Art of Visual Rhythm
                  </h4>
                  <p className="text-xs text-[#94a3b8] mt-1 line-clamp-1">
                    Dirección • Edición Offline/Online • Color Grading ARRI LogC
                  </p>
                </div>
              </div>

              {/* Interactive Micro Label below preview */}
              <div className="mt-3 px-3 py-2 flex items-center justify-between text-xs text-[#94a3b8]">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Sparkles className="w-3.5 h-3.5 text-[#e11d48]" />
                  Clic para reproducir en pantalla completa
                </span>
                <span className="text-[#e11d48] font-semibold group-hover:translate-x-1 transition-transform">
                  Ver ahora &rarr;
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Social Links & Animated Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Social Links Bar */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
          <span className="text-xs uppercase tracking-widest text-[#94a3b8] font-mono mr-2 hidden md:inline">
            Canales:
          </span>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
                className="group relative p-2.5 rounded-xl glass-card text-[#94a3b8] hover:text-white hover:border-[#e11d48]/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className={`w-4 h-4 transition-colors ${social.color}`} />
                {/* Tooltip on hover */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono text-white bg-black/90 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Scroll Indicator Animado */}
        <a
          href="#proyectos"
          className="group flex items-center gap-3 text-xs uppercase tracking-widest font-mono text-[#94a3b8] hover:text-white transition-colors"
        >
          <span>Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#e11d48] transition-colors">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1.5 h-2 rounded-full bg-[#e11d48]"
            />
          </div>
          <ArrowDown className="w-4 h-4 text-[#e11d48] group-hover:translate-y-1 transition-transform" />
        </a>

      </div>
    </section>
  );
}
