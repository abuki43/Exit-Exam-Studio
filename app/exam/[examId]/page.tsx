import Link from "next/link";

import { ExamClient } from "@/components/exam/exam-client";
import { LandingFooter } from "@/components/landing/landing-footer";
import { PageHeader } from "@/components/ui/page-header";
import { readExamDataset } from "@/lib/data/generated";

export default async function ExamPage({ params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params;
  const dataset = await readExamDataset(examId);

  if (!dataset) {
    return (
      <div className="page-bg min-h-screen flex flex-col">
        <main className="flex-1">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-2xl font-semibold text-brand-primaryDark">Exam not found</h1>
            <Link href="/departments" className="mt-4 inline-flex text-sm text-brand-primary">
              Back to departments
            </Link>
          </div>
        </main>
        <LandingFooter />
      </div>
    );
  }

  const label = `${dataset.meta.departmentName} / ${dataset.meta.displayYear}${
    dataset.meta.variant === "model" ? " Model" : ""
  } Exit Exam`;

  return (
    <div className="page-bg min-h-screen flex flex-col">
      <main className="flex-1">
        <PageHeader
          title={label}
          eyebrow="Exam Session"
          subtitle={`${dataset.meta.playableQuestionCount} questions`}
          backHref={`/departments/${dataset.meta.departmentSlug}`}
          backLabel={dataset.meta.departmentName}
        />
        <section className="page-section">
          <ExamClient dataset={dataset} />
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
