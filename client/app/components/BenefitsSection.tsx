const benefits = [
  {
    title: "Instant shortening",
    description: "Generate a cleaner URL in a single click and keep your share flow moving without friction.",
    accent: "from-violet-500/20 to-violet-500/5",
  },
  {
    title: "Reliable redirects",
    description: "Send people to the original destination quickly and predictably, every time.",
    accent: "from-sky-500/20 to-sky-500/5",
  },
  {
    title: "Clean sharing",
    description: "Make long destinations feel readable, polished and ready for messages, emails and socials.",
    accent: "from-emerald-500/20 to-emerald-500/5",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-slate-100 py-20 text-slate-900">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">Why shrinkly</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-slate-900 sm:text-4xl">
            Built for quick, clean sharing
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`rounded-3xl border border-slate-200 bg-gradient-to-br ${benefit.accent} p-6 shadow-[0_18px_35px_rgba(15,23,42,0.06)]`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-lg shadow-sm ring-1 ring-slate-200">
                {benefit.title === "Instant shortening" ? "⚡" : benefit.title === "Reliable redirects" ? "↗" : "✦"}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
