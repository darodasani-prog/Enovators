import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronDown, HelpCircle, FileQuestion, Sparkles } from "lucide-react";
import { FAQ_DATA } from "../data/agencyData";

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Design & Code", "Process", "SEO", "Pricing & Support", "General"];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-secondary/5 rounded-full blur-3xl animate-pulse-slow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-highlight bg-white/5 px-3 py-1 rounded-full border border-white/10">
            COMMON INQUIRIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 font-sans font-light text-base max-w-xl mx-auto">
            Got questions about our bespoke React architectures, custom Figma wireframing steps, or organic ranking integrations? Find answers below.
          </p>
        </div>

        {/* Search Bar Input & Category filter tags */}
        <div className="space-y-6 mb-12">
          <div className="relative">
            <input
              type="text"
              id="faq-search-input"
              placeholder="Search through FAQ topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 pl-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-secondary transition-colors"
            />
            <Search className="absolute left-4 top-4.5 w-4 h-4 text-slate-500" />
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`faq-cat-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors duration-200 ${
                  selectedCategory === cat
                    ? "bg-brand-highlight text-slate-950 font-bold"
                    : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4 text-left">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = activeFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-item-box-${faq.id}`}
                  className="bg-slate-900/60 border border-white/5 rounded-2xl overflow-hidden transition-colors hover:border-white/10"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-start space-x-3 pr-4">
                      <FileQuestion className="w-5 h-5 text-brand-highlight shrink-0 mt-0.5" />
                      <span className="text-base font-bold text-white font-display leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-brand-highlight" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed font-sans font-light border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-white/5">
              <HelpCircle className="w-8 h-8 text-slate-500 mx-auto mb-3" />
              <p className="text-sm text-slate-400 font-mono">No matching FAQs discovered. Try another query.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
