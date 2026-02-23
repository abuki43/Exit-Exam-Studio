import Link from "next/link";

import type { ExamMeta } from "@/lib/exam/types";
import { Pill } from "@/components/ui/pill";

export function ExamCard({ exam }: { exam: ExamMeta }) {
  return (
    <Link
      href={`/exam/${exam.examId}`}
      className="group block rounded-3xl border border-black/10 bg-white/70 p-6 transition hover:border-brand-primary/30 hover:bg-white"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-brand-primary/60">Exit Exam</p>
          <h3 className="mt-2 text-2xl font-semibold text-brand-primaryDark group-hover:text-brand-primary">
            {exam.label}
          </h3>
          <p className="mt-2 text-sm text-black/60">
            {exam.playableQuestionCount} questions · {exam.invalidQuestionCount} skipped
          </p>
        </div>
        {exam.variant === "model" && (
          <Pill className="border-brand-accent/60 bg-brand-accent/30 text-brand-primaryDark">Model</Pill>
        )}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-medium text-brand-primaryDark group-hover:text-brand-primary">
          Start Exam
        </span>
        <svg
          className="h-5 w-5 text-brand-primary/60 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
