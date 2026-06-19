"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, SlidersHorizontal } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

const filters = ["All", "Web App", "AI Tool", "Creative", "Productivity"] as const;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Project cards with enough detail to start real conversations."
        description="Filter by category, open a project for deeper highlights, and swap the links with your real GitHub and live deployments."
      />

      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/58">
          <SlidersHorizontal size={16} />
          Filter
        </div>
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeFilter === filter
                ? "border-cyan/60 bg-cyan text-ink"
                : "border-white/12 bg-white/[0.06] text-white/70 hover:border-white/24 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -10 }}
              className="glass-card group overflow-hidden rounded-[2rem]"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="block w-full text-left"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/82 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/16 bg-black/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xl">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-white/64">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
              <div className="flex items-center gap-3 border-t border-white/10 p-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/76 transition hover:bg-white/14 hover:text-white"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-cyan"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
