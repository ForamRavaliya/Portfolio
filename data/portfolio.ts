import {
  Github,
  Linkedin,
  Mail,
  type LucideIcon
} from "lucide-react";
import type { Project, SkillGroup, SocialLink, TimelineItem } from "@/types/portfolio";

export const profile = {
  name: "Your Name",
  roles: ["Full Stack Developer", "Frontend Developer", "Database Enthusiast"],
  tagline:
    "I build polished, fast, and human-friendly web experiences with React, Next.js, TypeScript, and clean database-backed systems.",
  location: "India",
  email: "youremail@example.com",
  resumeUrl: "/resume.pdf",
  avatarInitials: "YN"
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github as LucideIcon
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin as LucideIcon
  },
  {
    label: "Email",
    href: "mailto:youremail@example.com",
    icon: Mail as LucideIcon
  }
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    accent: "from-cyan to-violet",
    skills: [
      { name: "HTML", level: 94 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 86 },
      { name: "Next.js", level: 82 }
    ]
  },
  {
    category: "Backend",
    accent: "from-coral to-gold",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 75 }
    ]
  },
  {
    category: "Database",
    accent: "from-emerald-300 to-cyan",
    skills: [
      { name: "PostgreSQL", level: 84 },
      { name: "SQL", level: 86 },
      { name: "Supabase", level: 80 }
    ]
  },
  {
    category: "Tools",
    accent: "from-violet to-coral",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "Vercel", level: 84 },
      { name: "Render", level: 76 }
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Dear Diary",
    category: "Web App",
    description:
      "A private journaling app with mood tracking, rich entries, search, and a calm writing-first interface.",
    image: "/projects/dear-diary.svg",
    tech: ["Next.js", "React", "Supabase", "PostgreSQL"],
    github: "https://github.com/yourusername/dear-diary",
    demo: "https://dear-diary-demo.vercel.app",
    highlights: [
      "Authentication-ready database design",
      "Mood-based entry filtering",
      "Responsive editor layout"
    ]
  },
  {
    title: "Marketing Report Generator",
    category: "AI Tool",
    description:
      "A dashboard that transforms campaign metrics into clean summaries, charts, and executive-ready reports.",
    image: "/projects/marketing-report.svg",
    tech: ["React", "Node.js", "Express.js", "Charts"],
    github: "https://github.com/yourusername/marketing-report-generator",
    demo: "https://marketing-report-demo.vercel.app",
    highlights: [
      "Reusable report templates",
      "Data-driven insight blocks",
      "Export-friendly layouts"
    ]
  },
  {
    title: "Drawing Website for Kids",
    category: "Creative",
    description:
      "A playful browser drawing studio with bright tools, touch-friendly controls, and simple save actions.",
    image: "/projects/drawing-kids.svg",
    tech: ["HTML", "CSS", "JavaScript", "Canvas"],
    github: "https://github.com/yourusername/drawing-website-kids",
    demo: "https://drawing-kids-demo.vercel.app",
    highlights: [
      "Canvas-based drawing tools",
      "Kid-friendly interaction patterns",
      "Mobile and tablet optimized"
    ]
  },
  {
    title: "Interview Prep Platform",
    category: "Web App",
    description:
      "A structured preparation platform with question banks, progress tracking, and focused practice flows.",
    image: "/projects/interview-prep.svg",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    github: "https://github.com/yourusername/interview-prep-platform",
    demo: "https://interview-prep-demo.vercel.app",
    highlights: [
      "Topic-wise practice paths",
      "Progress and streak design",
      "Clean question review experience"
    ]
  },
  {
    title: "Bookmark Manager",
    category: "Productivity",
    description:
      "A fast bookmark organizer with tags, search, collections, and a minimal command-driven workflow.",
    image: "/projects/bookmark-manager.svg",
    tech: ["React", "Supabase", "SQL", "Vercel"],
    github: "https://github.com/yourusername/bookmark-manager",
    demo: "https://bookmark-manager-demo.vercel.app",
    highlights: [
      "Tag and collection system",
      "Instant search UX",
      "Supabase-backed persistence"
    ]
  }
];

export const education: TimelineItem[] = [
  {
    title: "Bachelor's Degree / Computer Science Path",
    organization: "Your College or University",
    period: "2022 - 2026",
    details: [
      "Focused on web development, database systems, software engineering, and practical project building.",
      "Built full-stack projects with React, Next.js, PostgreSQL, and deployment workflows."
    ]
  }
];

export const internships: TimelineItem[] = [
  {
    title: "Frontend Developer Intern",
    organization: "Company Name",
    period: "Jun 2025 - Aug 2025",
    details: [
      "Developed responsive React components and collaborated on UI improvements for production pages.",
      "Improved reusable styling patterns with Tailwind CSS and shipped accessible interactive states.",
      "Worked with Git, GitHub pull requests, and deployment previews."
    ]
  }
];

export const resumeHighlights = [
  "Full-stack project experience with React, Next.js, Node.js, Express.js, PostgreSQL, and Supabase.",
  "Strong UI focus: responsive layouts, smooth animations, accessible forms, and clean component systems.",
  "Comfortable deploying modern applications on Vercel and Render with GitHub-based workflows.",
  "Portfolio projects span productivity apps, AI-assisted reporting, creative canvas tools, and learning platforms."
];
