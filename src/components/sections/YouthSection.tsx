import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { loadAthletes, type Athlete, type Equipment } from "../../services/athleteService";

const { gold, silver, bronze, shopUrl } = loadAthletes();

const EquipmentLink = ({ pole }: { key?: string; pole: Equipment }) => (
  <motion.a
    href={shopUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group/pole min-h-0 relative"
    whileHover={{ y: -4 }}
    title={pole.name}
  >
    <div className="h-[calc(100%-1.25rem)] bg-white/5 rounded-sm overflow-hidden flex items-center justify-center p-1.5 group-hover/pole:bg-white/10 transition-colors">
      <img
        src={pole.img}
        alt={pole.name}
        className="max-h-full max-w-full object-contain group-hover/pole:scale-105 transition-transform"
        referrerPolicy="no-referrer"
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden"); }}
      />
      <span className="hidden text-[10px] font-bold uppercase tracking-wider text-white/60 text-center">{pole.name}</span>
    </div>
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 bg-black/90 text-[9px] font-bold uppercase tracking-wider text-white/80 rounded whitespace-nowrap opacity-0 group-hover/pole:opacity-100 transition-opacity pointer-events-none">
      {pole.name}
    </span>
  </motion.a>
);

interface CarouselProps {
  athletes: Athlete[];
  currentIdx: number;
  onDotClick: (idx: number) => void;
  onPause: () => void;
  onResume: () => void;
  borderColor: string;
  className: string;
  imageSize: string;
  nameClass: string;
  specialtyClass: string;
  equipmentCols: string;
}

const AthleteCarousel = ({
  athletes, currentIdx, onDotClick, onPause, onResume,
  borderColor, className, imageSize, nameClass, specialtyClass, equipmentCols,
}: CarouselProps) => {
  const athlete = athletes[currentIdx];
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: `0 0 60px ${borderColor}, 0 25px 70px ${borderColor}` }}
      onMouseEnter={onPause}
      onMouseLeave={onResume}
      className={className}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col h-full"
        >
          {/* 30% — photo */}
          <div className="h-[30%] flex items-center justify-center shrink-0">
            <div className={`${imageSize} rounded-full overflow-hidden border-4 shrink-0`} style={{ borderColor }}>
              <img src={athlete.img} alt={athlete.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* 20% — name & specialty */}
          <div className="h-[20%] flex flex-col items-center justify-center text-center shrink-0 px-2">
            <h3 className={`${nameClass} font-bold mb-1`}>{athlete.name}</h3>
            <span className={`${specialtyClass} font-bold uppercase tracking-widest text-gabel-yellow block`}>{athlete.specialty}</span>
          </div>

          {/* 50% — equipment (contained, no overflow) */}
          <div className="h-[50%] border-t border-white/10 p-4 overflow-hidden min-h-0">
            <div className={`${equipmentCols} h-full`}>
              {athlete.equipment.map(pole => (
                <EquipmentLink key={pole.name} pole={pole} />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider dots */}
      <div className="absolute bottom-3 left-0 w-full flex justify-center gap-2">
        {athletes.map((_, i) => (
          <button
            key={i}
            onClick={() => onDotClick(i)}
            className={`rounded-full transition-all ${i === currentIdx ? "bg-gabel-yellow w-4 h-1.5" : "bg-white/20 w-1.5 h-1.5"}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const YouthSection = () => {
  const [silverIdx, setSilverIdx] = useState(0);
  const [bronzeIdx, setBronzeIdx] = useState(0);
  const [silverPaused, setSilverPaused] = useState(false);
  const [bronzePaused, setBronzePaused] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!silverPaused) setSilverIdx(prev => (prev + 1) % silver.length);
      if (!bronzePaused) setBronzeIdx(prev => (prev + 1) % bronze.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [silverPaused, bronzePaused]);

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

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_0.8fr] gap-10 items-end">
          {/* Rank 2 - Silver */}
          <AthleteCarousel
            athletes={silver}
            currentIdx={silverIdx}
            onDotClick={setSilverIdx}
            onPause={() => setSilverPaused(true)}
            onResume={() => setSilverPaused(false)}
            borderColor="rgb(192,192,192)"
            className="bg-black/40 border-4 border-[#C0C0C0] p-6 pb-10 rounded-sm transition-shadow shadow-[0_20px_60px_rgba(192,192,192,0.15)] relative overflow-hidden h-[460px] order-2 lg:order-1"
            imageSize="w-28 h-28"
            nameClass="text-xl"
            specialtyClass="text-xs"
            equipmentCols="grid grid-cols-2 gap-3"
          />

          {/* Rank 1 - Gold (static) */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 0 60px rgba(227,232,41,1), 0 25px 70px rgba(227,232,41,1)" }}
            className="bg-black border-4 border-gabel-yellow p-8 rounded-sm z-10 shadow-[0_20px_60px_rgba(227,232,41,0.15)] transition-shadow h-[540px] overflow-hidden order-1 lg:order-2"
          >
            <div className="flex flex-col h-full">
              {/* 30% — photo */}
              <div className="h-[30%] flex items-center justify-center shrink-0">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gabel-yellow shrink-0">
                  <img src={gold.img} alt={gold.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>

              {/* 20% — name & specialty */}
              <div className="h-[20%] flex flex-col items-center justify-center text-center shrink-0">
                <h3 className="text-3xl font-headline font-black mb-2">{gold.name}</h3>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-gabel-yellow block">{gold.specialty}</span>
              </div>

              {/* 50% — equipment (contained) */}
              <div className="h-[50%] border-t border-white/10 p-4 overflow-hidden min-h-0">
                <div className="grid grid-cols-3 gap-3 h-full">
                  {gold.equipment.map(pole => (
                    <EquipmentLink key={pole.name} pole={pole} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rank 3 - Bronze */}
          <AthleteCarousel
            athletes={bronze}
            currentIdx={bronzeIdx}
            onDotClick={setBronzeIdx}
            onPause={() => setBronzePaused(true)}
            onResume={() => setBronzePaused(false)}
            borderColor="rgb(205,127,50)"
            className="bg-black/40 border-4 border-[#CD7F32] p-6 pb-10 rounded-sm transition-shadow shadow-[0_20px_60px_rgba(205,127,50,0.15)] relative overflow-hidden h-[420px] order-3"
            imageSize="w-24 h-24"
            nameClass="text-lg"
            specialtyClass="text-[10px] leading-tight"
            equipmentCols="flex justify-center gap-3"
          />
        </div>
      </div>
    </section>
  );
};
