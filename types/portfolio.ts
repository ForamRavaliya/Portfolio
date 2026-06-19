import type { LucideIcon } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Skill = {
  name: string;
  level: number;
};

export type SkillGroup = {
  category: string;
  accent: string;
  skills: Skill[];
};

export type Project = {
  title: string;
  category: "Web App" | "AI Tool" | "Creative" | "Productivity";
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  highlights: string[];
};

export type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  details: string[];
};
