import { motion } from "motion/react";
import { PROCESS_TIMELINE } from "../data/agencyData";
import { Play, Sparkles, Check, ChevronRight } from "lucide-react";

export default function ProcessTimeline() {
  return (
    <section id="process-timeline-section" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Visual glowing meshes */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-highlight bg-white/5 px-3 py-1 rounded-full border border-white/10">
            OUR DEPLOYMENT ROADMAP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Choreographed to Perfection
          </h2>
          <p className="text-slate-400 font-sans font-light text-base sm:text-lg">
            We operate with surgical precision. Here is the structured step-by-step timeline we implement to transform your digital asset into a sales machine.
          </p>
        </div>

        {/* Timeline representation */}
        <div className="relative mt-16">
          
          {/* Glowing vertical connector line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-secondary via-brand-accent to-brand-highlight -translate-x-1/2 z-0 opacity-40" />

          {/* Steps Loop */}
          <div className="space-y-12 relative z-10">
            {PROCESS_TIMELINE.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.id}
                  id={`process-step-${step.id}`}
                  className={`flex flex-col md:flex-row items-stretch md:justify-between ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Spacer for Desktop */}
                  <div className="hidden md:block w-5/12" />

                  {/* Bullet center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-9 h-9 rounded-full bg-slate-950 border-2 border-brand-secondary flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-110">
                      <span className="text-xs font-mono font-bold text-brand-highlight">{step.phase}</span>
                    </div>
                  </div>

                  {/* Step Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                    className="w-11/12 md:w-5/12 pl-10 md:pl-0 text-left"
                  >
                    <div className="bg-slate-950 border border-white/5 p-6 sm:p-8 rounded-2xl hover:border-brand-secondary/35 transition-all duration-300 shadow-xl relative">
                      {/* Floating duration tag */}
                      <span className="absolute top-4 right-4 bg-white/5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                        {step.duration}
                      </span>

                      <div className="space-y-3">
                        <span className="text-[10px] text-brand-secondary font-mono tracking-widest uppercase font-bold block">
                          STAGE {step.id}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                          {step.title}
                        </h3>
                        <p className="text-slate-400 text-sm font-sans font-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
