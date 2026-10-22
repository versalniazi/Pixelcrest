import { faqSchema } from "@/lib/seo";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";

type Item = { q: string; a: string };

/** Accessible accordion built on native <details>, so it works without JavaScript. */
export function FAQ({ items, withSchema = true }: { items: Item[]; withSchema?: boolean }) {
  return (
    <>
      {withSchema ? <JsonLd data={faqSchema(items)} /> : null}
      <div className="divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white shadow-[var(--shadow-card)]">
        {items.map((item) => (
          <details key={item.q} className="group px-5 sm:px-7 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-base font-semibold text-navy-950 sm:text-lg">
              {item.q}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-700 transition group-open:rotate-180 group-open:bg-brand-600 group-open:text-white">
                <Icon name="chevron-down" className="h-4 w-4" />
              </span>
            </summary>
            <p className="-mt-1 pb-6 leading-relaxed text-navy-600">{item.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
