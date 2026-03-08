import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/sections/PageHero";
import { FadeInView } from "@/components/shared/FadeInView";
import { Card } from "@/components/ui/Card";
import { PRICING_PAGE } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";

export const generateMetadata = (): Metadata =>
  buildPageMetadata({
    title: "料金",
    description: "Mediforma Consultingの明瞭な料金体系。スポット、月額顧問、プロジェクト型に対応。",
    path: "/pricing"
  });

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Pricing" title={PRICING_PAGE.heading} lead={PRICING_PAGE.subheading} />

      <section className="section-spacing bg-grayx-50">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {PRICING_PAGE.plans.map((plan, index) => (
              <FadeInView key={plan.id} delay={index * 0.05}>
                <Card
                  className={`h-full border ${
                    plan.isFeatured
                      ? "border-teal-500 bg-white shadow-[0_20px_60px_rgba(31,153,147,0.16)]"
                      : "border-grayx-200 bg-white"
                  }`}
                >
                  <div className="border-b border-grayx-200 pb-5">
                    <p className="font-english text-xs uppercase tracking-[0.16em] text-teal-500">{plan.title}</p>
                    <h2 className="mt-2 text-2xl font-bold text-navy-800">{plan.subtitle}</h2>
                    <p className="mt-4 font-serifDisplay text-4xl text-navy-800">{plan.price}</p>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm text-grayx-600">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2 leading-8">
                        <span className="text-teal-500">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm font-medium text-navy-700">→ {plan.recommendation}</p>
                </Card>
              </FadeInView>
            ))}
          </div>

          <p className="mt-10 text-sm text-grayx-500">{PRICING_PAGE.note}</p>

          <div className="mt-8">
            <Link href="/contact" className="focus-ring inline-flex rounded-full border border-teal-500 bg-teal-500 px-8 py-3 font-english text-sm text-white transition hover:bg-teal-400">
              {PRICING_PAGE.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
