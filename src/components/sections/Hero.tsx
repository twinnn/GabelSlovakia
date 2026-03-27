import React from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop" 
        alt="Skier" 
        className="w-full h-full object-cover scale-110 animate-slow-zoom"
        referrerPolicy="no-referrer"
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
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/90">Official Distributor SK & CZ</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-headline font-black leading-[0.9] tracking-tight mb-8">
          WINTER <br />
          <span className="text-gabel-yellow">26/27.</span> <br />
          ITALIAN <br />
          MASTERY.
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
          Discover the new 2026/2027 collection. World-class poles for Snow, Trekking, Nordic Walking, and Trail Running. Precision engineered in Italy since 1956.
        </p>

        <div className="flex flex-wrap gap-4">
          <a 
            href="#segments"
            className="bg-gabel-yellow text-black px-10 py-5 rounded-sm font-headline font-black uppercase tracking-widest hover:scale-105 hover:brightness-110 transition-all shadow-[0_0_40px_rgba(227,232,41,0.5)] border-b-4 border-black/10 active:border-b-0 active:translate-y-1 flex items-center justify-center"
          >
            Latest 2024 Catalogue
          </a>
          <a 
            href="#segments"
            className="border-2 border-white/20 hover:border-white hover:bg-white/5 text-white px-10 py-5 rounded-sm font-headline font-black uppercase tracking-widest transition-all flex items-center justify-center"
          >
            Explore Technology
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
