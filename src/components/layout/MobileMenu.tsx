"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HEADER_UI, NAVIGATION, SERVICES_DROPDOWN } from "@/lib/constants";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  const overlayVariants = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
      };

  const panelVariants = prefersReducedMotion
    ? {}
    : {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" }
      };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          {...overlayVariants}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-[60] bg-navy-950/85"
          onClick={onClose}
          aria-hidden
        >
          <motion.nav
            {...panelVariants}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="ml-auto flex h-full w-[88%] max-w-sm flex-col bg-navy-900 px-6 py-8 text-white"
            aria-label={HEADER_UI.mobileMenuLabel}
          >
            <button
              type="button"
              onClick={onClose}
              className="focus-ring ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-xl"
              aria-label={HEADER_UI.closeMenuLabel}
            >
              ×
            </button>

            <div className="mt-8 space-y-6">
              <Link
                href="/"
                onClick={onClose}
                className={`block border-b border-white/20 pb-3 font-body text-xl ${pathname === "/" ? "text-teal-300" : ""}`}
              >
                {NAVIGATION.home}
              </Link>

              <div className="border-b border-white/20 pb-4">
                <p className="font-body text-xl">{NAVIGATION.services}</p>
                <ul className="mt-3 space-y-2 pl-1">
                  {SERVICES_DROPDOWN.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`block py-1 font-body text-base ${pathname === item.href ? "text-teal-300" : "text-white/85"}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/pricing"
                onClick={onClose}
                className={`block border-b border-white/20 pb-3 font-body text-xl ${pathname === "/pricing" ? "text-teal-300" : ""}`}
              >
                {NAVIGATION.pricing}
              </Link>
              <Link
                href="/about"
                onClick={onClose}
                className={`block border-b border-white/20 pb-3 font-body text-xl ${pathname === "/about" ? "text-teal-300" : ""}`}
              >
                {NAVIGATION.about}
              </Link>
              <Link
                href="/contact"
                onClick={onClose}
                className={`block border-b border-white/20 pb-3 font-body text-xl ${pathname === "/contact" ? "text-teal-300" : ""}`}
              >
                {NAVIGATION.contact}
              </Link>
            </div>

            <Link
              href="/contact"
              onClick={onClose}
              className="focus-ring mt-auto inline-flex h-12 items-center justify-center rounded-full bg-teal-500 px-6 font-english text-sm font-medium tracking-wide text-white transition hover:bg-teal-400"
            >
              {NAVIGATION.freeConsultation}
            </Link>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
