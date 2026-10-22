export function ProcessStep({
  index,
  title,
  body,
  tone = "dark",
}: {
  index: number;
  title: string;
  body: string;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <li className="relative flex flex-col">
      <span
        className={`grid h-12 w-12 place-items-center rounded-full font-display text-lg font-bold ring-8 ${
          light ? "bg-brand-500 text-white ring-navy-950" : "bg-brand-600 text-white ring-white"
        }`}
      >
        {index}
      </span>
      <h3 className={`mt-5 text-lg font-bold ${light ? "text-white" : ""}`}>{title}</h3>
      <p className={`mt-2 text-[0.95rem] leading-relaxed ${light ? "text-navy-300" : "text-navy-600"}`}>{body}</p>
    </li>
  );
}

export function ProcessSteps({
  steps,
  tone = "dark",
}: {
  steps: { title: string; body: string }[];
  tone?: "dark" | "light";
}) {
  const cols = steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";
  return (
    <div className="relative">
      <div
        className={`absolute top-6 right-[10%] left-[10%] hidden h-px lg:block ${
          tone === "light" ? "bg-white/15" : "bg-navy-200"
        }`}
        aria-hidden="true"
      />
      <ol className={`relative grid gap-10 sm:grid-cols-2 ${cols}`}>
        {steps.map((s, i) => (
          <ProcessStep key={s.title} index={i + 1} title={s.title} body={s.body} tone={tone} />
        ))}
      </ol>
    </div>
  );
}
