import { CTA_SECTION, SITE } from "@/lib/constants";

import { Button } from "@/components/ui/Button";

type CTASectionProps = {
  compact?: boolean;
};

export function CTASection({ compact = false }: CTASectionProps) {
  return (
    <section className={`bg-cta-gradient text-white ${compact ? "py-16" : "section-spacing"}`}>
      <div className="mx-auto max-w-[960px] px-5 text-center md:px-8">
        <h2 className="text-balance font-body text-[30px] font-bold leading-[1.32] md:text-[44px] md:leading-[1.28]">
          {CTA_SECTION.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-[15px] leading-[1.95] text-white/80 md:text-base">
          {CTA_SECTION.description}
        </p>
        <div className="mt-9">
          <Button href={CTA_SECTION.primaryCta.href} size="lg" className="mx-auto">
            {CTA_SECTION.primaryCta.label}
          </Button>
        </div>
        <p className="mt-5 text-sm text-white/74">
          {CTA_SECTION.phoneLabel}: {SITE.contactPhone}（{SITE.businessHours}）
        </p>
      </div>
    </section>
  );
}
