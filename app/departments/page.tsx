import { Metadata } from "next";

import { DepartmentList } from "@/components/catalog/department-list";
import { StructuredData } from "@/components/seo/structured-data";
import { getDepartments, readManifest } from "@/lib/data/generated";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo/site";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Departments for Ethiopian Exit Exam Practice",
    description:
      "Browse Ethiopian exit exams by department, compare available years, and open free practice sets with instant feedback.",
    path: "/departments",
    keywords: [
      "ethiopian exit exam departments",
      "department exit exam practice ethiopia",
      "ethiopian exit exam subjects",
    ],
  }),
};

export const revalidate = 86400;

export default async function DepartmentsPage() {
  const departments = await getDepartments();
  const manifest = await readManifest();

  const itemList = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ethiopian exit exam departments",
    url: absoluteUrl("/departments"),
    description:
      "Department directory for Ethiopian university exit exam practice, including year coverage and question totals.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: departments.length,
      itemListElement: departments.slice(0, 20).map((department, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: department.name,
        url: absoluteUrl(`/departments/${department.slug}`),
      })),
    },
    about: `${manifest?.stats.examCount ?? 0} Ethiopian exit exam sets`,
  };

  return (
    <>
      <StructuredData id="departments-jsonld" data={itemList} />
      <DepartmentList departments={departments} />
    </>
  );
}
