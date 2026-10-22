import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

type PageMeta = { title: string; description: string; path: string };

/** Per-page metadata with canonical URL, Open Graph and Twitter/X cards. */
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: site.name,
      locale: site.locale,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name}: UK digital marketing agency` }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  };
}

export const organizationId = `${site.url}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": organizationId,
  name: site.name,
  url: site.url,
  logo: absoluteUrl("/icon.svg"),
  description: site.description,
  email: site.email,
  telephone: site.phoneDisplay.replace(/\s/g, ""),
  areaServed: { "@type": "Country", name: "United Kingdom" },
  priceRange: "£10 – £150",
  sameAs: [site.companiesHouseUrl],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: site.email,
    telephone: site.phoneDisplay.replace(/\s/g, ""),
    areaServed: "GB",
    availableLanguage: "English",
  },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
