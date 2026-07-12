import React, { useState } from "react";
import { Mail, Phone, MessageSquare, Send, CheckCircle, ExternalLink, Sparkles, MapPin, Settings } from "lucide-react";
import { addInquiry, submitToExternalProvider } from "../utils/submissions";

interface ContactSectionProps {
  setCurrentPage?: (page: string) => void;
}

export default function ContactSection({ setCurrentPage }: ContactSectionProps = {}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [externalError, setExternalError] = useState<string | null>(null);

  const capabilities = [
    "Website Design",
    "E-commerce Store",
    "Website Redesign",
    "Landing Page",
    "SEO Optimization",
    "Branding & Identity",
    "Monthly Maintenance"
  ];

  const handleNeedToggle = (need: string) => {
    setSelectedNeeds((prev) =>
      prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setExternalError(null);
    
    // 1. Store the inquiry locally
    addInquiry({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
      needs: selectedNeeds
    });

    // 2. Submit to external configured provider
    const res = await submitToExternalProvider({
      type: "Contact Form Inquiry",
      name: formData.name,
      email: formData.email,
      company: formData.company || "Not provided",
      needs: selectedNeeds.join(", ") || "General Inquiry",
      message: formData.message
    });

    setIsSubmitting(false);
    setIsSuccess(true);
    
    if (!res.success) {
      setExternalError(res.error || "External dispatch failed.");
    }

    setFormData({ name: "", email: "", company: "", message: "" });
    setSelectedNeeds([]);
    
    // Clear notifications after some time
    setTimeout(() => {
      setIsSuccess(false);
      setExternalError(null);
    }, 10000);
  };

  return (
    <section id="contact-section" className="py-24 bg-slate-50 relative overflow-hidden grid-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-secondary bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            SECURE YOUR SLOT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Let's Build Something Memorable
          </h2>
          <p className="text-slate-500 font-sans font-light text-base sm:text-lg">
            Ready to completely dominate your market? Fill out our premium request builder or ping our direct lines below to secure a discovery call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form Inquiry Builder */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl">
            <h3 className="text-xl font-bold font-display text-slate-900 text-left mb-6">
              Interactive Inquiry Builder
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              
              {/* Needs Checkboxes Checklist Grid */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                  Select What You Need help with
                </label>
                <div className="flex flex-wrap gap-2">
                  {capabilities.map((cap) => {
                    const isSelected = selectedNeeds.includes(cap);
                    return (
                      <button
                        type="button"
                        key={cap}
                        id={`need-tag-${cap.replace(/\s+/g, "-").toLowerCase()}`}
                        onClick={() => handleNeedToggle(cap)}
                        className={`px-3.5 py-2 rounded-full text-xs font-sans tracking-wide border transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200"
                        }`}
                      >
                        {cap}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-500 uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-secondary focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-500 uppercase">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-secondary focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-500 uppercase">Company Name</label>
                <input
                  type="text"
                  placeholder="E.g. Aura Wearables"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-secondary focus:bg-white transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-500 uppercase">Project Scope / Details</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your conversion rate goals, timing constraints, or visual style benchmarks..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-secondary focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Success state */}
              {isSuccess && (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-sans">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>✓ Inquiry compiled! We will review your goals within 4 working hours.</span>
                  </div>
                  {setCurrentPage && (
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentPage("leads-admin");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer flex items-center space-x-1 shrink-0 bg-emerald-100/50 dark:bg-emerald-900/40 px-2.5 py-1 rounded-md"
                    >
                      <span>VIEW LEAD CONSOLE</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>
              )}

              {isSuccess && externalError && (
                <div className="p-4 bg-amber-50 border border-amber-100 dark:bg-amber-950/10 dark:border-amber-900/20 rounded-xl text-left text-xs font-sans text-amber-800 dark:text-amber-300">
                  <p className="font-semibold mb-0.5">⚠️ External dispatch alert:</p>
                  <p className="font-light">{externalError}</p>
                  <p className="mt-1 font-mono text-[10px] text-slate-400">The lead was still recorded securely in your local Lead & Booking Console.</p>
                </div>
              )}

              {/* Submit Trigger button */}
              <button
                type="submit"
                id="contact-form-submit-btn"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-highlight text-white text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-brand-secondary/15"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING DETAILS...</span>
                ) : (
                  <>
                    <span>SUBMIT INQUIRY SHEET</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: direct channels & Map Vector illustration */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Quick Contact Info */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-white/5 space-y-6">
              <h3 className="text-lg font-bold font-display">Direct Channels</h3>
              
              <div className="space-y-4">
                
                {/* Email link */}
                <a
                  href="mailto:hello@enovatos.com"
                  className="flex items-center space-x-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/15 text-brand-highlight flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider block">EMAIL US</span>
                    <span className="text-sm font-semibold block">hello@enovatos.com</span>
                  </div>
                </a>

                {/* Phone link */}
                <a
                  href="tel:+18005550143"
                  className="flex items-center space-x-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/15 text-brand-highlight flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider block">CALL DIRECTLY</span>
                    <span className="text-sm font-semibold block">+1 (800) 555-0143</span>
                  </div>
                </a>

                {/* WhatsApp click */}
                <a
                  href="https://wa.me/18005550143"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-emerald-500/80 font-mono tracking-wider block">WHATSAPP LIVE</span>
                      <span className="text-sm font-semibold block text-white">Direct Chat Support</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-400" />
                </a>

              </div>
            </div>

            {/* High-end vector map placeholder illustration */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 border border-white/5 overflow-hidden relative">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-highlight" />
                  <span>REGIONAL HEADQUARTERS</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400">Silicon Valley, CA</span>
              </div>
              
              {/* Premium custom Vector map visual */}
              <div className="w-full h-40 bg-slate-950 rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center">
                
                {/* SVG representing visual map grid and glowing target */}
                <svg className="absolute inset-0 w-full h-full text-slate-800 opacity-60" viewBox="0 0 400 200" fill="none">
                  {/* Grid Lines */}
                  <path d="M0,40 L400,40 M0,80 L400,80 M0,120 L400,120 M0,160 L400,160" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  <path d="M80,0 L80,200 M160,0 L160,200 M240,0 L240,200 M320,0 L320,200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  {/* Abstract land shapes */}
                  <path d="M30,50 Q100,20 180,60 T320,50 Q360,110 280,150 T100,160 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
                  {/* Highway connections */}
                  <path d="M10,80 Q100,120 200,80 T390,140" stroke="#2563EB" strokeWidth="1" opacity="0.3" />
                  <path d="M200,10 Q220,100 200,190" stroke="#7C3AED" strokeWidth="1" opacity="0.2" />
                </svg>

                {/* Glowing target office node */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-highlight opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-secondary border-2 border-white"></span>
                  </div>
                  <span className="mt-2 text-[9px] font-mono font-bold tracking-wider text-white bg-slate-900/90 px-2.5 py-1 rounded border border-white/10 whitespace-nowrap shadow-md">
                    ENOVATOS LABS
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
