import type { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  link?: string;
  image?: string;
  stars?: number;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops';
  level: 1 | 2 | 3 | 4 | 5;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | 'Atual';
  description: string;
  achievements: string[];
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'whatsapp';
  url: string;
  icon: LucideIcon;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface AboutData {
  title: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface PortfolioData {
  about: AboutData;
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  social: SocialLink[];
}
