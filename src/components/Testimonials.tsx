import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data/agencyData";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials-section" className="py-24 bg-slate-50 relative overflow-hidden grid-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-secondary bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Loved by Fast-Growing Brands
          </h2>
          <p className="text-slate-500 font-sans font-light text-base sm:text-lg">
            See how Enovatos is helping founders and marketing teams build world-class web spaces that increase traffic and double demo conversions.
          </p>
        </div>

        {/* Dynamic Card Slider */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden text-left"
            >
              {/* Backquote visual mark */}
              <Quote className="absolute right-8 top-8 w-24 h-24 text-slate-100/70 shrink-0 z-0" />

              {/* Client Avatar Frame */}
              <div className="relative shrink-0 z-10">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-slate-200">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-brand-primary text-white font-mono text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  {current.logo}
                </div>
              </div>

              {/* Client copy */}
              <div className="space-y-4 relative z-10 flex-grow">
                {/* Stars rating */}
                <div className="flex items-center space-x-0.5">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 font-sans font-light text-base sm:text-lg leading-relaxed italic">
                  "{current.text}"
                </p>

                <div className="border-t border-slate-100 pt-4">
                  <h4 className="text-base font-bold text-slate-900 font-display">
                    {current.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono uppercase mt-0.5">
                    {current.role}, <span className="text-brand-secondary font-semibold">{current.company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Manual Control Triggers */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              id="prev-testimonial-btn"
              onClick={handlePrev}
              className="p-3 bg-white hover:bg-brand-primary text-slate-600 hover:text-white rounded-full border border-slate-100 shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Pagination dots */}
            <div className="flex space-x-2">
              {TESTIMONIALS_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-6 bg-brand-secondary" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              id="next-testimonial-btn"
              onClick={handleNext}
              className="p-3 bg-white hover:bg-brand-primary text-slate-600 hover:text-white rounded-full border border-slate-100 shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
