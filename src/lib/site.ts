export const site = {
  name: "Pixelcrest",
  tagline: "Digital marketing for UK businesses ready to grow",
  description:
    "UK digital marketing agency offering SEO, local SEO, social media marketing, Google Ads / PPC, content marketing and conversion optimisation, with transparent one-off packages from £10 to £150.",
  // Set NEXT_PUBLIC_SITE_URL in production so canonical URLs, the sitemap and Open Graph tags point at the live domain.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  email: "Tjdurrani1@gmail.com",
  phoneDisplay: "+44 7473 966418",
  phoneHref: "tel:+447473966418",
  companiesHouseUrl: "https://find-and-update.company-information.service.gov.uk/company/17494681",
  // Verified against the Companies House record for company 17494681.
  legalName: "Pixelcrest Ltd",
  companyNumber: "17494681",
  companyType: "private limited company",
  registeredIn: "England and Wales",
  incorporated: "2026-10-01",
  registeredOffice: {
    street: "3 Garth Road",
    locality: "Bangor",
    region: "Wales",
    postcode: "LL57 2SG",
    country: "GB",
  },
  locale: "en_GB",
} as const;

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;

export const registeredOfficeText = `${site.registeredOffice.street}, ${site.registeredOffice.locality}, ${site.registeredOffice.region}, ${site.registeredOffice.postcode}`;

/** Statutory company disclosure (Companies Act 2006 / Company, LLP and Business Names Regulations 2015). */
export const companyDisclosure = `${site.legalName} is a ${site.companyType} registered in ${site.registeredIn}, company number ${site.companyNumber}. Registered office: ${registeredOfficeText}.`;
