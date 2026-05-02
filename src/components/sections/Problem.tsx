"use client";

import { motion } from "framer-motion";
import {
  AlertOctagon,
  Wrench,
  Sparkles,
  ShieldOff,
  Hourglass,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const pains = [
  {
    icon: Hourglass,
    text: "We hired developers but the project stalled three months in.",
  },
  {
    icon: Wrench,
    text: "Our software is outdated — maintenance is expensive and everything breaks.",
  },
  {
    icon: Sparkles,
    text: "We want to use AI in our business but don't know where to start.",
  },
  {
    icon: ShieldOff,
    text: "We've been burned by agencies who overpromise and underdeliver.",
  },
  {
    icon: AlertOctagon,
    text: "Our team is stuck doing manual work that software should handle.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-24 sm:py-32">
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
            01 / The Problem
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-display font-extrabold tracking-tight text-text-primary text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
          >
            Still Dealing With This?
          </motion.h2>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {pains.map((pain) => {
            const Icon = pain.icon;
            return (
              <motion.li
                key={pain.text}
                variants={fadeInUp}
                className="group relative flex items-start gap-4 p-6 rounded-lg bg-bg-secondary border border-border-subtle border-l-2 border-l-pain/60 hover:border-l-pain transition-colors"
              >
                <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-md bg-pain-bg text-pain">
                  <Icon className="w-4.5 h-4.5" strokeWidth={2} />
                </span>
                <p className="text-text-primary text-base sm:text-[1.0625rem] leading-relaxed">
                  &ldquo;{pain.text}&rdquo;
                </p>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-14 max-w-3xl text-text-secondary text-lg sm:text-xl leading-relaxed"
        >
          Bad software doesn&apos;t just cost money. It costs your team&apos;s
          time, your clients&apos; trust, and your competitive edge. Every
          month without the right digital foundation is{" "}
          <span className="text-text-primary">
            ground you&apos;re giving away.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
