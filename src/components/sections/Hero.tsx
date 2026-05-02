"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-32 sm:pt-40 lg:pt-48 pb-24 sm:pb-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 dot-grid dot-grid-fade opacity-60" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] -z-10 green-halo opacity-70" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border-medium to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-subtle bg-bg-secondary/60 backdrop-blur-sm">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-text-secondary">
                Now accepting projects · 2026
              </span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-8 font-display font-extrabold tracking-[-0.02em] text-text-primary leading-[1.02] text-[clamp(3rem,8vw,6.5rem)]"
          >
            Your Business Deserves
            <br />
            Software That{" "}
            <span className="relative inline-block text-accent-green">
              Actually
              <svg
                viewBox="0 0 220 12"
                className="absolute left-0 -bottom-2 w-full h-3 text-accent-green/60"
                aria-hidden
              >
                <path
                  d="M2 8 Q60 2, 110 6 T 218 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Works.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-8 max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed"
          >
            Most companies waste months and budgets on software that never
            ships, breaks after launch, or gets abandoned. We build digital
            systems that perform — reliably, scalably, and without the chaos.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <Link
              href="mailto:info@listenbots.com?subject=Discovery%20Call%20Request"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-accent-green text-bg-primary font-medium text-sm sm:text-base hover:bg-accent-green-dim transition-all hover:scale-[1.02]"
            >
              Book a Free Discovery Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#testimonials"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-border-medium text-text-primary font-medium text-sm sm:text-base hover:border-border-accent hover:text-accent-green transition-all"
            >
              See Our Work
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 sm:mt-20 max-w-2xl"
        >
          <div className="rounded-xl border border-border-medium bg-bg-secondary/70 backdrop-blur-md overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-bg-tertiary/40">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-text-tertiary">
                listenbots ~ /pipeline.ts
              </span>
            </div>
            <pre className="p-5 sm:p-6 font-mono text-[0.78rem] sm:text-[0.85rem] leading-relaxed text-text-secondary overflow-x-auto">
              <code>
                <span className="text-text-tertiary">// agentic AI pipeline — production</span>
                {"\n"}
                <span className="text-accent-green">const</span>
                <span className="text-text-primary"> agent </span>
                <span className="text-text-tertiary">=</span>
                <span className="text-text-primary"> await listenbots</span>
                <span className="text-text-tertiary">.</span>
                <span className="text-accent-green">build</span>
                <span className="text-text-primary">{"({"}</span>
                {"\n  "}
                <span className="text-text-primary">stack:</span>
                <span className="text-accent-green"> &quot;next + langchain&quot;</span>
                <span className="text-text-primary">,</span>
                {"\n  "}
                <span className="text-text-primary">scale:</span>
                <span className="text-accent-green"> &quot;enterprise&quot;</span>
                <span className="text-text-primary">,</span>
                {"\n  "}
                <span className="text-text-primary">support:</span>
                <span className="text-accent-green"> &quot;long-term&quot;</span>
                {"\n"}
                <span className="text-text-primary">{"});"}</span>
                {"\n\n"}
                <span className="text-text-tertiary">→ shipped in 6 weeks. zero downtime.</span>
                <span className="cursor-blink text-accent-green">▍</span>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-text-tertiary"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
