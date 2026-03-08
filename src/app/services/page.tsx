import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/sections/PageHero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { StructuredData } from "@/components/shared/StructuredData";
import { SERVICES_OVERVIEW_PAGE } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";

export const generateMetadata = (): Metadata =>
  buildPageMetadata({
    title: "Services",
    description: "医療に特化した4つの支援領域を提供します。",
    path: "/services"
  });

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mediforma Consulting Services",
  itemListElement: [
    { "@type": "ListItem", position: 1, url: "https://mediforma-consulting.vercel.app/services/ai" },
    { "@type": "ListItem", position: 2, url: "https://mediforma-consulting.vercel.app/services/dx" },
    { "@type": "ListItem", position: 3, url: "https://mediforma-consulting.vercel.app/services/sns" },
    { "@type": "ListItem", position: 4, url: "https://mediforma-consulting.vercel.app/services/backoffice" }
  ]
};

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={servicesJsonLd} />
      <PageHero eyebrow="Services" title={SERVICES_OVERVIEW_PAGE.heading} lead={SERVICES_OVERVIEW_PAGE.description}>
        <div className="mt-8">
          <Link href="/contact" className="focus-ring inline-flex rounded-full border border-teal-500 bg-teal-500 px-7 py-3 font-english text-sm text-white transition hover:bg-teal-400">
            {SERVICES_OVERVIEW_PAGE.reservationCtaLabel}
          </Link>
        </div>
      </PageHero>
      <ServiceCards />
    </>
  );
}
