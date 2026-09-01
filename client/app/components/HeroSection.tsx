import { Navbar } from "@/app/components/Navbar";
import { UrlShortenerForm } from "@/app/components/UrlShortenerForm";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.28),transparent_30%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),transparent_35%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative">
        <Navbar />

        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_1.2fr] lg:px-8 lg:pb-24 lg:pt-14">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-violet-200">
              Fast, clean sharing
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-[4rem] lg:leading-[1.02]">
              Turn long URLs into links worth sharing.
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
              Create clean, compact links in seconds—without signing up.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                No sign-up required
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-sky-400" aria-hidden="true" />
                Instant link generation
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-violet-400" aria-hidden="true" />
                Free to use
              </span>
            </div>
          </div>

          <div id="shorten" className="rounded-[28px] border border-slate-700/80 bg-slate-900/80 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.65)] backdrop-blur-sm sm:p-5 lg:p-6">
            <UrlShortenerForm />
          </div>
        </div>
      </div>
    </section>
  );
}
