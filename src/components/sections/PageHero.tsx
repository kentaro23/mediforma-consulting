import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lead: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-28 text-white md:pb-28 md:pt-36">
      <div className="grid-pattern" aria-hidden />
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="font-english text-xs uppercase tracking-[0.16em] text-teal-300">{eyebrow}</p>
          ) : null}
          <h1 className="mt-4 text-balance font-serifDisplay text-[36px] leading-[1.2] md:text-[56px] md:leading-[1.14]">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-balance text-[15px] leading-[1.95] text-white/82 md:text-base">{lead}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
