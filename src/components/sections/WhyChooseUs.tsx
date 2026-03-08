import { SECTION_LABELS, WHY_CHOOSE_US_SECTION } from "@/lib/constants";

import { FadeInView } from "@/components/shared/FadeInView";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <FadeInView>
          <SectionHeading eyebrow={SECTION_LABELS.whyChooseUs} title={WHY_CHOOSE_US_SECTION.subheading} />
        </FadeInView>

        <ol className="mt-14 space-y-8">
          {WHY_CHOOSE_US_SECTION.points.map((point, index) => (
            <FadeInView key={point.id} delay={index * 0.05}>
              <li className="grid gap-4 border-b border-grayx-200 pb-8 md:grid-cols-[140px_1fr] md:gap-8">
                <p className="font-serifDisplay text-5xl leading-none text-teal-500/38 md:text-7xl">{point.id}</p>
                <div>
                  <h3 className="text-balance font-body text-xl font-medium text-navy-800 md:text-2xl">{point.title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.95] text-grayx-600 md:text-base">{point.description}</p>
                </div>
              </li>
            </FadeInView>
          ))}
        </ol>
      </div>
    </section>
  );
}
