function BrandMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8 text-violet-300">
      <defs>
        <linearGradient id="brandGradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="18" fill="none" stroke="url(#brandGradient)" strokeWidth="2.5" opacity="0.9" />
      <path
        d="M18 20.5a5.5 5.5 0 0 1 7.8-4.9l3.6 2.1a5.5 5.5 0 0 1-6.5 9.1l-4.3-2.3a5.5 5.5 0 0 1-1-9.1Zm12.8 7.1a5.5 5.5 0 0 1-7.8 4.9l-3.6-2.1a5.5 5.5 0 0 1 6.5-9.1l4.3 2.3a5.5 5.5 0 0 1 1 9.1Z"
        fill="url(#brandGradient)"
      />
    </svg>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-700/70 bg-slate-950/75 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#top" className="flex items-center gap-3" aria-label="Shrinkly home">
          <BrandMark />
          <span className="text-xl font-semibold tracking-[-0.06em] text-slate-100">shrinkly</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
          <a href="#how-it-works" className="transition hover:text-white">
            How it works
          </a>
          <a href="#benefits" className="transition hover:text-white">
            Benefits
          </a>
        </div>
      </nav>
    </header>
  );
}
