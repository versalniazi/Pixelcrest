import Link from "next/link";
import { categoryLabels, formatPrice, type Package } from "@/data/packages";
import { Icon } from "./Icon";

export function PricingCard({ pkg, compact = false }: { pkg: Package; compact?: boolean }) {
  const highlighted = Boolean(pkg.badge);
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl p-6 transition duration-300 sm:p-7 ${
        highlighted
          ? "bg-navy-950 text-white shadow-[0_24px_48px_-16px_rgb(47_71_230_/_0.45)] ring-2 ring-brand-500"
          : "card card-hover"
      }`}
    >
      {pkg.badge ? (
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-500 to-violet-accent px-3 py-1 text-xs font-bold tracking-wide text-white uppercase shadow-md">
          <Icon name="sparkle" className="h-3.5 w-3.5" />
          {pkg.badge}
        </span>
      ) : null}
      <div className="flex items-center justify-between gap-3">
        <span
          className={`text-xs font-semibold tracking-wide uppercase ${highlighted ? "text-brand-200" : "text-brand-600"}`}
        >
          {categoryLabels[pkg.category]}
        </span>
        <span className={`text-xs font-medium ${highlighted ? "text-navy-300" : "text-navy-400"}`}>
          Package {String(pkg.number).padStart(2, "0")}
        </span>
      </div>
      <h3 className={`mt-3 text-lg leading-snug font-bold ${highlighted ? "text-white" : ""}`}>{pkg.name}</h3>
      <p className="mt-4 flex items-baseline gap-1.5">
        <span className={`font-display text-4xl font-extrabold ${highlighted ? "text-white" : "text-navy-950"}`}>
          {formatPrice(pkg.price)}
        </span>
        <span className={`text-sm ${highlighted ? "text-navy-300" : "text-navy-500"}`}>one-off</span>
      </p>
      <p className={`mt-3 text-sm leading-relaxed ${highlighted ? "text-navy-200" : "text-navy-600"}`}>{pkg.summary}</p>
      {!compact || pkg.features.length <= 5 ? (
        <ul className="mt-5 space-y-2.5 text-sm">
          {pkg.features.map((f) => (
            <li key={f} className="flex gap-2.5">
              <Icon
                name="check"
                className={`mt-0.5 h-4 w-4 shrink-0 ${highlighted ? "text-emerald-400" : "text-brand-600"}`}
              />
              <span className={highlighted ? "text-navy-100" : "text-navy-700"}>{f}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className={`mt-5 text-sm ${highlighted ? "text-navy-200" : "text-navy-600"}`}>
          Includes {pkg.features.length} deliverables, including {pkg.features.slice(0, 3).join(", ").toLowerCase()} and more.
        </p>
      )}
      <div className="mt-auto pt-7">
        <Link
          href={`/contact?package=${pkg.slug}`}
          className={`group inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
            highlighted
              ? "bg-white text-navy-950 hover:bg-brand-50"
              : "bg-brand-600 text-white hover:bg-brand-700"
          }`}
        >
          Get Started<span className="sr-only"> with {pkg.name}</span>
          <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
