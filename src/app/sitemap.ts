import type { MetadataRoute } from "next";
import { servicePages } from "@/data/service-pages";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1, "weekly"),
    entry("/services", 0.9),
    entry("/pricing", 0.9, "weekly"),
    ...servicePages.map((p) => entry(`/services/${p.slug}`, 0.8)),
    entry("/about", 0.7),
    entry("/portfolio", 0.6),
    entry("/faq", 0.6),
    entry("/contact", 0.8),
    entry("/privacy-policy", 0.2, "yearly"),
    entry("/terms-and-conditions", 0.2, "yearly"),
    entry("/cookie-policy", 0.2, "yearly"),
  ];
}
