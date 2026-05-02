const items = [
  "Faisalabad, Pakistan",
  "Founded 2026",
  "Custom Software",
  "AI Engineering",
  "Enterprise Systems",
  "SaaS Products",
];

export function TrustBar() {
  return (
    <section
      aria-label="At a glance"
      className="relative border-y border-border-subtle bg-bg-secondary/30"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 sm:py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-3">
              <span className="font-mono text-[0.7rem] sm:text-xs uppercase tracking-[0.22em] text-text-secondary">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="text-accent-green text-xs">/</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
