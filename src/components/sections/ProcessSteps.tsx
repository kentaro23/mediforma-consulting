import { PROCESS_SECTION, SECTION_LABELS } from "@/lib/constants";

import { FadeInView } from "@/components/shared/FadeInView";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";

export function ProcessSteps() {
  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <FadeInView>
          <SectionHeading eyebrow={SECTION_LABELS.process} title={PROCESS_SECTION.subheading} align="center" />
        </FadeInView>

        <div className="mt-14 flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible xl:grid-cols-3">
          {PROCESS_SECTION.steps.map((step, index) => (
            <FadeInView key={step.id} delay={index * 0.06} className="min-w-[300px] flex-1 md:min-w-0">
              <Card className="h-full">
                <p className="font-english text-xs uppercase tracking-[0.16em] text-teal-500">{step.id}</p>
                <h3 className="mt-3 text-balance font-body text-xl font-medium leading-[1.45] text-navy-800">{step.title}</h3>
                <p className="mt-4 text-sm leading-8 text-grayx-500">{step.description}</p>
              </Card>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
