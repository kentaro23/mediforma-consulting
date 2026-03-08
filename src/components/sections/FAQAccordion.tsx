"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { FAQ_SECTION, SECTION_LABELS } from "@/lib/constants";
import { FAQ_ITEMS } from "@/lib/faq-data";

import { FadeInView } from "@/components/shared/FadeInView";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-[960px] px-5 md:px-8">
        <FadeInView>
          <SectionHeading
            eyebrow={SECTION_LABELS.faq}
            title={FAQ_SECTION.heading}
            description={FAQ_SECTION.subheading}
            align="center"
          />
        </FadeInView>

        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="rounded-2xl border border-grayx-200 bg-white px-5 py-2 md:px-7">
                <h3>
                  <button
                    type="button"
                    className="focus-ring flex w-full items-center justify-between gap-6 py-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                  >
                    <span className="text-base font-medium leading-8 text-navy-800">Q. {item.question}</span>
                    <span className="font-english text-sm text-teal-500">{isOpen ? "−" : "+"}</span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                      animate={prefersReducedMotion ? undefined : { height: "auto", opacity: 1 }}
                      exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-8 text-sm leading-8 text-grayx-500">A. {item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
