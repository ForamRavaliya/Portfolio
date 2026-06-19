"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Download, Send } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    const delay = deleting ? 42 : 82;
    const timeout = window.setTimeout(() => {
      if (!deleting && text === word) {
        window.setTimeout(() => setDeleting(true), 900);
        return;
      }

      if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((index) => index + 1);
        return;
      }

      setText((current) =>
        deleting ? word.slice(0, current.length - 1) : word.slice(0, current.length + 1)
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, text, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typedRole = useTyping(profile.roles);

  return (
    <section id="home" className="section-shell flex min-h-screen items-center pt-32">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-sm text-white/72 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_#57E6E6]" />
            Available for internships, projects, and collaborations
          </div>

          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>.
            <span className="mt-3 block text-white/92">
              Full Stack Developer building scalable web applications with React, Node.js, and PostgreSQL.
            </span>
          </h1>

          <p className="typing-caret mt-7 min-h-8 font-display text-2xl font-medium text-cyan sm:text-3xl">
            {typedRole}
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">{profile.tagline}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 font-semibold text-ink transition hover:-translate-y-1 hover:bg-white"
            >
              View Projects
              <ArrowDownRight size={18} className="transition group-hover:rotate-45" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/16"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-coral/40 bg-coral/12 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-coral/20"
            >
              <Send size={18} />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.07] text-white/72 transition hover:-translate-y-1 hover:border-cyan/50 hover:text-cyan"
              >
                <item.icon size={19} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-[520px]"
          initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        >
          <div className="absolute inset-10 rounded-full bg-gradient-to-br from-cyan/25 via-violet/20 to-coral/25 blur-3xl" />
          <motion.div
            className="glass-card relative h-full overflow-hidden rounded-[2rem] p-7"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute right-7 top-7 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-coral" />
              <span className="h-3 w-3 rounded-full bg-gold" />
              <span className="h-3 w-3 rounded-full bg-cyan" />
            </div>
            <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-black/18 p-7">
              <div>
                <p className="font-mono text-sm text-cyan">portfolio.preview.tsx</p>
                <div className="mt-8 space-y-4 font-mono text-sm text-white/78">
                  <p>
                    <span className="text-coral">const</span> developer ={" "}
                    <span className="text-gold">&quot;{profile.name}&quot;</span>;
                  </p>
                  <p>
                    <span className="text-coral">skills</span>.map(buildBeautifulUI);
                  </p>
                  <p>
                    deploy(<span className="text-cyan">&quot;vercel&quot;</span>);
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["React", "Next", "SQL"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/8 p-4 text-center font-display text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
