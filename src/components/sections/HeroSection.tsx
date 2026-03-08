"use client";

import { motion, useReducedMotion } from "framer-motion";

import { HERO_CONTENT } from "@/lib/constants";

import { Button } from "@/components/ui/Button";

const motionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const motionItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-navy-950 pt-16 text-white">
      <div className="grid-pattern" aria-hidden />

      <svg className="hero-geometry" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M120 370C280 370 280 430 440 430C600 430 600 320 760 320C920 320 920 460 1080 460" stroke="rgba(92,214,214,0.25)" strokeWidth="2" />
        <path d="M180 250L280 250L320 200L360 300L400 160L440 340L480 280L560 280" stroke="rgba(201,169,110,0.28)" strokeWidth="1.6" />
        <path d="M120 640L420 340L710 540L980 250" stroke="rgba(92,214,214,0.16)" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-20 pt-8 md:px-8 md:pb-24">
        <motion.div
          variants={prefersReducedMotion ? undefined : motionContainer}
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={prefersReducedMotion ? undefined : "show"}
          className="max-w-4xl"
        >
          <motion.p
            variants={prefersReducedMotion ? undefined : motionItem}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-english text-xs uppercase tracking-[0.16em] text-teal-300"
          >
            Mediforma Consulting
          </motion.p>

          <motion.h1
            variants={prefersReducedMotion ? undefined : motionItem}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-5 font-serifDisplay text-[36px] leading-[1.22] md:text-[56px] md:leading-[1.16]"
          >
            <span className="block">{HERO_CONTENT.headingLine1}</span>
            <span className="block">{HERO_CONTENT.headingLine2}</span>
          </motion.h1>

          <motion.p
            variants={prefersReducedMotion ? undefined : motionItem}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-7 text-balance font-body text-[19px] font-medium leading-[1.7] text-teal-300"
          >
            {HERO_CONTENT.tagline}
          </motion.p>

          <motion.p
            variants={prefersReducedMotion ? undefined : motionItem}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-6 max-w-3xl text-balance font-body text-[15px] leading-[1.95] text-white/82 md:text-base"
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div
            variants={prefersReducedMotion ? undefined : motionItem}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href={HERO_CONTENT.primaryCta.href} size="lg" className="w-full sm:w-auto">
              {HERO_CONTENT.primaryCta.label}
            </Button>
            <Button
              href={HERO_CONTENT.secondaryCta.href}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              {HERO_CONTENT.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="font-english text-[11px] uppercase tracking-[0.16em] text-white/55">{HERO_CONTENT.scrollLabel}</p>
          <span className="mx-auto mt-2 block h-5 w-5 animate-floatArrow text-xl leading-none text-teal-300">⌄</span>
        </div>
      </div>
    </section>
  );
}
