import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles, Star, Users, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Enovatos is modeled as operating in Europe/London or US/Eastern
      const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      });
      setTimeStr(formatter.format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero-section" className="relative min-h-screen bg-slate-950 flex items-center pt-28 pb-20 overflow-hidden grid-bg">
      {/* Blurred background glowing shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-brand-accent/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-brand-highlight/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-brand-highlight animate-spin-slow" />
              <span className="text-xs text-slate-300 font-mono tracking-wider font-semibold">
                AWWWARDS-WINNING DESIGN CHOREOGRAPHY
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-white leading-[1.1] tracking-tight"
              >
                Websites That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-highlight via-brand-secondary to-brand-accent">Turn Visitors</span> Into Customers.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-400 font-sans font-light max-w-xl leading-relaxed"
              >
                Enovatos designs and engineers custom, blazing-fast, and highly aesthetic digital assets that elevate your brand and systematically maximize sales conversions.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                id="hero-view-portfolio-btn"
                onClick={() => {
                  setCurrentPage("portfolio");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="relative overflow-hidden group flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-secondary to-brand-accent text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-brand-secondary/20 hover:shadow-brand-highlight/30 hover:scale-102 transition-all duration-300 cursor-pointer"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-book-consultation-btn"
                onClick={() => {
                  setCurrentPage("book-consultation");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <span>Book Free Consultation</span>
              </button>
            </motion.div>

            {/* Trust and status badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2.5">
                  <img className="w-8 h-8 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" alt="Client 1" referrerPolicy="no-referrer" />
                  <img className="w-8 h-8 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" alt="Client 2" referrerPolicy="no-referrer" />
                  <img className="w-8 h-8 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80" alt="Client 3" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 mt-0.5">Trusted by 120+ Founders</span>
                </div>
              </div>

              {/* Live Operating Status */}
              <div className="flex flex-col justify-center border-l border-white/5 pl-0 sm:pl-6">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-mono tracking-wide">STUDIO ONLINE & ACCEPTING PROJECTS</span>
                </div>
                <div className="text-xs text-slate-500 font-mono mt-1">
                  HQ Time: <span className="text-slate-300 font-medium">{timeStr || "09:30:00 AM PST"}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Floating 3D Mockup */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0 flex justify-center items-center">
            
            {/* Visual Frame wrapper with Perspective */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] [perspective:1000px]">
              
              {/* Back card - Aura Web Store Preview */}
              <motion.div
                initial={{ opacity: 0, rotateY: 15, rotateX: 10, y: 40, x: -20 }}
                animate={{ opacity: 1, rotateY: -15, rotateX: 10, y: 0, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="absolute top-[10%] left-[5%] w-[85%] aspect-[1.4] bg-slate-900 rounded-2xl shadow-2xl border border-white/10 overflow-hidden animate-float cursor-pointer group"
                onClick={() => setCurrentPage("portfolio")}
              >
                <div className="flex items-center justify-between px-4 py-2 bg-slate-950 border-b border-white/5">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">aura-wearables.com</span>
                  <div className="w-3.5 h-3.5" />
                </div>
                <div className="relative h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1613987549866-256801a5b67a?auto=format&fit=crop&w=500&q=80')` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-4">
                    <div className="text-left">
                      <span className="text-[8px] font-mono uppercase bg-cyan-400/20 text-cyan-400 px-1.5 py-0.5 rounded">E-commerce</span>
                      <h4 className="text-xs font-bold text-white mt-1">Aura Biometric Rings</h4>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Middle card - Zenith Enterprise SaaS */}
              <motion.div
                initial={{ opacity: 0, rotateY: 20, y: 100, x: 20 }}
                animate={{ opacity: 1, rotateY: -10, rotateX: 5, y: 70, x: 20 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                className="absolute top-[35%] left-[10%] w-[85%] aspect-[1.4] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden cursor-pointer group"
                onClick={() => setCurrentPage("portfolio")}
              >
                <div className="flex items-center justify-between px-4 py-2 bg-slate-50 border-b border-slate-200">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">zenith-crm.io</span>
                  <div className="w-3.5 h-3.5" />
                </div>
                <div className="relative h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80')` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end p-4">
                    <div className="text-left">
                      <span className="text-[8px] font-mono uppercase bg-blue-600/20 text-blue-400 px-1.5 py-0.5 rounded">Dashboard UI</span>
                      <h4 className="text-xs font-bold text-white mt-1">Zenith CRM Marketing Platform</h4>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Front Mobile Phone Mockup Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 120, rotateZ: -10 }}
                animate={{ opacity: 1, y: 120, rotateZ: 5, x: 120 }}
                transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
                className="absolute top-[15%] left-0 w-[45%] aspect-[9/19] bg-slate-950 rounded-[30px] p-2 shadow-2xl border-4 border-slate-800 overflow-hidden cursor-pointer hidden sm:block"
                onClick={() => setCurrentPage("portfolio")}
              >
                {/* Speaker notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                  <span className="w-6 h-1 bg-slate-800 rounded-full" />
                </div>
                <div className="relative h-full rounded-[22px] overflow-hidden bg-slate-900">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=300&q=80')` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-3 text-left">
                      <span className="text-[6px] font-mono uppercase bg-purple-500/30 text-purple-300 px-1.5 py-0.5 rounded self-start">Mobile UI</span>
                      <h5 className="text-[9px] font-bold text-white mt-0.5 leading-tight">100% Fluid Adaptive Layouts</h5>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* 2. Trusted By - Infinite Logo Carousel */}
        <div id="trusted-by-logos" className="mt-24 pt-8 border-t border-white/5 space-y-4">
          <p className="text-center text-[10px] font-mono tracking-widest text-slate-500 uppercase">
            TRUSTED BY DISRUPTIVE FOUNDERS & ENTERPRISE HUBS
          </p>
          <div className="relative w-full overflow-hidden py-4 select-none">
            {/* Soft gradient fade overlays on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
            
            <div className="flex w-[200%] animate-carousel items-center space-x-12 shrink-0">
              {/* Loop 1 */}
              <div className="flex justify-around items-center w-1/2 shrink-0 space-x-8 text-slate-500 font-display font-extrabold text-xs sm:text-sm tracking-widest">
                <span className="hover:text-white transition-colors">&bull; VELO ELECTRIC</span>
                <span className="hover:text-white transition-colors">&bull; MIRAGE AI</span>
                <span className="hover:text-white transition-colors">&bull; HELIX RETAIL</span>
                <span className="hover:text-white transition-colors">&bull; VERTEX LOGISTICS</span>
                <span className="hover:text-white transition-colors">&bull; APEX GROUP</span>
                <span className="hover:text-white transition-colors">&bull; ZENITH CRM</span>
              </div>
              {/* Duplicate Loop 2 for seamless scrolling */}
              <div className="flex justify-around items-center w-1/2 shrink-0 space-x-8 text-slate-500 font-display font-extrabold text-xs sm:text-sm tracking-widest">
                <span className="hover:text-white transition-colors">&bull; VELO ELECTRIC</span>
                <span className="hover:text-white transition-colors">&bull; MIRAGE AI</span>
                <span className="hover:text-white transition-colors">&bull; HELIX RETAIL</span>
                <span className="hover:text-white transition-colors">&bull; VERTEX LOGISTICS</span>
                <span className="hover:text-white transition-colors">&bull; APEX GROUP</span>
                <span className="hover:text-white transition-colors">&bull; ZENITH CRM</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
