"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Building2,
  Cpu,
  Bot,
  Layers,
  type LucideIcon,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

type Service = {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

const services: Service[] = [
  {
    number: "01",
    title: "Custom Software Development",
    description:
      "You have a unique challenge. We build the exact tool to solve it — not a template, not a workaround.",
    Icon: Code2,
  },
  {
    number: "02",
    title: "Web & Mobile Applications",
    description:
      "Beautiful, fast, cross-platform apps your customers will actually love using.",
    Icon: Smartphone,
  },
  {
    number: "03",
    title: "Enterprise Systems",
    description:
      "Complex operations need robust infrastructure. We architect systems that handle scale, security, and integrations.",
    Icon: Building2,
  },
  {
    number: "04",
    title: "AI Engineering",
    description:
      "From predictive analytics to intelligent automation — we embed AI where it creates real business value, not just hype.",
    Icon: Cpu,
  },
  {
    number: "05",
    title: "Agentic AI Systems",
    description:
      "Autonomous AI agents that execute complex workflows 24/7, without needing manual oversight. The future of business automation, now.",
    Icon: Bot,
  },
  {
    number: "06",
    title: "SaaS Products & Managed Technology",
    description:
      "We turn your SaaS idea into a market-ready product — and keep it running at peak performance long after launch.",
    Icon: Layers,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
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
            03 / Our Services
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-display font-extrabold tracking-tight text-text-primary text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
          >
            Everything Your Business Needs to{" "}
            <span className="text-accent-green">Scale Digitally</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-text-secondary text-lg max-w-2xl"
          >
            We don&apos;t just build software — we build the digital backbone of
            your growth.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service) => (
            <motion.article
              key={service.number}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group relative p-7 rounded-lg bg-bg-secondary border border-border-subtle hover:border-border-accent transition-colors overflow-hidden"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-accent-green/10 text-accent-green border border-border-accent">
                  <service.Icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <span className="font-mono text-xs text-text-tertiary tracking-wider">
                  {service.number} /
                </span>
              </div>

              <h3 className="mt-7 font-display font-bold text-text-primary text-xl leading-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
