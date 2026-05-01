"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const founders = [
  {
    initials: "SMR",
    name: "Syed Mohsin Raza",
    role: "Co-Founder & Director",
    credential: "Operations & client strategy",
  },
  {
    initials: "SAB",
    name: "Syed Ali Bukhari",
    role: "Co-Founder & Director",
    credential: "Engineering & architecture",
  },
  {
    initials: "GE",
    name: "Gohar Ellahi",
    role: "Co-Founder & Director",
    credential: "Product & AI engineering",
  },
];

export function Solution() {
  return (
    <section id="solution" className="relative py-24 sm:py-32 bg-bg-secondary/30">
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
            02 / The Answer
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-display font-extrabold tracking-tight text-text-primary text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
          >
            We Built ListenBots to{" "}
            <span className="text-accent-green">Fix Exactly That.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-12 max-w-3xl space-y-6 text-text-secondary text-lg leading-relaxed"
        >
          <motion.p variants={fadeInUp} className="text-text-primary text-xl">
            Great software starts with{" "}
            <span className="text-accent-green">listening</span> — not pitching.
          </motion.p>
          <motion.p variants={fadeInUp}>
            Before we write a single line of code, we sit with your team,
            understand your operations, and map out exactly what needs to be
            built, why, and how.
          </motion.p>
          <motion.p variants={fadeInUp}>
            Then we build it. Own it. Maintain it. So you don&apos;t have to.
          </motion.p>
          <motion.p variants={fadeInUp}>
            Based in Faisalabad, Pakistan — we combine the technical excellence
            of world-class engineering with the accountability of a true
            long-term partner.
          </motion.p>
        </motion.div>

        {/* Founders */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-20"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-text-tertiary">
              Meet the founders
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {founders.map((founder) => (
              <motion.div
                key={founder.initials}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative p-6 rounded-lg bg-bg-primary border border-border-subtle hover:border-border-accent transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 shrink-0 rounded-md bg-bg-tertiary border border-border-subtle flex items-center justify-center overflow-hidden">
                    <span className="font-display font-extrabold text-text-primary text-base">
                      {founder.initials}
                    </span>
                    <span className="absolute -inset-px pointer-events-none">
                      <span className="absolute top-1 right-1 text-accent-green text-xs font-mono">
                        /
                      </span>
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-text-primary text-lg leading-tight">
                      {founder.name}
                    </h3>
                    <p className="text-text-tertiary text-xs font-mono uppercase tracking-wider mt-1">
                      {founder.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-text-secondary">
                  {founder.credential}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="mt-10 italic text-text-secondary text-base sm:text-lg"
          >
            Real founders.{" "}
            <span className="text-accent-green not-italic">/</span> Real
            accountability.{" "}
            <span className="text-accent-green not-italic">/</span> Real
            results.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
