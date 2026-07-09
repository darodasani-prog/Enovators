import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Filter, Eye, ArrowUpRight, Grid, LayoutDashboard, ChevronRight } from "lucide-react";
import { PROJECTS_DATA, BEFORE_AFTER_PROJECT } from "../data/agencyData";
import { Project } from "../types";

interface PortfolioShowcaseProps {
  onSelectProject: (project: Project) => void;
  setCurrentPage: (page: string) => void;
}

export default function PortfolioShowcase({ onSelectProject, setCurrentPage }: PortfolioShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Website Design", "Business Websites", "Landing Pages", "E-commerce Stores", "Branding & Identity", "Portfolio Websites"];

  const filteredProjects = activeCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  // Before/After slider handlers
  const handleMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section id="portfolio-section" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-secondary bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              SELECTED MASTERPIECES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 tracking-tight">
              Crafting Digital Authority
            </h2>
            <p className="text-slate-500 font-sans font-light max-w-xl">
              Inspect our high-end case studies. Each portal is optimized for Google rankings, responsive fluidity, and flawless user journeys.
            </p>
          </div>

          {/* Categories list filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/10"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:border-slate-200 transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white text-xs font-mono tracking-wider font-semibold">
                    <Eye className="w-4 h-4 text-brand-highlight" />
                    <span>INSPECT CASE STUDY</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full uppercase">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Text metadata */}
              <div className="p-6 text-left flex flex-col justify-between flex-grow">
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                    CLIENT: {project.clientName} &bull; {project.year}
                  </span>
                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-brand-secondary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-sans font-light line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-brand-secondary font-bold group-hover:text-brand-accent transition-colors">
                  <span>EXPLORE PROJECT METRICS</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* INTERACTIVE BEFORE/AFTER SLIDER (Redesign Proof) */}
        <div className="border-t border-slate-100 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info copy column */}
            <div className="lg:col-span-4 space-y-6 text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-accent bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                TRANSFORMATION SHOWCASE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 leading-snug">
                {BEFORE_AFTER_PROJECT.title}
              </h3>
              <p className="text-slate-500 font-sans font-light leading-relaxed">
                {BEFORE_AFTER_PROJECT.desc}
              </p>
              
              <div className="space-y-3 font-mono text-xs text-slate-600">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>Before: Bloated loading times & cluttered layout grid</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>After: Seamless interactive transitions & optimized Core Vitals</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  id="portfolio-redesign-request-btn"
                  onClick={() => {
                    setCurrentPage("contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-slate-900 hover:bg-brand-secondary text-white text-xs font-mono tracking-wider font-semibold shadow-md transition-colors cursor-pointer"
                >
                  <span>Request Redesign Audit</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Dragging Slider container column */}
            <div className="lg:col-span-8">
              <div
                id="before-after-slider-container"
                ref={sliderContainerRef}
                className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl select-none cursor-ew-resize"
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
                onMouseMove={(e) => isDragging && handleMove(e.clientX)}
                onTouchMove={(e) => isDragging && handleMove(e.touches[0].clientX)}
              >
                {/* AFTER image (Full width background) */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={BEFORE_AFTER_PROJECT.afterImg}
                    alt="After Redesign"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white font-mono text-[10px] tracking-widest px-3 py-1 rounded-full uppercase z-20 shadow">
                    AFTER &bull; ENOVATOS DESIGN
                  </div>
                </div>

                {/* BEFORE image (Left width dynamically clipped) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={BEFORE_AFTER_PROJECT.beforeImg}
                    alt="Before Redesign"
                    className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none filter grayscale brightness-75"
                    style={{ width: sliderContainerRef.current?.getBoundingClientRect().width }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-rose-600 text-white font-mono text-[10px] tracking-widest px-3 py-1 rounded-full uppercase z-20 shadow whitespace-nowrap">
                    BEFORE &bull; OUTDATED TRAVEL SITE
                  </div>
                </div>

                {/* Slider Handle Divider bar */}
                <div
                  className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-30"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-primary border-2 border-white flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs tracking-tight font-bold">&larr;&rarr;</span>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 text-xs text-slate-400 font-mono">
                Drag the divider handle slider left and right to inspect visual changes
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
