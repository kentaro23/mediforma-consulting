import Link from "next/link";

import { SERVICE_DETAIL_CONTENT } from "@/lib/constants";
import type { ServiceDetailPageData } from "@/lib/services-data";

import { FadeInView } from "@/components/shared/FadeInView";
import { Card } from "@/components/ui/Card";

type ServiceDetailContentProps = {
  data: ServiceDetailPageData;
};

export function ServiceDetailContent({ data }: ServiceDetailContentProps) {
  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <FadeInView>
          <h2 className="text-balance font-body text-[28px] font-bold leading-[1.32] text-navy-800 md:text-[36px]">{SERVICE_DETAIL_CONTENT.sectionTitle}</h2>
        </FadeInView>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {data.sections.map((section, index) => (
            <FadeInView key={section.title} delay={index * 0.05}>
              <Card className="h-full">
                <h3 className="text-balance text-xl font-medium text-navy-800">{section.title}</h3>
                <p className="mt-4 text-sm leading-8 text-grayx-500">{section.description}</p>
              </Card>
            </FadeInView>
          ))}
        </div>

        {data.caseStudies?.length ? (
          <div className="mt-20">
            <FadeInView>
              <h3 className="text-balance font-body text-[24px] font-medium leading-[1.4] text-navy-800 md:text-[28px]">{SERVICE_DETAIL_CONTENT.caseStudyTitle}</h3>
            </FadeInView>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {data.caseStudies.map((item, index) => (
                <FadeInView key={item.title} delay={index * 0.06}>
                  <Card className="h-full bg-grayx-50">
                    <h4 className="font-english text-sm uppercase tracking-[0.12em] text-teal-500">{item.title}</h4>
                    <p className="mt-4 text-sm leading-8 text-grayx-600">{item.challenge}</p>
                    <p className="mt-3 text-sm leading-8 text-grayx-600">{item.action}</p>
                    <p className="mt-3 text-sm font-medium leading-8 text-navy-700">{item.outcome}</p>
                  </Card>
                </FadeInView>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-14 rounded-2xl border border-grayx-200 bg-grayx-50 p-8">
          <p className="text-sm leading-8 text-grayx-500">
            {SERVICE_DETAIL_CONTENT.note}
          </p>
          <Link href="/contact" className="focus-ring mt-5 inline-flex font-medium text-teal-500 hover:text-teal-400">
            {SERVICE_DETAIL_CONTENT.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
