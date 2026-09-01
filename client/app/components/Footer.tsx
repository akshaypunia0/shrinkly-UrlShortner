function Mark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-6 w-6 text-violet-300">
      <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.9" />
      <path
        d="M18 20.5a5.5 5.5 0 0 1 7.8-4.9l3.6 2.1a5.5 5.5 0 0 1-6.5 9.1l-4.3-2.3a5.5 5.5 0 0 1-1-9.1Zm12.8 7.1a5.5 5.5 0 0 1-7.8 4.9l-3.6-2.1a5.5 5.5 0 0 1 6.5-9.1l4.3 2.3a5.5 5.5 0 0 1 1 9.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-8 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-slate-100">
            <Mark />
            <span className="font-semibold tracking-[-0.04em]">shrinkly</span>
          </div>
          <span className="text-slate-500">•</span>
          <span>{year}</span>
        </div>

        <p className="text-slate-400">Built by Akshay Chaudhary</p>
      </div>
    </footer>
  );
}
