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
  const [isVertical, setIsVertical] = useState(false);

  const handleCardVideoMetadata = (e) => {
    const { videoWidth, videoHeight } = e.target;
    if (videoWidth && videoHeight) {
      setIsVertical(videoHeight > videoWidth);
    }
  };

  // Specialties to cycle dynamically
  const roles = [
    'POST-PRODUCER',
    'FILMMAKER'
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
      let currentRoleIndex = 1;
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

  return (
    <section 
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center pt-28 pb-16 px-1 sm:px-6 lg:px-12 overflow-hidden bg-[#0a0a0a]"
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

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Main Headline */}
            <h1 className="hero-anim-item text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              <span className="block text-white">
                Filmmaker &
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-[#e11d48]">
                Editor audiovisual
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
                  POST-PRODUCER
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
              className={`hero-reel-card relative w-full ${
                isVertical ? 'max-w-xs sm:max-w-sm' : 'max-w-xl'
              } rounded-3xl p-3.5 bg-[#14141a] border border-white/15 shadow-2xl group transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-2 hover:border-[#e11d48]/60 hover:shadow-2xl hover:shadow-rose-950/40 cursor-pointer !opacity-100`}
              onClick={onOpenShowreel}
            >
              {/* Card Media Container */}
              <div className={`relative ${
                isVertical ? 'aspect-[9/16]' : 'aspect-video'
              } w-full rounded-2xl overflow-hidden bg-black transition-all duration-500`}>
                
                {/* Video HTML5 (Thumbnail / Preview no reproducible directamente) */}
                <video
                  ref={cardVideoRef}
                  src={SHOWREEL_VIDEO_URL}
                  poster={SHOWREEL_POSTER_URL}
                  playsInline
                  muted
                  preload="metadata"
                  onLoadedMetadata={handleCardVideoMetadata}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                />

                {/* Film Frame Texture & Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none transition-opacity duration-300 group-hover:opacity-60" />

                {/* Top Right: Botón para abrir modal a pantalla completa */}
                <div
                  title="Abrir en pantalla completa (Modal)"
                  className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-black/60 group-hover:bg-[#e11d48] border border-white/15 text-white backdrop-blur-md transition-all duration-200"
                >
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Botón Central de Play (Abre el Modal) */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
                  <div className="relative pointer-events-auto">
                    {/* Anillos de radar pulsantes */}
                    <div className="absolute -inset-4 rounded-full bg-[#e11d48]/30 animate-ping opacity-75" />
                    <div className="absolute -inset-8 rounded-full bg-[#6366f1]/20 animate-pulse-slow" />
                    
                    {/* Botón Circular Play */}
                    <div
                      aria-label="Abrir Showreel"
                      className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#e11d48] to-[#6366f1] p-[2px] shadow-2xl transition-transform duration-300 group-hover:scale-110"
                    >
                      <div className="w-full h-full rounded-full bg-[#0a0a0a]/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#e11d48] transition-colors">
                        <Play className="w-8 h-8 text-white fill-white ml-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end pointer-events-none">
                  <h4 className="text-lg font-bold text-white group-hover:text-rose-200 transition-colors">
                    The Art of Visual Rhythm
                  </h4>
                  <p className="text-xs text-[#94a3b8] font-mono mt-0.5">
                    Click para reproducir en pantalla completa
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
