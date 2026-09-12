"use client";

import { motion } from "framer-motion";
import {
  Bug,
  Code2,
  Database,
  GraduationCap,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { education, profile } from "@/data/portfolio";

cconst summaryCards = [
   {
     label: "Development",
     value: "React + Next.js",
     icon: Code2
   },
   {
     label: "Software Testing",
     value: "Manual Testing",
     icon: ShieldCheck
   },
   {
     label: "Database",
     value: "SQL + PostgreSQL",
     icon: Database
   }
 ];

export default function About() {
  return (
    <section id="about" className="section-shell">
     <SectionHeading
       eyebrow="About me"
       title="Developer mindset with a quality-first approach."
      description="Final-year Information Technology student at LD College of Engineering and an aspiring Software Tester with foundational knowledge of manual testing, test case design, functional testing, API testing, SQL validation, regression testing, and bug reporting."
     />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="glass-card relative overflow-hidden rounded-[2rem] p-7"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan/20 blur-3xl" />
          <div className="relative grid aspect-square place-items-center rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-white/12 to-white/5">
            <motion.div
              className="grid h-44 w-44 place-items-center rounded-full border border-white/20 bg-ink/70 font-display text-5xl font-bold text-cyan shadow-glow"
              animate={{ rotate: [0, 4, -4, 0], scale: [1, 1.04, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {profile.avatarInitials}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card rounded-[2rem] p-7">
            <p className="text-lg leading-8 text-white/74">
              I&apos;m a full-stack developer with a strong interest in software testing
              and quality assurance. I have foundational knowledge of manual testing,
              test case writing, functional testing, regression testing, API testing,
              SQL validation, and bug reporting. My development background also helps
              me understand application workflows, APIs, databases, and common software
              issues from both a developer and tester perspective.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {summaryCards.map((card) => (
              <div key={card.label} className="glass-card rounded-3xl p-5">
                <card.icon className="mb-5 text-cyan" size={24} />
                <p className="text-sm text-white/52">{card.label}</p>
                <p className="mt-1 font-display text-lg font-semibold">{card.value}</p>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-[2rem] p-7">
            <div className="mb-6 flex items-center gap-3">
              <GraduationCap className="text-gold" size={24} />
              <h3 className="font-display text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.title} className="relative border-l border-white/12 pl-6">
                  <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-cyan shadow-[0_0_18px_#57E6E6]" />
                  <p className="font-display text-lg font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-white/55">
                    {item.organization} • {item.period}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/64">{item.details[0]}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
