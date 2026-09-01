const steps = [
  {
    title: "Paste your long URL",
    description: "Drop in the link you want to share and keep the destination clean and readable.",
    icon: "↗",
  },
  {
    title: "Generate a short link",
    description: "Create a compact, shareable URL in a single click with no sign-up required.",
    icon: "◎",
  },
  {
    title: "Copy and share",
    description: "Send it anywhere with a faster, cleaner experience for every message and post.",
    icon: "✓",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">How it works</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
            Three simple steps
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/70 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/10 text-lg font-semibold text-violet-200">
                {step.icon}
              </div>

              <div className="mb-4 flex items-center gap-3 text-sm text-slate-400">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className="h-px flex-1 bg-slate-700" />
              </div>

              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
