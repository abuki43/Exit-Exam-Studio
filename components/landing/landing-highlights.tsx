"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Local-first progress",
    body: "All your practice history is stored safely on your device with migration support.",
  },
  {
    title: "Department filters",
    body: "Browse by department, year, and exam type with blazing-fast search.",
  },
  {
    title: "Accessible by design",
    body: "Keyboard-friendly navigation and mobile-first layouts keep the flow smooth.",
  },
];

export function LandingHighlights() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-brand-primaryDark md:text-3xl">
          Designed for focused, repeatable practice.
        </h2>
      </motion.div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            className="panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-lg font-semibold text-brand-primaryDark">{item.title}</h3>
            <p className="mt-2 text-sm text-black/70">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
