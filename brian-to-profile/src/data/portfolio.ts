import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Cloud,
  Code,
  Compass,
  Database,
  Layers,
  Monitor,
  Server,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";

export const COMPANIES = [
  [
    { name: "MONEY FORWARD", weight: 700, spacing: 2 },
    { name: "CROSSIAN", weight: 600, spacing: 1.5 },
    { name: "NITECO", weight: 500, spacing: 1.5 },
    { name: "FPT", weight: 800, spacing: 1 },
  ],
  [
    { name: "ANDPAD", weight: 700, spacing: 3 },
    { name: "CBTW", weight: 500, spacing: 1 },
    { name: "VIETTEL", weight: 600, spacing: 1 },
    { name: "VinGroup", weight: 700, spacing: 0 },
  ],
] as const;

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  bgGradient: [string, string];
};

export const FEATURES: FeatureItem[] = [
  {
    icon: Code,
    title: "Full-Stack Engineering",
    description:
      "From React to Go, Node.js to Python — end-to-end product delivery at scale.",
    iconColor: "#2563EB",
    bgGradient: ["#DBEAFE", "#BFDBFE"],
  },
  {
    icon: Layers,
    title: "System Architecture",
    description:
      "Microservices, Micro-FE, and cloud-native systems built for millions of users.",
    iconColor: "#0066FF",
    bgGradient: ["#DBEAFE", "#BFDBFE"],
  },
  {
    icon: Zap,
    title: "AI Integration",
    description:
      "RAG, LLMs, and AI-powered tools that boosted team productivity by 30%.",
    iconColor: "#4F46E5",
    bgGradient: ["#E0E7FF", "#C7D2FE"],
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description:
      "Leading 15+ engineers across Vietnam, Japan, and India with clarity and craft.",
    iconColor: "#7C3AED",
    bgGradient: ["#EDE9FE", "#DDD6FE"],
  },
];

export const METRICS = [
  { value: "8x", description: "Concurrent users scaled from 3,500 to 30,000" },
  { value: "30%", description: "Team productivity boost through AI integration" },
  { value: "15%", description: "Reduction in post-shipment defects via Shift Left Testing" },
] as const;

export type CareerEntry = {
  period: string;
  duration: string;
  company: string;
  role: string;
  description: string;
};

export const CAREER: CareerEntry[] = [
  {
    period: "2021 – Present",
    duration: "4+ years",
    company: "Money Forward",
    role: "Principal Engineer · Lead Cross-Border Team",
    description:
      "Led 15+ engineers across Vietnam, Japan, and India. Standardized Micro-FE, Feature Flags, and UI components across the corporation. Integrated AI/ML tools boosting productivity by 30%.",
  },
  {
    period: "2019 – 2021",
    duration: "2 years",
    company: "Crossian",
    role: "Technical Leader · Founder Engineer",
    description:
      "Scaled e-commerce platform 8x (3,500 to 30,000 concurrent users). Architected cross-border dropshipping system with Kafka for robust order processing. Built mobile app with React Native serving millions of customers.",
  },
  {
    period: "2014 – 2019",
    duration: "5 years",
    company: "Niteco",
    role: "Fullstack Developer",
    description:
      "Spearheaded migration from jQuery to modern frameworks (React/Angular/Vue). Built Authentication Microservices with RabbitMQ. Won Best Mentor of Niteco Young Talent Program.",
  },
  {
    period: "2011 – 2014",
    duration: "3 years",
    company: "FPT",
    role: "Backend Developer · Team Leader",
    description:
      "Led development team, managed project lifecycle. Optimized algorithms for device and system performance. Established unit testing and code review practices.",
  },
];

export type ProjectTagColor = "blue" | "orange" | "green" | "purple";

export type Project = {
  company: string;
  tagColor: ProjectTagColor;
  year: string;
  title: string;
  description: string;
  tech: string;
};

export const PROJECTS: Project[] = [
  {
    company: "Money Forward",
    tagColor: "blue",
    year: "2025",
    title: "TMG Payment Gateway",
    description:
      "B2B payment gateway with High-Frequency Trading functionality tailored for SMEs.",
    tech: "Node.js · Bun · Deno · Hono · Next.js · PostgreSQL · QuestDB · Redis · RabbitMQ · OCR",
  },
  {
    company: "Money Forward",
    tagColor: "blue",
    year: "2024",
    title: "Consolidated Accounting",
    description:
      "SaaS that combines parent and subsidiary financials into a single economic entity. AI agents and custom GPTs analyze corporate financial health.",
    tech: "Kotlin · Node.js · Next.js · GraphQL · Qdrant · Redis · PostgreSQL",
  },
  {
    company: "Money Forward",
    tagColor: "blue",
    year: "2023",
    title: "Asset Accounting",
    description:
      "SaaS managing asset lifecycles, depreciation, and financial compliance. Standardized Micro-FE, Feature Flags, UI components, and Log standards across the corporation.",
    tech: "Go · Node.js · Next.js · React · Micro-FE · Monorepo · Kafka · PostgreSQL",
  },
  {
    company: "Crossian",
    tagColor: "orange",
    year: "2020",
    title: "Cross-Border Dropshipping Platform",
    description:
      "Architected the core e-commerce platform serving millions. Scaled concurrent users 8.5x (3,500 → 30,000) and daily orders 7x (7,000 → 50,000). Deep shipping API integration cut lost/wrong packages and PayPal disputes. Fixed legacy memory leaks that caused weekly server crashes.",
    tech: "Next.js · NestJS · Node.js · Kafka · MongoDB · React Native",
  },
  {
    company: "Hobby",
    tagColor: "purple",
    year: "2018",
    title: "YBOX",
    description:
      "Social network for Vietnamese students — career board, skill-sharing groups, and community forums for early-career talent.",
    tech: "Node.js · React · MySQL · Kafka · Redis · Varnish · Cloudflare",
  },
];

export type TechCategory = {
  icon: LucideIcon;
  title: string;
  items: string;
};

export const TECH_STACK: TechCategory[] = [
  {
    icon: Server,
    title: "Backend",
    items: "Node.js · Go · Python · Java\nExpress · NestJS · FastAPI · Spring",
  },
  {
    icon: Monitor,
    title: "Frontend",
    items: "React · Vue · Next.js · Nuxt.js\nMicro-FE · TypeScript · Tailwind",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: "React Native · Expo\nReact Query · Apollo",
  },
  {
    icon: Cloud,
    title: "DevOps",
    items: "AWS · Kubernetes · Docker\nTerraform · ArgoCD · CI/CD",
  },
  {
    icon: Brain,
    title: "AI / ML",
    items: "RAG · LLM · LangChain\nChatGPT · Claude · Gemini",
  },
  {
    icon: Database,
    title: "Database",
    items: "PostgreSQL · MongoDB · Redis\nKafka · ElasticSearch · Firebase",
  },
];

export const CONTACT = {
  email: "longth.bka@gmail.com",
  phone: "(+84) 355 960 650",
  linkedin: "https://www.linkedin.com/in/to-hoang-long-brian/",
  linkedinLabel: "to-hoang-long-brian",
  location: "Hanoi, Vietnam",
} as const;

export const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "tech", label: "Tech", href: "#tech" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;
