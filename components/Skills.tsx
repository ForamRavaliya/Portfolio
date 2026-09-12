"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="A growing toolkit across development and software testing."
        description="My technical foundation combines full-stack web development with foundational knowledge of software testing, including manual testing, test cases, functional testing, API testing, regression testing, and SQL validation."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {skills.map((group, groupIndex) => (
          <motion.article
            key={group.category}
            className="glass-card rounded-[2rem] p-6"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: groupIndex * 0.07 }}
            whileHover={{ y: -8 }}
          >
            <div className={`mb-6 h-1.5 rounded-full bg-gradient-to-r ${group.accent}`} />
            <h3 className="font-display text-2xl font-semibold">{group.category}</h3>
            <div className="mt-7 space-y-5">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-white/78">{skill.name}</span>
                    <span className="text-white/44">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${group.accent}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
