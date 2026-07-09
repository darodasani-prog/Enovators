import { motion } from "motion/react";
import { Users, Target, Shield, Heart, HeartHandshake, Eye, Lightbulb, Coffee, ArrowRight } from "lucide-react";

interface AboutPageProps {
  setCurrentPage: (page: string) => void;
}

export default function AboutPage({ setCurrentPage }: AboutPageProps) {
  const values = [
    {
      icon: <Eye className="w-5 h-5 text-brand-highlight" />,
      title: "Artistic Excellence",
      desc: "Every grid line, spacing rule, and typography scale is custom designed by elite, award-winning visual directors."
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-brand-secondary" />,
      title: "Conversion Psychology",
      desc: "We analyze buyer friction and behavioral psychology to place headlines and CTAs exactly where they trigger choices."
    },
    {
      icon: <Shield className="w-5 h-5 text-brand-accent" />,
      title: "Bulletproof Engineering",
      desc: "We write clean, high-performance static React code which renders instantly and resists database vulnerabilities."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
      title: "Transparent Collaboration",
      desc: "Direct Slack channels, simple milestone timelines, and complete source code ownership with zero hidden fees."
    }
  ];

  const teamMembers = [
    {
      name: "Marcus Miller",
      role: "Creative Director & Co-Founder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
      bio: "Ex-Stripe creative lead. Over 12 years of creating immersive brand identities for high-growth tech companies."
    },
    {
      name: "Sophia Martinez",
      role: "Lead Systems Engineer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80",
      bio: "React core-speed specialist. Dedicated to optimizing Core Web Vitals to help companies rank higher on Google search results."
    },
    {
      name: "Dante Rossi",
      role: "VP of Digital Funnel Growth",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80",
      bio: "Conversion optimization architect. Utilizes behavioral tracking data to maximize sales pipeline volume."
    }
  ];

  return (
    <div id="about-page-view" className="bg-slate-950 text-white min-h-screen pt-28 pb-16 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-highlight bg-white/5 px-3 py-1 rounded-full border border-white/10">
              WHO WE ARE
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.1] tracking-tight">
              Decoupling Complexity, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-highlight via-brand-secondary to-brand-accent">Delivering Authority</span>.
            </h1>
            <p className="text-slate-400 font-sans font-light text-lg leading-relaxed max-w-xl">
              Enovatos is a modern visual design and elite software engineering agency. We dismantle the slow, cluttered methodologies of traditional agencies to build beautiful, ultra-fast web spaces that double demo conversions.
            </p>
          </div>
          
          {/* Aesthetic Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[4/5] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80"
                alt="Enovatos Team"
                className="w-full h-full object-cover brightness-90 filter"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex flex-col justify-end p-6 text-left">
                <span className="text-[10px] font-mono text-brand-highlight tracking-widest uppercase">ENOVATOS LABS</span>
                <h3 className="text-lg font-bold font-display text-white mt-1">Silicon Valley Creative Studio</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Backstory */}
        <div className="border-t border-white/5 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
            <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">The Enovatos Vision</h2>
              <p className="text-xs font-mono text-brand-secondary mt-2 uppercase tracking-widest font-semibold">ESTABLISHED 2018</p>
            </div>
            <div className="lg:col-span-8 text-slate-400 font-sans font-light space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                We launched Enovatos with a singular vision: to treat website code not merely as a tech requirement, but as a brand's ultimate conversion vehicle. Traditional agencies rely on slow, bloated templates that crash search results and annoy visitors with awkward responsiveness.
              </p>
              <p>
                By merging Awwwards-level visual direction with custom React code and sub-second caching strategies, we build modern websites that load instantly and help businesses grow.
              </p>
            </div>
          </div>
        </div>

        {/* Values checklist */}
        <div className="border-t border-white/5 pt-16">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono text-brand-secondary font-bold tracking-widest uppercase">CORE OPERATING BLUEPRINTS</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">Our Foundational Beliefs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl text-left hover:border-brand-secondary/35 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold font-display text-white mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans font-light">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Segment */}
        <div className="border-t border-white/5 pt-16">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono text-brand-accent font-bold tracking-widest uppercase">THE CHOREOGRAPHERS</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">Meet Our Core Innovators</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-slate-900/20 border border-white/5 rounded-2xl overflow-hidden p-6 text-left hover:border-white/10 transition-colors"
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover scale-102"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-lg font-bold font-display text-white">{member.name}</h3>
                <span className="text-xs font-mono text-brand-secondary block mt-1">{member.role}</span>
                <p className="text-xs sm:text-sm text-slate-400 font-sans font-light leading-relaxed mt-3 border-t border-white/5 pt-3">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="border-t border-white/5 pt-16">
          <div className="bg-gradient-to-r from-brand-secondary/10 via-brand-accent/5 to-slate-950 border border-white/10 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-secondary/15 rounded-full blur-3xl" />
            
            <span className="text-xs font-mono font-semibold text-brand-highlight tracking-widest uppercase relative z-10">WORK WITH US</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white relative z-10">Ready to Elevate Your Web Presence?</h2>
            <p className="text-slate-400 font-sans font-light text-sm sm:text-base max-w-xl mx-auto relative z-10">
              We operate on fixed timelines with predictables pricing, backed by absolute conversion guarantees. Select a consultation slot today.
            </p>
            <div className="relative z-10 flex justify-center pt-2">
              <button
                id="about-cta-book-btn"
                onClick={() => {
                  setCurrentPage("book-consultation");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-secondary to-brand-accent text-white text-sm font-semibold shadow-lg hover:scale-102 transition-all cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
