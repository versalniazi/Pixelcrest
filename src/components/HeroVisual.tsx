import { Icon } from "./Icon";

/**
 * Illustrative growth dashboard built from SVG/CSS (no external images).
 * Deliberately contains no numbers so it can't be mistaken for real client data.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl" role="img" aria-label="Illustration of a digital marketing dashboard showing search, advertising and social growth trends">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-500/30 via-violet-accent/20 to-transparent blur-2xl" aria-hidden="true" />

      <div className="relative rounded-3xl border border-white/10 bg-navy-900/80 p-5 shadow-2xl ring-1 ring-white/5 backdrop-blur sm:p-6" aria-hidden="true">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-navy-300 ring-1 ring-white/10">
            Growth overview
          </span>
        </div>

        <div className="mt-5 rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10">
          <div className="flex items-center justify-between text-xs text-navy-300">
            <span className="font-semibold text-white">Organic visibility</span>
            <span className="inline-flex items-center gap-1 text-emerald-300">
              <Icon name="chart" className="h-3.5 w-3.5" /> Trending up
            </span>
          </div>
          <svg viewBox="0 0 320 120" className="mt-3 h-28 w-full">
            <defs>
              <linearGradient id="hv-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#6f8cff" stopOpacity="0.45" />
                <stop offset="1" stopColor="#6f8cff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#6f8cff" />
                <stop offset="1" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            {[30, 60, 90].map((y) => (
              <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="white" strokeOpacity="0.06" />
            ))}
            <path d="M0 100 C40 96 60 88 90 82 S150 70 180 58 S240 40 270 30 S305 18 320 12 V120 H0 Z" fill="url(#hv-area)" />
            <path d="M0 100 C40 96 60 88 90 82 S150 70 180 58 S240 40 270 30 S305 18 320 12" fill="none" stroke="url(#hv-line)" strokeWidth="3" strokeLinecap="round" />
            <path d="M0 108 C50 106 90 102 130 98 S210 88 250 80 S300 72 320 66" fill="none" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="4 6" />
            <circle cx="270" cy="30" r="5" fill="#a78bfa" stroke="#0a0f1e" strokeWidth="2" />
          </svg>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { icon: "search" as const, label: "SEO", w: "78%" },
            { icon: "target" as const, label: "PPC", w: "64%" },
            { icon: "share" as const, label: "Social", w: "70%" },
          ].map((c) => (
            <div key={c.label} className="rounded-xl bg-white/[0.03] p-3 ring-1 ring-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-brand-500/20 text-brand-200">
                  <Icon name={c.icon} className="h-3.5 w-3.5" />
                </span>
                {c.label}
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-white/10">
                <div className="h-1.5 rounded-full bg-gradient-to-r from-brand-400 to-violet-400" style={{ width: c.w }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-[1fr_auto] items-end gap-4 rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10">
          <div>
            <p className="text-xs font-semibold text-white">Enquiries by channel</p>
            <div className="mt-3 flex h-16 items-end gap-2">
              {[35, 50, 42, 62, 55, 74, 68, 88].map((h, i) => (
                <div
                  key={i}
                  className="w-full rounded-t-md bg-gradient-to-t from-brand-600/60 to-brand-400"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <svg viewBox="0 0 42 42" className="h-16 w-16 -rotate-90">
            <circle cx="21" cy="21" r="15.9" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="5" />
            <circle cx="21" cy="21" r="15.9" fill="none" stroke="#6f8cff" strokeWidth="5" strokeDasharray="45 55" />
            <circle cx="21" cy="21" r="15.9" fill="none" stroke="#a78bfa" strokeWidth="5" strokeDasharray="30 70" strokeDashoffset="-45" />
            <circle cx="21" cy="21" r="15.9" fill="none" stroke="#34d399" strokeWidth="5" strokeDasharray="25 75" strokeDashoffset="-75" />
          </svg>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 hidden animate-float rounded-2xl border border-navy-100 bg-white p-3 pr-5 shadow-xl sm:flex sm:items-center sm:gap-3" aria-hidden="true">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
          <Icon name="pin" className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs text-navy-500">Local search</span>
          <span className="block text-sm font-semibold text-navy-950">Profile optimised</span>
        </span>
      </div>
      <div className="absolute -top-5 -right-3 hidden animate-float rounded-2xl border border-navy-100 bg-white p-3 pr-5 shadow-xl [animation-delay:1.5s] sm:flex sm:items-center sm:gap-3" aria-hidden="true">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
          <Icon name="file" className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs text-navy-500">Action plan</span>
          <span className="block text-sm font-semibold text-navy-950">Priorities ready</span>
        </span>
      </div>
    </div>
  );
}
