"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 overflow-hidden isolate"
    >
      <div className="absolute inset-0 -z-10 dot-grid dot-grid-fade opacity-50" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] -z-10 green-halo opacity-80" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mx-auto max-w-4xl px-5 sm:px-8 text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent-green"
        >
          Let&apos;s Talk
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="mt-6 font-display font-extrabold tracking-tight text-text-primary text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
        >
          Ready to Build Something{" "}
          <span className="text-accent-green">That Lasts?</span>
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Whether you&apos;re starting from scratch, modernizing an old system,
          or exploring what AI can do for your business — let&apos;s talk. No
          sales pitch. Just a real conversation about what you need and whether
          we&apos;re the right fit.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="mailto:info@listenbots.com?subject=Discovery%20Call%20Request"
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-accent-green text-bg-primary font-medium text-base hover:bg-accent-green-dim transition-all hover:scale-[1.02]"
          >
            Book Your Free Discovery Call
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="mt-8 text-text-tertiary text-sm flex items-center justify-center gap-2"
        >
          Or email us at{" "}
          <Link
            href="mailto:info@listenbots.com"
            className="inline-flex items-center gap-1.5 text-accent-green hover:underline underline-offset-4"
          >
            <Mail className="w-3.5 h-3.5" />
            info@listenbots.com
          </Link>
        </motion.p>
      </motion.div>
    </section>
  );
}
