import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Check, 
  X, 
  Shield, 
  FastForward, 
  Award, 
  HeartHandshake, 
  Cpu, 
  Zap, 
  Search, 
  Flame, 
  MessageSquare, 
  Smartphone, 
  Gauge 
} from "lucide-react";

interface CategoryDetail {
  id: string;
  benefit: string;
  enovatos: string;
  others: string;
  icon: ReactNode;
  gaugeValue: { enovatos: number; others: number };
  enovatosBullets: string[];
  othersBullets: string[];
  impactText: string;
}

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const highlights = [
    {
      icon: <FastForward className="w-5 h-5 text-brand-highlight" />,
      title: "Sub-Second Load Times",
      desc: "Optimized server responses, zero asset blockage, and headless layouts mean page speeds of <0.8 seconds."
    },
    {
      icon: <Award className="w-5 h-5 text-brand-secondary" />,
      title: "Bespoke Design Architecture",
      desc: "Zero generic stock layouts. We map typography and grid lines to echo your specific market authority."
    },
    {
      icon: <Shield className="w-5 h-5 text-brand-accent" />,
      title: "Security & Scale Immunity",
      desc: "Static architectures bypass WordPress database vulnerabilities, rendering hacking attempts obsolete."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
      title: "Direct Developer Slack",
      desc: "Bypass slow ticket queues. Chat directly with the engineering lead on a dedicated instant channel."
    }
  ];

  // Extended premium comparison details
  const extendedComparison: CategoryDetail[] = [
    {
      id: "speed",
      benefit: "Performance & PageSpeed",
      enovatos: "Sub-1 second Load Times (Lighthouse 98+ Score)",
      others: "Bloated templates (Lighthouse 45-60 Score)",
      icon: <Cpu className="w-4 h-4" />,
      gaugeValue: { enovatos: 99, others: 43 },
      enovatosBullets: [
        "Sub-800ms Time-to-Interactive (TTI)",
        "Zero render-blocking scripts or CSS bloat",
        "Edge-cached CDN static builds with progressive loading"
      ],
      othersBullets: [
        "4.2s average load time on mobile devices",
        "Heavy JS chunks, heavy sliders & custom libraries",
        "Uncached slow database-driven page queries"
      ],
      impactText: "Every 100ms of speed delay drops conversion rates by 1%. Our engineering guarantees you retain every click."
    },
    {
      id: "design",
      benefit: "Design Architecture",
      enovatos: "100% Bespoke, Tailwind-engineered fluid layouts",
      others: "Reused generic stock layout folders",
      icon: <Zap className="w-4 h-4" />,
      gaugeValue: { enovatos: 100, others: 35 },
      enovatosBullets: [
        "Tailored typography hierarchy specifically designed for your niche",
        "Micro-animations & layout transitions curated for high-end feel",
        "Zero Layout Shift (CLS) preserving structural integrity"
      ],
      othersBullets: [
        "Downloaded pre-made templates with forced structures",
        "Dull, cookie-cutter cards used by thousands of competitors",
        "Stiff, unpolished default hover states and transitions"
      ],
      impactText: "Bespoke interfaces convey instant high-status authority, allowing you to easily charge premium prices."
    },
    {
      id: "seo",
      benefit: "Technical SEO & Structure",
      enovatos: "Full Schema, structured metadata, perfect semantic HTML",
      others: "Missing descriptive tags & bad heading hierarchy",
      icon: <Search className="w-4 h-4" />,
      gaugeValue: { enovatos: 98, others: 52 },
      enovatosBullets: [
        "Custom JSON-LD schema generated for rich snippet indexing",
        "Strictly semantic HTML structure ensuring perfect browser reading",
        "Rankings and authority points fully mapped and preserved"
      ],
      othersBullets: [
        "Broken heading structures (e.g. multiple H1 tags)",
        "Missing alt tags, duplicate paths, and bad page schema",
        "Plunging organic search ranks after simple content updates"
      ],
      impactText: "Clean technical markup forces Google crawlers to rank your site above bloated competitor layouts."
    },
    {
      id: "ux",
      benefit: "User Experience (UX)",
      enovatos: "Curated click pathways & immersive spatial interaction",
      others: "Cluttered popups and confusing navigational links",
      icon: <Flame className="w-4 h-4" />,
      gaugeValue: { enovatos: 96, others: 45 },
      enovatosBullets: [
        "Strategic client conversion funnels mapped to mouse tracking",
        "Frictionless booking widgets and inline calculators",
        "High-contrast, comfortable viewport reading layouts"
      ],
      othersBullets: [
        "Confusing multi-level navigation dropdown bars",
        "Spammy email popups interrupting reading flow",
        "Frustrating tap delays and unresponsive clicks"
      ],
      impactText: "We strip away interaction friction to smoothly guide visitors into verified sales opportunities."
    },
    {
      id: "support",
      benefit: "Lifetime Support Options",
      enovatos: "Direct instant developer slack support channels",
      others: "Slow outsourced ticket queues",
      icon: <MessageSquare className="w-4 h-4" />,
      gaugeValue: { enovatos: 100, others: 20 },
      enovatosBullets: [
        "Direct 1-on-1 Slack channel with our core developer",
        "12-hour average response turnaround time for requests",
        "Automated hourly server-side checks and status alerts"
      ],
      othersBullets: [
        "Outsourced ticket queues with robotic auto-responses",
        "3 to 5 business days of waiting for minor text edits",
        "Total absence of active health or performance checks"
      ],
      impactText: "You gain a highly trained elite digital team on-call, removing stress so you can focus on building your empire."
    },
    {
      id: "mobile",
      benefit: "Mobile-First Responsiveness",
      enovatos: "Fluid auto-layout adapters built for all screen sizes",
      others: "Awkward resizing, cropped images & misaligned elements",
      icon: <Smartphone className="w-4 h-4" />,
      gaugeValue: { enovatos: 99, others: 38 },
      enovatosBullets: [
        "100% custom fluid breakpoints styled specifically for each section",
        "Fatigue-free touch-friendly click targets (minimum 44px)",
        "Progressive image compression serving light webp assets to cellular networks"
      ],
      othersBullets: [
        "Cropped visual images and cut-off descriptive texts",
        "Accidental double-taps triggered by cramped layout buttons",
        "Giant unoptimized files draining cellular user data packages"
      ],
      impactText: "Over 65% of your web traffic browses on mobile. Our fluid responsive system guarantees a flawless mobile experience."
    }
  ];

  const activeCategory = extendedComparison[activeIndex];

  return (
    <section id="why-choose-section" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-highlight/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-highlight bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
            WHY PARTNER WITH US
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Engineered to Elevate, Built to Convert
          </h2>
          <p className="text-slate-400 font-sans font-light text-base sm:text-lg">
            Compare our elite engineering with standard bloated templates. We design custom interactive digital assets that command market authority.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 hover:border-brand-secondary/40 hover:bg-slate-900/80 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-brand-secondary/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2 group-hover:text-brand-highlight transition-colors">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-sans font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* COMPARATIVE ARCHITECTURE BOARD */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-brand-highlight uppercase block mb-1">Interactive Diagnostic Console</span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-white">
                Comparative Architecture Board
              </h3>
            </div>
            <p className="text-sm text-slate-400 max-w-md font-sans font-light">
              Select any benefit category below to explore the functional contrast between our production-grade architecture and ordinary layouts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Nav Tabs */}
            <div className="lg:col-span-4 space-y-2.5">
              {extendedComparison.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center space-x-3.5 relative overflow-hidden group cursor-pointer ${
                      isActive 
                        ? "bg-gradient-to-r from-slate-900 to-slate-900/60 border-brand-secondary/40 text-white shadow-xl shadow-slate-950/40" 
                        : "bg-slate-900/20 hover:bg-slate-900/40 border-white/5 text-slate-400 hover:text-white"
                    }`}
                  >
                    {/* Sliding indicator background */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabIndicator"
                        className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-brand-highlight to-brand-secondary"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    <div className={`p-2 rounded-lg transition-colors duration-300 ${
                      isActive ? "bg-brand-secondary/10 text-brand-highlight" : "bg-white/5 text-slate-400 group-hover:text-white"
                    }`}>
                      {item.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium block truncate font-sans">{item.benefit}</span>
                      <span className="text-[10px] font-mono text-slate-500 block tracking-tight mt-0.5 group-hover:text-slate-400 transition-colors">
                        {isActive ? "ACTIVE AUDIT" : "TAP TO EXPLORE"}
                      </span>
                    </div>

                    <div className={`text-[10px] font-mono px-1.5 py-0.5 rounded border transition-colors ${
                      isActive 
                        ? "bg-brand-secondary/5 border-brand-secondary/20 text-brand-highlight" 
                        : "bg-white/5 border-white/5 text-slate-500"
                    }`}>
                      {item.gaugeValue.enovatos}% vs {item.gaugeValue.others}%
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Visual Stage Playground */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-slate-900/30 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-8"
                >
                  {/* Category Header & Score Gauge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/5">
                    <div>
                      <div className="flex items-center space-x-2.5 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
                        <span className="text-xs font-mono font-bold tracking-widest text-brand-highlight uppercase">
                          {activeCategory.benefit}
                        </span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold font-display text-white">
                        Performance Breakdown
                      </h4>
                    </div>

                    {/* Styled Visual Progress Dial / Gauge */}
                    <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 flex items-center space-x-4 shrink-0 shadow-inner">
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        {/* Circle Track */}
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2.5" className="text-white/5" fill="transparent" />
                          <motion.circle 
                            cx="24" 
                            cy="24" 
                            r="21" 
                            stroke="url(#enovatosGrad)" 
                            strokeWidth="3" 
                            strokeDasharray="132"
                            initial={{ strokeDashoffset: 132 }}
                            animate={{ strokeDashoffset: 132 - (132 * activeCategory.gaugeValue.enovatos) / 100 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            fill="transparent" 
                          />
                          <defs>
                            <linearGradient id="enovatosGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#10B981" />
                              <stop offset="100%" stopColor="#14B8A6" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <span className="absolute text-xs font-mono font-bold text-emerald-400">
                          {activeCategory.gaugeValue.enovatos}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-slate-400">VS</div>
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2.5" className="text-white/5" fill="transparent" />
                          <motion.circle 
                            cx="24" 
                            cy="24" 
                            r="21" 
                            stroke="url(#othersGrad)" 
                            strokeWidth="3" 
                            strokeDasharray="132"
                            initial={{ strokeDashoffset: 132 }}
                            animate={{ strokeDashoffset: 132 - (132 * activeCategory.gaugeValue.others) / 100 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            fill="transparent" 
                          />
                          <defs>
                            <linearGradient id="othersGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#EF4444" />
                              <stop offset="100%" stopColor="#B91C1C" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <span className="absolute text-xs font-mono font-bold text-rose-500">
                          {activeCategory.gaugeValue.others}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] font-mono text-slate-500 block uppercase">Arch Rating</span>
                        <span className="text-xs font-mono font-bold text-brand-highlight">
                          +{activeCategory.gaugeValue.enovatos - activeCategory.gaugeValue.others}% Better
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Side-by-Side Comparison Panels */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Enovatos Standards Panel */}
                    <div className="bg-slate-950/60 border border-emerald-500/10 rounded-2xl p-5 relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-300 shadow-lg">
                      {/* Sub-layer glowing decoration */}
                      <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-6 h-6 rounded-md bg-emerald-500/10 flex items-center justify-center">
                            <Check className="w-4 h-4 text-emerald-400" />
                          </div>
                          <span className="text-xs font-mono font-extrabold tracking-widest text-emerald-400 uppercase">
                            Enovatos Standards
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase font-bold">
                          Elite
                        </span>
                      </div>

                      <p className="text-sm font-semibold text-slate-100 mb-4 font-display leading-tight min-h-[40px] md:min-h-0">
                        {activeCategory.enovatos}
                      </p>

                      <ul className="space-y-3">
                        {activeCategory.enovatosBullets.map((bullet, index) => (
                          <li key={index} className="flex items-start space-x-2 text-xs text-slate-300 leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="font-sans font-light">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Legacy / Bloated Templates Panel */}
                    <div className="bg-slate-950/20 border border-rose-500/10 rounded-2xl p-5 relative overflow-hidden group hover:border-rose-500/25 transition-all duration-300 shadow">
                      {/* Sub-layer glowing decoration */}
                      <div className="absolute -top-12 -right-12 w-24 h-24 bg-rose-500/5 rounded-full blur-xl pointer-events-none" />

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-6 h-6 rounded-md bg-rose-500/10 flex items-center justify-center">
                            <X className="w-3.5 h-3.5 text-rose-500" />
                          </div>
                          <span className="text-xs font-mono font-semibold tracking-widest text-rose-400 uppercase">
                            Bloated Legacy
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 uppercase">
                          Poor
                        </span>
                      </div>

                      <p className="text-sm font-medium text-slate-400 mb-4 font-display leading-tight min-h-[40px] md:min-h-0">
                        {activeCategory.others}
                      </p>

                      <ul className="space-y-3">
                        {activeCategory.othersBullets.map((bullet, index) => (
                          <li key={index} className="flex items-start space-x-2 text-xs text-slate-500 leading-relaxed">
                            <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                            <span className="font-sans font-light">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Impact Message Bar */}
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-4.5 flex items-start space-x-3.5">
                    <div className="p-1.5 rounded-lg bg-brand-secondary/10 text-brand-highlight shrink-0 mt-0.5">
                      <Gauge className="w-4 h-4 text-brand-highlight" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-1">Commercial Impact</span>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans font-light">
                        {activeCategory.impactText}
                      </p>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
