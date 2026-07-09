export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  clientName: string;
  year: string;
  image: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  // Case Study Details
  challenge: string;
  solution: string;
  designProcess: {
    title: string;
    description: string;
  }[];
  colors: string[]; // hex codes
  typography: string[]; // font names
  results: {
    metric: string;
    label: string;
  }[];
  gallery: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string; // references lucide icon
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  logo: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  id: number;
  phase: string;
  title: string;
  description: string;
  duration: string;
}

export interface ComparisonItem {
  benefit: string;
  enovatos: string;
  others: string;
  isPositive: boolean;
}
