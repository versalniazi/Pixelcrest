import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "light" | "outline-light";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-[0_8px_20px_-6px_rgb(47_71_230_/_0.55)] hover:bg-brand-700 hover:shadow-[0_12px_28px_-8px_rgb(47_71_230_/_0.6)]",
  secondary: "bg-navy-950 text-white hover:bg-navy-800",
  ghost: "border border-navy-200 bg-white text-navy-900 hover:border-navy-300 hover:bg-navy-50",
  light: "bg-white text-navy-950 hover:bg-brand-50",
  "outline-light": "border border-white/25 text-white hover:border-white/50 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-[0.95rem]",
  lg: "px-6 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

export const buttonClasses = (variant: Variant = "primary", size: Size = "md", className = "") =>
  `${base} ${variants[variant]} ${sizes[size]} ${className}`;

function Content({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      {children}
      {arrow ? (
        <Icon name="arrow-right" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      ) : null}
    </>
  );
}

/** Link styled as a button. External / mailto / tel hrefs render a plain anchor. */
export function Button({
  href,
  variant,
  size,
  arrow,
  className,
  children,
  ...rest
}: CommonProps & { href: string } & Omit<ComponentProps<"a">, "href" | "className" | "children">) {
  const cls = buttonClasses(variant, size, className);
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    return (
      <a href={href} className={cls} {...rest}>
        <Content arrow={arrow}>{children}</Content>
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      <Content arrow={arrow}>{children}</Content>
    </Link>
  );
}

export function SubmitButton({
  variant,
  size,
  arrow,
  className,
  children,
  ...rest
}: CommonProps & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button className={buttonClasses(variant, size, className)} {...rest}>
      <Content arrow={arrow}>{children}</Content>
    </button>
  );
}
