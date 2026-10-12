import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause,
  Maximize2,
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

// =========================================================================
// 🎥 VIDEO DEL SHOWREEL: Aquí cambias la URL de tu video y la foto de portada
// Puedes poner un enlace directo de internet (.mp4) o un archivo en la carpeta /public
// Ejemplo archivo local: '/web/mivideo.mp4'
// =========================================================================
export const SHOWREEL_VIDEO_URL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4";
export const SHOWREEL_POSTER_URL = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80";

// Icono personalizado para X (Twitter)
const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Hero({ onOpenShowreel }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const roleTextRef = useRef(null);
  const bgVideoRef = useRef(null);
  const cardVideoRef = useRef(null);
  const [isBgMuted, setIsBgMuted] = useState(true);
  const [isCardPlaying, setIsCardPlaying] = useState(false);
  const [isCardMuted, setIsCardMuted] = useState(false);

  const toggleCardPlay = (e) => {
    e?.stopPropagation();
    if (cardVideoRef.current) {
      if (isCardPlaying) {
        cardVideoRef.current.pause();
        setIsCardPlaying(false);
      } else {
        cardVideoRef.current.play();
        setIsCardPlaying(true);
      }
    }
  };

  const toggleCardMute = (e) => {
    e?.stopPropagation();
    if (cardVideoRef.current) {
      cardVideoRef.current.muted = !isCardMuted;
      setIsCardMuted(!isCardMuted);
    }
  };

  // Specialties to cycle dynamically
  const roles = [
    'PRODUCTOR AUDIOVISUAL',
    'EDITOR'
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
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/pibley07', color: 'hover:text-[#e1306c]', label: '@pibley07' },
    { name: 'X', icon: XIcon, href: 'https://x.com/Pibley1', color: 'hover:text-white', label: '@Pibley1' },
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
              Filmmaker &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-[#e11d48]">
                Editor Audiovisual.
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
              Desarrollo de piezas audiovisuales atractivas y dinámicas que logran mayor conexión con el público.
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
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">6+</p>
                <p className="text-xs text-[#94a3b8] uppercase tracking-wider mt-0.5">Años de experiencia</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">120+</p>
                <p className="text-xs text-[#94a3b8] uppercase tracking-wider mt-0.5">Proyectos masterizados</p>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Showreel Spotlight Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div 
              className="hero-reel-card relative w-full max-w-md rounded-3xl p-3.5 bg-[#14141a] border border-white/15 shadow-2xl group transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-2 hover:border-[#e11d48]/60 hover:shadow-2xl hover:shadow-rose-950/40 cursor-pointer !opacity-100"
              onClick={toggleCardPlay}
            >
              {/* Card Media Container */}
              <div className="relative aspect-[4/5] sm:aspect-[4/4.8] w-full rounded-2xl overflow-hidden bg-black">
                
                {/* Video HTML5 Reproducible en la misma tarjeta */}
                <video
                  ref={cardVideoRef}
                  src={SHOWREEL_VIDEO_URL}
                  poster={SHOWREEL_POSTER_URL}
                  playsInline
                  loop
                  onPlay={() => setIsCardPlaying(true)}
                  onPause={() => setIsCardPlaying(false)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Film Frame Texture & Vignette */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40 pointer-events-none transition-opacity duration-300 ${isCardPlaying ? 'opacity-30 group-hover:opacity-60' : 'opacity-80'}`} />

                {/* Badge Top Left */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white pointer-events-none">
                  <span className={`w-2 h-2 rounded-full ${isCardPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-[#e11d48]'}`} />
                  {isCardPlaying ? 'REPRODUCIENDO' : 'SHOWREEL 2026'}
                </div>

                {/* Top Right: Botón para abrir modal a pantalla completa */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenShowreel();
                  }}
                  title="Abrir en pantalla completa (Modal)"
                  className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-black/60 hover:bg-[#e11d48] border border-white/15 text-white backdrop-blur-md transition-all duration-200"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Botón Central de Play/Pausa */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${isCardPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                  <div className="relative pointer-events-auto">
                    {/* Anillos de radar pulsantes (solo animados cuando está pausado) */}
                    {!isCardPlaying && (
                      <>
                        <div className="absolute -inset-4 rounded-full bg-[#e11d48]/30 animate-ping opacity-75" />
                        <div className="absolute -inset-8 rounded-full bg-[#6366f1]/20 animate-pulse-slow" />
                      </>
                    )}
                    
                    {/* Botón Circular Play/Pause */}
                    <button
                      onClick={toggleCardPlay}
                      aria-label={isCardPlaying ? "Pausar video" : "Reproducir video"}
                      className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#e11d48] to-[#6366f1] p-[2px] shadow-2xl transition-transform duration-300 hover:scale-110 focus:outline-none"
                    >
                      <div className="w-full h-full rounded-full bg-[#0a0a0a]/80 backdrop-blur-sm flex items-center justify-center hover:bg-[#e11d48] transition-colors">
                        {isCardPlaying ? (
                          <Pause className="w-8 h-8 text-white fill-white transition-transform" />
                        ) : (
                          <Play className="w-8 h-8 text-white fill-white ml-1 transition-transform" />
                        )}
                      </div>
                    </button>
                  </div>
                </div>

                {/* Bottom Overlay Info & Controles */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end">
                  <div className="flex items-center justify-between text-xs text-[#94a3b8] font-mono mb-1">
                    <span>SELECCIÓN 2026</span>
                    <span>02:14 MIN</span>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-rose-200 transition-colors">
                    The Art of Visual Rhythm
                  </h4>

                  {/* Barra de audio y controles rápidos */}
                  <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={toggleCardMute}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white backdrop-blur-md transition-colors"
                    >
                      {isCardMuted ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
                          <span className="font-mono text-[10px]">Sin sonido</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-[#e11d48]" />
                          <span className="font-mono text-[10px]">Con sonido</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenShowreel();
                      }}
                      className="text-xs font-mono text-rose-300 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Pantalla completa</span>
                      <Maximize2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Pie de tarjeta interactivo */}
              <div className="mt-3 px-3 py-1 flex items-center justify-between text-xs text-[#94a3b8]">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Sparkles className="w-3.5 h-3.5 text-[#e11d48]" />
                  {isCardPlaying ? 'Clic en la tarjeta para pausar' : 'Clic para reproducir directo'}
                </span>
                <span 
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenShowreel();
                  }}
                  className="text-[#e11d48] font-semibold hover:underline"
                >
                  Modal &rarr;
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
            Redes:
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
