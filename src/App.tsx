import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, RefreshCw, ArrowLeft, Terminal } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import PortfolioShowcase from "./components/PortfolioShowcase";
import CaseStudyDetail from "./components/CaseStudyDetail";
import ProcessTimeline from "./components/ProcessTimeline";
import Testimonials from "./components/Testimonials";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BookConsultation from "./pages/BookConsultation";
import LegalPage from "./pages/LegalPage";
import { Project } from "./types";

const FOUR_OH_FOUR_PARTICLES = Array.from({ length: 35 }, (_, i) => {
  const colors = [
    "bg-brand-secondary/30",
    "bg-brand-highlight/25",
    "bg-brand-accent/30",
    "bg-indigo-500/20",
    "bg-emerald-500/20"
  ];
  return {
    id: i,
    size: Math.random() * 6 + 2, // 2px to 8px
    left: Math.random() * 100,
    top: Math.random() * 100,
    color: colors[i % colors.length],
    duration: Math.random() * 30 + 20, // 20s to 50s
    delay: Math.random() * -30, // negative delay for immediate motion
  };
});

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Navigates and opens a detailed project study
  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage("project-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dedicated interactive 404 page viewport
  const render404Page = () => (
    <div id="404-viewport" className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6 grid-bg relative overflow-hidden">
      {/* Floating Particle Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {FOUR_OH_FOUR_PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute rounded-full blur-[1px] ${p.color}`}
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              y: [0, -80, 80, 0],
              x: [0, 40, -40, 0],
              scale: [1, 1.3, 0.8, 1],
              opacity: [0.15, 0.55, 0.25, 0.15],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-md text-center space-y-6 relative z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full bg-gradient-to-tr from-brand-secondary via-brand-accent to-brand-highlight flex items-center justify-center mx-auto opacity-80 shadow-[0_0_50px_rgba(37,99,235,0.3)]"
        >
          <Compass className="w-12 h-12 text-white" />
        </motion.div>

        <div className="space-y-2">
          <h1 className="text-6xl font-extrabold font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-highlight to-brand-accent">
            404
          </h1>
          <h2 className="text-xl font-bold font-display">Spatially Decoupled</h2>
          <p className="text-slate-400 font-sans font-light text-sm">
            The coordinates you requested do not exist in our web directory. Our systems indicate this endpoint was either archived or decoupled.
          </p>
        </div>

        <div className="pt-4">
          <button
            id="error-return-home-btn"
            onClick={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-highlight text-white text-xs font-mono font-bold px-6 py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO SAFE COORDINATES</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-zinc-100 flex flex-col justify-between font-sans selection:bg-brand-secondary selection:text-white transition-colors duration-300">
      
      {/* 1. Floating Nav */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSelectedProjectId={() => setSelectedProject(null)}
      />

      {/* 2. Main content viewport with fade transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {(() => {
              switch (currentPage) {
                case "home":
                  return (
                    <div id="home-view">
                      <Hero setCurrentPage={setCurrentPage} />
                      <StatsSection />
                      <Services setCurrentPage={setCurrentPage} />
                      <WhyChooseUs />
                      <PortfolioShowcase
                        onSelectProject={handleSelectProject}
                        setCurrentPage={setCurrentPage}
                      />
                      <ProcessTimeline />
                      <Testimonials />
                      <PricingSection setCurrentPage={setCurrentPage} />
                      <FAQSection />
                      <ContactSection />
                    </div>
                  );
                case "about":
                  return <AboutPage setCurrentPage={setCurrentPage} />;
                case "services":
                  return (
                    <div id="services-deep-view" className="pt-12">
                      <Services setCurrentPage={setCurrentPage} />
                      <WhyChooseUs />
                    </div>
                  );
                case "portfolio":
                  return (
                    <div id="portfolio-deep-view" className="pt-12">
                      <PortfolioShowcase
                        onSelectProject={handleSelectProject}
                        setCurrentPage={setCurrentPage}
                      />
                    </div>
                  );
                case "pricing":
                  return (
                    <div id="pricing-deep-view" className="pt-12">
                      <PricingSection setCurrentPage={setCurrentPage} />
                      <WhyChooseUs />
                    </div>
                  );
                case "blog":
                  return <BlogPage />;
                case "faq":
                  return (
                    <div id="faq-deep-view" className="pt-12">
                      <FAQSection />
                    </div>
                  );
                case "contact":
                  return (
                    <div id="contact-deep-view" className="pt-12">
                      <ContactSection />
                    </div>
                  );
                case "book-consultation":
                  return <BookConsultation setCurrentPage={setCurrentPage} />;
                case "privacy":
                  return <LegalPage initialTab="privacy" />;
                case "terms":
                  return <LegalPage initialTab="terms" />;
                case "project-detail":
                  return selectedProject ? (
                    <CaseStudyDetail
                      project={selectedProject}
                      onBack={() => {
                        setCurrentPage("portfolio");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      setCurrentPage={setCurrentPage}
                    />
                  ) : (
                    render404Page()
                  );
                default:
                  return render404Page();
              }
            })()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Global Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        setSelectedProjectId={() => setSelectedProject(null)}
      />

      {/* Hidden visual Easter Egg for Awwwards-worthy 404 checking */}
      <div className="fixed bottom-3 left-3 z-40 opacity-20 hover:opacity-100 transition-opacity hidden sm:block">
        <button
          onClick={() => {
            setCurrentPage("404");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="p-2 bg-slate-900 border border-white/5 rounded-lg text-[9px] font-mono tracking-wider text-slate-500 hover:text-brand-highlight flex items-center space-x-1 cursor-pointer shadow"
          title="Inspect Custom 404 Screen"
        >
          <Terminal className="w-3 h-3" />
          <span>TRIGGER 404 VIEW</span>
        </button>
      </div>

    </div>
  );
}
