"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/types/portfolio";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/72 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} details`}
            className="glass-card max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem]"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.96 }}
            transition={{ duration: 0.28 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/8] min-h-64 overflow-hidden rounded-t-[2rem]">
              <Image
                src={project.image}
                alt={`${project.title} enlarged preview`}
                fill
                className="object-cover"
                sizes="900px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <button
                type="button"
                aria-label="Close project details"
                onClick={onClose}
                className="focus-ring absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-black/38 text-white backdrop-blur-xl transition hover:bg-white/12"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">
                {project.category}
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold">{project.title}</h3>
              <p className="mt-4 max-w-3xl leading-8 text-white/70">{project.description}</p>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-white/70">
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/72">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-3 font-medium text-white/78 transition hover:bg-white/14 hover:text-white"
                >
                  <Github size={18} />
                  View GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-5 py-3 font-semibold text-ink transition hover:bg-white"
                >
                  <ExternalLink size={18} />
                  Open Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
