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
  companyNumber: "17494681",
  locale: "en_GB",
} as const;

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;
