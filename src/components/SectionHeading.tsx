import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
  tone = "dark",
  className = "",
}: Props) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow ? (
        <p
          className={`mb-3 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase ${
            tone === "light" ? "text-brand-300" : "text-brand-600"
          }`}
        >
          <span className={`h-px w-6 ${tone === "light" ? "bg-brand-300" : "bg-brand-500"}`} aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={`text-3xl leading-tight font-bold sm:text-4xl lg:text-[2.75rem] ${
          tone === "light" ? "text-white" : ""
        }`}
      >
        {title}
      </Tag>
      {description ? (
        <p className={`mt-5 text-lg leading-relaxed ${tone === "light" ? "text-navy-200" : "text-navy-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
