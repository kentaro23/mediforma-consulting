import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { ServiceDetailContent } from "@/components/sections/ServiceDetailContent";
import { StructuredData } from "@/components/shared/StructuredData";
import { buildPageMetadata, createServiceJsonLd } from "@/lib/metadata";
import { SERVICE_DETAIL_DATA } from "@/lib/services-data";

const pageData = SERVICE_DETAIL_DATA.backoffice;

export const generateMetadata = (): Metadata =>
  buildPageMetadata({
    title: "バックオフィス支援",
    description: pageData.heroLead,
    path: "/services/backoffice"
  });

export default function BackOfficeServicePage() {
  return (
    <>
      <StructuredData data={createServiceJsonLd(pageData.heroTitle, pageData.heroLead, "/services/backoffice")} />
      <PageHero eyebrow="Service" title={pageData.heroTitle} lead={pageData.heroLead} />
      <ServiceDetailContent data={pageData} />
    </>
  );
}
