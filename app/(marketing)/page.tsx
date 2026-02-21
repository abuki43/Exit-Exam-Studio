import { Metadata } from "next";

import { LandingHero } from "@/components/landing/landing-hero";

export const metadata: Metadata = {
  title: "Ethiopian Exit Exam Studio",
};

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <LandingHero />
    </main>
  );
}
