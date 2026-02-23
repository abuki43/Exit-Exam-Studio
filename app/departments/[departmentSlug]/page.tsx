import { Metadata } from "next";
import Link from "next/link";
import { ExamCard } from "@/components/catalog/exam-card";
import { LandingFooter } from "@/components/landing/landing-footer";
import { PageHeader } from "@/components/ui/page-header";
import { getDepartmentBySlug, getDepartments } from "@/lib/data/generated";

export const revalidate = 86400;

export async function generateStaticParams() {
  const departments = await getDepartments();
  return departments.map((dept) => ({ departmentSlug: dept.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ departmentSlug: string }>;
}): Promise<Metadata> {
  const { departmentSlug } = await params;
  return {
    title: departmentSlug?.replace(/-/g, " ") ?? "Department",
  };
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ departmentSlug: string }>;
}) {
  const { departmentSlug } = await params;
  const data = await getDepartmentBySlug(departmentSlug);

  if (!data) {
    return (
      <div className="page-bg min-h-screen flex flex-col">
        <main className="flex-1">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-2xl font-semibold text-brand-primaryDark">Department not found</h1>
            <Link href="/departments" className="mt-4 inline-flex text-sm text-brand-primary">
              Back to departments
            </Link>
          </div>
        </main>
        <LandingFooter />
      </div>
    );
  }

  const { department, exams } = data;

  return (
    <div className="page-bg min-h-screen flex flex-col">
      <main className="flex-1">
        <PageHeader
          title={department.name}
          eyebrow="Departments"
          subtitle={`${department.examCount} exams · ${department.totalPlayableQuestions} playable questions`}
          backHref="/departments"
          backLabel="All departments"
        />

        <section className="page-section mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {exams.map((exam) => (
              <ExamCard key={exam.examId} exam={exam} />
            ))}
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
