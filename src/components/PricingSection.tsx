import { useState } from "react";
import { motion } from "motion/react";
import { Check, X, ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import { PRICING_PLANS } from "../data/agencyData";

interface PricingSectionProps {
  setCurrentPage: (page: string) => void;
}

export default function PricingSection({ setCurrentPage }: PricingSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSelectPlan = (planName: string) => {
    // Navigate to book-consultation and store the requested plan in sessionStorage
    sessionStorage.setItem("requestedPlan", planName);
    setCurrentPage("book-consultation");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="pricing-section" className="py-24 bg-white relative overflow-hidden grid-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-secondary bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            BESPOKE VALUE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Bespoke Packages, Elite Execution
          </h2>
          <p className="text-slate-500 font-sans font-light text-base sm:text-lg">
            No bloated agency retainers. Get state-of-the-art custom engineering tailored precisely to your project scope, backed by absolute guarantees.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={idx}
              id={`pricing-card-${plan.name.replace(/\s+/g, "-").toLowerCase()}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative bg-white rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? "border-brand-secondary shadow-2xl shadow-brand-secondary/10 scale-102 z-10"
                  : "border-slate-150 hover:border-slate-300 shadow-sm"
              }`}
            >
              {/* Popular Indicator overlay badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-secondary to-brand-accent text-white font-mono font-bold text-[9px] tracking-widest px-4 py-1.5 rounded-full uppercase shadow flex items-center space-x-1 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 animate-spin-slow text-brand-highlight" />
                  <span>MOST POPULAR CHOICE</span>
                </div>
              )}

              <div className="space-y-6">
                {/* Plan Metadata */}
                <div className="space-y-2 text-left">
                  <h3 className="text-xl font-bold font-display text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">{plan.description}</p>
                </div>

                {/* Decorative Divider */}
                <div className="border-t border-slate-150 dark:border-slate-800" />

                {/* Feature Checklists */}
                <ul className="space-y-3.5 text-left text-xs sm:text-sm">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2.5 text-slate-600 font-sans font-light">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  
                  {/* Excluded elements */}
                  {plan.notIncluded?.map((feat, eIdx) => (
                    <li key={eIdx} className="flex items-start space-x-2.5 text-slate-400 font-sans font-light opacity-50">
                      <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span className="line-through">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Select Trigger CTA button */}
              <div className="pt-8">
                <button
                  id={`pricing-btn-${plan.name.replace(/\s+/g, "-").toLowerCase()}`}
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-4 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-highlight text-white shadow-lg"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900"
                  }`}
                >
                  <span>{plan.ctaText.toUpperCase()}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
