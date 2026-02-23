interface SeoProps {
  title?: string;
  description?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: string;
    locale?: string;
    siteName?: string;
  };
}

export function getSiteSeo(): SeoProps {
  return {
    title: "Ethiopian Exit Exam Studio",
    description:
      "Prepare for Ethiopia's exit exams with focused practice and fast review. No login required.",
    openGraph: {
      title: "Ethiopian Exit Exam Studio",
      description:
        "Past-exam practice with instant feedback, resume, and test mode for Ethiopian university students.",
      type: "website",
      locale: "en_US",
      siteName: "Ethiopian Exit Exam Studio",
    },
  };
}

export function getSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Ethiopian Exit Exam Studio",
    description:
      "Practice past exams and build confidence for Ethiopian university exit exams.",
  };
}
