"use client";

import { motion } from "framer-motion";

const steps = [
  {
    label: "1",
    title: "Pick a department",
    body: "Search and filter by department to find the exams that match your program.",
  },
  {
    label: "2",
    title: "Choose year and mode",
    body: "Practice with instant feedback or simulate the real exam with test mode.",
  },
  {
    label: "3",
    title: "Review and improve",
    body: "Track attempts in history and review explanations to grow faster.",
  },
];

export function LandingSteps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="panel flex flex-col gap-3 p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-sm font-semibold text-brand-primary">Step {step.label}</span>
            <h3 className="text-lg font-semibold text-brand-primaryDark">{step.title}</h3>
            <p className="text-sm text-black/70">{step.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
