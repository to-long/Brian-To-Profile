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

export type ProjectTagColor = "blue" | "orange" | "green";

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
    title: "Accounting GPT",
    description:
      "AI assistant published on the GPT Store. Analyzes accounting statements and auto-generates reports for finance teams.",
    tech: "ChatGPT · Qdrant · RAG",
  },
  {
    company: "Money Forward",
    tagColor: "blue",
    year: "2024",
    title: "AI Help Assistant",
    description:
      "In-product RAG chatbot answering user questions in real time. Drove documentation efficiency and UX improvements.",
    tech: "LangChain · Qdrant · Claude",
  },
  {
    company: "Money Forward",
    tagColor: "blue",
    year: "2022",
    title: "Micro-FE Standardization",
    description:
      "Designed the Micro-FE framework adopted across the entire corporation. Earned the MFV Professional Award.",
    tech: "Rsbuild · Module Federation · React",
  },
  {
    company: "Crossian",
    tagColor: "orange",
    year: "2021",
    title: "Real-Time Shipping Integration",
    description:
      "Deep API integration with major shipping providers. Reduced lost/wrong packages and minimized PayPal disputes.",
    tech: "Node.js · Redis · GraphQL",
  },
  {
    company: "Crossian",
    tagColor: "orange",
    year: "2020",
    title: "Cross-Border Dropshipping Platform",
    description:
      "Architected the core platform serving millions. Scaled from 3,500 to 30,000 concurrent users; 50,000 daily orders. Includes React Native mobile app.",
    tech: "Kafka · MongoDB · NestJS · Next.js · React Native",
  },
  {
    company: "Niteco",
    tagColor: "green",
    year: "2018",
    title: "Auth Microservice (Pub/Sub)",
    description:
      "High-performance authentication service shared across multiple European products. Built around RabbitMQ Pub/Sub.",
    tech: "Java · Spring · RabbitMQ · OAuth",
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

export type SideProjectTagColor = "purple" | "blue" | "green";

export type SideProject = {
  tag: string;
  tagColor: SideProjectTagColor;
  year: string;
  title: string;
  description: string;
  tech: string;
  url?: string;
};

export const SIDE_PROJECTS: SideProject[] = [
  {
    tag: "Freelance",
    tagColor: "green",
    year: "2026",
    title: "SwiftPay DeFi",
    description:
      "Decentralized payment gateway — on-chain multi-currency swaps, smart contract escrow, yield-bearing merchant vaults, and fiat off-ramp integration.",
    tech: "Solidity · Web3.js · React · Hardhat · EVM",
  },
  {
    tag: "Freelance",
    tagColor: "green",
    year: "2025",
    title: "TMG Payments",
    description:
      "Payment processing platform for healthcare & automotive businesses — practice management integration, multi-channel payments, surcharge program, and POS terminal management.",
    tech: "NestJs · NextJs · Payment Gateway · POS Integration",
    url: "https://tmgpayments.com",
  },
  {
    tag: "Freelance",
    tagColor: "green",
    year: "2022",
    title: "ImpactCocoa",
    description:
      "Farm-to-bar traceability for sustainable cocoa. Tracks each batch from co-op to chocolate maker; permissions + audit trail for buyers.",
    tech: "React · Node.js · PostgreSQL · AgriTech · SupplyChain",
  },
  {
    tag: "Freelance",
    tagColor: "green",
    year: "2020",
    title: "dutchandco.nl",
    description:
      "Renewable energy company website — solar panel configurator, energy savings calculator, and consultation booking.",
    tech: "Next.js · Strapi CMS · Digital Ocean · Renewable energy",
    url: "https://dutchandco.nl",
  },
  {
    tag: "Freelance",
    tagColor: "green",
    year: "2018",
    title: "Sunnypoint",
    description:
      "Cloud-based CRM and loyalty platform for beauty salons, restaurants, and retail shops in Japan — point card management, marketing automation, reservation system, mobile app, and multi-store analytics serving 2,500+ stores.",
    tech: "Next.js · React Native · Java · MySQL · CRM · Loyalty",
    url: "https://s.sunnypoint.jp",
  },
  {
    tag: "Personal",
    tagColor: "purple",
    year: "2016",
    title: "Ybox.vn",
    description:
      "Social network for Vietnamese students — career board, skill-sharing groups, and community forums for early-career talent.",
    tech: "NodeJs · ReactJs · MySQL · Digital Ocean · Social Network",
    url: "https://ybox.vn",
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
