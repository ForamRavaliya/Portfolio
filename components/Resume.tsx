"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { profile, resumeHighlights } from "@/data/portfolio";

export default function Resume() {
  return (
    <section id="resume" className="section-shell">
      <SectionHeading
        eyebrow="Resume"
        title="A compact snapshot of what you bring."
        description="Use this section to highlight education, skills, projects, internships, and your resume download."
      />

      <motion.div
        className="glass-card mx-auto grid max-w-5xl gap-8 rounded-[2rem] p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6">
          <FileText className="text-gold" size={32} />
          <h3 className="mt-6 font-display text-3xl font-semibold">Resume ready</h3>
          <p className="mt-4 text-sm leading-7 text-white/64">
            Replace the sample PDF in the public folder with your final resume and keep
            the same filename for the button to work instantly.
          </p>
          <a
            href={profile.resumeUrl}
            download
            className="focus-ring mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-5 py-3 font-semibold text-ink transition hover:bg-white"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {resumeHighlights.map((highlight, index) => (
            <motion.div
              key={highlight}
              className="rounded-3xl border border-white/10 bg-black/18 p-5 text-sm leading-7 text-white/68"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              {highlight}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
