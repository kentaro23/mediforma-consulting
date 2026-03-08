"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { HEADER_UI, NAVIGATION, SERVICES_DROPDOWN } from "@/lib/constants";

import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

const HEADER_OFFSET = 40;

export function Header() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > HEADER_OFFSET);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHomeTop = pathname === "/" && !isScrolled;

  const headerClass = useMemo(() => {
    if (isHomeTop) {
      return "bg-white/88 text-navy-800 shadow-sm backdrop-blur";
    }
    return "bg-white/95 text-navy-800 shadow-sm backdrop-blur";
  }, [isHomeTop]);

  const linkBase = "focus-ring rounded-md px-3 py-2 font-body text-[15px] transition";
  const logoClass = "text-navy-800";

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${headerClass}`}>
        <div className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between px-5 md:px-8">
          <Link href="/" className={`focus-ring inline-flex items-center gap-3 ${logoClass}`}>
            <span className="inline-flex h-12 w-12 items-center justify-center p-1">
              <Image src="/images/mc_v2_refined.svg" alt="Mediforma Consulting ロゴ" width={38} height={38} />
            </span>
            <span className="font-english text-sm uppercase tracking-[0.18em]">Mediforma Consulting</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label={HEADER_UI.globalNavLabel}>
            <Link href="/" className={`${linkBase} ${pathname === "/" ? "text-teal-500" : ""}`}>
              {NAVIGATION.home}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button
                type="button"
                className={`${linkBase} inline-flex items-center gap-1 ${pathname.startsWith("/services") ? "text-teal-500" : ""}`}
                aria-expanded={serviceOpen}
                onClick={() => setServiceOpen((current) => !current)}
              >
                {NAVIGATION.services}
                <span aria-hidden>▾</span>
              </button>

              <AnimatePresence>
                {serviceOpen ? (
                  <motion.ul
                    initial={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-11 w-64 rounded-xl border border-grayx-200 bg-white p-2 shadow-card"
                  >
                    {SERVICES_DROPDOWN.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className={`focus-ring block rounded-lg px-4 py-2 text-sm text-navy-800 transition hover:bg-grayx-50 ${pathname === service.href ? "text-teal-500" : ""}`}
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </div>

            <Link href="/pricing" className={`${linkBase} ${pathname === "/pricing" ? "text-teal-500" : ""}`}>
              {NAVIGATION.pricing}
            </Link>
            <Link href="/about" className={`${linkBase} ${pathname === "/about" ? "text-teal-500" : ""}`}>
              {NAVIGATION.about}
            </Link>
            <Link href="/contact" className={`${linkBase} ${pathname === "/contact" ? "text-teal-500" : ""}`}>
              {NAVIGATION.contact}
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" size="md" className={isHomeTop ? "" : "text-white"}>
              {NAVIGATION.freeConsultation}
            </Button>
          </div>

          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-grayx-300 lg:hidden"
            aria-label={HEADER_UI.openMenuLabel}
            onClick={() => setMobileOpen(true)}
          >
            <span className="text-lg">☰</span>
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
