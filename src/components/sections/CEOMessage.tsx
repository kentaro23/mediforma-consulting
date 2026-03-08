import { CEO_MESSAGE_SECTION } from "@/lib/constants";

import { FadeInView } from "@/components/shared/FadeInView";

export function CEOMessage() {
  return (
    <section className="section-spacing bg-grayx-50">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-start">
        <FadeInView>
          <div className="aspect-[3/4] rounded-2xl border border-grayx-200 bg-grayx-100">
            <div className="flex h-full items-center justify-center font-english text-sm uppercase tracking-[0.14em] text-grayx-400">
              IMAGE
            </div>
          </div>
        </FadeInView>

        <FadeInView>
          <div>
            <h2 className="text-[28px] font-bold leading-[1.3] text-navy-800 md:text-[36px]">{CEO_MESSAGE_SECTION.heading}</h2>
            <p className="mt-6 border-l-2 border-gold-400 pl-5 font-serifDisplay text-3xl leading-[1.45] text-navy-800 md:text-4xl">
              「{CEO_MESSAGE_SECTION.quote}」
            </p>

            <div className="mt-8 space-y-6 text-[15px] leading-[1.95] text-grayx-600 md:text-base">
              {CEO_MESSAGE_SECTION.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <p className="mt-8 font-body text-lg font-medium text-navy-800">{CEO_MESSAGE_SECTION.signature}</p>
            <p className="mt-1 font-english text-sm uppercase tracking-[0.12em] text-grayx-400">{CEO_MESSAGE_SECTION.nameEn}</p>
            <p className="mt-1 text-sm text-grayx-500">{CEO_MESSAGE_SECTION.title}</p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
