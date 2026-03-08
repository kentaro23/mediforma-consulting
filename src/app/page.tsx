import type { Metadata } from "next";

import { CEOMessage } from "@/components/sections/CEOMessage";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { StructuredData } from "@/components/shared/StructuredData";
import { buildPageMetadata } from "@/lib/metadata";

export const generateMetadata = (): Metadata =>
  buildPageMetadata({
    title: "医療の現場に、知性あるDXを",
    description:
      "Mediforma Consultingは、医療機関・学会・医療関連企業向けにAI導入支援、DX戦略、SNS運用、バックオフィス最適化を提供します。",
    path: "/"
  });

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Mediforma Consulting 公式サイト",
  url: "https://mediforma-consulting.vercel.app/",
  inLanguage: "ja",
  description:
    "医療機関・学会・医療関連企業向けにAI導入支援・DX戦略コンサルティング・SNS運用代行・バックオフィス支援を提供。"
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={homeJsonLd} />
      <HeroSection />
      <PhilosophySection />
      <ServiceCards />
      <WhyChooseUs />
      <StatsCounter />
      <ProcessSteps />
      <CEOMessage />
      <FAQAccordion />
      <CTASection />
    </>
  );
}
