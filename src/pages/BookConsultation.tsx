import React, { useState, useEffect } from "react";
import { Calendar as CalendarIcon, Clock, Users, ArrowRight, CheckCircle2, ChevronRight, User, Mail, Globe, CalendarDays } from "lucide-react";

interface BookConsultationProps {
  setCurrentPage: (page: string) => void;
}

export default function BookConsultation({ setCurrentPage }: BookConsultationProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    notes: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  // Retrieve any plan selected in the pricing page
  useEffect(() => {
    const savedPlan = sessionStorage.getItem("requestedPlan");
    if (savedPlan) {
      setSelectedPlan(savedPlan);
      sessionStorage.removeItem("requestedPlan"); // clean up
    }
  }, []);

  const dates = [
    { day: "MON", num: "13", month: "Jul", slots: 3, raw: "Monday, July 13" },
    { day: "TUE", num: "14", month: "Jul", slots: 4, raw: "Tuesday, July 14" },
    { day: "WED", num: "15", month: "Jul", slots: 2, raw: "Wednesday, July 15" },
    { day: "THU", num: "16", month: "Jul", slots: 5, raw: "Thursday, July 16" },
    { day: "FRI", num: "17", month: "Jul", slots: 1, raw: "Friday, July 17" }
  ];

  const timeSlots = [
    "09:30 AM",
    "11:00 AM",
    "01:30 PM",
    "03:00 PM",
    "04:30 PM"
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 1500);
  };

  return (
    <div id="booking-page-view" className="bg-slate-950 text-white min-h-screen pt-28 pb-20 grid-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="text-left space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-highlight bg-white/5 px-3 py-1 rounded-full border border-white/10">
            STRATEGY SCREENING
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight tracking-tight">
            Schedule Your Strategic Consultation
          </h1>
          <p className="text-slate-400 font-sans font-light text-sm sm:text-base max-w-2xl">
            Book a 20-minute video session. We will evaluate your current page metrics, analyze conversion leaks, and outline an elite custom roadmap.
          </p>
        </div>

        {/* Form Container */}
        {isBooked ? (
          <div id="booking-success-box" className="bg-slate-900 border border-brand-secondary/30 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-display text-white">Your Strategy Session is Secured!</h2>
              <p className="text-slate-400 font-sans font-light text-sm">
                We have generated and dispatched calendar credentials to <span className="text-brand-highlight font-medium">{formData.email}</span>. Please review your inbox.
              </p>
            </div>

            {/* Booked parameters review */}
            <div className="bg-slate-950 border border-white/5 rounded-2xl p-5 text-left grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-slate-500 block">TIME & DATE</span>
                <span className="text-white font-semibold flex items-center space-x-1.5">
                  <CalendarIcon className="w-3.5 h-3.5 text-brand-secondary" />
                  <span>{selectedDate} @ {selectedTime}</span>
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 block">TARGET STRATEGY</span>
                <span className="text-white font-semibold flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-accent" />
                  <span>{selectedPlan || "General Consultation"} Plan Audit</span>
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => {
                  setCurrentPage("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-highlight text-white text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer"
              >
                RETURN HOME PORTFOLIO
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Box: Calendar date & time slots selection */}
            <div className="lg:col-span-7 bg-slate-900 border border-white/5 rounded-3xl p-6 sm:p-8 space-y-8 flex flex-col justify-between">
              
              {/* Date selection picker */}
              <div className="space-y-4">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center space-x-2">
                  <CalendarDays className="w-4 h-4 text-brand-highlight" />
                  <span>1. Select a Date (July 2026)</span>
                </label>
                
                <div className="grid grid-cols-5 gap-2">
                  {dates.map((d) => {
                    const isSelected = selectedDate === d.raw;
                    return (
                      <button
                        type="button"
                        key={d.num}
                        id={`date-btn-${d.num}`}
                        onClick={() => {
                          setSelectedDate(d.raw);
                          setSelectedTime(null); // reset time
                        }}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "bg-brand-secondary border-brand-secondary text-white shadow-lg"
                            : "bg-slate-950 border-white/5 hover:border-white/15 text-slate-400 hover:text-white"
                        }`}
                      >
                        <span className="text-[10px] font-mono block opacity-60">{d.day}</span>
                        <span className="text-lg font-bold font-display block leading-none mt-1">{d.num}</span>
                        <span className="text-[8px] font-mono block opacity-60 mt-0.5">{d.month}</span>
                        <span className={`text-[7px] font-mono tracking-tighter block mt-1 px-1 rounded-full ${
                          d.slots === 1 ? "bg-rose-500/20 text-rose-300" : "bg-emerald-500/10 text-emerald-300"
                        }`}>
                          {d.slots} left
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time selection picker */}
              <div className="space-y-4 border-t border-white/5 pt-6 flex-grow">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-brand-accent" />
                  <span>2. Select an Available Slot</span>
                </label>

                {selectedDate ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timeSlots.map((t) => {
                      const isSelected = selectedTime === t;
                      return (
                        <button
                          type="button"
                          key={t}
                          id={`time-btn-${t.replace(/[\s:]/g, "-").toLowerCase()}`}
                          onClick={() => setSelectedTime(t)}
                          className={`p-3 rounded-xl border text-xs font-mono tracking-wider transition-all cursor-pointer ${
                            isSelected
                              ? "bg-brand-accent border-brand-accent text-white shadow-lg"
                              : "bg-slate-950 border-white/5 hover:border-white/10 text-slate-300"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8 bg-slate-950/60 rounded-xl border border-white/5 text-xs text-slate-500 font-mono">
                    Please pre-select a calendar date above to reveal available times.
                  </div>
                )}
              </div>

              {/* Package selector sync */}
              <div className="border-t border-white/5 pt-6 text-left space-y-3">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block">
                  3. Associated Pricing Package (Optional)
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-300 focus:outline-none focus:border-brand-secondary transition-colors cursor-pointer"
                >
                  <option value="">General Custom Consultation (Free)</option>
                  <option value="Starter Applet">Starter Applet ($3,499)</option>
                  <option value="Growth Professional">Growth Professional ($6,899)</option>
                  <option value="Enterprise Authority">Enterprise Authority ($12,499)</option>
                </select>
              </div>

            </div>

            {/* Right Box: client contact details */}
            <div className="lg:col-span-5 bg-slate-900 border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              
              <div className="space-y-6 text-left">
                <h3 className="text-lg font-bold font-display text-white border-b border-white/5 pb-4">
                  Inquiry Details
                </h3>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase">Your Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Marcus Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 pl-10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-secondary transition-colors"
                    />
                    <User className="absolute left-3.5 top-3.5 w-3.5 h-3.5 text-slate-500" />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 pl-10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-secondary transition-colors"
                    />
                    <Mail className="absolute left-3.5 top-3.5 w-3.5 h-3.5 text-slate-500" />
                  </div>
                </div>

                {/* Website */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase">Current Website (Optional)</label>
                  <div className="relative">
                    <input
                      type="url"
                      placeholder="https://company.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 pl-10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-secondary transition-colors"
                    />
                    <Globe className="absolute left-3.5 top-3.5 w-3.5 h-3.5 text-slate-500" />
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase">Brief Meeting Goals</label>
                  <textarea
                    rows={3}
                    placeholder="We want to analyze our page load speeds and redesign our size selection flows..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-secondary transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Booking Action */}
              <div className="pt-6">
                <button
                  type="submit"
                  id="booking-confirm-submit-btn"
                  disabled={isSubmitting || !selectedDate || !selectedTime}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-secondary to-brand-accent hover:from-brand-accent hover:to-brand-highlight text-white text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>REGISTERING RESERVATION...</span>
                  ) : (
                    <>
                      <span>CONFIRM CONSULTATION BOOKING</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                {!selectedDate && (
                  <p className="text-[10px] text-rose-400 text-center mt-2 font-mono">
                    * Please select both a Date and Time slot to confirm.
                  </p>
                )}
              </div>

            </div>

          </form>
        )}

      </div>
    </div>
  );
}
