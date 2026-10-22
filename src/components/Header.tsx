"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav } from "@/lib/navigation";
import { site } from "@/lib/site";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [servicesOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-navy-100 bg-white/90 backdrop-blur-lg" : "border-transparent bg-white/70 backdrop-blur"
      }`}
    >
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-navy-950 px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.href} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.95rem] font-medium transition hover:bg-navy-50 hover:text-navy-950 ${
                      isActive(item.href) ? "text-brand-600" : "text-navy-700"
                    }`}
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {item.label}
                    <Icon
                      name="chevron-down"
                      className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    id="services-menu"
                    hidden={!servicesOpen}
                    className="absolute top-full left-1/2 mt-3 w-[34rem] -translate-x-1/2 rounded-2xl border border-navy-100 bg-white p-3 shadow-[var(--shadow-card-hover)]"
                  >
                    <ul className="grid grid-cols-2 gap-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="flex items-center gap-3 rounded-xl p-3 text-sm font-medium text-navy-800 transition hover:bg-brand-50 hover:text-brand-700"
                          >
                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                              <Icon name={child.icon} className="h-[18px] w-[18px]" />
                            </span>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/services"
                      className="mt-2 flex items-center justify-between rounded-xl bg-navy-50 px-4 py-3 text-sm font-semibold text-navy-900 hover:bg-navy-100"
                    >
                      View all services
                      <Icon name="arrow-right" className="h-4 w-4" />
                    </Link>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`rounded-full px-3.5 py-2 text-[0.95rem] font-medium transition hover:bg-navy-50 hover:text-navy-950 ${
                      isActive(item.href) ? "text-brand-600" : "text-navy-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-brand-600"
          >
            <Icon name="phone" className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <Button href="/contact" size="md">
            Get a Quote
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.phoneHref}
            className="grid h-10 w-10 place-items-center rounded-full border border-navy-200 text-navy-900"
            aria-label={`Call us on ${site.phoneDisplay}`}
          >
            <Icon name="phone" className="h-[18px] w-[18px]" />
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full bg-navy-950 text-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-navy-100 bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page py-6">
          <ul className="space-y-1">
            <li>
              <Link href="/" className="block rounded-xl px-3 py-3 text-lg font-semibold text-navy-950 hover:bg-navy-50">
                Home
              </Link>
            </li>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="block rounded-xl px-3 py-3 text-lg font-semibold text-navy-950 hover:bg-navy-50"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="mb-2 grid grid-cols-1 gap-1 pl-3 sm:grid-cols-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[0.95rem] text-navy-700 hover:bg-brand-50 hover:text-brand-700"
                        >
                          <Icon name={child.icon} className="h-4 w-4 text-brand-600" />
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 border-t border-navy-100 pt-6">
            <Button href="/contact" size="lg" arrow>
              Get a Quote
            </Button>
            <Button href={site.phoneHref} variant="ghost" size="lg">
              <Icon name="phone" className="h-4 w-4" /> {site.phoneDisplay}
            </Button>
            <Button href={`mailto:${site.email}`} variant="ghost" size="lg">
              <Icon name="mail" className="h-4 w-4" /> {site.email}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
