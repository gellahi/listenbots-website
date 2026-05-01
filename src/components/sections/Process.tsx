"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Discovery Session",
    description:
      "We deeply listen to your business goals, challenges, and vision. No assumptions. Just questions and clarity.",
  },
  {
    number: "02",
    title: "Strategy & Roadmap",
    description:
      "We map out the solution architecture, tech stack, timeline, and cost — transparently. You see everything before we start.",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "Agile development with weekly updates. You're never in the dark. Every sprint brings you closer to launch.",
  },
  {
    number: "04",
    title: "Launch, Optimize & Own",
    description:
      "We don't disappear post-launch. We monitor, optimize, and support your systems for long-term performance.",
  },
];

export function Process() {
  return (
    <section
      id="process"
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
            04 / Our Process
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-display font-extrabold tracking-tight text-text-primary text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
          >
            How We Work With You
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-text-secondary text-lg max-w-2xl"
          >
            A process built around clarity, accountability, and results.
          </motion.p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-16 relative grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4"
        >
          {/* Connecting line (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-border-medium to-transparent"
          />

          {steps.map((step) => (
            <motion.li
              key={step.number}
              variants={fadeInUp}
              className="relative"
            >
              <div className="flex flex-col gap-4">
                <div className="relative flex items-center gap-3 lg:gap-0 lg:flex-col lg:items-start">
                  <span className="relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-md bg-bg-primary border border-border-accent font-display font-extrabold text-accent-green text-lg">
                    {step.number}
                  </span>
                  <span className="lg:hidden font-mono text-xs uppercase tracking-[0.2em] text-text-tertiary">
                    Step {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-text-primary text-xl leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
