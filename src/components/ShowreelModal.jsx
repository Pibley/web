import React, { useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShowreelModal({ isOpen, onClose }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-2xl"
          onClick={onClose}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-[#0f0f14] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-rose-950/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/10 bg-[#14141c]/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e11d48] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e11d48]"></span>
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-wide flex items-center gap-2">
                    SHOWREEL 2026 • DIRECTING & COLOR GRADING
                  </h3>
                  <p className="text-xs text-[#94a3b8] font-mono">
                    DaVinci Resolve Studio • ARRI LogC3 / RED IPP2 • Master 4K DCI
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Cerrar modal"
                className="p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-[#e11d48] text-white transition-all duration-200 group focus:outline-none"
              >
                <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
              </button>
            </div>

            {/* Video Player Box */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center group overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1600&q=80"
              >
                {/* Free high quality cinematic video source */}
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
                  type="video/mp4"
                />
                Tu navegador no soporta videos HTML5.
              </video>

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Custom Overlay Controls */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-[#e11d48] text-white backdrop-blur-md transition-all"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-all"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>

                  <div className="text-xs text-white/80 font-mono hidden sm:block">
                    01:42 / 02:14
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider bg-[#e11d48]/80 text-white uppercase">
                    HDR 10-BIT
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-300 bg-white/10 uppercase">
                    24 FPS
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer Specs */}
            <div className="p-4 sm:p-6 bg-[#0c0c10] border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-[#94a3b8]">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <Film className="w-4 h-4 text-[#e11d48]" />
                  <span>Cámaras: ARRI Alexa Mini LF / RED V-Raptor 8K</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <Award className="w-4 h-4 text-[#6366f1]" />
                  <span>Ópticas: Cooke Anamorphic / Leica Summicron-C</span>
                </div>
              </div>

              <a
                href="#contacto"
                onClick={onClose}
                className="inline-flex items-center gap-1 text-[#f8fafc] hover:text-[#e11d48] font-semibold transition-colors"
              >
                Solicitar reel completo en ProRes / PDF Pitch Deck &rarr;
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
