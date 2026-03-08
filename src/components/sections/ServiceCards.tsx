"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { SECTION_LABELS, SERVICES_OVERVIEW_PAGE } from "@/lib/constants";
import { HOME_SERVICE_CARDS } from "@/lib/services-data";

import { FadeInView } from "@/components/shared/FadeInView";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";

export function ServiceCards() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-spacing bg-grayx-50">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <FadeInView>
          <SectionHeading
            eyebrow={SECTION_LABELS.services}
            title={SERVICES_OVERVIEW_PAGE.subheading}
            description={SERVICES_OVERVIEW_PAGE.description}
            align="center"
          />
        </FadeInView>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {HOME_SERVICE_CARDS.map((service, index) => (
            <motion.div
              key={service.id}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              whileHover={prefersReducedMotion ? undefined : { y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
            >
              <Card className="relative h-full overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-1 bg-teal-500" aria-hidden />
                <Image src={service.icon} alt="" width={48} height={48} className="h-12 w-12" />
                <h3 className="mt-7 font-english text-lg font-semibold text-navy-800">{service.titleEn}</h3>
                <p className="mt-2 font-body text-sm font-medium text-navy-700">{service.titleJa}</p>
                <p className="mt-4 text-sm leading-8 text-grayx-500">{service.description}</p>
                <Link href={service.href} className="focus-ring mt-6 inline-flex text-sm font-medium text-teal-500 transition hover:text-teal-400">
                  {SERVICES_OVERVIEW_PAGE.detailLinkLabel}
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
