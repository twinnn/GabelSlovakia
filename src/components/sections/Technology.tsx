import React from "react";
import { motion } from "motion/react";

export const Technology = () => {
  const technologies = [
    {
      title: "Snake Carbon",
      desc: "High modulus carbon fiber with distinctive geometric structure. 20% lighter and 18% more resistant than standard carbon.",
      icon: "💎"
    },
    {
      title: "Gate Power",
      desc: "Integrated weight system in the grip for elite slalom racing, providing superior gate knock-down power and balance.",
      icon: "⚡"
    },
    {
      title: "Monolock",
      desc: "The latest evolution of Fast Lock systems. Minimalist design with 20% increased clamping capacity for total security.",
      icon: "🔒"
    },
    {
      title: "Dual Spike Lite",
      desc: "Asymmetrical tip design developed with elite athletes for progressive grip on ice, rock, and mixed terrain.",
      icon: "🏔️"
    },
    {
      title: "Wired Tech",
      desc: "Innovative folding system using high-strength internal cables. Ultra-compact for easy transport in any backpack.",
      icon: "🔗"
    },
    {
      title: "N.C.S.",
      desc: "Nordic Click System for instantaneous strap release. Maximum ergonomics and power transfer for Nordic Walking.",
      icon: "🖱️"
    }
  ];

  return (
    <section id="technology" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm font-bold uppercase tracking-[0.4em] text-gabel-yellow mb-4 block">Italian Innovation</span>
          <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tight mb-6">TECHNOLOGY</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg">
            Decades of research and development in biomechanics and materials science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, idx) => (
            <motion.div 
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-white/5 border border-white/10 rounded-sm hover:border-gabel-yellow/50 transition-colors group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{tech.icon}</div>
              <h3 className="text-2xl font-headline font-black mb-4 group-hover:text-gabel-yellow transition-colors">{tech.title}</h3>
              <p className="text-white/50 leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
