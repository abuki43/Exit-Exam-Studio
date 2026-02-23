import { Metadata } from "next";

import { DepartmentList } from "@/components/catalog/department-list";
import { getDepartments } from "@/lib/data/generated";

export const metadata: Metadata = {
  title: "Departments",
};

export const revalidate = 86400;

export default async function DepartmentsPage() {
  const departments = await getDepartments();

  return <DepartmentList departments={departments} />;
}
