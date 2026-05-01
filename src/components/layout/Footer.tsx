import Link from "next/link";
import { MapPin, Phone, Globe, Mail } from "lucide-react";
import { Logo } from "./Logo";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const contactRows = [
  {
    icon: MapPin,
    label:
      "Plot #96, Main Boulevard Park Town, East Canal Road, Faisalabad 38000",
  },
  { icon: Phone, label: "+92-323-3552222", href: "tel:+923233552222" },
  { icon: Globe, label: "www.listenbots.com", href: "https://listenbots.com" },
  {
    icon: Mail,
    label: "info@listenbots.com",
    href: "mailto:info@listenbots.com",
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-bg-primary">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-5">
            <Logo />
            <p className="font-display font-semibold text-2xl text-text-primary leading-tight max-w-xs">
              Quality you can see,
              <br />
              <span className="text-accent-green">Trust</span> you can feel.
            </p>
            <p className="text-sm text-text-secondary max-w-md">
              Custom software, AI engineering, enterprise systems, and SaaS
              products — built end-to-end by a team that owns what it ships.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-border-subtle text-text-secondary hover:text-accent-green hover:border-border-accent transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                aria-label="X / Twitter"
                className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-border-subtle text-text-secondary hover:text-accent-green hover:border-border-accent transition-colors"
              >
                <XIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-accent-green mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-accent-green mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              {contactRows.map((row) => {
                const Icon = row.icon;
                const content = (
                  <span className="flex items-start gap-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                    <Icon className="w-4 h-4 mt-0.5 text-accent-green shrink-0" />
                    <span>{row.label}</span>
                  </span>
                );
                return (
                  <li key={row.label}>
                    {row.href ? (
                      <Link href={row.href} className="group inline-block">
                        {content}
                      </Link>
                    ) : (
                      <span className="group inline-block">{content}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-text-tertiary">
            © {new Date().getFullYear()} ListenBots Software Solutions. All
            rights reserved.
          </p>
          <p className="text-xs text-text-tertiary font-mono">
            Faisalabad, Pakistan
            <span className="text-accent-green mx-2">/</span>
            Founded 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
