import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { FadeInView } from "@/components/shared/FadeInView";
import { Card } from "@/components/ui/Card";
import { PRIVACY_PAGE } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";

export const generateMetadata = (): Metadata =>
  buildPageMetadata({
    title: "プライバシーポリシー",
    description: "Mediforma Consultingの個人情報保護方針。",
    path: "/privacy"
  });

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title={PRIVACY_PAGE.subheading} lead={PRIVACY_PAGE.intro} />

      <section className="section-spacing bg-grayx-50">
        <div className="mx-auto max-w-[960px] px-5 md:px-8">
          <Card className="space-y-8">
            {PRIVACY_PAGE.sections.map((section, index) => (
              <FadeInView key={section.title} delay={index * 0.04}>
                <article>
                  <h2 className="text-lg font-semibold text-navy-800">{section.title}</h2>
                  <p className="mt-3 whitespace-pre-line text-sm leading-8 text-grayx-600">{section.body}</p>
                </article>
              </FadeInView>
            ))}
          </Card>
        </div>
      </section>
    </>
  );
}
