"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { profile, socialLinks } from "@/data/portfolio";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields before sending.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSuccess("Thanks! This demo captured your message locally. Connect Formspree, Resend, or an API route for production email.");
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something memorable."
        description="Use the form for a polished demo interaction, or connect it to your favorite email service when deploying."
      />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          className="glass-card relative overflow-hidden rounded-[2rem] p-7"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-coral/20 blur-3xl" />
          <h3 className="relative font-display text-3xl font-semibold">Contact details</h3>
          <div className="relative mt-8 space-y-5">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/10">
              <Mail className="text-cyan" size={22} />
              <span className="text-white/72">{profile.email}</span>
            </a>
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-4">
              <MapPin className="text-gold" size={22} />
              <span className="text-white/72">{profile.location}</span>
            </div>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="focus-ring grid h-12 w-12 place-items-center rounded-full border border-white/12 bg-white/[0.07] text-white/72 transition hover:-translate-y-1 hover:text-cyan"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submitForm}
          className="glass-card rounded-[2rem] p-6 sm:p-8"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-white/72">
              Name
              <input
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="focus-ring mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/30"
                placeholder="Your name"
              />
            </label>
            <label className="text-sm font-medium text-white/72">
              Email
              <input
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="focus-ring mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/30"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-5 block text-sm font-medium text-white/72">
            Message
            <textarea
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              className="focus-ring mt-2 min-h-40 w-full resize-y rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/30"
              placeholder="Tell me about the role, project, or idea..."
            />
          </label>

          {error && <p className="mt-4 rounded-2xl border border-coral/35 bg-coral/10 px-4 py-3 text-sm text-coral">{error}</p>}
          {success && <p className="mt-4 rounded-2xl border border-cyan/35 bg-cyan/10 px-4 py-3 text-sm text-cyan">{success}</p>}

          <button
            type="submit"
            className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ink transition hover:-translate-y-1 hover:bg-cyan sm:w-auto"
          >
            <Send size={18} />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
