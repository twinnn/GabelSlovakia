import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const YouthSection = () => {
  const [silverIdx, setSilverIdx] = useState(0);
  const [bronzeIdx, setBronzeIdx] = useState(0);

  const silverAthletes = [
    {
      name: "Martin Benko",
      specialty: "Giant Slalom Specialist",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      equipment: [
        { name: "SL-R", img: "https://picsum.photos/seed/gabel-slr/100/200" },
        { name: "GS-R", img: "https://picsum.photos/seed/gabel-gsr/100/200" }
      ]
    },
    {
      name: "Peter Kovac",
      specialty: "Downhill Prospect",
      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1974&auto=format&fit=crop",
      equipment: [
        { name: "GS-R", img: "https://picsum.photos/seed/gabel-gsr/100/200" },
        { name: "DH-R", img: "https://picsum.photos/seed/gabel-dhr/100/200" }
      ]
    },
    {
      name: "Lukas Molnar",
      specialty: "Super-G Talent",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop",
      equipment: [
        { name: "SL-R", img: "https://picsum.photos/seed/gabel-slr/100/200" },
        { name: "World Cup", img: "https://picsum.photos/seed/gabel-wc/100/200" }
      ]
    }
  ];

  const bronzeAthletes = [
    {
      name: "Sofia Novak",
      specialty: "Trail & Skyrunning",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      equipment: [
        { name: "Cobra Re-V", img: "https://picsum.photos/seed/gabel-cobra/100/200" }
      ]
    },
    {
      name: "Emma Horvath",
      specialty: "Nordic Walking Junior",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1974&auto=format&fit=crop",
      equipment: [
        { name: "N.C.S. Elite", img: "https://picsum.photos/seed/gabel-ncs/100/200" }
      ]
    },
    {
      name: "Nina Balazova",
      specialty: "Cross Country Talent",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1974&auto=format&fit=crop",
      equipment: [
        { name: "XC-R", img: "https://picsum.photos/seed/gabel-xcr/100/200" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSilverIdx(prev => (prev + 1) % silverAthletes.length);
      setBronzeIdx(prev => (prev + 1) % bronzeAthletes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [silverAthletes.length, bronzeAthletes.length]);

  return (
    <section id="gabel-for-youth" className="py-32 px-6 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm font-bold uppercase tracking-[0.4em] text-gabel-yellow mb-4 block">Next Generation Champions</span>
          <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tight mb-6 uppercase">GABEL FOR YOUTH</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg">
            Investing in the elite of tomorrow. Supporting the fastest young athletes with professional-grade Italian technology.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
          {/* Rank 2 - Silver Slider (Mid Size) */}
          <motion.div 
            whileHover={{ scale: 1.02, boxShadow: "0 25px 70px rgba(192,192,192,0.25)" }}
            className="w-full lg:w-1/4 bg-black/40 border-4 border-[#C0C0C0] p-8 rounded-sm order-2 lg:order-1 lg:mt-12 transition-shadow shadow-[0_10px_40px_rgba(192,192,192,0.1)] relative overflow-hidden h-[500px] flex flex-col justify-center"
          >
            <div className="text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={silverIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#C0C0C0] mb-6">
                    <img src={silverAthletes[silverIdx].img} alt={silverAthletes[silverIdx].name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{silverAthletes[silverIdx].name}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-gabel-yellow mb-6 block">{silverAthletes[silverIdx].specialty}</span>
                  
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4 block">Selected Equipment</span>
                    <div className="grid grid-cols-2 gap-4">
                      {silverAthletes[silverIdx].equipment.map(pole => (
                        <motion.a 
                          key={pole.name} 
                          href="https://go-noow.sk" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group/pole"
                          whileHover={{ y: -4 }}
                        >
                          <div className="aspect-[1/2] bg-white/5 rounded-sm mb-2 overflow-hidden flex items-center justify-center p-2 group-hover/pole:bg-white/10 transition-colors">
                            <img src={pole.img} alt={pole.name} className="h-full object-contain group-hover/pole:scale-110 transition-transform" referrerPolicy="no-referrer" />
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-tighter text-white/60 group-hover/pole:text-gabel-yellow transition-colors">{pole.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Slider Dots */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2">
              {silverAthletes.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setSilverIdx(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === silverIdx ? "bg-gabel-yellow w-4" : "bg-white/20"}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Rank 1 - Gold (Largest) */}
          <motion.div 
            whileHover={{ scale: 1.02, boxShadow: "0 25px 70px rgba(227,232,41,0.25)" }}
            className="w-full lg:w-1/3 bg-black border-4 border-gabel-yellow p-12 rounded-sm order-1 lg:order-2 z-10 shadow-[0_20px_60px_rgba(227,232,41,0.15)] transition-shadow h-[600px] flex flex-col justify-center"
          >
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gabel-yellow mb-8">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" alt="Athlete" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-3xl font-headline font-black mb-2">Jakub Varga</h3>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-gabel-yellow mb-8 block">Alpine Slalom U18 Champion</span>
              
              <div className="mt-10 pt-10 border-t border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6 block">Selected Equipment</span>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "SL-R", img: "https://picsum.photos/seed/gabel-slr/100/200" },
                    { name: "GS-R", img: "https://picsum.photos/seed/gabel-gsr/100/200" },
                    { name: "World Cup", img: "https://picsum.photos/seed/gabel-wc/100/200" }
                  ].map(pole => (
                    <motion.a 
                      key={pole.name} 
                      href="https://go-noow.sk" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group/pole"
                      whileHover={{ y: -4 }}
                    >
                      <div className="aspect-[1/2] bg-white/5 rounded-sm mb-2 overflow-hidden flex items-center justify-center p-2 group-hover/pole:bg-white/10 transition-colors">
                        <img src={pole.img} alt={pole.name} className="h-full object-contain group-hover/pole:scale-110 transition-transform" referrerPolicy="no-referrer" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-tighter text-white/60 group-hover/pole:text-gabel-yellow transition-colors">{pole.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rank 3 - Bronze Slider (Smallest) */}
          <motion.div 
            whileHover={{ scale: 1.02, boxShadow: "0 25px 70px rgba(205,127,50,0.25)" }}
            className="w-full lg:w-1/5 bg-black/40 border-4 border-[#CD7F32] p-6 rounded-sm order-3 lg:order-3 lg:mt-16 transition-shadow shadow-[0_10px_40px_rgba(205,127,50,0.1)] relative overflow-hidden h-[450px] flex flex-col justify-center"
          >
            <div className="text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={bronzeIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[#CD7F32] mb-6">
                    <img src={bronzeAthletes[bronzeIdx].img} alt={bronzeAthletes[bronzeIdx].name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{bronzeAthletes[bronzeIdx].name}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gabel-yellow mb-6 block leading-tight">{bronzeAthletes[bronzeIdx].specialty}</span>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4 block">Selected Equipment</span>
                    <div className="flex justify-center gap-2">
                      {bronzeAthletes[bronzeIdx].equipment.map(pole => (
                        <motion.a 
                          key={pole.name} 
                          href="https://go-noow.sk" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group/pole"
                          whileHover={{ y: -4 }}
                        >
                          <div className="w-16 h-24 bg-white/5 rounded-sm mb-2 overflow-hidden flex items-center justify-center p-2 group-hover/pole:bg-white/10 transition-colors">
                            <img src={pole.img} alt={pole.name} className="h-full object-contain group-hover/pole:scale-110 transition-transform" referrerPolicy="no-referrer" />
                          </div>
                          <span className="text-[8px] font-bold uppercase tracking-tighter text-white/60 group-hover/pole:text-gabel-yellow transition-colors">{pole.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2">
              {bronzeAthletes.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setBronzeIdx(i)}
                  className={`w-1 h-1 rounded-full transition-all ${i === bronzeIdx ? "bg-gabel-yellow w-3" : "bg-white/20"}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
