import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const POSTER = "/video/hero-poster.webp";

// Show only the poster when the visitor asked to save data or reduce motion.
function useShouldPlayVideo() {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPlay(!saveData && !reducedMotion);
  }, []);
  return play;
}

export const Hero = () => {
  const playVideo = useShouldPlayVideo();

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        {playVideo ? (
          <video
            poster={POSTER}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="w-full h-full object-cover"
          >
            <source src="/video/hero-540.mp4" type="video/mp4" media="(max-width: 767px)" />
            <source src="/video/hero-720.webm" type="video/webm" />
            <source src="/video/hero-720.mp4" type="video/mp4" />
          </video>
        ) : (
          <img src={POSTER} alt="" className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-8">
            <CheckCircle2 className="w-4 h-4 text-gabel-yellow" />
            <span className="text-[10px] uppercase font-bold tracking-label text-white/90">Oficiálny distribútor SK & CZ</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-black tracking-tight uppercase leading-[1.05] mb-6">
            Talianske palice Gabel.{" "}
            <span className="text-gabel-yellow">Oficiálne na Slovensku.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10">
            Nordic walking, treking, trail running a lyžovanie.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#catalogues"
              className="btn-primary px-10 py-5 hover:scale-105 shadow-glow-yellow border-b-4 border-black/10 active:border-b-0 active:translate-y-1 flex items-center justify-center"
            >
              Najnovšie katalógy
            </a>
            <a
              href="#gabel-for-youth"
              className="border-2 border-white/20 hover:border-white hover:bg-white/5 text-white px-10 py-5 rounded-sm font-headline font-black uppercase tracking-widest transition-all flex items-center justify-center"
            >
              Gabel pre mládež
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
