import type { MetadataRoute } from "next";

import { readManifest } from "@/lib/data/generated";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://exitexamstudio.app/";
  const manifest = await readManifest();

  const examEntries = (manifest?.exams ?? []).map((exam) => ({
    url: `${baseUrl}/exam/${exam.examId}`,
    lastModified: new Date(),
  }));

  const departmentEntries = (manifest?.departments ?? []).map((dept) => ({
    url: `${baseUrl}/departments/${dept.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/departments`, lastModified: new Date() },
    { url: `${baseUrl}/history`, lastModified: new Date() },
    ...departmentEntries,
    ...examEntries,
  ];
}
