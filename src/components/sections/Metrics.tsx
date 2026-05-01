"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const metrics = [
  { value: "6", label: "Services", caption: "Full-spectrum digital solutions" },
  { value: "100%", label: "Ownership", caption: "From build to operations" },
  { value: "3", label: "Co-Founders", caption: "Directly accountable leadership" },
  { value: "∞", label: "Support", caption: "Long-term partnership, not one-and-done" },
];

export function Metrics() {
  return (
    <section
      aria-label="By the numbers"
      className="relative border-y border-border-subtle bg-bg-primary"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-16"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle rounded-lg overflow-hidden">
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={fadeInUp}
              className="bg-bg-primary p-7 sm:p-8 flex flex-col gap-2"
            >
              <span className="font-display font-extrabold text-accent-green text-5xl sm:text-6xl leading-none">
                {m.value}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-text-primary mt-2">
                {m.label}
              </span>
              <span className="text-text-secondary text-sm leading-relaxed">
                {m.caption}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
