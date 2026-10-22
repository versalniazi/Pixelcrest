import Link from "next/link";
import type { Service } from "@/data/services";
import { Icon } from "./Icon";

/** Compact card used in service overviews. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card card-hover group relative flex h-full flex-col p-7">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 ring-1 ring-brand-100 transition group-hover:from-brand-600 group-hover:to-violet-accent group-hover:text-white">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-6 text-xl font-bold">
        <Link href={service.href} className="after:absolute after:inset-0 after:rounded-2xl">
          {service.name}
        </Link>
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-navy-600">{service.short}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
        Learn more
        <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </article>
  );
}

/** Detailed card used on the Services page: what it is, who it's for, inclusions, objective and CTA. */
export function ServiceDetailCard({ service }: { service: Service }) {
  const hasPage = service.href !== "/services";
  return (
    <article id={service.id} className="card scroll-mt-28 flex h-full flex-col p-7 sm:p-8">
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <h3 className="text-xl font-bold sm:text-2xl">{service.name}</h3>
      </div>
      <dl className="mt-6 space-y-5 text-[0.95rem]">
        <div>
          <dt className="font-semibold text-navy-950">What it is</dt>
          <dd className="mt-1 leading-relaxed text-navy-600">{service.whatItIs}</dd>
        </div>
        <div>
          <dt className="font-semibold text-navy-950">Who it&apos;s for</dt>
          <dd className="mt-1 leading-relaxed text-navy-600">{service.whoFor}</dd>
        </div>
        <div>
          <dt className="font-semibold text-navy-950">What&apos;s included</dt>
          <dd className="mt-2">
            <ul className="grid gap-2 sm:grid-cols-2">
              {service.included.map((item) => (
                <li key={item} className="flex gap-2 text-navy-700">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div className="rounded-xl bg-navy-50 p-4">
          <dt className="text-sm font-semibold tracking-wide text-navy-950 uppercase">Business objective</dt>
          <dd className="mt-1 leading-relaxed text-navy-700">{service.objective}</dd>
        </div>
      </dl>
      <div className="mt-auto flex flex-wrap gap-3 pt-7">
        <Link
          href={`/contact?service=${encodeURIComponent(service.name)}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Enquire now<span className="sr-only"> about {service.name}</span>
          <Icon name="arrow-right" className="h-4 w-4" />
        </Link>
        {hasPage ? (
          <Link
            href={service.href}
            className="inline-flex items-center rounded-full border border-navy-200 px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-navy-50"
          >
            Learn more<span className="sr-only"> about {service.name}</span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
