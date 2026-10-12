import React, { useEffect, useRef, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SHOWREEL_VIDEO_URL, SHOWREEL_POSTER_URL } from './Hero';

export default function ShowreelModal({ isOpen, onClose }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isVertical, setIsVertical] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setIsPlaying(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleLoadedMetadata = (e) => {
    const { videoWidth, videoHeight, duration: vidDuration } = e.target;
    if (videoWidth && videoHeight) {
      setIsVertical(videoHeight > videoWidth);
    }
    if (vidDuration) {
      setDuration(vidDuration);
    }
  };

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

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || !timeInSeconds) return '00:00';
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
            className={`relative w-full ${
              isVertical 
                ? 'max-w-sm sm:max-w-md max-h-[92vh]' 
                : 'max-w-5xl'
            } bg-[#0f0f14] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-rose-950/40 flex flex-col`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 border-b border-white/10 bg-[#14141c]/80 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e11d48] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e11d48]"></span>
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-wide flex items-center gap-2">
                    Video de muestra
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Cerrar modal"
                className="p-2 rounded-full bg-white/5 hover:bg-[#e11d48] text-white transition-all duration-200 group focus:outline-none"
              >
                <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
              </button>
            </div>

            {/* Video Player Box */}
            <div className={`relative ${
              isVertical 
                ? 'aspect-[9/16] max-h-[75vh]' 
                : 'aspect-video'
            } w-full bg-black flex items-center justify-center group overflow-hidden`}>
              <video
                ref={videoRef}
                autoPlay
                loop
                playsInline
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                className="w-full h-full object-contain"
                poster={SHOWREEL_POSTER_URL}
              >
                <source
                  src={SHOWREEL_VIDEO_URL}
                  type="video/mp4"
                />
                Tu navegador no soporta videos HTML5.
              </video>

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Custom Overlay Controls */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-2 sm:p-2.5 rounded-full bg-white/20 hover:bg-[#e11d48] text-white backdrop-blur-md transition-all"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2 sm:p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-all"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>

                  <div className="text-xs text-white/80 font-mono">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
