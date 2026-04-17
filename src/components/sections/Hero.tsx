import React from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <video
        src="https://www.gabelsport.com/wp-content/themes/gabel/video/test.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
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

        <h1 className="text-5xl md:text-8xl section-heading leading-[0.9] mb-8">
          ZIMA <br />
          <span className="text-gabel-yellow">26/27.</span> <br />
          TALIANSKE <br />
          MAJSTROVSTVO.
        </h1>


        <div className="flex flex-wrap gap-4">
          <a
            href="#catalogues"
            className="btn-primary px-10 py-5 hover:scale-105 shadow-glow-yellow border-b-4 border-black/10 active:border-b-0 active:translate-y-1 flex items-center justify-center"
          >
            Najnovšie katalógy
          </a>
          <a
            href="#technology"
            className="border-2 border-white/20 hover:border-white hover:bg-white/5 text-white px-10 py-5 rounded-sm font-headline font-black uppercase tracking-widest transition-all flex items-center justify-center"
          >
            Objavte technológie
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
