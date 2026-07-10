import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Sparkles, PhoneCall, Layers, FileText, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setSelectedProjectId: (id: string | null) => void;
}

export default function Navbar({ currentPage, setCurrentPage, setSelectedProjectId }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "pricing", label: "Pricing" },
    { id: "blog", label: "Blog" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavigate = (pageId: string) => {
    setCurrentPage(pageId);
    setSelectedProjectId(null);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-4 bg-white/95 dark:bg-brand-primary/90 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-white/5" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="logo-container"
            onClick={() => handleNavigate("home")}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="relative w-9 h-9 flex items-center justify-center bg-gradient-to-tr from-brand-secondary via-brand-accent to-brand-highlight rounded-xl shadow-md overflow-hidden">
              <span className="text-white font-bold text-lg font-display tracking-wider">E</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 dark:text-white font-bold font-display text-xl tracking-tight leading-none group-hover:text-brand-highlight transition-colors duration-200">
                Enovatos
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono tracking-wider">CREATIVE STUDIO</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center space-x-1 bg-slate-100/85 dark:bg-slate-950/40 p-1.5 rounded-full border border-slate-200 dark:border-white/5 backdrop-blur-sm">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-item-${item.id}`}
                    onClick={() => handleNavigate(item.id)}
                    className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-indicator"
                        className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Consultation CTA Button & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              id="theme-toggle-desktop"
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-300 cursor-pointer flex items-center justify-center shadow-sm"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 animate-pulse" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <button
              id="cta-nav-book"
              onClick={() => handleNavigate("book-consultation")}
              className="relative overflow-hidden group flex items-center space-x-2 bg-gradient-to-r from-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-highlight text-white text-xs font-bold font-mono tracking-wider px-5 py-3 rounded-full shadow-lg shadow-brand-secondary/20 hover:shadow-brand-highlight/30 transition-all duration-300 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-bounce" />
              <span>BOOK DEMO CALL</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button & Theme toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              id="theme-toggle-mobile"
              onClick={toggleTheme}
              className="p-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 transition-all duration-300 cursor-pointer flex items-center justify-center shadow-sm"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-4.5 h-4.5 text-amber-400" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-indigo-600" />
              )}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-brand-primary border-b border-slate-200 dark:border-white/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => handleNavigate(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-brand-secondary to-brand-accent text-white"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-slate-200 dark:border-white/5">
                <button
                  id="mobile-cta-nav-book"
                  onClick={() => handleNavigate("book-consultation")}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-secondary to-brand-accent text-white font-bold font-mono tracking-wider py-4 rounded-xl shadow-lg"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>BOOK FREE CONSULTATION</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

