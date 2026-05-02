"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const testimonials = [
  {
    quote:
      "ListenBots took our manual inventory process and built a fully automated system in 6 weeks. Our team saves 20 hours a week now.",
    name: "Operations Director",
    org: "Manufacturing Co. · Faisalabad",
    initials: "OD",
  },
  {
    quote:
      "We came to them with a half-baked SaaS idea. They turned it into a working product in 3 months. They felt like co-founders, not contractors.",
    name: "Startup Founder",
    org: "Edtech SaaS · Lahore",
    initials: "SF",
  },
  {
    quote:
      "Other agencies gave us quotes and disappeared. These guys gave us a roadmap and actually followed it.",
    name: "CEO",
    org: "E-commerce Business · Karachi",
    initials: "CE",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 bg-bg-secondary/30"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeInUp}
            className="font-mono text-xs uppercase tracking-[0.25em] text-accent-green"
          >
            07 / Social Proof
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-display font-extrabold tracking-tight text-text-primary text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
          >
            What Clients Say
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group relative p-7 rounded-lg bg-bg-primary border border-border-subtle hover:border-border-accent transition-colors"
            >
              <Quote
                className="absolute top-5 right-5 w-10 h-10 text-accent-green/15"
                aria-hidden
              />
              <blockquote className="relative text-text-primary text-base sm:text-[1.0625rem] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 pt-5 border-t border-border-subtle flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-bg-tertiary border border-border-subtle flex items-center justify-center font-display font-extrabold text-sm text-text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-text-primary text-sm font-medium">
                    {t.name}
                  </p>
                  <p className="text-text-tertiary text-xs font-mono mt-0.5">
                    {t.org}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
