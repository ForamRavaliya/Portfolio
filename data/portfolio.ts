import {
  Github,
  Linkedin,
  Mail,
  type LucideIcon
} from "lucide-react";
import type { Project, SkillGroup, SocialLink, TimelineItem } from "@/types/portfolio";

export const profile = {
  name: "Foram Ravaliya",
  roles: [
    "Aspiring Software Tester",
    "QA Enthusiast",
    "Full Stack Developer",
    "Web Developer"
  ],
  tagline:
    "Full Stack Developer with foundational knowledge of software testing, focused on building reliable applications and learning quality assurance practices.",
  location: "Ahmedabad, India",
  email: "fravaliya2107@gmail.com",
  resumeUrl: "/resumeQA.pdf",
  avatarInitials: "FR"
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/ForamRavaliya",
    icon: Github as LucideIcon
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ForamRavaliya",
    icon: Linkedin as LucideIcon
  },
  {
    label: "Email",
    href: "mailto:fravaliya2107@gmail.com",
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
  category: "QA & Testing",
  accent: "from-cyan to-violet",
  skills: [
    { name: "Manual Testing", level: 65 },
    { name: "Test Case Writing", level: 60 },
    { name: "Functional Testing", level: 60 },
    { name: "Regression Testing", level: 55 },
    { name: "API Testing", level: 55 },
    { name: "SQL Testing", level: 65 }
  ]
},
  {
    category: "Tools",
    accent: "from-violet to-coral",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "Intelij IDEA", level: 92 },
      { name: "Vercel", level: 84 },
      { name: "Render", level: 76 }
    ]
  }
];

export const projects: Project[] = [
{
  title: "Recipe Sharing Platform",
  category: "Web App",
  description:
    "A community-driven recipe sharing platform where users can discover, create, and share recipes with step-by-step instructions, ingredients, and cooking tips. Features user authentication, recipe management, and an intuitive browsing experience.",
  image: "/projects/recipe-sharing.png",
  tech: ["React", "Node.js", "Express.js", "PostgreSQL", "JWT", "Vercel"],
  github: "https://github.com/ForamRavaliya/Recipe-Sharing-Website",
  demo: "https://recipe-sharing-website-zeta.vercel.app/",
  highlights: [
    "Create, edit, and share recipes",
    "User authentication and profile management",
    "Search and category-based recipe discovery"
  ]
},
{
  title: "Dear Diary",
  category: "Web App",
  description:
    "A secure personal diary platform where users can create, edit, organize, and manage private journal entries with authentication and protected access.",
  image: "/projects/dear-diary.png",
  tech: ["React", "Node.js", "Express.js", "PostgreSQL", "JWT"],
  github: "https://github.com/ForamRavaliya/DearDiary",
  demo: "https://dear-diary-green.vercel.app/",
  highlights: [
    "JWT authentication and authorization",
    "Create, edit, and delete diary entries",
    "Responsive and secure user interface"
  ]
},
{
  title: "Drawing Website for Kids",
  category: "Creative",
  description:
    "A creative drawing and coloring platform designed for children with interactive tools, coloring pages, responsive design, and an engaging user experience.",
  image: "/projects/drawing-kids.png",
  tech: ["React", "JavaScript", "Canvas API", "CSS"],
  github: "https://github.com/ForamRavaliya/DrawingWebsite",
  demo: "https://drawing-website-six.vercel.app/",
  highlights: [
    "Interactive drawing canvas",
    "Coloring pages for children",
    "Mobile-friendly responsive design"
  ]
},
{
  title: "Bookmark Manager",
  category: "Productivity",
  description:
    "A bookmark management application that helps users organize, search, categorize, and manage web resources efficiently using collections and tags.",
  image: "/projects/bookmark-manager.png",
  tech: ["Next.js", "Supabase", "PostgreSQL", "Vercel"],
  github: "https://github.com/ForamRavaliya/bookmarks",
  demo: "https://bookmarks-beryl.vercel.app/",
  highlights: [
    "Bookmark collections and tagging",
    "Fast search and filtering",
    "Cloud-based data persistence"
  ]
}
];


export const education: TimelineItem[] = [
  {
    title: "Bachelor's Degree / Computer Science Path",
    organization: "LD college of Engineering",
    period: "2022 - 2026",
    details: [
      "Focused on web development, database systems, software engineering, and practical project building.",
      "Built full-stack projects with React, Next.js, PostgreSQL, and deployment workflows."
    ]
  }
];

export const internships: TimelineItem[] = [
 {
 title: "Web Developer Intern",
 organization: "Augmetic Infinite LLP",
 period: "Feb 2026 - May 2026",
 details: [
 "Developed and maintained full-stack web applications using React, Node.js, Express.js, and PostgreSQL.",
 "Built features for a Marketing Report Generator platform including dashboard analytics, PDF report generation, and client management.",
 "Integrated REST APIs, managed database operations, and collaborated on bug fixing and performance improvements.",
 "Worked with Git, GitHub, Vercel, Render, and modern development workflows for deployment and version control."
 ]
 }

];

export const resumeHighlights = [
  "Full-stack project experience with React, Next.js, Node.js, Express.js, PostgreSQL, and Supabase.",
  "Foundational knowledge of software testing including manual testing, test case writing, functional testing, regression testing, API testing, and SQL validation.",
  "Development background that helps me understand application workflows, APIs, databases, and technical defects.",
  "Comfortable working with Git, GitHub, REST APIs, PostgreSQL, and modern web development workflows."
];
