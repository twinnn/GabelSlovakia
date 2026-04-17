import React from "react";
import { motion } from "motion/react";

export const Technology = () => {
  const technologies = [
    {
      title: "Snake Carbon",
      desc: "Vysokomodulové karbónové vlákno s výraznou geometrickou štruktúrou. O 20 % ľahšie a o 18 % odolnejšie ako štandardný karbón.",
      icon: "💎"
    },
    {
      title: "Gate Power",
      desc: "Integrovaný váhový systém v rukoväti pre elitné slalomové preteky, zabezpečujúci vynikajúcu silu pri zrážaní bránok a rovnováhu.",
      icon: "⚡"
    },
    {
      title: "Monolock",
      desc: "Najnovšia evolúcia systémov Fast Lock. Minimalistický dizajn s o 20 % vyššou upínacou kapacitou pre úplnú bezpečnosť.",
      icon: "🔒"
    },
    {
      title: "Dual Spike Lite",
      desc: "Asymetrický dizajn hrotu vyvinutý s elitnými športovcami pre progresívny úchop na ľade, skale a v zmiešanom teréne.",
      icon: "🏔️"
    },
    {
      title: "Wired Tech",
      desc: "Inovatívny skladací systém využívajúci vnútorné laná s vysokou pevnosťou. Ultra kompaktný pre jednoduchý transport v akomkoľvek batohu.",
      icon: "🔗"
    },
    {
      title: "N.C.S.",
      desc: "Nordic Click System pre okamžité uvoľnenie pútka. Maximálna ergonómia a prenos sily pre Nordic Walking.",
      icon: "🖱️"
    }
  ];

  return (
    <section id="technology" className="py-32 px-6 bg-surface-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="section-subtitle">Talianska inovácia</span>
          <h2 className="text-5xl md:text-7xl section-heading mb-6">TECHNOLÓGIA</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg">
            Desaťročia výskumu a vývoja v biomechanike a materiálovom inžinierstve.
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
