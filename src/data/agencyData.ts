import { Project, Service, Testimonial, BlogPost, PricingPlan, FAQItem, ProcessStep, ComparisonItem } from "../types";
// @ts-ignore
import dangogoHeroImg from "../assets/images/dangogo_hero_1783621829898.jpg";
// @ts-ignore
import rimontHeroImg from "../assets/images/rimont_hero_1783621843590.jpg";
// @ts-ignore
import diabeticHeroImg from "../assets/images/diabetic_hero_1783621855120.jpg";
// @ts-ignore
import bkFinanceHeroImg from "../assets/images/bk_finance_hero_1783621868270.jpg";

export const SERVICES_DATA: Service[] = [
  {
    id: "web-design",
    title: "Website Design",
    description: "Bespoke, high-converting digital experiences designed to position your brand as an industry leader.",
    details: [
      "Custom user interface (UI) design",
      "Interactive high-fidelity prototypes",
      "Tailored layout grids & responsive systems",
      "Immersive motion & transition choreography"
    ],
    iconName: "Palette",
    ctaText: "Design My Site"
  },
  {
    id: "business-sites",
    title: "Business Websites",
    description: "Authority-establishing corporate websites designed for enterprise growth and effortless content management.",
    details: [
      "Custom CMS integrations (Headless, WordPress)",
      "Secure hosting & server architecture",
      "Lead generation & automation flows",
      "Compliance (GDPR, ADA) & localization support"
    ],
    iconName: "Briefcase",
    ctaText: "Build Company Site"
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "Hyper-focused, performance-engineered single pages built with one objective: maximizing your conversion rate.",
    details: [
      "Behavioral psychology-driven copywriting structures",
      "Frictionless lead-capture experiences",
      "A/B testing-ready architecture",
      "Sub-second loading times & page speed optimization"
    ],
    iconName: "Target",
    ctaText: "Launch Campaign"
  },
  {
    id: "ecommerce",
    title: "E-commerce Stores",
    description: "Custom, ultra-fast online shopping environments tailored to maximize average order value and customer retention.",
    details: [
      "Custom cart & instant drawer checkouts",
      "Shopify, Stripe, or headless engine integrations",
      "Interactive 3D product preview capabilities",
      "Multi-currency & robust logistics dashboard syncing"
    ],
    iconName: "ShoppingBag",
    ctaText: "Scale Online Store"
  },
  {
    id: "web-redesign",
    title: "Website Redesign",
    description: "Transform outdated, slow-loading portals into state-of-the-art visual assets with seamless URL migrations.",
    details: [
      "In-depth design & structural audit",
      "Preservation of Google rankings & SEO equity",
      "Modern brand voice realignment",
      "Dramatic speed & usability upgrades"
    ],
    iconName: "RefreshCw",
    ctaText: "Request Redesign Audit"
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    description: "Technical SEO and semantic content structures engineered to dominate Google Search rankings.",
    details: [
      "Core Web Vitals remediation",
      "Structured data & JSON-LD schemas",
      "Competitive keyword clustering",
      "Local and international search optimization"
    ],
    iconName: "TrendingUp",
    ctaText: "Boost Rankings"
  },
  {
    id: "branding",
    title: "Branding & Identity",
    description: "Cohesive typography, visual guidelines, and brand styling that command a premium in your market.",
    details: [
      "Logo mark & visual guidelines design",
      "Strategic market positioning assets",
      "Custom SVG illustration & icon libraries",
      "Social media and collateral stylesheets"
    ],
    iconName: "Sparkles",
    ctaText: "Define Brand"
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    description: "Dedicated server scaling, real-time security updates, and daily performance-monitoring assistance.",
    details: [
      "Daily backups with one-click restore points",
      "24/7 uptime monitoring & crash alerts",
      "Vulnerability assessment & secure patch cycles",
      "Instant graphic & content updates on-demand"
    ],
    iconName: "ShieldCheck",
    ctaText: "Secure My Site"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "fatima-dangogo",
    title: "Fatima Dangogo Portfolio",
    subtitle: "High-End Editorial Identity & Author Portfolio",
    category: "Branding & Identity",
    clientName: "Fatima Dangogo",
    year: "2026",
    image: dangogoHeroImg,
    bgColor: "bg-stone-900",
    textColor: "text-stone-100",
    accentColor: "from-amber-500 to-amber-700",
    liveUrl: "https://www.fatimadangogo.com",
    challenge: "Fatima Dangogo needed a prestigious digital home that acts as a living archive for her literary portfolios, advocacy logs, and curated articles. The existing site had generic layout grids, lacking the emotional, bespoke luxury that represents premium editorial authority.",
    solution: "We styled an immersive web narrative around delicate editorial typography (serif headings) paired with generous negative space and a clean, responsive publication reader. We integrated interactive article filters and a lightweight newsletter capture flow to boost subscriber engagement by over 140%.",
    designProcess: [
      { title: "Art Direction", description: "Drafted a clean, literary atmosphere utilizing classic stone palettes and high-contrast editorial structures." },
      { title: "Publication Engine", description: "Constructed a custom, responsive collection grid with smooth state-based filtering for essays and books." },
      { title: "Speed Optimization", description: "Stripped unused stylesheets to guarantee instantaneous page loading on all cellular devices." }
    ],
    colors: ["#1C1917", "#D6D3D1", "#D97706", "#292524"],
    typography: ["Playfair Display", "Inter"],
    results: [
      { metric: "+140%", label: "Reader Session Length" },
      { metric: "99/100", label: "SEO & Performance Audit" },
      { metric: "+85%", label: "Newsletter Sign-ups" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80"
    ],
    testimonial: {
      quote: "Working with Enovatos has completely elevated my personal brand's digital presence. The website is an absolute visual masterpiece that reads beautifully on any device.",
      author: "Fatima Dangogo",
      role: "Author & Philanthropist",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
    }
  },
  {
    id: "rimont-global",
    title: "Rimont Global",
    subtitle: "B2B Supply Chain & International Commerce Portal",
    category: "Business Websites",
    clientName: "Rimont Global Services",
    year: "2025",
    image: rimontHeroImg,
    bgColor: "bg-slate-950",
    textColor: "text-white",
    accentColor: "from-blue-600 to-indigo-600",
    liveUrl: "http://rimontglobal.site",
    challenge: "Rimont Global handles massive international shipping, consulting, and trading agreements, yet their digital presence lacked structural trust and looked generic, losing prospective enterprise partnerships to older competitors.",
    solution: "We established a powerful, dark-themed corporate portal highlighting real-time logistic stats, structural capability grids, and an intuitive, interactive cargo quote calculator. The site was engineered with Tailwind CSS to ensure fluid responsive adaptations for international trade partners browsing on the move.",
    designProcess: [
      { title: "Structural Planning", description: "Mapped user flows to place cargo capabilities and corporate credibility metrics directly above the fold." },
      { title: "UI Development", description: "Employed high-performance vector icons and crisp, modern grids emphasizing reliability and scale." },
      { title: "Automation", description: "Designed an integrated consultation and quoting pipeline directly connected to their CRM." }
    ],
    colors: ["#020617", "#3B82F6", "#6366F1", "#1E293B"],
    typography: ["Inter", "JetBrains Mono"],
    results: [
      { metric: "+210%", label: "Enterprise Leads Generated" },
      { metric: "100/100", label: "Mobile Compatibility Score" },
      { metric: "0.8s", label: "Initial Server Response" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80"
    ],
    testimonial: {
      quote: "Our digital footprint now matches our operational power. The corporate portal designed by Enovatos has secured high-value trade accounts that previously would have overlooked us.",
      author: "Alexander Rimont",
      role: "Managing Director, Rimont Global",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
    }
  },
  {
    id: "9ja-diabetic-health",
    title: "9ja Diabetic & Health",
    subtitle: "Interactive Medical Wellness & Diabetic Care Platform",
    category: "Landing Pages",
    clientName: "9ja Diabetic & Health Foundation",
    year: "2026",
    image: diabeticHeroImg,
    bgColor: "bg-teal-950",
    textColor: "text-white",
    accentColor: "from-emerald-400 to-teal-500",
    liveUrl: "http://9jadiabeticandhealth.site",
    challenge: "Specialized diabetes care and dietary tracking in Nigeria required a highly friendly, lightweight portal that operates flawlessly over slow mobile connections (3G/4G networks) while breaking down medical jargon into visual lifestyle steps.",
    solution: "We crafted a bright, trust-inspiring educational and booking hub. It includes an interactive diabetic carb calculator, local dietary recipes optimized for nutritional intake, and a direct digital booking flow with certified wellness experts.",
    designProcess: [
      { title: "Friction Audit", description: "Slashed medical terminology complexity and designed highly engaging interactive health meters." },
      { title: "Asset Optimization", description: "Engineered custom, ultra-lightweight illustrations and cached database records to serve instant pages over thin bandwidths." },
      { title: "Conversion Hooking", description: "Designed clear, direct CTA paths to booking slots and localized nutrition guidelines." }
    ],
    colors: ["#042F2E", "#10B981", "#14B8A6", "#0F172A"],
    typography: ["Outfit", "Inter"],
    results: [
      { metric: "+185%", label: "Telehealth Consultations Booked" },
      { metric: "400ms", label: "Page Asset Interactivity (FID)" },
      { metric: "15K+", label: "Active Nutritional Readers" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80"
    ],
    testimonial: {
      quote: "A life-saving digital asset for our community. It loads instantly even in regions with slow internet connectivity, putting diagnostic metrics and professional bookings in everyone's hands.",
      author: "Dr. Ngozi Bello",
      role: "Chief Wellness Officer, 9ja Health",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
    }
  },
  {
    id: "bk-finance",
    title: "BK Finance",
    subtitle: "Next-Generation Corporate Investment & Fintech Hub",
    category: "Website Design",
    clientName: "BK Finance Group",
    year: "2026",
    image: bkFinanceHeroImg,
    bgColor: "bg-slate-950",
    textColor: "text-white",
    accentColor: "from-indigo-500 to-violet-600",
    liveUrl: "https://bk-finance-iota.vercel.app",
    challenge: "BK Finance wanted to launch a modern investment and trading ecosystem. Their prototype looked cluttered and generic, which failed to reassure high-net-worth investors looking for absolute financial security and clarity.",
    solution: "We designed an ultra-sleek, dark financial portal using real-time asset dashboards, premium grid-aligned statistics cards, and a custom interactive investment simulator. High contrast micro-interactions and security metrics are woven directly into the visual interface.",
    designProcess: [
      { title: "Interface Overhaul", description: "Refined raw transaction visual data into clean, readable graphs and crisp financial blocks." },
      { title: "Interactive Tools", description: "Developed a reactive investment compounder tool calculating returns instantly." },
      { title: "Core Vitals", description: "Engineered with high-speed caching modules to support real-time data visualizers without lagging the UI." }
    ],
    colors: ["#020617", "#6366F1", "#8B5CF6", "#0F172A"],
    typography: ["Space Grotesk", "Fira Code"],
    results: [
      { metric: "+160%", label: "Platform Trust Score" },
      { metric: "99/100", label: "Performance Index" },
      { metric: "$18M+", label: "Projected Capital Pipeline" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80"
    ],
    testimonial: {
      quote: "Our capital pipeline surged after the relaunch. The aesthetic clarity combined with the custom interactive investment simulator builds instant authority with our clients.",
      author: "Benjamin Kalu",
      role: "Founder & Principal, BK Finance",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
    }
  },
  {
    id: "aura-wearables",
    title: "Aura Wearables",
    subtitle: "Next-Gen Biometric Ring Commerce Platform",
    category: "E-commerce Stores",
    clientName: "Aura Inc.",
    year: "2026",
    image: "https://images.unsplash.com/photo-1613987549866-256801a5b67a?auto=format&fit=crop&w=1200&q=80",
    bgColor: "bg-slate-950",
    textColor: "text-white",
    accentColor: "from-cyan-400 to-blue-500",
    challenge: "Aura Wearables was experiencing a critical 4.2% drop-off rate on their custom size-selection stage during checkout. Their previous page felt clinical, loading took over 3.4 seconds, and users struggled to visualize the luxury matte finish of the biometric rings.",
    solution: "We engineered a headless custom commerce system leveraging a 3D canvas renderer for high-fidelity ring visualization, combined with an animated interactive sizing step. By pre-rendering product variants and routing cart updates instantly, we stripped latency down to a fraction of a second.",
    designProcess: [
      { title: "Discovery", description: "Audit of existing funnel analytics showed 52% of visitors exited on the size selection screen." },
      { title: "Visual Style", description: "Established an elegant high-contrast dark palette to reflect biometric luxury and precision." },
      { title: "Engineering", description: "Utilized client-side cache layers and optimized lightweight image sequences to simulate a 3D rotary control." }
    ],
    colors: ["#0B1220", "#22D3EE", "#2563EB", "#0F172A"],
    typography: ["Space Grotesk", "Plus Jakarta Sans"],
    results: [
      { metric: "+142%", label: "Conversion Rate Increase" },
      { metric: "99/100", label: "Lighthouse Performance" },
      { metric: "-48%", label: "Sizing-Related Returns" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    ],
    testimonial: {
      quote: "Enovatos transformed our entire online presence. Our checkout completion has doubled, and the digital luxury of our product is felt instantly by our buyers.",
      author: "Marcus Vance",
      role: "VP of Product, Aura Wearables",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
    }
  },
  {
    id: "zenith-crm",
    title: "Zenith CRM",
    subtitle: "Enterprise SaaS Dashboard & Marketing Suite",
    category: "Website Design",
    clientName: "Zenith Ltd",
    year: "2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    bgColor: "bg-white",
    textColor: "text-slate-900",
    accentColor: "from-blue-600 to-indigo-600",
    challenge: "Zenith's old marketing suite felt overly complex, dry, and failed to differentiate its custom CRM workflow features. High bounce rates of 62% indicated that enterprise prospects left before requesting a demo.",
    solution: "We re-architected the marketing funnel with high-end, self-guided product feature previews. Prospects can now customize a mock dashboard in real-time, visualizing Zenith's speed benefits immediately. We paired this with ultra-crisp typography and interactive case data.",
    designProcess: [
      { title: "Wireframing", description: "Redefined the user journey to present a visual mock dashboard above the fold." },
      { title: "Interactive Mockups", description: "Built fully responsive client-side widgets to emulate dashboard filters." },
      { title: "Speed Scaling", description: "Bypassed typical heavy frameworks to deliver raw static-site loading speed." }
    ],
    colors: ["#F8FAFC", "#2563EB", "#7C3AED", "#1E293B"],
    typography: ["Inter", "Fira Code"],
    results: [
      { metric: "-34%", label: "Visitor Bounce Rate" },
      { metric: "+88%", label: "Demo Booking Volume" },
      { metric: "1.2s", label: "Average TTI Time" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"
    ],
    testimonial: {
      quote: "We are getting high-quality enterprise inquiries at a scale we've never seen before. Enovatos' UI craftsmanship speaks for itself.",
      author: "Sarah Jenkins",
      role: "Chief Marketing Officer, Zenith CRM",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
    }
  },
  {
    id: "apex-luxury",
    title: "Apex Living",
    subtitle: "Cinematic Real Estate & Penthouse Portal",
    category: "Portfolio Websites",
    clientName: "Apex Development Group",
    year: "2026",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    bgColor: "bg-stone-900",
    textColor: "text-stone-100",
    accentColor: "from-amber-400 to-orange-600",
    challenge: "Traditional real estate grids failed to express the luxury story of Apex's $15M+ penthouses. Standard MLS static imagery led to cold reception and low interaction times from luxury buyers.",
    solution: "We designed a fully immersive, narrative-driven portfolio site using giant, full-bleed cinematic video/image crossfades, spatial canvas maps, and responsive, fluid floorplan exploration. Rich typography and curated negative space deliver a digital experience akin to a high-end physical coffee-table book.",
    designProcess: [
      { title: "Art Direction", description: "Curated warm stone-gray palettes, paired with sophisticated editorial serif headings." },
      { title: "Floorplan Module", description: "Created a custom SVGs overlay engine mapping property photos to structural blue-prints." },
      { title: "Optimization", description: "Implemented state-of-the-art WebP generation and progressive loading of heavy high-res media assets." }
    ],
    colors: ["#1C1917", "#D6D3D1", "#D97706", "#292524"],
    typography: ["Playfair Display", "Inter"],
    results: [
      { metric: "$4.2M", label: "Direct Penthouse Sales" },
      { metric: "4m 12s", label: "Average Session Time" },
      { metric: "99%", label: "Mobile Usability Score" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
    ],
    testimonial: {
      quote: "Enovatos understood the luxury sector instantly. They built an elegant masterpiece that sells our units almost entirely by itself.",
      author: "Dominic Thorne",
      role: "Managing Director, Apex Group",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
    }
  }
];

export const BEFORE_AFTER_PROJECT: { beforeImg: string, afterImg: string, title: string, desc: string } = {
  title: "Outdated Travel Agent Portal Redesign",
  desc: "How we revamped an outdated travel directory from a slow, cluttered table layout into a fast, highly aesthetic immersive booking hub.",
  beforeImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=40&auto=compress",
  afterImg: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80"
};

export const COMPARISON_DATA: ComparisonItem[] = [
  { benefit: "Performance & PageSpeed", enovatos: "Sub-1 second Load Times (Lighthouse 98+ Score)", others: "Bloated templates (Lighthouse 45-60 Score)", isPositive: true },
  { benefit: "Design Architecture", enovatos: "100% Bespoke, Tailwind-engineered fluid layouts", others: "Reused generic stock layout folders", isPositive: true },
  { benefit: "Technical SEO & Structure", enovatos: "Full Schema, structured metadata, perfect semantic HTML", others: "Missing descriptive tags & bad heading hierarchy", isPositive: true },
  { benefit: "User Experience (UX)", enovatos: "Curated click pathways & immersive spatial interaction", others: "Cluttered popups and confusing navigational links", isPositive: true },
  { benefit: "Lifetime Support Options", enovatos: "Direct instant developer slack support channels", others: "Slow outsourced ticket queues", isPositive: true },
  { benefit: "Mobile-First Responsiveness", enovatos: "Fluid auto-layout adapters built for all screen sizes", others: "Awkward resizing, cropped images & misaligned elements", isPositive: true }
];

export const PROCESS_TIMELINE: ProcessStep[] = [
  { id: 1, phase: "01", title: "Discovery & Strategy", description: "We deep-dive into your competitive landscape, funnel analytics, and growth objectives to align our roadmap.", duration: "Week 1" },
  { id: 2, phase: "02", title: "Information & Planning", description: "Drafting the exact site map, core copywriting hooks, and structural user flows for conversion.", duration: "Week 1" },
  { id: 3, phase: "03", title: "Wireframing & Layouts", description: "High-contrast structural sketches to map content priority and verify click paths before graphics.", duration: "Week 2" },
  { id: 4, phase: "04", title: "Creative UI Design", description: "Crafting beautiful layouts, pairing typography, choosing color tokens, and choreographing motions.", duration: "Week 2-3" },
  { id: 5, phase: "05", title: "Performance Engineering", description: "Translating static Figma blueprints into clean, componentized, ultra-fast production-ready React.", duration: "Week 3-4" },
  { id: 6, phase: "06", title: "Rigorous Testing", description: "Testing responsive sizes across 12+ physical devices, validating forms, and auditing SEO metadata.", duration: "Week 4" },
  { id: 7, phase: "07", title: "Seamless Launch", description: "Directing server migrations, securing SSL handshakes, and indexing search consoles with zero downtime.", duration: "Launch Day" },
  { id: 8, phase: "08", title: "Lifetime Support & Scale", description: "Delivering custom training clips, automated safety back-ups, and strategic growth consultations.", duration: "Ongoing" }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Alexander Rossi",
    role: "Founder",
    company: "Velo Electric",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 5,
    text: "Enovatos has set the bar unbelievably high. Our online bookings went up by 120% within the first month of launching the redesign. Truly world-class designers.",
    logo: "VELO"
  },
  {
    id: "t2",
    name: "Claudia Kim",
    role: "Head of Marketing",
    company: "Mirage AI",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 5,
    text: "Their attention to fluid interactions and clean typography is on par with teams from Apple or Stripe. They took our complex AI product and made it feel effortlessly premium.",
    logo: "MIRAGE"
  },
  {
    id: "t3",
    name: "Jameson Blake",
    role: "Direct of Operations",
    company: "Helix Retail",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 5,
    text: "The speed optimization alone was worth the investment. Our custom Stripe checkout screen is blazing fast, and mobile customer complaints dropped to zero.",
    logo: "HELIX"
  }
];

export const STATS_DATA = [
  { value: 124, suffix: "+", label: "Premium Websites Designed" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 14, suffix: "m", label: "Client Inquiries Generated" },
  { value: 99, suffix: "/100", label: "Average Performance Score" },
  { value: 8, suffix: "Yrs", label: "Creative Industry Mastery" }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter Applet",
    price: "$3,499",
    period: "one-time",
    description: "Perfect for fast-growing startups requiring a hyper-focused landing page or small modular business site.",
    features: [
      "100% Custom bespoke UI/UX mockup",
      "Up to 5 highly-optimized modular sections",
      "Fully responsive mobile-first architecture",
      "Technical SEO & schema implementation",
      "Vite & Tailwind sub-second speed setup",
      "Stripe or custom booking calendar sync",
      "30 Days of premium post-launch support"
    ],
    notIncluded: [
      "Multi-category database structure",
      "Before/After migration audit files",
      "Custom 3D model loaders",
      "Lifetime automated secure backup servers"
    ],
    ctaText: "Choose Starter Plan"
  },
  {
    name: "Growth Professional",
    price: "$6,899",
    period: "one-time",
    description: "Our most popular package. Complete high-converting agency marketing suite with advanced interactive visual items.",
    features: [
      "Up to 12 bespoke semantic pages",
      "Full interactive custom CMS layout setup",
      "Interactive comparison tools & filters",
      "High-end custom vector graphics & transitions",
      "Before/After layout overhaul audits",
      "Dynamic interactive contact forms",
      "Uptime speed assurance caching configuration",
      "90 Days of direct developer slack support"
    ],
    notIncluded: [
      "Custom headless multi-currency checkout engine",
      "Continuous monthly branding stylesheets"
    ],
    isPopular: true,
    ctaText: "Select Professional Plan"
  },
  {
    name: "Enterprise Authority",
    price: "$12,499",
    period: "one-time",
    description: "The ultimate solution for scaling businesses who want to completely command their market category.",
    features: [
      "Unlimited premium custom pages",
      "Custom Headless E-commerce checkout integration",
      "Sophisticated interactive spatial/3D assets",
      "Full branding overhaul & comprehensive design systems",
      "Multi-language translation localization modules",
      "Continuous server level speed optimizations",
      "1 Year of priority developer slack & zoom standby",
      "Lifetime monthly minor upgrade hours"
    ],
    ctaText: "Enquire for Enterprise"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you use pre-made WordPress or Webflow templates?",
    answer: "Absolutely not. We write custom, lightweight, clean React code with Tailwind CSS to ensure your website is 100% unique, insanely fast, and completely immune to the structural bloat and security exploits of traditional stock templates. Every layout is built from a blank canvas specifically tailored to your brand goals.",
    category: "Design & Code"
  },
  {
    id: "faq-2",
    question: "How long does a premium website project typically take?",
    answer: "A standard Growth Professional website project takes between 3 to 5 weeks from initial strategy research to deployment. A custom Starter landing page can be completed in about 1 to 2 weeks, while complex custom enterprise solutions with bespoke features can take up to 6-8 weeks.",
    category: "Process"
  },
  {
    id: "faq-3",
    question: "Will my website redesign affect my current Google search rankings?",
    answer: "We perform a thorough structural SEO audit and setup precise 301 redirect mapping files before launching any redesigned site. This ensures that every single ounce of your previous organic authority, ranking points, and Google index equity is completely preserved, and usually drastically enhanced due to massive speed and layout hierarchy upgrades.",
    category: "SEO"
  },
  {
    id: "faq-4",
    question: "Do you offer flexible payment structures and support packages?",
    answer: "Yes. Our standard payment schedule is 50% upfront and 50% upon successful project launch. For larger enterprise setups, we can spread payments across defined milestones. Once launched, we provide multiple optional support tiers ranging from on-demand developer support to daily updates, uptime checking, and security monitoring.",
    category: "Pricing & Support"
  },
  {
    id: "faq-5",
    question: "What makes Enovatos different from generic digital agencies?",
    answer: "Unlike agencies that build heavy, slow-loading cookie-cutter sites, Enovatos blends top-tier creative art direction (Awwwards level) with elite full-stack performance engineering. We design high-end conversion systems driven by behavioral psychology and build them to load in less than 1 second, turning passive traffic into loyal paying customers.",
    category: "General"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "How We Achieved a 124% E-commerce Conversion Boost Using Spatial UI Patterns",
    category: "UI/UX Design",
    date: "July 02, 2026",
    readTime: "5 min read",
    excerpt: "Discover the specific behavioral psychology principles and modular interface designs we deployed to maximize checkout engagement on modern web stores.",
    content: "Spatial UI patterns and dynamic sizing previews are changing how consumers interact with premium retail brands online. By shifting from cold tabular dropdowns to immersive, visually simulated tactile choices, user anxiety is slashed. In this deep dive, we outline how our custom-crafted size selector for Aura Wearables halved product returns, reduced transaction friction, and bolstered average cart checkout metrics by over 124%.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Marcus Miller",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
    }
  },
  {
    id: "b2",
    title: "The Death of Bloated WordPress Page Builders: Why Headless React Wins in 2026",
    category: "Development",
    date: "June 25, 2026",
    readTime: "7 min read",
    excerpt: "Every 100ms of latency costs businesses 1% of sales. We analyze why custom React websites outperform WordPress and Webflow in both search rankings and actual enterprise sales conversions.",
    content: "Traditional page-builder frameworks introduce immense DOM depth, bulky static payloads, and continuous database lookups on every request. Headless architectures completely decouple content editing from rendering. By pre-compiling pages into hyper-optimized static nodes deployed on edge networks, user click-to-render experiences are instantaneous, forcing bounce rates to plummet and Google crawlers to favor your pages above everyone else.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Sophia Martinez",
      role: "Lead Performance Engineer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
    }
  },
  {
    id: "b3",
    title: "Crafting Emotional Brand Identities That Command Premium Pricing",
    category: "Branding",
    date: "May 18, 2026",
    readTime: "4 min read",
    excerpt: "A brand is not just a logo — it is the emotional friction or clarity your customers feel at every point of interaction. Learn our proprietary branding framework.",
    content: "High-end buyers do not justify choices using features; they validate them using perceived alignment, security, and status. Learn how premium micro-typographies, structured visual spacing rules, and eye-friendly, comfortable high-contrast grids can double the perceived value of your software or service, allowing you to confidently ask for premium pricing in competitive markets.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Dante Rossi",
      role: "Chief Brand Strategist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
    }
  }
];
