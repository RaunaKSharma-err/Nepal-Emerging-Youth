export interface NavLink {
  label: string;
  href: string;
}

export interface ImpactStat {
  label: string;
  value: string;
  suffix?: string;
  icon: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface Program {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  location: string;
  date: string;
  status: "ongoing" | "upcoming" | "completed";
  impact: string;
  highlights: string[];
}

export interface FeaturedInitiative {
  slug: string;
  title: string;
  description: string;
  image: string;
  impactMetric: string;
  impactLabel: string;
  size: "large" | "small";
}

export interface ImpactStory {
  title: string;
  subtitle: string;
  image: string;
  problem: string;
  action: string;
  result: string;
  location: string;
  participants: string;
  volunteers: string;
  outcome: string;
}

export interface EventItem {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  date: string;
  endDate?: string;
  location: string;
  category: string;
  status: "upcoming" | "past";
  registrationOpen: boolean;
  capacity: string;
  highlights: string[];
}

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  readTime: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  category: "executive" | "department-head" | "core-team" | "advisor";
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface Department {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  purpose: string;
  responsibilities: string[];
  lead: string;
  teamSize: string;
  activities: string[];
  contactEmail: string;
  icon: string;
}

export interface Partner {
  name: string;
  category: string;
  logoPlaceholder: string;
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
  type: "founding" | "program" | "award" | "partnership" | "milestone" | "expansion" | "campaign";
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  event: string;
  date: string;
  category: string;
}

export interface DocumentItem {
  title: string;
  type: string;
  year: string;
  description: string;
  fileSize: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface InvolvementPath {
  title: string;
  description: string;
  icon: string;
  cta: string;
  href: string;
}
