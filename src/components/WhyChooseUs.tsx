import { motion } from "motion/react";
import { Check, X, Shield, FastForward, Award, HelpCircle, HeartHandshake } from "lucide-react";
import { COMPARISON_DATA } from "../data/agencyData";

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: <FastForward className="w-5 h-5 text-brand-highlight" />,
      title: "Sub-Second Load Times",
      desc: "Optimized server responses, zero asset blockage, and headless layouts mean page speeds of <0.8 seconds."
    },
    {
      icon: <Award className="w-5 h-5 text-brand-secondary" />,
      title: "Bespoke Design Architecture",
      desc: "Zero generic stock layouts. We map typography and grid lines to echo your specific market authority."
    },
    {
      icon: <Shield className="w-5 h-5 text-brand-accent" />,
      title: "Security & Scale Immunity",
      desc: "Static architectures bypass WordPress database vulnerabilities, rendering hacking attempts obsolete."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
      title: "Direct Developer Slack",
      desc: "Bypass slow ticket queues. Chat directly with the engineering lead on a dedicated instant channel."
    }
  ];

  return (
    <section id="why-choose-section" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glowing particles */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-highlight bg-white/5 px-3 py-1 rounded-full border border-white/10">
            WHY PARTNER WITH US
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Engineered to Elevate, Built to Convert
          </h2>
          <p className="text-slate-400 font-sans font-light text-base sm:text-lg">
            Compare our elite engineering with standard templates. We build modern websites that load instantly and capture every lead.
          </p>
        </div>

        {/* Benefits Grid - Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 hover:border-brand-secondary/40 hover:bg-slate-900 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold font-display text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-sans font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Board Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/40 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md overflow-hidden"
        >
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-6 text-center sm:text-left">
            Comparative Architecture Board
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono text-slate-400 uppercase tracking-widest">
                  <th className="py-4 px-4 sm:px-6">Benefit Category</th>
                  <th className="py-4 px-4 sm:px-6 text-brand-highlight">Enovatos Standards</th>
                  <th className="py-4 px-4 sm:px-6 text-slate-500">Bloated Page Templates</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {COMPARISON_DATA.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/20 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-300 font-sans">
                      {item.benefit}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-mono text-xs text-emerald-400">
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                        <span>{item.enovatos}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-mono text-xs text-slate-500">
                      <div className="flex items-center space-x-2">
                        <X className="w-3.5 h-3.5 shrink-0 text-rose-500" />
                        <span>{item.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
