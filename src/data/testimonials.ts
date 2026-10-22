import type { TestimonialData } from "@/components/Testimonial";

/**
 * Real client testimonials go here, added only with the client's written permission.
 * While this list is empty, the homepage shows the clearly labelled placeholders below
 * in development and hides the testimonials section entirely in production.
 */
export const testimonials: TestimonialData[] = [];

export const placeholderTestimonials: TestimonialData[] = [
  {
    quote: "Replace this with a genuine client testimonial describing the service received and the outcome.",
    name: "Client name",
    role: "Role, business name",
    placeholder: true,
  },
  {
    quote: "Replace this with a genuine client testimonial. Only publish reviews you have permission to use.",
    name: "Client name",
    role: "Role, business name",
    placeholder: true,
  },
  {
    quote: "Replace this with a genuine client testimonial, or remove it before going live.",
    name: "Client name",
    role: "Role, business name",
    placeholder: true,
  },
];
