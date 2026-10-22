import { Icon } from "./Icon";

export type TestimonialData = {
  quote: string;
  name: string;
  role: string;
  /** True for development placeholders. Placeholders render with a visible "Placeholder" label. */
  placeholder?: boolean;
};

/**
 * Testimonial card. Only add real testimonials, with the client's permission.
 * Placeholder entries are visibly labelled and must be replaced or removed before launch.
 */
export function Testimonial({ data }: { data: TestimonialData }) {
  return (
    <figure
      className={`card relative flex h-full flex-col p-7 ${data.placeholder ? "border-dashed border-navy-300 bg-navy-50/60 shadow-none" : ""}`}
    >
      {data.placeholder ? (
        <span className="absolute top-4 right-4 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold tracking-wide text-amber-800 uppercase">
          Placeholder
        </span>
      ) : null}
      <Icon name="quote" className="h-8 w-8 text-brand-500" />
      <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-navy-800">{data.quote}</blockquote>
      <figcaption className="mt-6 border-t border-navy-100 pt-5">
        <span className="block font-semibold text-navy-950">{data.name}</span>
        <span className="block text-sm text-navy-500">{data.role}</span>
      </figcaption>
    </figure>
  );
}
