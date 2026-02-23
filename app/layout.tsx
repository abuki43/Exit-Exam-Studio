import "@/app/globals.css";

import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteJsonLd } from "@/components/seo/site-jsonld";
import Script from "next/script";


const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ethiopian Exit Exam Studio",
    template: "%s · Ethiopian Exit Exam Studio",
  },
  description:
    "Prepare for Ethiopia's exit exams. 100% free. No login required.",
  metadataBase: new URL("https://exitexamstudio.app/"),
  openGraph: {
    title: "Ethiopian Exit Exam Studio",
    description:
      "Past-exam practice with instant feedback, resume, and test mode for Ethiopian university students.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="page-shell relative">
        {children}
        <SiteJsonLd />
        <Analytics />
        <SpeedInsights />
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js"  />
    </html>
  );
}
