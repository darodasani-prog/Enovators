import { useState } from "react";
import { Project } from "../types";
import { ArrowLeft, CheckCircle, ArrowRight, Share2, Clipboard, Heart } from "lucide-react";

interface CaseStudyDetailProps {
  project: Project;
  onBack: () => void;
  setCurrentPage: (page: string) => void;
}

export default function CaseStudyDetail({ project, onBack, setCurrentPage }: CaseStudyDetailProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <article id={`case-study-${project.id}`} className="min-h-screen bg-slate-950 text-white pt-24 pb-20">
      
      {/* 1. Header Navigation & Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          id="back-to-portfolio-btn"
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-slate-400 hover:text-white font-mono text-xs tracking-wider uppercase cursor-pointer py-2 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO CASE STUDIES</span>
        </button>
      </div>

      {/* 2. Hero Banner & Client Overview */}
      <div className="relative w-full aspect-[21/9] min-h-[320px] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center scale-102"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-0 left-0 w-full z-20 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <span className="text-xs font-mono tracking-widest text-brand-highlight bg-white/10 px-3 py-1 rounded-full uppercase border border-white/10">
              {project.category.toUpperCase()}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-white mt-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl font-sans font-light mt-2 max-w-2xl">
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Meta Data Summary Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900/90 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
          <div className="text-left">
            <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block">CLIENT</span>
            <span className="text-sm font-semibold text-white mt-1 block">{project.clientName}</span>
          </div>
          <div className="text-left">
            <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block">YEAR</span>
            <span className="text-sm font-semibold text-white mt-1 block">{project.year}</span>
          </div>
          <div className="text-left">
            <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block">SERVICES</span>
            <span className="text-sm font-semibold text-white mt-1 block">{project.category}</span>
          </div>
          <div className="text-left">
            <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block">PLATFORM STATUS</span>
            <span className="text-sm font-mono text-emerald-400 mt-1 block">&bull; LIVE COMPLETED</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Challenge & Solution */}
          <div className="lg:col-span-8 space-y-12 text-left">
            
            {/* Challenge */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-display text-white border-l-2 border-brand-secondary pl-4">The Challenge</h2>
              <p className="text-slate-400 font-sans font-light leading-relaxed text-base sm:text-lg">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-display text-white border-l-2 border-brand-highlight pl-4">The Solution</h2>
              <p className="text-slate-400 font-sans font-light leading-relaxed text-base sm:text-lg">
                {project.solution}
              </p>
            </div>

            {/* Design Process */}
            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-bold font-display text-white">Our Scientific Process</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {project.designProcess.map((step, sIdx) => (
                  <div key={sIdx} className="bg-slate-900/40 border border-white/5 p-5 rounded-xl space-y-2">
                    <span className="text-xs font-mono text-brand-highlight font-semibold">STAGE 0{sIdx + 1}</span>
                    <h3 className="text-sm font-bold font-display text-white">{step.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans font-light">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsive Preview Devices Grid */}
            <div className="space-y-4 pt-6">
              <h2 className="text-2xl font-bold font-display text-white">Responsive Viewport Test</h2>
              <p className="text-slate-400 text-sm font-sans font-light">
                Our code adapts dynamically across multiple fluid layouts. Below is the responsive preview of the completed project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-slate-900">
                  <img src={project.gallery[0] || "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80"} alt="Desktop Viewport" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute bottom-2 left-2 bg-slate-950/80 px-2 py-1 rounded text-[10px] font-mono tracking-widest uppercase">Desktop Mockup</div>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-slate-900">
                  <img src={project.gallery[1] || "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"} alt="Tablet Viewport" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute bottom-2 left-2 bg-slate-950/80 px-2 py-1 rounded text-[10px] font-mono tracking-widest uppercase">Mobile Layout</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Style Guide & Core Speed Scores */}
          <div className="lg:col-span-4 space-y-8 text-left">
            
            {/* Performance results */}
            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl space-y-6">
              <h3 className="text-lg font-bold font-display text-white">Performance Verification</h3>
              <div className="space-y-4">
                {project.results.map((res, rIdx) => (
                  <div key={rIdx} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                    <div className="space-y-0.5">
                      <span className="text-xs text-slate-400 font-sans block">{res.label}</span>
                      <span className="text-xs text-emerald-400 font-mono flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>Audit passed</span>
                      </span>
                    </div>
                    <span className="text-xl sm:text-2xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-brand-highlight to-brand-secondary">
                      {res.metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography & Color Palette Selection */}
            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl space-y-6">
              <h3 className="text-lg font-bold font-display text-white">Visual Aesthetics</h3>
              
              {/* Colors */}
              <div className="space-y-2.5">
                <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block">COLOR PALETTE</span>
                <div className="flex flex-wrap gap-2">
                  {project.colors.map((color, cIdx) => (
                    <div
                      key={cIdx}
                      onClick={() => handleCopyColor(color)}
                      className="group flex items-center space-x-1.5 bg-slate-950/80 border border-white/10 px-2.5 py-1.5 rounded-full cursor-pointer hover:border-white/30 transition-colors"
                      title="Click to copy hex code"
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-white/20 block shrink-0" style={{ backgroundColor: color }} />
                      <span className="text-[10px] font-mono text-slate-400 group-hover:text-white transition-colors">{color}</span>
                    </div>
                  ))}
                </div>
                {copiedColor && (
                  <p className="text-[10px] text-emerald-400 font-mono mt-1">
                    Copied {copiedColor} to clipboard!
                  </p>
                )}
              </div>

              {/* Typography */}
              <div className="space-y-2.5 pt-4 border-t border-white/5">
                <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block">TYPOGRAPHY PAIRINGS</span>
                <div className="space-y-2">
                  {project.typography.map((font, fIdx) => (
                    <div key={fIdx} className="bg-slate-950 border border-white/5 p-3 rounded-xl flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-mono">{font}</span>
                      <span className="text-sm font-semibold text-white tracking-tight" style={{ fontFamily: font }}>Aa Bb Zz</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Share / Action block */}
            <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl text-center space-y-4">
              <h4 className="text-sm font-bold text-white">Have a similar goal?</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans font-light">
                Let us audit your current web platform and show you exactly where sales conversions and speeds are falling short.
              </p>
              <button
                id="case-study-request-audit-btn"
                onClick={() => {
                  setCurrentPage("contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-highlight text-white text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer text-center block"
              >
                REQUEST AUDIT CALL
              </button>
            </div>

          </div>
        </div>

        {/* 4. Large Testimonial Segment */}
        <div className="mt-20 pt-16 border-t border-white/10 text-left">
          <div className="max-w-4xl mx-auto bg-slate-900/60 border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-4 right-6 text-7xl text-slate-800 font-serif leading-none">&ldquo;</div>
            <p className="text-slate-300 text-lg sm:text-xl font-sans font-light leading-relaxed relative z-10 italic">
              "{project.testimonial.quote}"
            </p>
            <div className="flex items-center space-x-4 mt-8 relative z-10">
              <img
                src={project.testimonial.avatar}
                alt={project.testimonial.author}
                className="w-12 h-12 rounded-full object-cover border border-slate-700"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-sm font-bold text-white block">{project.testimonial.author}</span>
                <span className="text-xs text-slate-500 font-mono mt-0.5 block">{project.testimonial.role}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}
