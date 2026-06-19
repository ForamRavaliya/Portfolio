"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { internships } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Internship and real-world collaboration."
        description="A timeline built for quick scanning on resumes, LinkedIn, and recruiter reviews."
      />

      <div className="mx-auto max-w-4xl">
        {internships.map((item, index) => (
          <motion.article
            key={item.title}
            className="relative border-l border-white/12 pb-10 pl-8 last:pb-0"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <span className="absolute -left-6 top-0 grid h-12 w-12 place-items-center rounded-2xl border border-white/14 bg-ink text-cyan shadow-glow">
              <BriefcaseBusiness size={22} />
            </span>
            <div className="glass-card rounded-[2rem] p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-1 text-white/58">{item.organization}</p>
                </div>
                <span className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm text-white/66">
                  {item.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-7 text-white/68">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
