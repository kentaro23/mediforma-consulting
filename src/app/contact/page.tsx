import type { Metadata } from "next";

import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { PageHero } from "@/components/sections/PageHero";
import { CONTACT_PAGE } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";

export const generateMetadata = (): Metadata =>
  buildPageMetadata({
    title: "お問い合わせ",
    description: "Mediforma Consultingへの無料相談・お問い合わせフォームです。",
    path: "/contact"
  });

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title={CONTACT_PAGE.subheading} lead={CONTACT_PAGE.lead} />
      <ContactFormSection />
    </>
  );
}
