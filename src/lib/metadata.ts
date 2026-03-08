import type { Metadata } from "next";

import { SITE } from "@/lib/constants";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

const defaultKeywords = [
  "Mediforma Consulting",
  "医療DX",
  "AI導入支援",
  "医療コンサルティング",
  "医療SNS運用",
  "バックオフィス支援"
];

export const buildPageMetadata = ({
  title,
  description,
  path,
  keywords = defaultKeywords
}: BuildMetadataArgs): Metadata => {
  const url = new URL(path, SITE.baseUrl).toString();
  const ogImageUrl = new URL(SITE.ogImage, SITE.baseUrl).toString();

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(SITE.baseUrl),
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "ja_JP",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE.name} OGP`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl]
    }
  };
};

export const createOrganizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.baseUrl,
  email: SITE.contactEmail,
  telephone: SITE.contactPhone,
  description: SITE.description,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: SITE.contactPhone,
      email: SITE.contactEmail,
      availableLanguage: ["Japanese"]
    }
  ]
});

export const createServiceJsonLd = (name: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: name,
  name,
  description,
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl
  },
  areaServed: "JP",
  url: new URL(path, SITE.baseUrl).toString()
});
