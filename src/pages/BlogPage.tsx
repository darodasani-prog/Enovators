import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Calendar, Clock, User, X, ArrowLeft, ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "../data/agencyData";
import { BlogPost } from "../types";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = ["All", "UI/UX Design", "Development", "Branding"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="blog-page-view" className="bg-slate-950 text-white min-h-screen pt-28 pb-20 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-left space-y-4 max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-highlight bg-white/5 px-3 py-1 rounded-full border border-white/10">
            AGENCY INSIGHTS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-tight tracking-tight">
            The Enovatos Ledger
          </h1>
          <p className="text-slate-400 font-sans font-light text-base sm:text-lg leading-relaxed">
            In-depth analysis of high-end User Experience (UX) patterns, Core Web Vitals speed optimization, conversion metrics, and visual brand strategy.
          </p>
        </div>

        {/* Search Bar & Categories */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-y border-white/5 py-6">
          <div className="relative w-full md:max-w-xs">
            <input
              type="text"
              id="blog-search-input"
              placeholder="Search through insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 pl-10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-secondary transition-colors"
            />
            <Search className="absolute left-3 top-3 w-3.5 h-3.5 text-slate-500" />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`blog-filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-brand-secondary text-white font-bold"
                    : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                id={`blog-card-${post.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-secondary/45 transition-all duration-500 flex flex-col h-full text-left"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-800">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-950/80 backdrop-blur-md text-brand-highlight text-[9px] font-mono tracking-wider px-2.5 py-1 rounded-full uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4 text-[10px] text-slate-500 font-mono">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3 text-brand-highlight" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-brand-highlight" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-brand-highlight transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-slate-400 text-sm font-sans font-light leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-brand-secondary font-bold group-hover:text-brand-accent transition-colors">
                    <span>READ DETAILED POST</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-slate-900/40 rounded-2xl border border-white/5">
              <p className="text-slate-400 font-mono text-sm">No matching insights discovered. Try another query.</p>
            </div>
          )}
        </div>

      </div>

      {/* Blog Detail Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              id="blog-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            <motion.div
              id="blog-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-slate-900 border border-white/10 rounded-3xl overflow-y-auto p-6 sm:p-10 shadow-2xl z-10 text-left"
            >
              {/* Close trigger */}
              <button
                id="close-blog-modal"
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-brand-highlight tracking-widest uppercase bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    {selectedPost.category}
                  </span>
                  
                  <h1 className="text-2xl sm:text-3xl font-bold font-display text-white pt-2 leading-tight">
                    {selectedPost.title}
                  </h1>

                  <div className="flex items-center space-x-4 text-xs text-slate-400 font-mono">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-highlight" />
                      <span>{selectedPost.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-brand-highlight" />
                      <span>{selectedPost.readTime}</span>
                    </span>
                  </div>
                </div>

                {/* Banner */}
                <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden bg-slate-800">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Main Content */}
                <div className="space-y-4 text-slate-300 font-sans font-light text-sm sm:text-base leading-relaxed border-t border-white/5 pt-6">
                  <p>{selectedPost.content}</p>
                  
                  <p className="italic bg-white/5 p-4 rounded-xl text-slate-400 text-xs sm:text-sm mt-4">
                    "This post represents a conceptual design overview researched by the Enovatos branding core team. To coordinate a physical audit for your e-commerce shop or landing portal, schedule a free demo call via our consultation calendar."
                  </p>
                </div>

                {/* Author card details */}
                <div className="flex items-center space-x-4 border-t border-white/5 pt-6">
                  <img
                    src={selectedPost.author.avatar}
                    alt={selectedPost.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-sm font-semibold text-white block">{selectedPost.author.name}</span>
                    <span className="text-xs text-slate-500 font-mono mt-0.5 block">{selectedPost.author.role}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
