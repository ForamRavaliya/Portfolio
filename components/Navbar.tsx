"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const current = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean)
        .findLast((section) => {
          const rect = section!.getBoundingClientRect();
          return rect.top <= 120;
        });

      if (current?.id) {
        setActive(`#${current.id}`);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/75 shadow-2xl shadow-black/20 backdrop-blur-2xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="focus-ring group flex items-center gap-3 rounded-full">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-white/10 font-display text-sm font-bold text-cyan shadow-glow">
            {profile.avatarInitials}
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-white sm:block">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1 backdrop-blur-xl lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring relative rounded-full px-4 py-2 text-sm text-white/72 transition hover:text-white"
            >
              {active === link.href && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-full bg-white/12"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setIsOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/10 text-white lg:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-5 mb-4 rounded-3xl border border-white/12 bg-ink/92 p-3 shadow-card backdrop-blur-2xl lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm text-white/76 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
