import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs: Crumb[];
  children?: ReactNode;
  aside?: ReactNode;
};

/** Dark hero band used at the top of every inner page. Renders the page's single H1. */
export function PageHero({ eyebrow, title, description, breadcrumbs, children, aside }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand-600/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-48 left-[-10%] h-[24rem] w-[24rem] rounded-full bg-violet-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative py-14 sm:py-20 lg:py-24">
        <div className={aside ? "grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]" : ""}>
          <div className="max-w-3xl animate-fade-up">
            <Breadcrumbs items={breadcrumbs} />
            {eyebrow ? (
              <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand-200 uppercase ring-1 ring-white/15">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="text-4xl leading-[1.1] font-extrabold text-white sm:text-5xl lg:text-[3.4rem]">{title}</h1>
            {description ? <p className="mt-6 text-lg leading-relaxed text-navy-200 sm:text-xl">{description}</p> : null}
            {children ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
          </div>
          {aside ? <div className="hidden lg:block">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
