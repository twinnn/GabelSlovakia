import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export const Segments = () => {
  const segments = [
    { 
      title: "SNOW WINTER", 
      label: "2026 / 2027 Collection", 
      img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop",
      link: "Snow Catalogue",
      pdf: "/catalogues/snow_winter_26_27.pdf"
    },
    { 
      title: "TREKKING", 
      label: "Summer 2026", 
      img: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
      link: "Trekking Catalogue",
      pdf: "/catalogues/trekking_summer_26.pdf"
    },
    { 
      title: "TRAIL RUNNING", 
      label: "Summer 2026", 
      img: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=2070&auto=format&fit=crop",
      link: "Trail Catalogue",
      pdf: "/catalogues/trail_running_summer_26.pdf"
    },
    { 
      title: "NORDIC WALKING", 
      label: "Summer 2026", 
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      link: "Nordic Catalogue",
      pdf: "/catalogues/nordic_walking_summer_26.pdf"
    }
  ];

  return (
    <section id="segments" className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-headline font-black tracking-tight mb-4">
              PRODUCT <br />
              <span className="relative inline-block">
                SEGMENTS
                <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-gabel-yellow" />
              </span>
            </h2>
          </div>
          <p className="max-w-md text-black/60 text-lg">
            Explore our specialized product lines. Click on any segment to view the full Italian engineering catalogue in PDF.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {segments.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gabel-yellow group-hover:text-black mb-2 block transition-colors">
                  {item.label}
                </span>
                <h3 className="text-2xl font-headline font-bold mb-4 text-white group-hover:text-black transition-colors">{item.title}</h3>
                <a 
                  href={item.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-black transition-colors"
                >
                  {item.link} <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
