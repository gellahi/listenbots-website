"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const faqs = [
  {
    q: "Where are you based, and do you work with international clients?",
    a: "We're headquartered in Faisalabad, Pakistan. We work with clients locally and internationally. Time zones aren't a barrier — we adapt.",
  },
  {
    q: "How do you handle projects — fixed price or time & materials?",
    a: "Both, depending on your project. After our Discovery Session, we'll recommend the model that gives you the most clarity and protection.",
  },
  {
    q: "What makes you different from a typical freelancing team?",
    a: "Accountability, end-to-end ownership, and a long-term relationship model. You work with a real company with real founders — not anonymous contractors who disappear.",
  },
  {
    q: "Do you work on existing codebases or only greenfield projects?",
    a: "Both. We regularly audit, modernize, and scale legacy systems — often the most impactful work we do.",
  },
  {
    q: "What industries do you serve?",
    a: "Retail, manufacturing, logistics, healthcare, fintech, education, and more. If your business has digital complexity, we have the expertise.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="font-mono text-xs uppercase tracking-[0.25em] text-accent-green"
          >
            FAQ
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-display font-extrabold tracking-tight text-text-primary text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
          >
            Common Questions
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14"
        >
          <motion.div variants={fadeInUp}>
            <Accordion className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-border-subtle rounded-lg bg-bg-secondary/40 px-5 sm:px-6 data-[state=open]:border-border-accent transition-colors"
                >
                  <AccordionTrigger className="font-display font-bold text-text-primary text-base sm:text-lg text-left py-5 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-secondary text-sm sm:text-base leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
