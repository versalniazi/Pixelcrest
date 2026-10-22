import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="pc-logo" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4a66fb" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#pc-logo)" />
      <path d="M10 27 17 18l5 5 8-11" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="27" y="9" width="5" height="5" rx="1.2" fill="#fff" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <LogoMark />
      <span
        className={`font-display text-xl font-bold tracking-tight ${tone === "light" ? "text-white" : "text-navy-950"}`}
      >
        {site.name}
      </span>
    </Link>
  );
}
