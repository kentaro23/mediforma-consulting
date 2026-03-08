"use client";

import { usePathname } from "next/navigation";

import { CTASection } from "@/components/sections/CTASection";

export function LayoutCTA() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return <CTASection compact />;
}
