import type { ReactNode } from "react";
import { PageHero } from "./PageHero";

export function LegalPage({
  title,
  path,
  updated,
  intro,
  children,
}: {
  title: string;
  path: string;
  updated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero title={title} description={intro} breadcrumbs={[{ name: title, path }]} />
      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="text-sm text-navy-500">Last updated: {updated}</p>
          <div className="prose-legal">{children}</div>
        </div>
      </section>
    </>
  );
}
