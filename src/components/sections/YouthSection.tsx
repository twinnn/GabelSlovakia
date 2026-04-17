import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export const YouthSection = () => {
  return (
    <section id="youth" className="w-full bg-white/5 py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            alt="Gabel 4 Youth"
            className="h-32 md:h-40 w-auto mb-8 object-contain"
            src="/images/logos/Gabel4Youth.png"
            referrerPolicy="no-referrer"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg mb-8"
          >
            Investujeme do elity zajtrajška. Podporujeme mladé lyžiarské talenty profesionálnou talianskou technológiou.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-gabel-yellow text-gabel-yellow hover:bg-gabel-yellow hover:text-black transition-all font-label font-bold uppercase tracking-widest text-xs"
            href="/Gabel4Young/Gabel4Youth_Program.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pravidlá programu
            <ExternalLink className="size-4" />
          </motion.a>
        </div>

        <div className="space-y-12">
          {/* Gold Ranking - Tier 1 */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 80px -10px rgba(227,232,41,0.5)" }}
              className="w-full lg:w-1/2 bg-black border-2 border-gabel-yellow p-12 flex flex-col items-center text-center z-10 shadow-[0_0_40px_-15px_rgba(227,232,41,0.3)] group transition-all"
            >
              <div className="text-gabel-yellow font-headline font-black text-4xl mb-6 tracking-[0.2em] drop-shadow-[0_0_15px_rgba(227,232,41,0.5)]">
                GOLD
              </div>
              <h3 className="text-white text-5xl font-headline font-black mb-3 group-hover:text-gabel-yellow transition-colors italic">Jakub Varga</h3>
              <span className="text-white/40 font-label text-xs uppercase font-bold tracking-[0.3em]">
                Ski Club Bratislava
              </span>
            </motion.div>
          </div>

          {/* Silver Ranking - Tier 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Martin Benko", club: "Elite Team High Tatras" },
              { name: "Peter Kovac", club: "Aero Ski Team" }
            ].map((athlete, idx) => (
              <motion.div
                key={athlete.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 0 60px -10px rgba(192,192,192,0.4)" }}
                className="bg-white/5 border border-[#C0C0C0]/30 p-8 flex flex-col items-center text-center group transition-all hover:border-[#C0C0C0]/60"
              >
                <span className="text-[#C0C0C0] font-headline font-black text-2xl mb-4 tracking-[0.2em] group-hover:drop-shadow-[0_0_10px_rgba(192,192,192,0.5)]">
                  SILVER
                </span>
                <h3 className="text-white text-2xl font-headline font-bold mb-2">{athlete.name}</h3>
                <span className="text-white/40 font-label text-[10px] uppercase font-bold tracking-widest">
                  {athlete.club}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bronze Ranking - Tier 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sofia Novak", club: "Liptov Racing Group" },
              { name: "Emma Horvath", club: "Donovaly Junior" },
              { name: "Nina Balazova", club: "Vratna Ski Area" }
            ].map((athlete, idx) => (
              <motion.div
                key={athlete.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 0 60px -10px rgba(205,127,50,0.4)" }}
                className="bg-white/5 border border-[#CD7F32]/30 p-8 flex flex-col items-center text-center group transition-all hover:border-[#CD7F32]/60"
              >
                <span className="text-[#CD7F32] font-headline font-black text-xl mb-4 tracking-[0.2em] group-hover:drop-shadow-[0_0_10px_rgba(205,127,50,0.5)]">
                  BRONZE
                </span>
                <h3 className="text-white text-xl font-headline font-bold mb-1">{athlete.name}</h3>
                <span className="text-white/40 font-label text-[9px] uppercase font-bold tracking-wider">
                  {athlete.club}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
