import Link from "next/link";

import { FOOTER_CONTENT, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="font-serifDisplay text-3xl">M</span>
              <span className="font-english text-xs uppercase tracking-[0.18em]">Mediforma Consulting</span>
            </div>
            <p className="mt-5 text-sm leading-8 text-white/78">{FOOTER_CONTENT.description}</p>
          </div>

          <div>
            <p className="font-english text-xs uppercase tracking-[0.16em] text-teal-300">{FOOTER_CONTENT.headings.services}</p>
            <ul className="mt-5 space-y-3 text-sm text-white/88">
              {FOOTER_CONTENT.serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="focus-ring hover:text-teal-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-english text-xs uppercase tracking-[0.16em] text-teal-300">{FOOTER_CONTENT.headings.company}</p>
            <ul className="mt-5 space-y-3 text-sm text-white/88">
              {FOOTER_CONTENT.companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="focus-ring hover:text-teal-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-english text-xs uppercase tracking-[0.16em] text-teal-300">{FOOTER_CONTENT.headings.contact}</p>
            <ul className="mt-5 space-y-3 text-sm text-white/88">
              <li>
                <a href={`mailto:${SITE.contactEmail}`} className="focus-ring hover:text-teal-300">
                  {SITE.contactEmail}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.contactPhone}`} className="focus-ring hover:text-teal-300">
                  {SITE.contactPhone}
                </a>
              </li>
              <li>{SITE.businessHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-7 text-xs text-white/72 md:flex-row md:items-center md:justify-between">
          <p>{FOOTER_CONTENT.copy}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="focus-ring hover:text-teal-300">
              {FOOTER_CONTENT.privacyLabel}
            </Link>
            <a href={SITE.mediformaUrl} target="_blank" rel="noreferrer" className="focus-ring hover:text-teal-300">
              {FOOTER_CONTENT.mediformaLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
