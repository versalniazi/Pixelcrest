import Link from "next/link";
import { legalNav, serviceNav } from "@/lib/navigation";
import { companyDisclosure, site } from "@/lib/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "All Services" },
  { href: "/pricing", label: "Pricing & Packages" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-page relative pt-16 pb-28 lg:pt-20 lg:pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm leading-relaxed text-navy-300">
              A UK digital marketing agency helping start-ups, small businesses and established companies grow online
              with practical strategy and transparent, fixed-price packages.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 text-white hover:text-brand-300">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
                    <Icon name="mail" className="h-4 w-4" />
                  </span>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="inline-flex items-center gap-3 text-white hover:text-brand-300">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
                    <Icon name="phone" className="h-4 w-4" />
                  </span>
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer services" className="lg:col-span-3">
            <h2 className="font-display text-sm font-semibold tracking-wide text-white uppercase">Services</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceNav.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer quick links" className="lg:col-span-2">
            <h2 className="font-display text-sm font-semibold tracking-wide text-white uppercase">Quick links</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-semibold tracking-wide text-white uppercase">Packages</h2>
            <p className="mt-5 text-sm leading-relaxed text-navy-300">
              25 one-off packages from £10 to £150. No subscriptions, no hidden fees.
            </p>
            <Link
              href="/pricing"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-950 hover:bg-brand-50"
            >
              View all packages <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
            <p className="mt-6 text-sm">
              <a
                href={site.companiesHouseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-navy-300 underline-offset-2 hover:text-white hover:underline"
              >
                <Icon name="building" className="h-4 w-4" />
                View our Companies House record
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-navy-400 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-1">
            <p>
              © {year} {site.legalName}. All rights reserved.
            </p>
            <p className="text-xs leading-relaxed">{companyDisclosure}</p>
          </div>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
