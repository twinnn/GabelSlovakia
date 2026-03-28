import React from "react";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tight mb-8">GET IN <br /><span className="text-gabel-yellow">TOUCH</span></h2>
            <p className="text-xl text-black/60 mb-12 leading-relaxed">
              Interested in Gabel equipment or partnership? Our team is ready to provide expert advice on the best Italian gear for your needs.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-gabel-yellow" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Email Us</h4>
                  <p className="text-lg font-medium">info@gabelpalice.sk</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-gabel-yellow" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Official Gabel Distributor</h4>
                  <p className="text-black/60">Slovakia & Czech Republic</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-black/5 rounded-sm border border-black/5">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-gabel-yellow" />
                Why choose Gabel?
              </h4>
              <ul className="grid grid-cols-2 gap-4 text-sm text-black/70">
                <li>• 100% Made in Italy</li>
                <li>• Elite Racing Grade</li>
                <li>• Biomechanical Precision</li>
                <li>• Sustainable Production</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-black p-10 md:p-16 rounded-sm text-white shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:border-gabel-yellow outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:border-gabel-yellow outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Interested In</label>
                <select className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:border-gabel-yellow outline-none transition-colors appearance-none">
                  <option className="bg-black">Snow Winter Collection</option>
                  <option className="bg-black">Trekking & Outdoor</option>
                  <option className="bg-black">Nordic Walking</option>
                  <option className="bg-black">Partnership Inquiry</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:border-gabel-yellow outline-none transition-colors resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>
              
              <button className="w-full bg-gabel-yellow text-black font-bold uppercase tracking-[0.2em] py-5 rounded-sm hover:bg-white transition-all duration-300 shadow-lg shadow-gabel-yellow/10">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
