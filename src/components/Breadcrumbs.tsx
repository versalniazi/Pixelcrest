import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${tone === "light" ? "text-navy-300" : "text-navy-500"}`}>
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className={tone === "light" ? "text-white" : "text-navy-900"}>
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className={tone === "light" ? "hover:text-white" : "hover:text-navy-900"}>
                      {c.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
