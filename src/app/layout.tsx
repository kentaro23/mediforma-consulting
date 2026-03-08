import type { Metadata } from "next";
import { Noto_Sans_JP, Playfair_Display, Poppins } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LayoutCTA } from "@/components/layout/LayoutCTA";
import { PageTransition } from "@/components/shared/PageTransition";
import { StructuredData } from "@/components/shared/StructuredData";
import { SITE } from "@/lib/constants";
import { createOrganizationJsonLd } from "@/lib/metadata";

import "@/styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-playfair"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-poppins"
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-jp"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: `${SITE.name} | 医療DX・AI導入支援`,
    template: `%s | ${SITE.name}`
  },
  description: SITE.description
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${playfair.variable} ${poppins.variable} ${notoSansJP.variable}`}>
        <StructuredData data={createOrganizationJsonLd()} />
        <Header />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <LayoutCTA />
        <Footer />
      </body>
    </html>
  );
}
