import React, { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github, Send, Check } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
  setSelectedProjectId: (id: string | null) => void;
}

export default function Footer({ setCurrentPage, setSelectedProjectId }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNavigate = (pageId: string) => {
    setCurrentPage(pageId);
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div id="footer-brand" className="space-y-6">
            <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => handleNavigate("home")}>
              <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-tr from-brand-secondary via-brand-accent to-brand-highlight rounded-lg shadow-md">
                <span className="text-white font-bold text-base font-display">E</span>
              </div>
              <span className="text-white font-bold font-display text-lg tracking-tight leading-none">
                Enovatos
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              We design and engineer bespoke digital products that position brands as industry leaders and systematically turn casual traffic into loyal paying customers.
            </p>
            <div className="flex items-center space-x-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-brand-secondary rounded-lg text-slate-300 hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-brand-secondary rounded-lg text-slate-300 hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-brand-secondary rounded-lg text-slate-300 hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-brand-secondary rounded-lg text-slate-300 hover:text-white transition-all duration-300">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div id="footer-quick-links" className="space-y-4">
            <h3 className="text-white font-display font-semibold text-sm tracking-widest uppercase">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNavigate("home")} className="hover:text-brand-highlight transition-colors text-left">
                  Home Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("about")} className="hover:text-brand-highlight transition-colors text-left">
                  About Agency
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("services")} className="hover:text-brand-highlight transition-colors text-left">
                  Interactive Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("portfolio")} className="hover:text-brand-highlight transition-colors text-left">
                  Featured Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("blog")} className="hover:text-brand-highlight transition-colors text-left">
                  Insights & Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Services Category */}
          <div id="footer-services-directory" className="space-y-4">
            <h3 className="text-white font-display font-semibold text-sm tracking-widest uppercase">Expertise</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNavigate("services")} className="hover:text-brand-highlight transition-colors text-left">
                  Bespoke Web Design
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("services")} className="hover:text-brand-highlight transition-colors text-left">
                  High-converting Landing Pages
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("services")} className="hover:text-brand-highlight transition-colors text-left">
                  E-commerce Scaler Sites
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("services")} className="hover:text-brand-highlight transition-colors text-left">
                  Web Core Vitals Speed Redesigns
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("services")} className="hover:text-brand-highlight transition-colors text-left">
                  Technical SEO Optimization
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("services")} className="hover:text-brand-highlight transition-colors text-left">
                  Lifetime Maintenance Packages
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div id="footer-newsletter" className="space-y-4">
            <h3 className="text-white font-display font-semibold text-sm tracking-widest uppercase">Newsletter</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to the Enovatos Ledger. No spam, only premium insights about Web Speed, UX Patterns, and growth trends.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2.5 relative">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 pl-10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-secondary transition-colors"
                />
                <Mail className="absolute left-3.5 top-3.5 w-3.5 h-3.5 text-slate-500" />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-2 bg-brand-secondary hover:bg-brand-accent rounded-full text-white transition-colors cursor-pointer"
                >
                  {subscribed ? <Check className="w-3 h-3" /> : <Send className="w-3 h-3" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-400 font-mono tracking-wide absolute bottom-[-20px] left-2">
                  ✓ Successfully subscribed! Check inbox.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Enovatos Creative Agency. All absolute rights reserved.
          </p>
          <div className="flex space-x-6">
            <button onClick={() => handleNavigate("privacy")} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleNavigate("terms")} className="hover:text-white transition-colors">
              Terms & Conditions
            </button>
            <a href="mailto:hello@enovatos.com" className="hover:text-white transition-colors flex items-center space-x-1">
              <Mail className="w-3 h-3" />
              <span>hello@enovatos.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
