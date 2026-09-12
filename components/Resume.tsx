"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { resumeHighlights } from "@/data/portfolio";

const resumes = [
  {
    title: "Software Tester / QA Resume",
    description:
      "My QA-focused resume highlighting software testing fundamentals, technical skills, projects, and my interest in quality assurance.",
    href: "/resumeQA.pdf",
    primary: true
  },
  {
    title: "Full Stack Developer Resume",
    description:
      "My development-focused resume highlighting full-stack projects, web development skills, database experience, and internship experience.",
    href: "/resumeFS.pdf",
    primary: false
  }
];

export default function Resume() {
  return (
    <section id="resume" className="section-shell">
      <SectionHeading
        eyebrow="Resume"
        title="Choose the profile that matches the opportunity."
        description="I have prepared separate resumes for Software Testing / QA and Full Stack Development roles."
      />

      <motion.div
        className="glass-card mx-auto max-w-5xl rounded-[2rem] p-6 sm:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {resumes.map((resume, index) => (
            <motion.div
              key={resume.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08
              }}
            >
              <FileText className="text-gold" size={32} />

              <h3 className="mt-6 font-display text-2xl font-semibold">
                {resume.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/64">
                {resume.description}
              </p>

              <a
                href={resume.href}
                download
                className={`focus-ring mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold transition hover:-translate-y-1 hover:bg-white ${
                  resume.primary
                    ? "bg-cyan text-ink"
                    : "border border-white/14 bg-white/10 text-white"
                }`}
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {resumeHighlights.map((highlight, index) => (
            <motion.div
              key={highlight}
              className="rounded-3xl border border-white/10 bg-black/18 p-5 text-sm leading-7 text-white/68"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.05
              }}
            >
              {highlight}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}