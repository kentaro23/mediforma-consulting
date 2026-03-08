import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { FadeInView } from "@/components/shared/FadeInView";
import { Card } from "@/components/ui/Card";
import { ABOUT_PAGE } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";

export const generateMetadata = (): Metadata =>
  buildPageMetadata({
    title: "会社概要",
    description: "Mediforma Consultingの会社概要、代表情報、事業内容をご紹介します。",
    path: "/about"
  });

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title={ABOUT_PAGE.subheading} lead={ABOUT_PAGE.lead} />

      <section className="section-spacing bg-white">
        <div className="mx-auto max-w-[1000px] px-5 md:px-8">
          <FadeInView>
            <Card>
              <dl className="divide-y divide-grayx-200">
                {ABOUT_PAGE.fields.map((field) => (
                  <div key={field.label} className="grid gap-2 py-5 md:grid-cols-[180px_1fr] md:gap-6">
                    <dt className="text-sm font-medium text-navy-700">{field.label}</dt>
                    <dd className="text-sm leading-8 text-grayx-600">{field.value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </FadeInView>

          <FadeInView className="mt-8">
            <Card className="bg-grayx-50">
              <div className="space-y-4 text-sm leading-8 text-grayx-600">
                <p>
                  <span className="font-medium text-navy-700">{ABOUT_PAGE.related.parentLabel}: </span>
                  <a href={ABOUT_PAGE.related.parentUrl} className="text-teal-500" target="_blank" rel="noreferrer">
                    {ABOUT_PAGE.related.parentName}
                  </a>
                </p>
                <p>
                  <span className="font-medium text-navy-700">{ABOUT_PAGE.related.relatedLabel}: </span>
                  {ABOUT_PAGE.related.relatedNames.join(" / ")}
                </p>
              </div>
            </Card>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
