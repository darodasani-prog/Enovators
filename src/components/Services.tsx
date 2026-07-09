import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as LucideIcons from "lucide-react";
import { SERVICES_DATA } from "../data/agencyData";
import { Service } from "../types";

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

export default function Services({ setCurrentPage }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Dynamic Lucide icon resolver
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (!IconComponent) return <LucideIcons.HelpCircle className="w-6 h-6 text-brand-secondary" />;
    return <IconComponent className="w-6 h-6 text-brand-secondary group-hover:text-white transition-colors duration-300" />;
  };

  return (
    <section id="services-section" className="py-24 bg-slate-50 relative overflow-hidden grid-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-secondary bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            OUR SPECIALIZATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Comprehensive Digital Mastery
          </h2>
          <p className="text-slate-500 font-sans font-light text-base sm:text-lg">
            We don't just build pages. We curate high-end digital products that establish brand authority and systematically convert passive visitors into paying customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-brand-secondary hover:shadow-xl hover:shadow-brand-secondary/5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="space-y-4 relative z-10">
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-brand-secondary flex items-center justify-center transition-all duration-300 shadow-sm">
                  {renderIcon(service.iconName)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-secondary transition-colors duration-200 font-display">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed font-sans font-light">
                  {service.description}
                </p>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-50 relative z-10 flex items-center justify-between">
                <button
                  id={`learn-more-service-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-mono font-bold tracking-wide text-brand-secondary hover:text-brand-accent flex items-center space-x-1 cursor-pointer group/btn"
                >
                  <span>LEARN MORE</span>
                  <LucideIcons.ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Slides/Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Backdrop */}
            <motion.div
              id="service-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Slide Drawer */}
            <motion.div
              id="service-modal-content"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md h-full bg-slate-950 border-l border-white/10 p-8 shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              {/* Top Details */}
              <div className="space-y-8">
                {/* Close trigger */}
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-brand-highlight tracking-widest uppercase">CAPABILITY IN-DEPTH</span>
                  <button
                    id="close-service-modal"
                    onClick={() => setSelectedService(null)}
                    className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  >
                    <LucideIcons.X className="w-5 h-5" />
                  </button>
                </div>

                {/* Service Header */}
                <div className="space-y-3">
                  <div className="inline-flex p-3 bg-blue-500/15 rounded-xl border border-blue-500/20 text-brand-highlight">
                    {(() => {
                      const IconComp = (LucideIcons as any)[selectedService.iconName];
                      return IconComp ? <IconComp className="w-6 h-6" /> : <LucideIcons.HelpCircle className="w-6 h-6" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    {selectedService.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-sans font-light leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                {/* Checklist Features */}
                <div className="space-y-4">
                  <h4 className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
                    Key Features & Delivery Items
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.details.map((detail, index) => (
                      <li key={index} className="flex items-start space-x-3 text-sm text-slate-300">
                        <LucideIcons.CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="pt-8 mt-8 border-t border-white/5 space-y-3">
                <button
                  id="modal-service-cta-book"
                  onClick={() => {
                    setSelectedService(null);
                    setCurrentPage("book-consultation");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-highlight text-white text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer text-center flex items-center justify-center space-x-2"
                >
                  <span>{selectedService.ctaText.toUpperCase()}</span>
                  <LucideIcons.ArrowRight className="w-4 h-4" />
                </button>
                <button
                  id="modal-service-cta-close"
                  onClick={() => setSelectedService(null)}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs font-mono tracking-wider transition-colors"
                >
                  GO BACK TO SERVICES
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
