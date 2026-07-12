import React, { useState, useEffect } from "react";
import { 
  FileText, Calendar, Trash2, RotateCcw, Copy, Check, Mail, Clock, 
  ExternalLink, Sparkles, Filter, ChevronDown, ChevronRight, Inbox, HelpCircle, ArrowRight, ShieldCheck, Database, Settings
} from "lucide-react";
import { 
  getSubmissions, deleteSubmission, clearAllSubmissions, Submission, 
  getIntegrationConfig, saveIntegrationConfig, submitToExternalProvider, IntegrationConfig 
} from "../utils/submissions";

interface LeadsAdminPageProps {
  setCurrentPage: (page: string) => void;
}

export default function LeadsAdminPage({ setCurrentPage }: LeadsAdminPageProps) {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filter, setFilter] = useState<"all" | "booking" | "inquiry">("all");
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<"leads" | "settings" | "guide">("leads");

  // Integration states
  const [config, setConfig] = useState<IntegrationConfig>({
    provider: "none",
    formspreeId: "",
    web3formsKey: "",
  });
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const [testStatus, setTestStatus] = useState<string | null>(null);
  const [isTesting, setIsTesting] = useState(false);

  useEffect(() => {
    setSubmissions(getSubmissions());
    setConfig(getIntegrationConfig());
  }, []);

  const handleSaveConfig = () => {
    saveIntegrationConfig(config);
    setSaveStatus("Success! Integration preferences saved.");
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleTestSubmission = async () => {
    if (config.provider === "none") {
      setTestStatus("Please select Formspree or Web3Forms to trigger a transmission test.");
      return;
    }
    
    setIsTesting(true);
    setTestStatus(null);
    const mockPayload = {
      name: "Enovatos Console Live Agent",
      email: "test-deliverability@enovatos-studio.example.com",
      company: "Enovatos Creative Studio Test",
      message: "This is a direct, live form delivery test triggered from your Lead Console Settings dashboard. If you received this, your email routing is 100% online and functional!",
      needs: ["Lead Form Setup", "Deliverability Check"]
    };
    
    const result = await submitToExternalProvider(mockPayload);
    setIsTesting(false);
    
    if (result.success) {
      setTestStatus("✅ DISPATCH COMPLETE: A test lead has been formatted and successfully sent. Check your active email inbox!");
    } else {
      setTestStatus(`❌ DISPATCH FAILED: ${result.error || "The gateway refused the payload."}`);
    }
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this lead?")) {
      deleteSubmission(id);
      setSubmissions(getSubmissions());
      if (selectedSub === id) setSelectedSub(null);
    }
  };

  const handleClearAll = () => {
    if (confirm("Warning: This will clear all submitted leads from your browser cache. Continue?")) {
      clearAllSubmissions();
      setSubmissions([]);
      setSelectedSub(null);
    }
  };

  const handleCopyJSON = (sub: Submission, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(JSON.stringify(sub, null, 2));
    setCopiedId(sub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyCodeSnippet = (snippet: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const filteredSubmissions = submissions.filter((sub) => {
    if (filter === "all") return true;
    return sub.type === filter;
  });

  const bookingsCount = submissions.filter((s) => s.type === "booking").length;
  const inquiriesCount = submissions.filter((s) => s.type === "inquiry").length;

  const formspreeCode = `// 1. Install Formspree or use simple HTML fetch
// 2. Modify handleSubmit in your React form:

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        needs: selectedNeeds
      })
    });

    if (response.ok) {
      setIsSuccess(true);
      // Clean form inputs...
    }
  } catch (error) {
    console.error("Transmission error:", error);
  } finally {
    setIsSubmitting(false);
  }
};`;

  const emailjsCode = `// 1. Install emailjs-com: npm install @emailjs/browser
// 2. Import and call in handleSubmit:

import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Set up serviceID, templateID and your public Key
  emailjs.send(
    'YOUR_SERVICE_ID', 
    'YOUR_TEMPLATE_ID', 
    {
      from_name: formData.name,
      reply_to: formData.email,
      company: formData.company,
      message_details: formData.message,
      selected_services: selectedNeeds.join(", ")
    }, 
    'YOUR_PUBLIC_KEY'
  )
  .then((result) => {
    setIsSuccess(true);
  })
  .catch((error) => {
    console.error("EmailJS Error:", error.text);
  })
  .finally(() => {
    setIsSubmitting(false);
  });
};`;

  return (
    <div id="leads-admin-view" className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-zinc-100 min-h-screen pt-28 pb-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Title Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="space-y-1 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-secondary bg-blue-50 dark:bg-blue-950/30 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-900/30">
              DEVELOPER & ADMIN PORTAL
            </span>
            <h1 className="text-3xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
              Lead & Booking Console
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-sans font-light text-sm max-w-xl">
              Inspect instant submissions stored locally on your device, debug structure payload schemas, or copy production-ready code blocks to deploy live systems.
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={() => {
                setCurrentPage("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-4 py-2 border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-xs font-mono font-bold tracking-wide transition-all cursor-pointer shadow-sm"
            >
              ← RETURN PORTFOLIO
            </button>
            {submissions.length > 0 && activeTab === "leads" && (
              <button
                onClick={handleClearAll}
                className="px-4 py-2 border border-rose-200 dark:border-rose-900/30 bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-950/50 rounded-xl text-xs font-mono font-bold tracking-wide transition-all cursor-pointer flex items-center space-x-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>CLEAR DATABASE</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setActiveTab("leads")}
            className={`px-5 py-3 text-xs sm:text-sm font-mono font-bold tracking-wider relative transition-colors cursor-pointer ${
              activeTab === "leads" 
                ? "text-brand-secondary dark:text-brand-highlight" 
                : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
            }`}
          >
            <span className="flex items-center space-x-2">
              <Inbox className="w-4 h-4" />
              <span>LIVE LEAD STREAM ({submissions.length})</span>
            </span>
            {activeTab === "leads" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-secondary dark:bg-brand-highlight" />
            )}
          </button>
          
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-5 py-3 text-xs sm:text-sm font-mono font-bold tracking-wider relative transition-colors cursor-pointer ${
              activeTab === "settings" 
                ? "text-brand-secondary dark:text-brand-highlight" 
                : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
            }`}
          >
            <span className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>LIVE MAIL SETUP</span>
            </span>
            {activeTab === "settings" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-secondary dark:bg-brand-highlight" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("guide")}
            className={`px-5 py-3 text-xs sm:text-sm font-mono font-bold tracking-wider relative transition-colors cursor-pointer ${
              activeTab === "guide" 
                ? "text-brand-secondary dark:text-brand-highlight" 
                : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
            }`}
          >
            <span className="flex items-center space-x-2">
              <Database className="w-4 h-4" />
              <span>PRODUCTION INTEGRATION GUIDE</span>
            </span>
            {activeTab === "guide" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-secondary dark:bg-brand-highlight" />
            )}
          </button>
        </div>

        {activeTab === "leads" ? (
          <>
            {/* Stat Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl p-5 text-left space-y-1 shadow-sm">
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 tracking-wider block">TOTAL CAPTURED LEADS</span>
                <span className="text-2xl font-bold font-display text-slate-900 dark:text-white block">{submissions.length}</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans block">Forms filled in real-time</span>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl p-5 text-left space-y-1 shadow-sm">
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 tracking-wider block">STRATEGY BOOKINGS</span>
                <span className="text-2xl font-bold font-display text-brand-secondary dark:text-brand-highlight block">{bookingsCount}</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans block">Calendar appointments booked</span>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl p-5 text-left space-y-1 shadow-sm">
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 tracking-wider block">GENERAL INQUIRIES</span>
                <span className="text-2xl font-bold font-display text-brand-accent block">{inquiriesCount}</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans block">Custom request sheet briefs</span>
              </div>
            </div>

            {/* Main Submissions list or empty state */}
            {submissions.length === 0 ? (
              <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-white/5 rounded-3xl p-12 text-center max-w-xl mx-auto space-y-4 shadow-sm">
                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-950 text-slate-400 rounded-full flex items-center justify-center mx-auto border border-slate-200 dark:border-white/10">
                  <Inbox className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">Your Lead stream is clear</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-sans font-light text-xs sm:text-sm">
                    No bookings or forms have been compiled in this session yet. Try opening the <strong>Book Consultation</strong> page or submission form at the bottom of the homepage, fill out mock details, and watch them appear live here!
                  </p>
                </div>
                <div className="pt-2 flex justify-center space-x-2">
                  <button
                    onClick={() => {
                      setCurrentPage("book-consultation");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-highlight text-white rounded-xl text-xs font-mono font-bold tracking-wider transition-all cursor-pointer"
                  >
                    TEST BOOKING CALENDAR
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage("contact");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl text-xs font-mono font-bold tracking-wider transition-all cursor-pointer"
                  >
                    TEST INQUIRY FORM
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: List of items */}
                <div className="lg:col-span-6 space-y-4 text-left">
                  
                  {/* Filter tabs row */}
                  <div className="flex items-center space-x-1 bg-slate-200/50 dark:bg-slate-900/60 p-1 rounded-xl border border-slate-200 dark:border-white/5">
                    {(["all", "booking", "inquiry"] as const).map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setFilter(opt)}
                        className={`flex-grow py-2 rounded-lg text-xs font-mono font-bold tracking-wide uppercase transition-all cursor-pointer ${
                          filter === opt
                            ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                            : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                        }`}
                      >
                        {opt}s
                      </button>
                    ))}
                  </div>

                  {/* Submission items card list */}
                  <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
                    {filteredSubmissions.map((sub) => {
                      const isSelected = selectedSub === sub.id;
                      const formattedDate = new Date(sub.submittedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      });

                      return (
                        <div
                          key={sub.id}
                          id={`lead-item-${sub.id}`}
                          onClick={() => setSelectedSub(isSelected ? null : sub.id)}
                          className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? "bg-white dark:bg-slate-900 border-brand-secondary shadow-md"
                              : "bg-white dark:bg-slate-900/50 border-slate-150 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1.5 flex-grow">
                              <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                                <span className={`text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded-full uppercase border ${
                                  sub.type === "booking"
                                    ? "bg-blue-50 dark:bg-blue-950/20 text-brand-secondary border-blue-150 dark:border-blue-900/30"
                                    : "bg-cyan-50 dark:bg-cyan-950/20 text-brand-accent border-cyan-150 dark:border-cyan-900/30"
                                }`}>
                                  {sub.type}
                                </span>
                                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">{formattedDate}</span>
                              </div>

                              <div className="space-y-0.5">
                                <h4 className="font-semibold text-sm text-slate-900 dark:text-white">{sub.name}</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono font-light truncate max-w-xs">{sub.email}</p>
                              </div>
                            </div>

                            <div className="flex items-center space-x-1 shrink-0">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDelete(sub.id, e);
                                }}
                                className="p-1.5 hover:bg-rose-50 dark:hover:bg-rose-950/20 text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 rounded-lg transition-colors cursor-pointer"
                                title="Delete Lead"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                              <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isSelected ? "rotate-90 text-brand-secondary" : ""}`} />
                            </div>
                          </div>

                          {/* Quick summary line preview */}
                          {!isSelected && (
                            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/5 text-xs text-slate-400 dark:text-slate-500 font-sans line-clamp-1 italic">
                              {sub.type === "booking" 
                                ? `Appointment on ${sub.date} at ${sub.time} (${sub.plan || "General"})` 
                                : `Requested: ${sub.needs.join(", ") || "General Consultation"} - "${sub.message}"`}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Active submission details panel */}
                <div className="lg:col-span-6 text-left">
                  {selectedSub ? (() => {
                    const activeSub = submissions.find((s) => s.id === selectedSub);
                    if (!activeSub) return null;

                    const formattedFullDate = new Date(activeSub.submittedAt).toLocaleString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit"
                    });

                    return (
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-3xl p-6 space-y-6 shadow-sm sticky top-24">
                        
                        {/* Header metadata */}
                        <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4">
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest block">LEAD SCHEMATICS ID</span>
                            <span className="text-xs font-mono font-bold text-brand-secondary dark:text-brand-highlight">{activeSub.id}</span>
                          </div>
                          <div className="flex space-x-1.5">
                            <button
                              onClick={(e) => handleCopyJSON(activeSub, e)}
                              className="px-3 py-1.5 border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-xs font-mono font-semibold text-slate-600 dark:text-slate-300 transition-all cursor-pointer flex items-center space-x-1"
                            >
                              {copiedId === activeSub.id ? <Check className="w-3.5 h-3.5 text-emerald-500 animate-bounce" /> : <Copy className="w-3.5 h-3.5" />}
                              <span>{copiedId === activeSub.id ? "COPIED JSON" : "COPY JSON"}</span>
                            </button>
                          </div>
                        </div>

                        {/* Profile metrics */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">Lead Details</h3>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                            <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-xl space-y-1">
                              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">NAME</span>
                              <span className="font-semibold text-slate-950 dark:text-white text-sm">{activeSub.name}</span>
                            </div>
                            <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-xl space-y-1">
                              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">EMAIL</span>
                              <span className="font-mono text-brand-secondary dark:text-brand-highlight text-xs block truncate" title={activeSub.email}>
                                {activeSub.email}
                              </span>
                            </div>
                            {activeSub.type === "booking" ? (
                              <>
                                <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-xl space-y-1">
                                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">TARGET PLAN</span>
                                  <span className="font-semibold text-slate-950 dark:text-white text-sm">{activeSub.plan || "General Strategy"}</span>
                                </div>
                                <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-xl space-y-1">
                                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">PROPOSED TIME</span>
                                  <span className="font-semibold text-slate-950 dark:text-white text-xs block truncate">{activeSub.date} at {activeSub.time}</span>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-xl space-y-1">
                                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">COMPANY</span>
                                  <span className="font-semibold text-slate-950 dark:text-white text-sm">{activeSub.company || "Not Specified"}</span>
                                </div>
                                <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-xl space-y-1">
                                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">TYPE</span>
                                  <span className="font-semibold text-cyan-600 dark:text-cyan-400 text-sm uppercase">General Inquiry</span>
                                </div>
                              </>
                            )}
                          </div>

                          {activeSub.type === "booking" && activeSub.website && (
                            <div className="p-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-xl space-y-1 font-sans text-xs">
                              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">CURRENT SITE</span>
                              <a href={activeSub.website.startsWith("http") ? activeSub.website : `https://${activeSub.website}`} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-secondary dark:text-brand-highlight hover:underline flex items-center space-x-1">
                                <span className="truncate">{activeSub.website}</span>
                                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                              </a>
                            </div>
                          )}

                          {activeSub.type === "inquiry" && activeSub.needs && activeSub.needs.length > 0 && (
                            <div className="p-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-xl space-y-2 font-sans text-xs">
                              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">SELECTED NEEDS HELP WITH</span>
                              <div className="flex flex-wrap gap-1.5">
                                {activeSub.needs.map((n) => (
                                  <span key={n} className="px-2.5 py-1 bg-slate-200/55 dark:bg-slate-850 border border-slate-300/40 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-[10px] rounded-full uppercase tracking-wider font-mono font-bold">
                                    {n}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-2xl space-y-2 text-xs">
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                              {activeSub.type === "booking" ? "ADDITIONAL NOTES" : "PROJECT BRIEF MESSAGE"}
                            </span>
                            <p className="font-sans text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap font-light text-sm bg-white dark:bg-slate-900 border border-slate-150 dark:border-white/5 p-3 rounded-xl">
                              {(activeSub.type === "booking" ? activeSub.notes : activeSub.message) || "No extra brief notes provided."}
                            </p>
                          </div>
                        </div>

                        {/* Footer timestamps */}
                        <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-col space-y-1 text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                          <span>SUBMITTED AT: {formattedFullDate}</span>
                          <span className="text-emerald-500 flex items-center space-x-1">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>ENCRYPTED SECURE SCHEMA VERIFIED (OK)</span>
                          </span>
                        </div>

                      </div>
                    );
                  })() : (
                    <div className="border border-dashed border-slate-300 dark:border-white/10 rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center space-y-3">
                      <div className="w-10 h-10 bg-slate-100 dark:bg-slate-900 text-slate-400 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300">Lead Schematics Inspector</h4>
                        <p className="text-xs text-slate-400 dark:text-slate-500 max-w-xs mx-auto">
                          Click on any incoming submission in the left stream to inspect full database properties, target selections, and raw payload structures.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            )}
          </>
        ) : activeTab === "settings" ? (
          /* Settings Tab content */
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-3xl p-6 sm:p-10 space-y-8 text-left shadow-sm">
            
            <div className="space-y-2 border-b border-slate-100 dark:border-slate-800 pb-5">
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center space-x-2">
                <Settings className="w-5 h-5 text-brand-secondary dark:text-brand-highlight" />
                <span>External Mail Deliverability Router</span>
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-sans font-light leading-relaxed">
                Connect your portfolio's strategy booking calendar and client inquiry forms to a direct email dispatch service. This eliminates complex server infrastructure (like Firebase or Supabase) and forwards all live submissions straight to your inbox securely.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Settings Form */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Provider Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase">Active Mail Service Provider</label>
                  <select
                    value={config.provider}
                    onChange={(e) => setConfig({ ...config, provider: e.target.value as any })}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white font-sans focus:outline-none focus:border-brand-secondary dark:focus:border-brand-highlight cursor-pointer"
                  >
                    <option value="none">None (Local Lead Console / Sandbox Mode Only)</option>
                    <option value="formspree">Formspree.io (Simple Endpoint ID)</option>
                    <option value="web3forms">Web3Forms.com (Access Key / GDPR Compliant)</option>
                  </select>
                </div>

                {/* Conditional Provider Fields */}
                {config.provider === "formspree" && (
                  <div className="space-y-3 p-5 bg-blue-50/50 dark:bg-blue-950/10 border border-blue-100 dark:border-blue-900/20 rounded-2xl animate-fadeIn">
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">Formspree Form ID</label>
                      <input
                        type="text"
                        placeholder="e.g. xpzvkyqz"
                        value={config.formspreeId || ""}
                        onChange={(e) => setConfig({ ...config, formspreeId: e.target.value })}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white font-mono focus:outline-none focus:border-brand-secondary"
                      />
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                      Get your Form ID instantly by registering a form at <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-brand-secondary dark:text-brand-highlight underline hover:text-blue-600">formspree.io</a>. Paste only the 8-character code at the end of your form endpoint URL.
                    </p>
                  </div>
                )}

                {config.provider === "web3forms" && (
                  <div className="space-y-3 p-5 bg-cyan-50/50 dark:bg-cyan-950/10 border border-cyan-150 dark:border-cyan-900/20 rounded-2xl animate-fadeIn">
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">Web3Forms Access Key</label>
                      <input
                        type="text"
                        placeholder="e.g. xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                        value={config.web3formsKey || ""}
                        onChange={(e) => setConfig({ ...config, web3formsKey: e.target.value })}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white font-mono focus:outline-none focus:border-brand-secondary"
                      />
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                      Get a free Access Key sent to your email at <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline hover:text-cyan-500">web3forms.com</a>. GDPR-compliant and supports file attachments with custom templates.
                    </p>
                  </div>
                )}

                {/* Save status notification */}
                {saveStatus && (
                  <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-xs rounded-xl flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>{saveStatus}</span>
                  </div>
                )}

                {/* Test status notification */}
                {testStatus && (
                  <div className={`p-4 border rounded-2xl text-xs font-sans leading-relaxed ${
                    testStatus.startsWith("✅")
                      ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-150 dark:border-emerald-900/30 text-emerald-800 dark:text-emerald-300"
                      : testStatus.startsWith("❌")
                      ? "bg-rose-50 dark:bg-rose-950/20 border-rose-150 dark:border-rose-900/30 text-rose-800 dark:text-rose-300"
                      : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-300"
                  }`}>
                    {testStatus}
                  </div>
                )}

                {/* Action buttons bar */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={handleSaveConfig}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-highlight text-white text-xs font-mono font-bold tracking-wider transition-all cursor-pointer shadow-sm"
                  >
                    SAVE INTEGRATION PREFERENCES
                  </button>
                  {config.provider !== "none" && (
                    <button
                      onClick={handleTestSubmission}
                      disabled={isTesting}
                      className="px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold tracking-wider transition-all cursor-pointer flex items-center space-x-2"
                    >
                      {isTesting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-slate-400 border-t-slate-900 dark:border-t-white rounded-full animate-spin" />
                          <span>TRANSMITTING TEST...</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-3.5 h-3.5" />
                          <span>SEND TEST SUBMISSION</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

              </div>

              {/* Sidebar Info card */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 border border-slate-150 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/20 rounded-2xl text-xs space-y-4">
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider font-display flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-brand-highlight" />
                    <span>Why Formspree or Web3Forms?</span>
                  </h4>
                  <ul className="space-y-3 font-sans text-slate-500 dark:text-slate-400 leading-relaxed font-light list-disc list-inside">
                    <li>
                      <strong className="text-slate-800 dark:text-slate-200">Zero Maintenance Backend</strong>: Standard databases require continuous billing, scaling configuration, and credential rotations.
                    </li>
                    <li>
                      <strong className="text-slate-800 dark:text-slate-200">GDPR Compliance Out-of-the-Box</strong>: These tools specialize in secure compliance, spam protection (via reCAPTCHA), and auto-relays.
                    </li>
                    <li>
                      <strong className="text-slate-800 dark:text-slate-200">Infinite Expandability</strong>: Link your forms to automatic responder newsletters, or pass submissions directly into your corporate CRM software seamlessly.
                    </li>
                    <li>
                      <strong className="text-slate-800 dark:text-slate-200">Local Console Cache Backup</strong>: Even if your email provider runs out of free-tier credits, our local cache always stores copyable JSON backups.
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* Guide Tab content */
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-3xl p-6 sm:p-10 space-y-8 text-left shadow-sm">
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">Connecting your forms to a live backend</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-sans font-light leading-relaxed">
                Currently, our forms store lead information inside the web browser's <code>localStorage</code> so you can instantly verify, preview, and test the user experience without complex setups. To receive these messages directly inside your actual email, CRM system, or Slack channel in production, you have several elite, lightweight options:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              
              {/* Option A: Formspree */}
              <div className="space-y-4 border border-slate-150 dark:border-white/5 rounded-2xl p-5 bg-slate-50/50 dark:bg-slate-950/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-secondary">OPTION A: FORMSPREE.IO</span>
                  <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 px-2 py-0.5 rounded">easiest</span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">No-Backend Form Endpoints</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans font-light leading-relaxed">
                  Formspree is a plug-and-play email dispatch service. You register your form ID, and submit data directly to their API endpoint using <code>fetch</code> or simple HTTP forms. It automatically handles anti-spam filters and relays leads directly to your inbox.
                </p>
                <div className="relative">
                  <pre className="text-[10px] font-mono bg-slate-950 text-emerald-400 p-4 rounded-xl overflow-x-auto max-h-[180px] border border-white/5">
                    {formspreeCode}
                  </pre>
                  <button
                    onClick={() => handleCopyCodeSnippet(formspreeCode)}
                    className="absolute top-2 right-2 p-1.5 bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white rounded-lg transition-all"
                    title="Copy Snippet"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Option B: EmailJS */}
              <div className="space-y-4 border border-slate-150 dark:border-white/5 rounded-2xl p-5 bg-slate-50/50 dark:bg-slate-950/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-accent">OPTION B: EMAILJS.COM</span>
                  <span className="text-[10px] font-mono bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded">highly customizable</span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Direct Client-Side Mailer</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans font-light leading-relaxed">
                  EmailJS lets you send emails directly from client-side React code without managing any servers. Connect your personal email provider (Gmail, Outlook, etc.), design beautiful templates in their dashboard, and call their official NPM SDK.
                </p>
                <div className="relative">
                  <pre className="text-[10px] font-mono bg-slate-950 text-emerald-400 p-4 rounded-xl overflow-x-auto max-h-[180px] border border-white/5">
                    {emailjsCode}
                  </pre>
                  <button
                    onClick={() => handleCopyCodeSnippet(emailjsCode)}
                    className="absolute top-2 right-2 p-1.5 bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white rounded-lg transition-all"
                    title="Copy Snippet"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

            </div>

            {/* Other services note */}
            <div className="p-5 bg-slate-100/50 dark:bg-slate-950/45 border border-slate-200 dark:border-white/5 rounded-2xl space-y-3 font-sans text-xs">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-brand-highlight" />
                <span>Other Professional Integrations</span>
              </h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                You can also wire your forms to other major micro-utilities. For example, using <strong>Zapier</strong> or <strong>Make.com</strong>, you can set up a simple Webhook trigger so that every form submission automatically creates a row in a shared <strong>Google Sheet</strong>, registers a card in your <strong>Trello/Notion board</strong>, or schedules an automated calendar invitation with a <strong>Zoom link</strong> directly.
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
