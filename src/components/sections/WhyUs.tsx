"use client";

import { motion } from "framer-motion";
import { Target, Lock, Rocket, type LucideIcon } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

type Reason = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    Icon: Target,
    title: "Deep Understanding Before Code",
    description:
      "We begin every engagement by listening. Not pitching. Not templating. We understand your business before we architect your solution.",
  },
  {
    Icon: Lock,
    title: "End-to-End Ownership",
    description:
      "Design → Development → Deployment → Operations. We own it all. You focus on your business. We handle the complexity.",
  },
  {
    Icon: Rocket,
    title: "Future-Ready Technology",
    description:
      "From modern architectures to AI-native systems — everything we build is built to scale and stay relevant. Not just for today, but for years ahead.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32">
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
            05 / Why Us
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-display font-extrabold tracking-tight text-text-primary text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
          >
            Why Companies Choose{" "}
            <span className="text-accent-green">ListenBots</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group p-8 rounded-lg bg-bg-secondary border border-border-subtle hover:border-border-accent transition-colors"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-accent-green/10 text-accent-green border border-border-accent">
                <reason.Icon className="w-6 h-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-7 font-display font-bold text-text-primary text-xl leading-tight">
                {reason.title}
              </h3>
              <p className="mt-3 text-text-secondary text-sm sm:text-base leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
