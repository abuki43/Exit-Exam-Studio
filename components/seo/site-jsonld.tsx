import { readManifest } from "@/lib/data/generated";
import { absoluteUrl, siteConfig } from "@/lib/seo/site";
import { StructuredData } from "@/components/seo/structured-data";

export async function SiteJsonLd() {
  const manifest = await readManifest();

  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: absoluteUrl("/exitLogo.png"),
      image: absoluteUrl("/exitLogo.png"),
      description: siteConfig.description,
      sameAs: [
        "https://github.com/abuki43/Exit-Exam-Studio",
        "https://t.me/Abking1",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en-ET",
      about: "Ethiopian university exit exam practice",
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
      },
      mainEntity: {
        "@type": "ItemList",
        name: "Ethiopian exit exam departments",
        numberOfItems: manifest?.departments.length ?? 0,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Ethiopian Exit Exam Catalog",
      url: absoluteUrl("/departments"),
      description:
        "Browse Ethiopian university exit exams by department, year, and available question volume.",
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
  ];

  return <StructuredData id="site-jsonld" data={data} />;
}
