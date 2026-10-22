import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "./Icon";

/** Sticky bottom action bar shown on small screens only. */
export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-12px_rgb(10_15_30_/_0.2)] backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-xl gap-2">
        <a
          href={site.phoneHref}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-navy-200 px-3 py-3 text-sm font-semibold text-navy-950"
        >
          <Icon name="phone" className="h-4 w-4" />
          Call
        </a>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-navy-200 px-3 py-3 text-sm font-semibold text-navy-950"
        >
          <Icon name="mail" className="h-4 w-4" />
          Email
        </a>
        <Link
          href="/contact"
          className="inline-flex flex-[1.4] items-center justify-center gap-1.5 rounded-full bg-brand-600 px-3 py-3 text-sm font-semibold text-white"
        >
          Get a Quote
          <Icon name="arrow-right" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
