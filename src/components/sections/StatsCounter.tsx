import { STATS_SECTION } from "@/lib/constants";

import { CountUp } from "@/components/shared/CountUp";

export function StatsCounter() {
  return (
    <section className="section-spacing bg-navy-900 text-white">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <header className="max-w-2xl">
          <p className="font-english text-xs uppercase tracking-[0.16em] text-teal-300">{STATS_SECTION.heading}</p>
          <h2 className="mt-4 text-balance font-body text-[28px] font-bold leading-[1.3] md:text-[36px]">{STATS_SECTION.subheading}</h2>
        </header>

        <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {STATS_SECTION.stats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <p className="font-serifDisplay text-5xl text-white md:text-[64px] md:leading-[1.1]">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-4 font-english text-xs uppercase tracking-[0.14em] text-teal-300">{stat.label}</p>
              <p className="mt-2 text-sm leading-7 text-white/72">{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
