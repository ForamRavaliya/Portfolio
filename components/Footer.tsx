import { navLinks, profile, socialLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-white/48">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navLinks.slice(1, 6).map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/54 transition hover:text-cyan">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white/60 transition hover:text-cyan"
            >
              <item.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
