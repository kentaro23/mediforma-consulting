"use client";

import { animate, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export function CountUp({ value, suffix = "", duration = 1.3 }: CountUpProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const display = useTransform(rounded, (latest) => `${latest}${suffix}`);
  const inView = useInView(nodeRef, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) {
      return;
    }

    if (prefersReducedMotion) {
      motionValue.set(value);
      return;
    }

    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut"
    });

    return () => controls.stop();
  }, [duration, inView, motionValue, prefersReducedMotion, value]);

  return <motion.span ref={nodeRef}>{display}</motion.span>;
}
