"use client";

import { Link2, Sparkles } from "lucide-react";
import { useState } from "react";
import { shortenUrl } from "@/app/lib/urlService";
import { ShortUrlResult } from "@/app/components/ShortUrlResult";

const isValidUrl = (value: string) => {
  try {
    const parsed = new URL(value);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch {
    return false;
  }
};

export function UrlShortenerForm() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ shortUrl: string; originalUrl: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedUrl = value.trim();

    if (!trimmedUrl) {
      setError("Please enter a URL to shorten.");
      setResult(null);
      return;
    }

    if (!isValidUrl(trimmedUrl)) {
      setError("Please enter a valid http:// or https:// URL.");
      setResult(null);
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const generated = await shortenUrl(trimmedUrl);
      setResult({
        originalUrl: trimmedUrl,
        shortUrl: generated.shortUrl,
      });
    } catch (submitError) {
      setResult(null);
      setError(
        submitError instanceof Error
          ? submitError.message
          : "We couldn’t shorten this URL right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-200">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-400/40 bg-violet-500/10 text-violet-200">
          <Link2 className="h-4 w-4" />
        </span>
        Shorten a URL
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <label htmlFor="originalUrl" className="sr-only">
          Paste a long URL
        </label>

        <div className="flex flex-col gap-3 rounded-2xl border border-slate-700 bg-slate-950/60 p-2 shadow-inner shadow-slate-950/40 sm:flex-row sm:p-3">
          <div className="flex flex-1 items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-3 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-500/30">
            <Link2 className="h-4 w-4 shrink-0 text-slate-400" />
            <input
              id="originalUrl"
              name="originalUrl"
              type="url"
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
                if (error) setError("");
              }}
              placeholder="https://example.com/very/long/url"
              autoComplete="off"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "url-error" : undefined}
              className="h-12 w-full border-0 bg-transparent px-0 text-base text-white placeholder:text-slate-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-5 text-base font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            {isSubmitting ? "Shortening..." : "Shorten URL"}
          </button>
        </div>

        <div className="flex items-center justify-between gap-3 text-sm text-slate-400">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-violet-300" />
            No sign-up required
          </span>
        </div>

        {error ? (
          <p
            id="url-error"
            role="alert"
            aria-live="assertive"
            className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-200"
          >
            {error}
          </p>
        ) : null}
      </form>

      {result ? <ShortUrlResult shortUrl={result.shortUrl} originalUrl={result.originalUrl} /> : null}
    </div>
  );
}
