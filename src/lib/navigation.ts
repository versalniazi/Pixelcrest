import { servicePages } from "@/data/service-pages";

export const serviceNav = servicePages.map((p) => ({
  href: `/services/${p.slug}`,
  label: p.navLabel,
  icon: p.icon,
}));

export const mainNav = [
  { href: "/services", label: "Services", children: serviceNav },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const legalNav = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];
