import { OrganizationJsonLd } from "next-seo";

export function SiteJsonLd() {
  return (
    <OrganizationJsonLd
      type="Organization"
      name="Ethiopian Exit Exam Studio"
      url="https://exitexamstudio.com"
      description="Practice past exams and build confidence for Ethiopian university exit exams."
    />
  );
}
