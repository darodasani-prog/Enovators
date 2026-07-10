import { useEffect, useState } from "react";
import { STATS_DATA } from "../data/agencyData";

export default function StatsSection() {
  const [counts, setCounts] = useState<number[]>(STATS_DATA.map(() => 0));

  useEffect(() => {
    const duration = 1500; // ms
    const steps = 30;
    const stepDuration = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      setCounts(() =>
        STATS_DATA.map((item) => {
          const currentVal = Math.floor((item.value / steps) * stepCount);
          return currentVal > item.value ? item.value : currentVal;
        })
      );

      if (stepCount >= steps) {
        clearInterval(timer);
        setCounts(STATS_DATA.map((item) => item.value));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="stats-section" className="py-20 bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Mesh lines overlay */}
      <div className="absolute inset-0 bg-grid-lines opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {STATS_DATA.map((stat, index) => (
            <div
              key={index}
              id={`stat-box-${index}`}
              className="text-center space-y-2 border-r border-slate-200 dark:border-white/5 last:border-r-0 pb-6 md:pb-0"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-brand-highlight via-brand-secondary to-brand-accent">
                {counts[index]}
                {stat.suffix}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans font-light tracking-wide px-2 uppercase font-display">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
