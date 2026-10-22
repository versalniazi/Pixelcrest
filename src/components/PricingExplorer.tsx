"use client";

import { useMemo, useState } from "react";
import { categoryLabels, formatPrice, packages, type PackageCategory } from "@/data/packages";
import { Icon } from "./Icon";
import { PricingCard } from "./PricingCard";

type Filter = PackageCategory | "all";
type Range = "all" | "under-50" | "50-100" | "over-100";
type View = "cards" | "compare";

const ranges: { id: Range; label: string; test: (p: number) => boolean }[] = [
  { id: "all", label: "Any price", test: () => true },
  { id: "under-50", label: "Under £50", test: (p) => p < 50 },
  { id: "50-100", label: "£50 – £100", test: (p) => p >= 50 && p <= 100 },
  { id: "over-100", label: "Over £100", test: (p) => p > 100 },
];

const filters: Filter[] = ["all", ...(Object.keys(categoryLabels) as PackageCategory[])];

export function PricingExplorer() {
  const [category, setCategory] = useState<Filter>("all");
  const [range, setRange] = useState<Range>("all");
  const [view, setView] = useState<View>("cards");

  const visible = useMemo(() => {
    const test = ranges.find((r) => r.id === range)!.test;
    return packages.filter((p) => (category === "all" || p.category === category) && test(p.price));
  }, [category, range]);

  return (
    <div>
      <div className="flex flex-col gap-5 rounded-2xl border border-navy-100 bg-white p-4 shadow-[var(--shadow-card)] sm:p-5 lg:flex-row lg:items-center lg:justify-between">
        <fieldset>
          <legend className="sr-only">Filter by category</legend>
          <div className="-mx-1 flex flex-wrap gap-2">
            {filters.map((f) => {
              const active = category === f;
              const count = f === "all" ? packages.length : packages.filter((p) => p.category === f).length;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(f)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active ? "bg-navy-950 text-white" : "bg-navy-50 text-navy-700 hover:bg-navy-100"
                  }`}
                >
                  {f === "all" ? "All packages" : categoryLabels[f]}
                  <span className={`ml-1.5 text-xs ${active ? "text-navy-300" : "text-navy-400"}`}>{count}</span>
                </button>
              );
            })}
          </div>
        </fieldset>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="flex items-center gap-2 text-sm font-medium text-navy-700">
            <span className="whitespace-nowrap">Price</span>
            <select
              value={range}
              onChange={(e) => setRange(e.target.value as Range)}
              className="w-full rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-semibold text-navy-900 sm:w-auto"
            >
              {ranges.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.label}
                </option>
              ))}
            </select>
          </label>
          <div className="inline-flex rounded-full bg-navy-50 p-1" role="group" aria-label="Display mode">
            {(["cards", "compare"] as View[]).map((v) => (
              <button
                key={v}
                type="button"
                aria-pressed={view === v}
                onClick={() => setView(v)}
                className={`flex-1 rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition ${
                  view === v ? "bg-white text-navy-950 shadow-sm" : "text-navy-600 hover:text-navy-900"
                }`}
              >
                {v === "cards" ? "Cards" : "Compare"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-navy-500" aria-live="polite">
        Showing {visible.length} of {packages.length} packages
      </p>

      {visible.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-navy-200 p-10 text-center text-navy-600">
          No packages match those filters.{" "}
          <button
            type="button"
            className="font-semibold text-brand-600 underline underline-offset-2"
            onClick={() => {
              setCategory("all");
              setRange("all");
            }}
          >
            Reset filters
          </button>
        </div>
      ) : view === "cards" ? (
        <ul className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((p) => (
            <li key={p.slug}>
              <PricingCard pkg={p} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-navy-100 bg-white shadow-[var(--shadow-card)]">
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">Package comparison: price, category and what is included</caption>
            <thead className="bg-navy-50 text-xs tracking-wide text-navy-600 uppercase">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold">Package</th>
                <th scope="col" className="px-5 py-4 font-semibold">Category</th>
                <th scope="col" className="px-5 py-4 font-semibold">What&apos;s included</th>
                <th scope="col" className="px-5 py-4 text-right font-semibold">Price</th>
                <th scope="col" className="px-5 py-4"><span className="sr-only">Action</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {visible.map((p) => (
                <tr key={p.slug} className={p.badge ? "bg-brand-50/50" : undefined}>
                  <th scope="row" className="px-5 py-4 align-top font-semibold text-navy-950">
                    <span className="block text-xs font-medium text-navy-400">
                      {String(p.number).padStart(2, "0")}
                    </span>
                    {p.name}
                    {p.badge ? (
                      <span className="mt-1 block w-fit rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase">
                        {p.badge}
                      </span>
                    ) : null}
                  </th>
                  <td className="px-5 py-4 align-top text-navy-600">{categoryLabels[p.category]}</td>
                  <td className="px-5 py-4 align-top">
                    <ul className="space-y-1">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-1.5 text-navy-700">
                          <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-600" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-5 py-4 text-right align-top font-display text-lg font-bold whitespace-nowrap text-navy-950">
                    {formatPrice(p.price)}
                  </td>
                  <td className="px-5 py-4 text-right align-top">
                    <a
                      href={`/contact?package=${p.slug}`}
                      className="inline-flex items-center gap-1 rounded-full bg-brand-600 px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap text-white hover:bg-brand-700"
                    >
                      Get Started<span className="sr-only"> with {p.name}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
