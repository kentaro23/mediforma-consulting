import { PHILOSOPHY_SECTION } from "@/lib/constants";

import { FadeInView } from "@/components/shared/FadeInView";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function PhilosophySection() {
  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <FadeInView>
          <SectionHeading title={PHILOSOPHY_SECTION.heading} align="center" />
        </FadeInView>

        <div className="mx-auto mt-12 max-w-[720px] space-y-8 text-balance text-center text-[15px] leading-[1.95] text-grayx-600 md:text-base">
          {PHILOSOPHY_SECTION.paragraphs.map((paragraph, index) => (
            <FadeInView key={paragraph} delay={index * 0.08}>
              <p>{paragraph}</p>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
